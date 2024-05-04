import { Div, Input } from '@stylin.js/elements';
import { FC } from 'react';

import { SearchSVG } from '@/components/svg';

const Search: FC = () => {
  return (
    <Div
      px="1rem"
      my="1rem"
      gap="0.5rem"
      bg="#F6EEFF"
      display="grid"
      color="#A788CF"
      border="1px solid"
      alignItems="center"
      borderRadius="1.5rem"
      gridTemplateColumns="1rem 1fr"
    >
      <SearchSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      <Input
        flex="1"
        py="0.5rem"
        fontWeight="500"
        placeholder="search..."
        nPlaceholder={{ color: '#A788CF', opacity: 0.6 }}
      />
    </Div>
  );
};

export default Search;
