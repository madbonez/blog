import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { BsArrowsAngleContract, BsArrowsFullscreen } from 'react-icons/bs';
import { Modal } from './Modal';

export function FullScreenModal({
  children,
  modeChangeCallback,
  isExternal,
}: PropsWithChildren<{
  modeChangeCallback?: (isFull: boolean) => void;
  isExternal?: boolean;
}>) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const escFunction = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsFullScreen(false);
    }
  }, []);

  useEffect(() => {
    setIsFullScreen(false);
  }, []);

  useEffect(() => {
    if (modeChangeCallback) {
      modeChangeCallback(isFullScreen);
    }
  }, [modeChangeCallback, isFullScreen]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <Modal isOpen={isFullScreen && !isExternal}>
      <span
        className={`relative w-full h-full overflow-auto ${
          isFullScreen ? 'flex justify-center' : ''
        }`}
      >
        {children}
        {isFullScreen ? (
          <span
            className={'absolute top-6 right-10 cursor-pointer'}
            onClick={() => setIsFullScreen(false)}
          >
            <BsArrowsAngleContract />
          </span>
        ) : (
          <span
            className={'absolute right-0 top-0 cursor-pointer'}
            onClick={() => setIsFullScreen(true)}
          >
            <BsArrowsFullscreen />
          </span>
        )}
      </span>
    </Modal>
  );
}
