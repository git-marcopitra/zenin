import { Div, H4, Li, Ul } from '@stylin.js/elements';
import { type FC, useState } from 'react';
import unikey from 'unikey';

import { MinusSVG, PlusSVG } from '@/components/svg';

import { BlockViewItemsAccordionProps } from '../block-view.types';

const BlockViewItemsAccordion: FC<BlockViewItemsAccordionProps> = ({
  title,
  items,
}) => {
  const [isOpen, setOpen] = useState(false);

  const Icon = isOpen ? MinusSVG : PlusSVG;

  return (
    <Div color="#A8A8A8">
      <H4
        gap="0.5rem"
        display="flex"
        p="0.5rem 2rem"
        cursor="pointer"
        alignItems="center"
        justifyContent="space-between"
        bg={isOpen ? '#E5E5E5' : 'unset'}
        onClick={() => setOpen((x) => !x)}
      >
        {title}
        <Icon maxWidth="1rem" maxHeight="1rem" width="100%" />
      </H4>
      {isOpen && (
        <Ul listStyle="none" px="1rem">
          {items.map(({ name }) => (
            <Li
              py="1rem"
              m="0.5rem"
              px="0.5rem"
              bg="#B0A56C"
              key={unikey()}
              color="#ffffff"
            >
              {name}
            </Li>
          ))}
        </Ul>
      )}
    </Div>
  );
};

export default BlockViewItemsAccordion;
