import { Button } from '@stylin.js/elements';
import { FC } from 'react';

import { OptionSVG } from '../svg';

const OptionMenu: FC = () => {
  return (
    <Button
      all="unset"
      width="1.8rem"
      height="1.8rem"
      color="#A788CF"
      cursor="pointer"
      alignItems="center"
      display="inline-flex"
      borderRadius="0.25rem"
      justifyContent="center"
      nHover={{ bg: '#FFFA' }}
      transition="all 500ms ease-in-out"
    >
      <OptionSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Button>
  );
};

export default OptionMenu;
