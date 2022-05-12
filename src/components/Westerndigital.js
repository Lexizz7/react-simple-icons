import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Westerndigital = forwardRef(function Westerndigital(
  { color = 'currentColor', size = 24, title = 'westerndigital', ...others },
  ref
) {
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
      <path d="M1.494 4.957A1.478 1.478 0 0 0 0 6.455v11.09a1.478 1.478 0 0 0 .432 1.062 1.477 1.477 0 0 0 1.062.436h21.012a1.48 1.48 0 0 0 1.384-.924c.075-.182.112-.377.11-.574V6.455a1.477 1.477 0 0 0-.432-1.062 1.478 1.478 0 0 0-1.063-.436H1.496Zm2.457 3.287H6.09l-.238 1.408H3.768l.183-1.408Zm3.996 0H9.7l.156 1.408H7.072l.875-1.408Zm3.807 0h1.877l-.469 1.408h-1.851l.443-1.408Zm2.695 0h4.06c2.062 0 3.228 1.643 2.481 3.74a5.63 5.63 0 0 1-1.924 2.641 5.628 5.628 0 0 1-3.064 1.13H11.94l1.7-5.171 2.75.092-1.015 3.011c.277.031.559.031.836 0a2.865 2.865 0 0 0 2.539-1.917c.358-1.034-.15-1.886-1.166-1.916H13.91l.54-1.61ZM3.842 10.121l2.056.063-.357 2.677 1.31-2.615 2.98.094.269 2.707.834-2.676 2.054.094-1.758 5.29H8.697l-.445-4.575-2.176 4.576h-2.83l.596-5.635Z" />
    </svg>
  );
});

Westerndigital.propTypes = {
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

export default Westerndigital;