import { Aside, AsideElementProps, Div } from '@stylin.js/elements';
import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { SideViewProps } from './side-view.types';

const SideView: FC<PropsWithChildren<SideViewProps>> = ({ side, children }) => {
  const storageKey = `sidebar-${side}.zenin.storage.v1`;
  const sidebarRef = useRef<AsideElementProps>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(268);

  const startResizing = useCallback(() => setIsResizing(true), []);

  const stopResizing = useCallback(() => setIsResizing(false), []);

  useEffect(() => {
    setSidebarWidth(Number(localStorage.getItem(storageKey)));
  }, []);

  const resize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (!isResizing || !sidebarRef.current) return;

      const width =
        side === 'left'
          ? mouseMoveEvent.clientX -
            (sidebarRef.current as HTMLDivElement).getBoundingClientRect().left
          : (sidebarRef.current as HTMLDivElement).getBoundingClientRect()
              .right - mouseMoveEvent.clientX;

      setSidebarWidth(width);

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

  return (
    <Aside
      display="flex"
      maxWidth="30rem"
      minWidth="12rem"
      ref={sidebarRef}
      width={sidebarWidth}
      onMouseDown={(e) => e.preventDefault()}
    >
      {side === 'right' && (
        <Div
          width="3px"
          cursor="ew-resize"
          nHover={{ bg: '#0002' }}
          onMouseDown={startResizing}
        />
      )}
      <Div
        bg="#F7F2FF"
        width="100%"
        display="flex"
        overflow="auto"
        flexDirection="column"
      >
        {children}
      </Div>
      {side === 'left' && (
        <Div
          width="3px"
          cursor="ew-resize"
          nHover={{ bg: '#0002' }}
          onMouseDown={startResizing}
        />
      )}
    </Aside>
  );
};

export default SideView;
