import { Div, Input } from '@stylin.js/elements';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg';

const BlockViewItemsSearch: FC = () => (
  <Div
    my="1rem"
    gap="0.5rem"
    bg="#ffffff"
    display="grid"
    p="0.5rem 1rem"
    color="#A8A8A8"
    border="1px solid"
    alignItems="center"
    borderRadius="1.5rem"
    gridTemplateColumns="1rem 1fr"
  >
    <SearchSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    <Input
      flex="1"
      fontWeight="500"
      placeholder="search..."
      nPlaceholder={{ color: '#A8A8A8', opacity: 0.8 }}
    />
  </Div>
);

export default BlockViewItemsSearch;
