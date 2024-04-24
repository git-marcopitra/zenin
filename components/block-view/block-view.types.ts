import type { MutableRefObject } from 'react';

export interface BlockViewPanelProps {
  constraintsRef: MutableRefObject<null>;
}

export interface BlockViewItemsAccordionProps {
  title: string;
  items: ReadonlyArray<{ value: string; name: string }>;
}
