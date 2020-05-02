import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bamboo = forwardRef(function Bamboo({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M21.715 13.643h-4.989a.651.651 0 0 0-.655.555 4.114 4.114 0 0 1-4.062 3.531l1.35 6.172a10.374 10.374 0 0 0 9.007-9.545.651.651 0 0 0-.651-.713zm-8.633-.158l7.2-6.171a.645.645 0 0 0 0-.984L13.081.16a.648.648 0 0 0-1.073.483v12.343a.651.651 0 0 0 1.073.5zM1.727 14.99A10.385 10.385 0 0 0 12.012 24v-6.27a4.093 4.093 0 0 1-4.1-4.087L1.727 14.99zm-.096-1.447v.1h6.28a4.093 4.093 0 0 1 4.098-4.087l-1.348-6.17a10.37 10.37 0 0 0-9.03 10.157" />
    </svg>
  );
});

Bamboo.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Bamboo;
