import * as React from 'react';

export type RomeProps = {
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

const Rome = React.forwardRef<SVGSVGElement, RomeProps>(function Rome(
  { color = 'currentColor', size = 24, title = 'rome', ...others },
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
      <path d='M12 0a16.941 16.941 0 00-2.283.154.63.63 0 00-.485.895l.172.361 1.338 2.8a.633.633 0 00.608.356 11.695 11.695 0 011.3 0 .632.632 0 00.608-.355l1.338-2.8.172-.362a.63.63 0 00-.485-.895A16.941 16.941 0 0012 0zm4.309 1.902a.629.629 0 00-.786.32l-.949 1.989a.629.629 0 00.36.863c3.193 1.134 5.466 4.063 5.466 7.498v.627H24v-.627c0-4.864-3.191-9.021-7.691-10.67zm-8.62.002C3.191 3.551 0 7.706 0 12.572v.627h3.6v-.627c0-3.435 2.275-6.364 5.466-7.498a.629.629 0 00.358-.863l-.95-1.986a.629.629 0 00-.785-.32zM12 5.714c-3.976 0-7.2 3.07-7.2 6.858V24h3.6V12.572c0-1.895 1.612-3.43 3.6-3.43s3.6 1.536 3.6 3.43V24h3.6V12.572c0-3.787-3.224-6.857-7.2-6.857zM0 14.4V24h3.6v-9.6zm20.4 0V24H24v-9.6z' />
    </svg>
  );
});

export default Rome;
