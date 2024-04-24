import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import { BlockView, CodeView } from '@/components';
import { useStore } from '@/store';

const VIEWS = { block: <BlockView />, code: <CodeView /> };

const Home: FC = () => {
  const { view } = useStore();

  return <Div>{VIEWS[view]}</Div>;
};

export default Home;
