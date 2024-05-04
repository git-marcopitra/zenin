import { Aside, Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { useResizeWidth } from './side-view.hooks';
import { SideViewProps } from './side-view.types';

const SideView: FC<PropsWithChildren<SideViewProps>> = ({ side, children }) => {
  const { ref, width, resizing } = useResizeWidth(side);

  return (
    <Aside
      ref={ref}
      width={width}
      display="flex"
      maxWidth="30rem"
      minWidth="15rem"
      onMouseDown={(e) => e.preventDefault()}
    >
      {side === 'right' && (
        <Div
          width="3px"
          cursor="ew-resize"
          onMouseDown={resizing}
          nHover={{ bg: '#0002' }}
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
          onMouseDown={resizing}
          nHover={{ bg: '#0002' }}
        />
      )}
    </Aside>
  );
};

export default SideView;
