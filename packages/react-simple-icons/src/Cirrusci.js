import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cirrusci = forwardRef(function Cirrusci({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M22.406 15.477A4.587 4.587 0 0 1 24 18.955c0 2.531-2.053 4.59-4.577 4.59H1.113a1.113 1.113 0 0 1 0-2.226h18.31a2.36 2.36 0 0 0 2.35-2.364 2.36 2.36 0 0 0-2.35-2.364H1.113a1.113 1.113 0 0 1 0-2.227h18.31A2.36 2.36 0 0 0 21.773 12a2.36 2.36 0 0 0-2.35-2.364H1.113a1.113 1.113 0 1 1 0-2.227h18.31c1.296 0 2.35-1.06 2.35-2.364s-1.054-2.364-2.35-2.364a1.113 1.113 0 0 1 0-2.227C21.947.454 24 2.514 24 5.045c0 1.389-.62 2.635-1.594 3.477A4.587 4.587 0 0 1 24 12c0 1.389-.62 2.635-1.594 3.477z" />
    </svg>
  );
});

Cirrusci.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Cirrusci;
