import * as React from 'react';

export type UntappdProps = {
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

const Untappd = React.forwardRef<SVGSVGElement, UntappdProps>(function Untappd(
  { color = 'currentColor', size = 24, title = 'untappd', ...others },
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
      <path d='M11 13.299l-5.824 8.133c-.298.416-.8.635-1.308.572-.578-.072-1.374-.289-2.195-.879S.392 19.849.139 19.323a1.402 1.402 0 0 1 .122-1.425l5.824-8.133a3.066 3.066 0 0 1 1.062-.927l1.146-.604c.23-.121.436-.283.608-.478.556-.631 2.049-2.284 4.696-4.957l.046-.212a.134.134 0 0 1 .096-.1l.146-.037a.135.135 0 0 0 .101-.141l-.015-.18a.13.13 0 0 1 .125-.142c.176-.005.518.046 1.001.393s.64.656.692.824a.13.13 0 0 1-.095.164l-.175.044a.133.133 0 0 0-.101.141l.012.15a.131.131 0 0 1-.063.123l-.186.112c-1.679 3.369-2.764 5.316-3.183 6.046a2.157 2.157 0 0 0-.257.73l-.205 1.281A3.074 3.074 0 0 1 11 13.3zm12.739 4.598l-5.824-8.133a3.066 3.066 0 0 0-1.062-.927l-1.146-.605a2.138 2.138 0 0 1-.608-.478 50.504 50.504 0 0 0-.587-.654.089.089 0 0 0-.142.018 97.261 97.261 0 0 1-1.745 3.223 1.42 1.42 0 0 0-.171.485 3.518 3.518 0 0 0 0 1.103l.01.064c.075.471.259.918.536 1.305l5.824 8.133c.296.413.79.635 1.294.574a4.759 4.759 0 0 0 2.209-.881 4.762 4.762 0 0 0 1.533-1.802 1.4 1.4 0 0 0-.122-1.425zM8.306 3.366l.175.044a.134.134 0 0 1 .101.141l-.012.15a.13.13 0 0 0 .063.123l.186.112c.311.623.599 1.194.869 1.721.026.051.091.06.129.019.437-.469.964-1.025 1.585-1.668a.137.137 0 0 0 .003-.19c-.315-.322-.645-.659-1.002-1.02l-.046-.212a.13.13 0 0 0-.096-.099l-.146-.037a.135.135 0 0 1-.101-.141l.015-.18a.13.13 0 0 0-.123-.142c-.175-.005-.518.045-1.002.393-.483.347-.64.656-.692.824a.13.13 0 0 0 .095.164z' />
    </svg>
  );
});

export default Untappd;
