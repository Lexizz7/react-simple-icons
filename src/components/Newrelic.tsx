import * as React from 'react';

export type NewrelicProps = {
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

const Newrelic = React.forwardRef<SVGSVGElement, NewrelicProps>(function Newrelic(
  { color = 'currentColor', size = 24, title = 'newrelic', ...others },
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
      <path d='M11.9994 16.3548a4.354 4.354 0 1 1 4.354-4.354 4.3598 4.3598 0 0 1-4.354 4.354zm0-8.1333a3.7793 3.7793 0 1 0 3.7793 3.7792 3.7836 3.7836 0 0 0-3.7793-3.7792zm1.0289 10.9181a6.9722 6.9722 0 1 1 6.9737-6.9722 6.9808 6.9808 0 0 1-6.9737 6.9722zm0-13.3639a6.3974 6.3974 0 1 0 6.3989 6.3975 6.4046 6.4046 0 0 0-6.399-6.4032zm-2.1727 15.998c-5.3657 0-9.7571-2.9617-10.6782-7.2037C-.9521 9.3725 3.4307 3.991 9.9488 2.5727a15.0552 15.0552 0 0 1 3.193-.3463c5.3657 0 9.7571 2.9616 10.6782 7.2021.5504 2.5305-.171 5.1732-2.0319 7.445-1.8609 2.2719-4.5983 3.8684-7.7396 4.5524a15.0495 15.0495 0 0 1-3.193.3477zm2.2848-18.9682a14.479 14.479 0 0 0-3.0694.329C3.8632 4.484-.3241 9.5594.7392 14.448c.8622 3.9747 5.0295 6.7538 10.1164 6.7538a14.4833 14.4833 0 0 0 3.0708-.3334c3.0177-.6567 5.653-2.2029 7.4163-4.354 1.7631-2.1512 2.427-4.5984 1.9154-6.9593-.8636-3.9776-5.0236-6.7538-10.1163-6.7538Z' />
    </svg>
  );
});

export default Newrelic;
