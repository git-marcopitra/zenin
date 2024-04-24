import { FC } from 'react';

import { SVGProps } from './svg.types';

const Minus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 2"
    fill="none"
    {...props}
  >
    <path d="M14 1.99799H0V-0.00201416H14V1.99799Z" fill="currentColor" />
  </svg>
);

export default Minus;
