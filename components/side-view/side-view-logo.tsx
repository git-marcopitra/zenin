import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { LogoSVG } from '../svg';

const SideViewLogo: FC = () => (
  <Div py="1rem" px="2rem">
    <LogoSVG maxHeight="4rem" maxWidth="15rem" height="100%" />
  </Div>
);

export default SideViewLogo;
