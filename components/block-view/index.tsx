import { Aside, Main, Section } from '@stylin.js/elements';
import type { FC } from 'react';
import { useRef } from 'react';

import HeaderView from '../header-view';
import BlockViewItems from './block-view-items';
import BlockViewPanel from './block-view-panel';

const BlockView: FC = () => {
  const constraintsRef = useRef(null);

  return (
    <Main
      display="grid"
      height="100vh"
      overflow="hidden"
      maxHeight="100vh"
      gridTemplateColumns="20rem 1fr 20rem"
    >
      <BlockViewItems />
      <Section display="flex" flexDirection="column">
        <HeaderView />
        <BlockViewPanel constraintsRef={constraintsRef} />
      </Section>
      <Aside bg="#F6F6F6" />
    </Main>
  );
};

export default BlockView;
