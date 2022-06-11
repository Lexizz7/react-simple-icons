import * as React from 'react';

export type WattpadProps = {
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

const Wattpad = React.forwardRef<SVGSVGElement, WattpadProps>(function Wattpad(
  { color = 'currentColor', size = 24, title = 'wattpad', ...others },
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
      <path d='M13.034 3.09c-1.695.113-3.9 2.027-6.9 6.947.245-2.758.345-4.716-.857-5.743-.823-.702-2.764-.974-3.926.536C.18 6.349-.09 9.312.024 12.432c.238 6.518 2.544 8.487 4.59 8.487h.001c3.623 0 4.13-4.439 6.604-8.4-.09 1.416-.008 2.668.266 3.532 1.078 3.398 4.784 3.663 6.467.21 2.374-4.87 3.058-6.016 5.453-9.521 1.58-2.314-.252-3.812-2.374-2.735-1.09.554-2.86 1.935-5.065 4.867.387-2.23.28-5.996-2.932-5.782z' />
    </svg>
  );
});

export default Wattpad;
