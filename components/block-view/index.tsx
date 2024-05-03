import { Main, Section } from '@stylin.js/elements';
import type { FC } from 'react';
import { useRef } from 'react';

import HeaderView from '../header-view';
import SideView from '../side-view';
import BlockViewItems from './block-view-items';
import BlockViewPanel from './block-view-panel';

const BlockView: FC = () => {
  const constraintsRef = useRef(null);

  return (
    <Main display="flex" height="100vh" overflow="hidden" maxHeight="100vh">
      <BlockViewItems />
      <Section display="flex" flexDirection="column" flex="1">
        <HeaderView />
        <BlockViewPanel constraintsRef={constraintsRef} />
      </Section>
      <SideView side="right" />
    </Main>
  );
};

export default BlockView;
