import type { View } from '@/store';

import { CodeSVG, PieceSVG } from '../svg';
import type { HeaderViewTitle } from './header-view.types';

export const HEADER_VIEW_TITLE: Record<View, HeaderViewTitle> = {
  block: {
    title: 'Blocks Builder',
    Icon: PieceSVG,
  },
  code: {
    title: 'Code Visualizer',
    Icon: CodeSVG,
  },
};
