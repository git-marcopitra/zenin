import { Button, Div, H2, Header } from '@stylin.js/elements';
import type { FC } from 'react';

import { useStore } from '@/store';

import { CodeSVG, PieceSVG } from '../svg';
import { HEADER_VIEW_TITLE } from './header-view.data';

const HeaderView: FC = () => {
  const { view, updateView } = useStore();

  const { title, Icon } = HEADER_VIEW_TITLE[view];

  return (
    <Header
      px="2rem"
      py="1.5rem"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <H2 display="flex" gap="1rem" color="#A8A8A8" whiteSpace="nowrap">
        <Icon maxWidth="2rem" maxHeight="2rem" width="100%" />
        {title}
      </H2>
      <Div display="flex" gap="1rem">
        <Button
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          onClick={() => updateView('code')}
        >
          <CodeSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Button>
        <Button
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          onClick={() => updateView('block')}
        >
          <PieceSVG maxWidth="1.5rem" maxHeight="1.5em" width="100%" />
        </Button>
      </Div>
    </Header>
  );
};

export default HeaderView;
