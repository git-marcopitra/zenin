import { FC } from 'react';

import { SVGProps } from './svg.types';

const Option: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 4 16"
    fill="none"
    {...props}
  >
    <path
      d="M0.800049 14.3C0.800049 13.9022 0.958084 13.5206 1.23939 13.2393C1.52069 12.958 1.90222 12.8 2.30005 12.8C2.69787 12.8 3.0794 12.958 3.36071 13.2393C3.64201 13.5206 3.80005 13.9022 3.80005 14.3C3.80005 14.6978 3.64201 15.0793 3.36071 15.3607C3.0794 15.642 2.69787 15.8 2.30005 15.8C1.90222 15.8 1.52069 15.642 1.23939 15.3607C0.958084 15.0793 0.800049 14.6978 0.800049 14.3ZM0.800049 8.29999C0.800049 7.90216 0.958084 7.52063 1.23939 7.23933C1.52069 6.95802 1.90222 6.79999 2.30005 6.79999C2.69787 6.79999 3.0794 6.95802 3.36071 7.23933C3.64201 7.52063 3.80005 7.90216 3.80005 8.29999C3.80005 8.69781 3.64201 9.07934 3.36071 9.36065C3.0794 9.64195 2.69787 9.79999 2.30005 9.79999C1.90222 9.79999 1.52069 9.64195 1.23939 9.36065C0.958084 9.07934 0.800049 8.69781 0.800049 8.29999ZM0.800049 2.29999C0.800049 1.90216 0.958084 1.52063 1.23939 1.23933C1.52069 0.958023 1.90222 0.799988 2.30005 0.799988C2.69787 0.799988 3.0794 0.958023 3.36071 1.23933C3.64201 1.52063 3.80005 1.90216 3.80005 2.29999C3.80005 2.69781 3.64201 3.07934 3.36071 3.36065C3.0794 3.64195 2.69787 3.79999 2.30005 3.79999C1.90222 3.79999 1.52069 3.64195 1.23939 3.36065C0.958084 3.07934 0.800049 2.69781 0.800049 2.29999Z"
      fill="currentColor"
    />
  </svg>
);

export default Option;