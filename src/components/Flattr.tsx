import * as React from 'react';

export type FlattrProps = {
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

const Flattr = React.forwardRef<SVGSVGElement, FlattrProps>(function Flattr(
  { color = 'currentColor', size = 24, title = 'flattr', ...others },
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
      <path d='M1.906 12C1.906 6.432 6.432 1.906 12 1.906c.048 0 4.003 0 5.455.002L14.53 4.834l1.344 1.344L21.903 0H12C5.373 0 0 5.373 0 12v9.331l1.91-1.759v-.096c-.002-.244-.004-7.404-.004-7.476zM24 2.668l-1.91 1.76v.096L22.093 12c0 5.568-4.528 10.094-10.093 10.094-.048 0-4.003 0-5.455-.002l2.925-2.926-1.344-1.344L2.097 24H12c6.627 0 12-5.373 12-12V2.668z' />
    </svg>
  );
});

export default Flattr;
