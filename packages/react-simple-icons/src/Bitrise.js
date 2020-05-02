import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bitrise = forwardRef(function Bitrise({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12 17.9c1.5 0 2.7-1.2 2.7-2.7H9.3C9.3 16.7 10.5 17.9 12 17.9zM6 12c-0.9 0-1.6 0.7-1.6 1.6h3.3C7.7 12.7 6.9 12 6 12zM12 4.1c0.6 0 1-0.5 1-1 0-0.6-0.5-1-1-1 -0.6 0-1 0.5-1 1C11 3.7 11.4 4.1 12 4.1zM23.5 13.4c-0.3-1.9-0.7-3.8-1-5 -0.4-1.5-1.6-2.6-3.2-2.7 -1.5-0.1-4-0.2-7.4-0.2 -3.3 0-5.8 0.1-7.4 0.2 -1.4 0.1-2.7 1.2-3 2.7 -0.3 1.3-0.7 3.2-1 5 -0.2 1.3-0.3 2.8-0.5 4.5 -0.1 0.9 0.2 1.9 0.9 2.6 0.6 0.7 1.5 1.1 2.4 1.2 2.1 0.1 5.3 0.2 8.7 0.2s6.6-0.1 8.7-0.2c0.9 0 1.8-0.5 2.4-1.2s0.9-1.6 0.9-2.6C23.9 16.2 23.7 14.7 23.5 13.4zM21.9 19.3c-0.3 0.4-0.8 0.6-1.3 0.6 -2.1 0.1-5.2 0.2-8.6 0.2S5.5 20 3.4 19.9c-0.5 0-1-0.2-1.3-0.6 -0.3-0.4-0.5-0.8-0.5-1.3 0.1-1.6 0.2-3.1 0.4-4.3 0.3-1.8 0.7-3.7 1-4.9C3.2 8 3.9 7.4 4.7 7.4c1.5-0.2 4-0.3 7.3-0.3s5.8 0.1 7.3 0.2c0.8 0 1.5 0.6 1.7 1.4 0.3 1.2 0.7 3.1 1 4.9 0.2 1.2 0.3 2.7 0.4 4.3C22.4 18.5 22.2 18.9 21.9 19.3zM18 12c-0.9 0-1.6 0.7-1.6 1.6h3.3C19.6 12.7 18.9 12 18 12z" />
    </svg>
  );
});

Bitrise.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Bitrise;
