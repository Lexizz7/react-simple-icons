import * as React from 'react';

export type AdobefontsProps = {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Adobefonts = React.forwardRef<SVGSVGElement, AdobefontsProps>(function Adobefonts(
  { color = 'currentColor', size = 24, title = 'adobefonts', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M19.764.375H4.236A4.236 4.236 0 0 0 0 4.611V19.39a4.236 4.236 0 0 0 4.236 4.236h15.528A4.236 4.236 0 0 0 24 19.389V4.61A4.236 4.236 0 0 0 19.764.375zm-3.25 6.536c-.242 0-.364-.181-.44-.439-.257-.97-.59-1.257-.787-1.257s-.5.364-.833 1.12c-.417.97-.754 1.97-1.007 2.994l1.732-.002c.11.28.01.6-.238.772H13.23c-.56 1.878-1.031 3.688-1.592 5.46a9.676 9.676 0 0 1-1.105 2.56 3.144 3.144 0 0 1-2.484 1.332c-.773 0-1.53-.363-1.53-1.166.036-.503.424-.91.924-.97a.46.46 0 0 1 .424.243c.379.682.742 1.075.909 1.075.166 0 .303-.227.575-1.211l1.988-7.322-1.43-.002a.685.685 0 0 1 .227-.774h1.423c.257-.895.609-1.76 1.048-2.58a3.786 3.786 0 0 1 3.272-2.195c1.136 0 1.605.545 1.605 1.242a1.144 1.144 0 0 1-.97 1.12z' />
    </svg>
  );
});

export default Adobefonts;
