import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import SideView from '../side-view';
import { LogoSVG } from '../svg';

const CodeViewExplorer: FC = () => (
  <SideView side="left">
    <Div
      py="1rem"
      px="2rem"
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <LogoSVG maxHeight="4rem" maxWidth="15rem" height="100%" />
    </Div>
  </SideView>
);

export default CodeViewExplorer;
