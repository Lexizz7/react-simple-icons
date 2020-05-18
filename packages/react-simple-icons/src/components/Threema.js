import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Threema = forwardRef(function Threema({ color = 'currentColor', size = 24, title = 'Threema', ...others }, ref) {
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
      <path d="M13.755 22.243a1.756 1.756 0 11-3.512.002 1.756 1.756 0 013.512-.002zm-6.335 0a1.756 1.756 0 11-3.513.002 1.756 1.756 0 013.513-.002zm12.671 0a1.756 1.756 0 11-3.512.002 1.756 1.756 0 013.512-.002zM7.477 17.248l-5.171 1.293 1.105-4.42c-1.094-1.442-1.733-3.175-1.733-5.039C1.678 4.066 6.3 0 12 0c5.7 0 10.322 4.066 10.322 9.082 0 5.016-4.622 9.083-10.322 9.083a11.45 11.45 0 01-4.523-.917zm1.595-8.92h-.115a.47.47 0 00-.47.471v4.126c0 .26.21.471.47.471h6.086c.26 0 .47-.21.47-.47V8.798a.47.47 0 00-.47-.47h-.115v-1.17a2.927 2.927 0 00-2.93-2.924A2.926 2.926 0 009.073 7.16zm4.685 0h-3.514V7.16a1.756 1.756 0 013.514 0v1.17Z" />
    </svg>
  );
});

Threema.propTypes = {
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

export default Threema;