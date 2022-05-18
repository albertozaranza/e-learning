import { SVGProps } from 'react';

const Portuguese = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.95 3.878H4.05A4.05 4.05 0 0 0 0 7.928v20.134a4.048 4.048 0 0 0 3.997 4.048V41.518c0 .59.744.848 1.11.385l7.248-9.175a1.62 1.62 0 0 1 1.269-.616h22.447a4.05 4.05 0 0 0 4.048-4.05V7.927a4.05 4.05 0 0 0-4.049-4.049h-8.12Z"
        fill="#EDEBF5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m51.262 51.15-1.454-1.841a1.861 1.861 0 0 0-1.461-.708H22.565a4.651 4.651 0 0 1-4.651-4.652V20.82a4.651 4.651 0 0 1 4.651-4.65H59.35A4.652 4.652 0 0 1 64 20.818v23.13a4.65 4.65 0 0 1-4.591 4.65v10.807c0 .678-.855.975-1.276.443l-6.87-8.699Z"
        fill="#61C5BD"
      />
      <path
        d="M56.28 25.58H25.634a.966.966 0 1 1 0-1.931H56.28a.966.966 0 1 1 0 1.931ZM56.28 32.963H25.634a.966.966 0 1 1 0-1.931H56.28a.966.966 0 1 1 0 1.931ZM41.486 40.346H25.181c-.284 0-.514-.432-.514-.966 0-.533.23-.965.514-.965h16.305c.284 0 .514.432.514.965 0 .534-.23.966-.514.966Z"
        fill="#F0F7FF"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h64v64H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default Portuguese;
