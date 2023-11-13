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
      <div className="mermaid flex justify-center h-[500px]">{props.chart}</div>
    </FullScreenModal>
  ) : (
    <div className={`h-[500px] w-full`}></div>
  );
}
