import { Aside, Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { useResizeWidth } from './side-view.hooks';
import { SideViewProps } from './side-view.types';
import SideViewResizer from './side-view-resizer';

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
      {side === 'right' && <SideViewResizer resizing={resizing} />}
      <Div
        bg="#F7F2FF"
        width="100%"
        display="flex"
        overflow="auto"
        flexDirection="column"
      >
        {children}
      </Div>
      {side === 'left' && <SideViewResizer resizing={resizing} />}
    </Aside>
  );
};

export default SideView;
