'use client';

import mermaid from 'mermaid';
import { useEffect, useState } from 'react';
import { FullScreenModal } from './FullscreenModal';

mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  securityLevel: 'loose',
});

export function Mermaid(props: { chart: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const rerenderMermaid = () => {
    mermaid.contentLoaded();
  };

  useEffect(() => {
    rerenderMermaid();
  }, []);

  return isLoaded ? (
    <FullScreenModal modeChangeCallback={rerenderMermaid}>
      <div className="mermaid flex justify-center">{props.chart}</div>
    </FullScreenModal>
  ) : null;
}
