'use client';

import { useCallback, useState } from 'react';
import type { ScenarioKey } from '@/lib/scenarios';

export type DemoChannel = 'chat' | 'voice' | 'email' | 'whatsapp' | 'gpt';

export function useDemoState() {
  const [channel, setChannel] = useState<DemoChannel>('chat');
  const [industry, setIndustry] = useState<ScenarioKey>('clinic');
  const [messagesHandled, setMessagesHandled] = useState(1847);
  const [avgResponseMs, setAvgResponseMs] = useState(800);
  const [pendingStarter, setPendingStarter] = useState<string | null>(null);

  const recordResponse = useCallback((ms: number) => {
    setMessagesHandled((n) => n + 1);
    setAvgResponseMs((prev) => Math.round(prev * 0.7 + ms * 0.3));
  }, []);

  const selectScenario = useCallback((text: string) => {
    setPendingStarter(text);
  }, []);

  const consumeStarter = useCallback(() => {
    setPendingStarter(null);
  }, []);

  return {
    channel,
    setChannel,
    industry,
    setIndustry,
    messagesHandled,
    avgResponseMs,
    recordResponse,
    pendingStarter,
    selectScenario,
    consumeStarter,
  };
}

export type DemoState = ReturnType<typeof useDemoState>;
