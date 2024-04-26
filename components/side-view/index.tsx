import { Aside, Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { SideViewProps } from './side-view.types';

const SideView: FC<PropsWithChildren<SideViewProps>> = ({ side, children }) => {
  return (
    <>
      {side === 'right' && (
        <Div cursor="ew-resize" width="2px" nHover={{ bg: '#0002' }} />
      )}
      <Aside
        bg="#F6F6F6"
        width="20rem"
        display="flex"
        overflow="auto"
        minWidth="12rem"
        maxWidth="30rem"
        resize="horizontal"
        flexDirection="column"
      >
        {children}
      </Aside>
      {side === 'left' && (
        <Div cursor="ew-resize" width="2px" nHover={{ bg: '#0002' }} />
      )}
    </>
  );
};

export default SideView;
