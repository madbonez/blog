'use client';

/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { PropsWithChildren } from 'react';
import { FullScreenModal } from './FullscreenModal';

export function SmartImage(
  props: PropsWithChildren<{ src: string; alt: string }>,
) {
  return (
    <FullScreenModal>
      <img src={props.src} alt={props.alt} className={`max-w-none`} />
    </FullScreenModal>
  );
}
