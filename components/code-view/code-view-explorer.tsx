import { FC } from 'react';

import SideView from '../side-view';
import SideViewLogo from '../side-view/side-view-logo';

const CodeViewExplorer: FC = () => (
  <SideView side="left">
    <SideViewLogo />
  </SideView>
);

export default CodeViewExplorer;
