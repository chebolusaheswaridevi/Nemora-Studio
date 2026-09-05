'use client';

import { useEffect, useRef, useState } from 'react';
import { findScriptedReply } from '@/lib/scriptedReplies';
import EscalationActions from './EscalationActions';
import type { DemoState } from './useDemoState';

interface Props {
  demo: DemoState;
  active: boolean;
}

type VoiceStatus = 'idle' | 'recording' | 'thinking' | 'speaking' | 'error';

const BAR_COUNT = 28;

interface SpeechRecognitionResultLike {
  isFinal: boolean;
  0: { transcript: string };
}
interface SpeechRecognitionEventLike {
  results: ArrayLike<SpeechRecognitionResultLike>;
}
interface SpeechRecognitionLike extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((e: SpeechRecognitionEventLike) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
}

function getSpeechRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Voice demo runs entirely in the browser — no API key, no server round trip:
 *  - Listening waveform: real mic amplitude via a Web Audio AnalyserNode.
 *  - Speech-to-text: the browser's native SpeechRecognition API.
 *  - "Brain": the same scripted answer bank the other channel panels use
 *    (src/lib/scriptedReplies.ts) — unmatched questions escalate to a
 *    WhatsApp/call CTA instead of guessing.
 *  - Text-to-speech: the browser's native speechSynthesis API. Its audio
 *    output isn't exposed to the Web Audio API, so the waveform during
 *    playback is a simulated animation rather than real amplitude data —
 *    called out here since the listening waveform above is genuinely live.
 * See README "Live Demo" for why this replaced the earlier Whisper/GPT/TTS
 * pipeline.
 */
