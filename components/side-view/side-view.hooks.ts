import { AsideElementProps } from '@stylin.js/elements';
import { useCallback, useEffect, useRef, useState } from 'react';

import { getStorageKey } from '@/utils';

export const useResizeWidth = (side: 'left' | 'right') => {
  const storageKey = getStorageKey('side', side);
  const ref = useRef<AsideElementProps>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(268);

  const resizing = useCallback(() => setIsResizing(true), []);

  const stopResizing = useCallback(() => setIsResizing(false), []);

  useEffect(() => {
    setWidth(Number(localStorage.getItem(storageKey)));
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (!isResizing || !ref.current) return;

      const clientX = mouseMoveEvent.clientX;

      const clientRect = (ref.current as HTMLElement).getBoundingClientRect();

      const width =
        side === 'left'
          ? clientX - clientRect.left
          : clientRect.right - clientX;

      setWidth(width);

      localStorage.setItem(storageKey, String(width));
    },
    [isResizing]
  );

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);

    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  return {
    ref,
    width,
    resizing,
  };
};
