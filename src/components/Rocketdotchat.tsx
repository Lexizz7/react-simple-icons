import * as React from 'react';

export type RocketdotchatProps = {
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

const Rocketdotchat = React.forwardRef<SVGSVGElement, RocketdotchatProps>(function Rocketdotchat(
  { color = 'currentColor', size = 24, title = 'rocketdotchat', ...others },
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
      <path d='M22.915 8.321c-.642-.997-1.542-1.879-2.672-2.624-2.185-1.436-5.056-2.227-8.084-2.227-1.012 0-2.009.088-2.976.262a9.84 9.84 0 0 0-2.046-1.509C4.378.848 1.947 1.361.719 1.802a.59.59 0 0 0-.229.964c.866.894 2.299 2.66 1.946 4.267C1.067 8.431.324 10.117.324 11.872c0 1.789.742 3.475 2.112 4.873.352 1.607-1.081 3.374-1.947 4.268a.589.589 0 0 0 .229.963c1.228.442 3.659.955 6.418-.421a9.892 9.892 0 0 0 2.046-1.509c.968.174 1.964.262 2.976.262 3.029 0 5.9-.79 8.084-2.226 1.131-.744 2.031-1.626 2.672-2.624.715-1.11 1.077-2.306 1.077-3.552.001-1.279-.361-2.473-1.076-3.585zm-10.881 9.916c-1.309 0-2.558-.169-3.696-.474l-.832.8A7.609 7.609 0 0 1 5.972 19.7a6.033 6.033 0 0 1-2.17.613c.041-.073.078-.147.117-.221.833-1.531 1.059-2.907.674-4.128-1.363-1.071-2.181-2.442-2.181-3.935 0-3.427 4.308-6.206 9.621-6.206 5.313 0 9.622 2.779 9.622 6.206.001 3.429-4.307 6.208-9.621 6.208zM8.85 12.01c0 .777-.635 1.407-1.418 1.407-.783 0-1.418-.63-1.418-1.407s.635-1.407 1.418-1.407c.783 0 1.418.63 1.418 1.407zm4.563 0c0 .777-.635 1.407-1.418 1.407-.783 0-1.418-.63-1.418-1.407s.635-1.407 1.418-1.407c.783 0 1.418.63 1.418 1.407zm4.565 0c0 .777-.635 1.407-1.418 1.407-.783 0-1.418-.63-1.418-1.407s.635-1.407 1.418-1.407c.783 0 1.418.63 1.418 1.407z' />
    </svg>
  );
});

export default Rocketdotchat;
