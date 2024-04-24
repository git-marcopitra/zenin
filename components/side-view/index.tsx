import { Aside } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

const SideView: FC<PropsWithChildren> = ({ children }) => (
  <Aside bg="#F6F6F6" display="flex" flexDirection="column">
    {children}
  </Aside>
);

export default SideView;
