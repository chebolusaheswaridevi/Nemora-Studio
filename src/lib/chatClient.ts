import type { ScenarioKey } from './scenarios';
import { findScriptedReply } from './scriptedReplies';

export interface ChatMsg {
  role: 'user' | 'assistant';
  content: string;
  escalate?: boolean;
}

interface StreamArgs {
  messages: ChatMsg[];
  scenario: ScenarioKey;
  channel: 'chat' | 'gpt' | 'whatsapp' | 'email' | 'voice';
  onDelta: (chunkText: string, fullTextSoFar: string) => void;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Looks up a scripted answer for the latest user message. Instead of a
 * character-by-character typewriter reveal (which reads like paragraphs
 * slowly appearing rather than a chat), this waits out a natural "typing"
 * pause — panels show a typing-dots bubble during that pause via the
 * `busy`/`typing` state they already track — then delivers the full message
 * in one `onDelta` call. No network call, no API key — see
 * src/lib/scriptedReplies.ts for the answer bank.
 */
export async function streamChat({ messages, scenario, channel, onDelta }: StreamArgs) {
  const start = performance.now();
  const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content ?? '';

  const { text, escalate } = findScriptedReply(scenario, lastUser, channel);
  const typingDelay = Math.min(1400, 450 + text.length * 3.5);
  await sleep(typingDelay);
  onDelta(text, text);

  return { text, ms: performance.now() - start, error: null as string | null, escalate };
}

/** Synchronous lookup for pre-populating a default/reset conversation with no "typing" delay. */
export function getScriptedAnswer(scenario: ScenarioKey, question: string, channel: StreamArgs['channel']) {
  return findScriptedReply(scenario, question, channel);
}
