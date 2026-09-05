'use client';

import { useState, type ReactNode } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface Props {
  tabs: Tab[];
  panels: Record<string, ReactNode>;
  defaultActive?: string;
  tabsClassName?: string;
  tabClassName?: string;
  panelsWrapClassName?: string;
  panelClassName?: string;
  ariaLabel: string;
}

/**
 * Generic port of the reference mockups' "click a tab, toggle .active on the
 * tab + matching #panel-X" pattern (used on the Platform, Demo, and Pricing
 * pages) — but driven by React state instead of direct DOM manipulation.
 */
export default function TabGroup({
  tabs,
  panels,
  defaultActive,
  tabsClassName = '',
  tabClassName = 'ch-tab',
  panelsWrapClassName = 'ch-panels',
  panelClassName = 'ch-panel',
  ariaLabel,
}: Props) {
  const [active, setActive] = useState(defaultActive ?? tabs[0]?.id);

  return (
    <>
      <div className={tabsClassName} role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${tabClassName} ${active === tab.id ? 'active' : ''}`}
            role="tab"
            aria-selected={active === tab.id}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={panelsWrapClassName}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${panelClassName} ${active === tab.id ? 'active' : ''}`}
            id={`panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab.id}`}
          >
            {panels[tab.id]}
          </div>
        ))}
      </div>
    </>
  );
}
