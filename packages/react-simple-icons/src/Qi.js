import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Qi = forwardRef(function Qi({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M16.574 0a1.524 1.524 0 100 3.049 1.524 1.524 0 100-3.049zm-4.762 2.857a7.627 7.627 0 00-.01 15.246c.297 0 .296.293.296.293v2.65s.001 2.763 2.658 2.954c.295.01.295-.295.295-.295V3.785s0-.293-.295-.414a7.667 7.667 0 00-2.944-.514zM16.7 4.52c-.124-.02-.123.167-.123.386v11.147c0 .294-.002.528.293.297.01-.01.023-.019.033-.028a7.626 7.626 0 00-.03-11.709.41.41 0 00-.173-.093zm-4.765 1.386c.165 0 .164.164.164.164v8.82s0 .165-.164.165a4.577 4.577 0 010-9.148Z" />
    </svg>
  );
});

Qi.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Qi;
