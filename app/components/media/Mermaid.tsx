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
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const modeChange = (isFull: boolean) => {
    setIsFullScreen(isFull);
    mermaid.contentLoaded();
  };

  useEffect(() => {
    mermaid.contentLoaded();
  }, []);

  return isLoaded ? (
    <FullScreenModal modeChangeCallback={modeChange}>
      <div
        className={`mermaid flex justify-center ${
          isFullScreen ? '' : 'h-[500px]'
        } `}
      >
        {props.chart}
      </div>
    </FullScreenModal>
  ) : (
    <div className={`h-[500px] w-full`}></div>
  );
}
