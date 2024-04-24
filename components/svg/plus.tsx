import { FC } from 'react';

import { SVGProps } from './svg.types';

const Plus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      d="M14 7.998H8V13.998H6V7.998H0V5.998H6V-0.00199986H8V5.998H14V7.998Z"
      fill="currentColor"
    />
  </svg>
);

export default Plus;
