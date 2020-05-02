import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FSecure = forwardRef(function FSecure({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M23.93 2.94a35.94 35.94 0 0 0-22.24-.6A2.22 2.22 0 0 0 .07 5.09c.4 1.6.98 3.44 1.68 5.11.01.04.03.02.03-.02-.1-.78.5-1.77 1.68-2.13a27.56 27.56 0 0 1 17.39.23c.86.3 1.82-.17 2.1-1.06.7-2.25.98-3.78 1.05-4.16.01-.07-.05-.1-.07-.12zM6.65 7.89c-.86.18-2.05.46-2.94.76-1.78.61-1.7 2.78-.75 3.47.07-.4.5-.95.98-1.13 1.78-.7 3.69-1.12 5.62-1.29-.98-.4-1.94-.97-2.9-1.81M20.83 12.23a21.16 21.16 0 0 0-16.45-.65c-.85.32-1.38 1.35-.85 2.33a38.16 38.16 0 0 0 3.15 4.8c-.17-.58.13-1.66 1.27-2.01 3.15-.97 6.46-.56 8.66.33.62.25 1.5.1 1.99-.64a38.62 38.62 0 0 0 2.29-4.02c.03-.06 0-.11-.06-.14M15.72 20a9.92 9.92 0 0 1-2.5-1.8c-.34-.34-.84-.83-1.37-1.41-1.2 0-2.37.12-3.62.52-1.16.36-1.27 1.7-.76 2.4.86 1.07 1.46 1.65 2.42 2.64a2.74 2.74 0 0 0 3.82.02c.75-.75 1.21-1.25 2.06-2.21.05-.05.03-.14-.05-.16" />
    </svg>
  );
});

FSecure.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FSecure;
