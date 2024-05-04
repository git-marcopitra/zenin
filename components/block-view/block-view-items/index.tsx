import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import OptionMenu from '@/components/option-menu';
import { LogoSVG } from '@/components/svg';

import Search from '../../search';
import SideView from '../../side-view';
import BlockViewItemsAccordion from './block-view-items-accordion';
import BlockViewItemsTitle from './block-view-items-title';

const BlockViewItems: FC = () => (
  <SideView side="left">
    <Div
      py="1rem"
      px="2rem"
      display="flex"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <LogoSVG maxHeight="4rem" maxWidth="15rem" height="100%" />
      <OptionMenu />
    </Div>
    <Div px="2rem" mb="2rem">
      <BlockViewItemsTitle />
      <Search />
    </Div>
    {Array.from({ length: 10 }, () => (
      <BlockViewItemsAccordion
        title="Logic"
        key={unikey()}
        items={[
          { name: 'If _____ then ____ else ____', value: 'if-else' },
          { name: 'If _____ then ____ else ____', value: 'if-else' },
          { name: 'If _____ then ____ else ____', value: 'if-else' },
        ]}
      />
    ))}
  </SideView>
);

export default BlockViewItems;
