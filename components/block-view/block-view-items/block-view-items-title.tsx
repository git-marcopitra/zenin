import { H3 } from '@stylin.js/elements';
import { FC } from 'react';

import { PieceSVG } from '@/components/svg';

const BlockViewItemsTitle: FC = () => (
  <H3 display="flex" gap="0.5rem" alignItems="center" color="#A8A8A8">
    <PieceSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
    Pieces
  </H3>
);

export default BlockViewItemsTitle;
