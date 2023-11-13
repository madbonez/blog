'use client';

import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function Modal(props: PropsWithChildren<{ isOpen: boolean }>) {
  const elementRef = useRef<HTMLElement>();
  useEffect(() => {
    elementRef.current = document.getElementById('modal-root')!;
  }, []);

  return elementRef.current && props.isOpen
    ? createPortal(
        <span
          className={`w-screen h-screen fixed flex items-center bg-color-background overflow-auto`}
        >
          {props.children}
        </span>,
        elementRef.current,
      )
    : props.children;
}
