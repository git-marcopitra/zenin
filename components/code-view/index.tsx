import { Main, Section } from '@stylin.js/elements';
import type { FC } from 'react';

import HeaderView from '../header-view';
import SideView from '../side-view';
import CodeViewExplorer from './code-view-explorer';

const CodeView: FC = () => (
  <Main display="flex" height="100vh" overflow="hidden" maxHeight="100vh">
    <CodeViewExplorer />
    <Section display="flex" flexDirection="column" width="100%">
      <HeaderView />
    </Section>
    <SideView side="right" />
  </Main>
);

export default CodeView;
