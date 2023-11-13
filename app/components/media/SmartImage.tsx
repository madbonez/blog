'use client';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { PropsWithChildren } from 'react';
import { FullScreenModal } from './FullscreenModal';

export function SmartImage(
  props: PropsWithChildren<{ src: string; alt: string }>,
) {
  const modeChange = (isFull: boolean) => {
    if (isFull) {
      window.open(props.src, '_self');
    }
  };

  return (
    <FullScreenModal modeChangeCallback={modeChange} isExternal={true}>
      <img src={props.src} alt={props.alt} />
    </FullScreenModal>
  );
}
