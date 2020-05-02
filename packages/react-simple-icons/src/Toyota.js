import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Toyota = forwardRef(function Toyota({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M0 0v24h24V0zm12 6.552c4.532 0 8 2.337 8 5.448 0 3.009-3.38 5.448-8 5.448S4 15.01 4 12c0-3.111 3.468-5.448 8-5.448zm-.34.66c-1.137.032-2.215.226-3.154.568-.867.33-1.406.748-1.495 1.108-.167.672.616 1.512 3.134 1.786.167-1.71.674-3.156 1.516-3.462zm.68 0c.84.306 1.348 1.751 1.515 3.462 2.517-.274 3.3-1.114 3.133-1.786-.09-.362-.633-.783-1.508-1.113-.935-.34-2.009-.53-3.14-.563zM12 8.49c-.481 0-.99.824-1.18 2.241.362.023.755.035 1.18.035.424 0 .817-.012 1.18-.035-.19-1.417-.698-2.241-1.18-2.241zm-5.978.947a3.668 3.668 0 0 0-.842 2.367c0 2.647 2.907 4.854 6.49 4.982-.835-.321-1.587-1.877-1.587-4.812v-.095c-2.346-.318-3.992-1.226-4.061-2.442zm11.956 0c-.069 1.216-1.715 2.124-4.061 2.442v.095c0 2.808-.76 4.477-1.6 4.813 3.588-.124 6.503-2.332 6.503-4.983 0-.918-.307-1.71-.842-2.367zM13.26 11.95a14.92 14.92 0 0 1-2.518 0v.023c0 2.167.65 3.065 1.259 3.065.609 0 1.26-.898 1.26-3.065v-.023Z" />
    </svg>
  );
});

Toyota.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Toyota;
