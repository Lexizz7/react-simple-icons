import * as React from 'react';

export type BeatportProps = {
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

const Beatport = React.forwardRef<SVGSVGElement, BeatportProps>(function Beatport(
  { color = 'currentColor', size = 24, title = 'beatport', ...others },
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
      <path d='M14.668 24c-3.857 0-6.935-3.039-6.935-6.974a6.98 6.98 0 011.812-4.714l-4.714 4.714-2.474-2.474 5.319-5.26c.72-.72 1.09-1.656 1.09-2.688V0h3.487v6.604c0 2.026-.72 3.74-2.123 5.143l-.156.156a6.945 6.945 0 014.694-1.812c3.955 0 6.975 3.136 6.975 6.935A6.943 6.943 0 0114.668 24zm0-10.714c-2.123 0-3.779 1.753-3.779 3.74 0 2.045 1.675 3.78 3.78 3.78a3.804 3.804 0 003.818-3.78c0-2.065-1.715-3.74-3.819-3.74Z' />
    </svg>
  );
});

export default Beatport;
