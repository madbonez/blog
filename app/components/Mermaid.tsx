'use client';

import mermaid from 'mermaid';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    mermaid.contentLoaded();
  }, [isLoaded]);

  return isLoaded ? <div className="mermaid">{props.chart}</div> : null;
}