export default function VoicePanel({ demo, active }: Props) {
  const [status, setStatus] = useState<VoiceStatus>('idle');
  const [transcript, setTranscript] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [escalate, setEscalate] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [bars, setBars] = useState<number[]>(Array(BAR_COUNT).fill(4));

  const streamRef = useRef<MediaStream | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const rafRef = useRef<number | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const finalTextRef = useRef('');
  const interimTextRef = useRef('');

  function stopVisualizer() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setBars(Array(BAR_COUNT).fill(4));
  }

  function runMicVisualizer() {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const data = new Uint8Array(analyser.frequencyBinCount);
    const step = () => {
      analyser.getByteFrequencyData(data);
      const chunk = Math.floor(data.length / BAR_COUNT) || 1;
      const next: number[] = [];
      for (let i = 0; i < BAR_COUNT; i++) {
        const v = data[i * chunk] ?? 0;
        next.push(4 + (v / 255) * 40);
      }
      setBars(next);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }

  /** Simulated amplitude — speechSynthesis doesn't expose its audio to AnalyserNode. */
  function runSyntheticVisualizer() {
    const step = () => {
      const t = performance.now() / 130;
      const next: number[] = [];
      for (let i = 0; i < BAR_COUNT; i++) {
        next.push(4 + Math.abs(Math.sin(t + i * 0.4)) * 30 + Math.random() * 6);
      }
      setBars(next);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
  }

  function teardownStream() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }

  async function startRecording() {
    const Ctor = getSpeechRecognitionCtor();
    if (!Ctor) {
      setErrorMsg('Voice input isn’t supported in this browser — try Chrome or Edge, or use the Chat tab instead.');
      setStatus('error');
      return;
    }

    setErrorMsg(null);
    setTranscript(null);
    setResponse(null);
    setEscalate(false);
    finalTextRef.current = '';
    interimTextRef.current = '';

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioCtxRef.current = audioCtx;
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;
      source.connect(analyser);
      analyserRef.current = analyser;
      runMicVisualizer();
    } catch {
      setErrorMsg('Microphone access was denied or is unavailable in this browser.');
      setStatus('error');
      return;
    }

    const recognition = new Ctor();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-IN';
    recognition.onresult = (e) => {
      let interim = '';
      for (let i = 0; i < e.results.length; i++) {
        const r = e.results[i];
        if (r.isFinal) finalTextRef.current += r[0].transcript;
        else interim += r[0].transcript;
      }
      interimTextRef.current = interim;
      setTranscript((finalTextRef.current + interim).trim() || null);
    };
    recognition.onerror = (e) => {
      if (e.error === 'no-speech' || e.error === 'aborted') return;
      setErrorMsg('Speech recognition failed. Please try again.');
      setStatus('error');
    };
    recognition.onend = () => {
      void processTranscript((finalTextRef.current + interimTextRef.current).trim());
    };
    recognitionRef.current = recognition;
    recognition.start();
    setStatus('recording');
  }

  function stopRecording() {
    recognitionRef.current?.stop();
    stopVisualizer();
    teardownStream();
    audioCtxRef.current?.close().catch(() => {});
  }

  async function processTranscript(userText: string) {
    if (!userText) {
      setStatus('idle');
      return;
    }
    setStatus('thinking');
    const start = performance.now();
    await sleep(400 + Math.random() * 300);

    const { text: aiText, escalate: shouldEscalate } = findScriptedReply(demo.industry, userText, 'voice');
    setResponse(aiText);
    setEscalate(shouldEscalate);
    demo.recordResponse(performance.now() - start);

    if (typeof window === 'undefined' || !window.speechSynthesis) {
      setStatus('idle');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(aiText);
    utterance.rate = 1;
    utterance.onstart = () => {
      setStatus('speaking');
      runSyntheticVisualizer();
    };
    utterance.onend = () => {
      stopVisualizer();
      setStatus('idle');
    };
    utterance.onerror = () => {
      stopVisualizer();
      setStatus('idle');
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function handleOrbClick() {
    if (status === 'idle' || status === 'error') startRecording();
    else if (status === 'recording') stopRecording();
  }

  function handleReset() {
    recognitionRef.current?.abort();
    teardownStream();
    stopVisualizer();
    audioCtxRef.current?.close().catch(() => {});
    if (typeof window !== 'undefined') window.speechSynthesis?.cancel();
    setStatus('idle');
    setTranscript(null);
    setResponse(null);
    setEscalate(false);
    setErrorMsg(null);
  }

  useEffect(() => () => handleReset(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const isBusy = status === 'thinking';
  const showRings = status === 'recording' || status === 'speaking';
  const showWave = status === 'recording' || status === 'speaking';

  return (
    <div id="panel-voice" role="tabpanel" aria-label="Voice demo" style={{ display: active ? undefined : 'none' }}>
      <div className="stage-topbar">
        <div className="stage-dots" aria-hidden="true">
          <div className="stage-dot stage-dot-r" />
          <div className="stage-dot stage-dot-y" />
          <div className="stage-dot stage-dot-g" />
        </div>
        <div
          className="stage-channel-badge"
          style={{ background: 'rgba(255,92,53,0.12)', borderColor: 'rgba(255,92,53,0.25)', color: 'rgba(255,180,160,0.9)' }}
        >
          <div className="badge-dot" style={{ background: 'var(--warm)' }} />
          nemora · voice
        </div>
        <div className="stage-status" aria-label="Agent online">
          ONLINE
        </div>
      </div>
      <div className="voice-panel">
        <div className="voice-orb-wrap">
          <div
            className={`voice-orb ${showRings ? 'speaking' : ''}`}
            role="button"
            tabIndex={0}
            aria-label="Tap to speak"
            aria-pressed={status === 'recording'}
            onClick={handleOrbClick}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleOrbClick()}
          >
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="9" y="2" width="6" height="12" rx="3" fill="rgba(255,255,255,0.9)" />
              <path d="M5 10a7 7 0 0014 0" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 17v4" stroke="rgba(255,255,255,0.9)" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="voice-rings" aria-hidden="true">
            <div className="voice-ring" />
            <div className="voice-ring" />
            <div className="voice-ring" />
          </div>
        </div>

        <div className={`voice-waveform ${showWave ? 'active' : ''}`} aria-hidden="true">
          {bars.map((h, i) => (
            <div key={i} style={{ width: 3, borderRadius: 2, background: 'var(--accent)', height: h }} />
          ))}
        </div>

        <div className="voice-transcript" aria-live="polite" aria-label="Voice transcript">
          {status === 'error'
            ? errorMsg
            : status === 'recording'
              ? (transcript ?? 'Listening… tap the mic again to stop.')
              : status === 'thinking'
                ? 'Thinking…'
                : (transcript ?? 'Tap the microphone to start a voice interaction')}
        </div>
        {response && status !== 'error' && (
          <>
            <div className="voice-response" aria-live="polite" aria-label="AI response">
              {response}
            </div>
            {escalate && <EscalationActions />}
          </>
        )}

        <div className="voice-controls">
          <button className="voice-ctrl-btn primary" onClick={handleOrbClick} disabled={isBusy}>
            <svg viewBox="0 0 14 14" fill="none" style={{ width: 14, height: 14 }}>
              <polygon points="3,1 13,7 3,13" fill="currentColor" />
            </svg>
            {status === 'recording' ? 'Stop & send' : 'Run demo call'}
          </button>
          <button className="voice-ctrl-btn secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
