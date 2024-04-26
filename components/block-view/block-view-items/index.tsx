import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import unikey from 'unikey';

import SideViewLogo from '@/components/side-view/side-view-logo';

import SideView from '../../side-view';
import BlockViewItemsAccordion from './block-view-items-accordion';
import BlockViewItemsSearch from './block-view-items-search';
import BlockViewItemsTitle from './block-view-items-title';

const BlockViewItems: FC = () => (
  <SideView side="left">
    <SideViewLogo />
    <Div px="2rem" mb="2rem">
      <BlockViewItemsTitle />
      <BlockViewItemsSearch />
    </Div>
    {Array.from({ length: 15 }, () => (
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
