import { Div } from '@stylin.js/elements';
import { motion } from 'framer-motion';
import type { FC } from 'react';

import { BlockViewPanelProps } from './block-view.types';

const MotionDiv = motion(Div);

const BlockViewPanel: FC<BlockViewPanelProps> = ({ constraintsRef }) => (
  <MotionDiv flex="1" ref={constraintsRef}></MotionDiv>
);

export default BlockViewPanel;
