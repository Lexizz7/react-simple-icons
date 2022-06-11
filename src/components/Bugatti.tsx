import * as React from 'react';

export type BugattiProps = {
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

const Bugatti = React.forwardRef<SVGSVGElement, BugattiProps>(function Bugatti(
  { color = 'currentColor', size = 24, title = 'bugatti', ...others },
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
      <path d='M0 5.168v2.194h2.92l.004-.73.006-.73 3.498-.005 3.496-.004v4.103H7.157V8.851l-1.464.004-1.466.006v5.744l1.466.006 1.464.004V13.47h2.767v4.618H2.92v-1.45H0v4.39h9.31c6.06 0 9.405-.008 9.584-.02a5.482 5.482 0 0 0 3.73-1.842 5.567 5.567 0 0 0 1.341-2.904c.048-.325.046-1.184-.002-1.504a5.537 5.537 0 0 0-1.36-2.922 1.478 1.478 0 0 1-.14-.17c0-.008.054-.08.12-.16a5.255 5.255 0 0 0 1.13-2.693 6.9 6.9 0 0 0 .01-1.122 5.297 5.297 0 0 0-1.172-2.81 5.328 5.328 0 0 0-1.884-1.443 5.297 5.297 0 0 0-1.2-.38c-.515-.09-.038-.085-10.052-.085H0zm18.656.744c.557.044.958.214 1.305.555.536.529.73 1.414.475 2.193a1.933 1.933 0 0 1-.494.794 1.884 1.884 0 0 1-1.055.513c-.147.025-.561.03-2.63.03h-2.458v-2.04c0-1.121.005-2.045.013-2.05.02-.022 4.569-.016 4.844.005zm.267 7.586c1.078.174 1.807.977 1.876 2.065.057.888-.246 1.613-.87 2.088-.159.12-.5.288-.691.342-.35.095-.342.095-2.977.095h-2.462V13.47h2.477c2.082 0 2.502.003 2.647.028Z' />
    </svg>
  );
});

export default Bugatti;
