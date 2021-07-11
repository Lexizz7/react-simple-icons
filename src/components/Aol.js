import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Aol = forwardRef(function Aol({ color = 'currentColor', size = 24, title = 'aol', ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M13.07 9.334c2.526 0 3.74 1.997 3.74 3.706 0 1.709-1.214 3.706-3.74 3.706-2.527 0-3.74-1.997-3.74-3.706 0-1.709 1.213-3.706 3.74-3.706m0 5.465c.9 0 1.663-.741 1.663-1.759 0-1.018-.763-1.759-1.663-1.759s-1.664.741-1.664 1.759c0 1.018.764 1.76 1.664 1.76m4.913-7.546h2.104v9.298h-2.104zm4.618 6.567a1.398 1.398 0 1 0 .002 2.796 1.398 1.398 0 0 0-.002-2.796M5.536 7.254H3.662L0 16.55h2.482l.49-1.343h3.23l.452 1.343H9.16zm-1.91 6.068L4.6 10.08l.974 3.242H3.626z" />
    </svg>
  );
});

Aol.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Aol;