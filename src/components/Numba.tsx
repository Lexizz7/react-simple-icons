
    import * as React from 'react';

    export type NumbaProps = React.ComponentPropsWithoutRef<'svg'> & {
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

    const Numba = React.forwardRef<SVGSVGElement, NumbaProps>(function Numba({color = 'currentColor', size = 24, title = "numba", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M16.419 15.204s7.235-5.335 4.305-8.786c-3.398-4.003-12.921 4.486-13.962 2.76-1.04-1.725 8.452-5.86 9.481-6.55.112-.075.144-.218.112-.383l1.099-.127-.685-.345.175-.685-.796.621C15.85 1.173 15.34.595 15.049.393c-1.035-.685-2.93-.52-5.685.86-2.756 1.38-9.147 5.685-5.877 10.51 2.93 4.306 11.35-3.094 12.756-1.9 1.205 1.035-8.095 7.411-8.095 7.411h3.965C11.43 18.999 8.148 24 8.148 24l11.934-8.621c-1.253-.186-3.663-.175-3.663-.175zM13.175.908a.776.776 0 01.823.716.776.776 0 01-.717.823.776.776 0 01-.823-.716.768.768 0 01.717-.823z" />
        </svg>
      );
    });

    export default Numba
  