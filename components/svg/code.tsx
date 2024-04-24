import { FC } from 'react';

import { SVGProps } from './svg.types';

const Code: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 22 18"
    fill="none"
    {...props}
  >
    <path
      d="M11.8901 0L13.8501 0.4L10.1101 18L8.15008 17.6L11.8901 0ZM18.5901 9L15.0001 5.41V2.58L21.4201 9L15.0001 15.41V12.58L18.5901 9ZM0.580078 9L7.00008 2.58V5.41L3.41008 9L7.00008 12.58V15.41L0.580078 9Z"
      fill="currentColor"
    />
  </svg>
);

export default Code;
