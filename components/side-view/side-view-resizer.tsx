import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { SideViewResizerProps } from './side-view.types';

const SideViewResizer: FC<SideViewResizerProps> = ({ resizing }) => (
  <Div
    width="3px"
    cursor="ew-resize"
    onMouseDown={resizing}
    nHover={{ bg: '#A788CF', opacity: 0.3 }}
  />
);

export default SideViewResizer;
