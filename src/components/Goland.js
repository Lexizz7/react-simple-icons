import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Goland = forwardRef(function Goland({ color = 'currentColor', size = 24, title = 'goland', ...others }, ref) {
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
      <path d="M0 0v24h24V0Zm6.764 3a5.448 5.448 0 0 1 3.892 1.356L9.284 6.012A3.652 3.652 0 0 0 6.696 5c-1.6 0-2.844 1.4-2.844 3.08v.028c0 1.812 1.244 3.14 3 3.14a3.468 3.468 0 0 0 2.048-.596V9.228H6.708v-1.88H11v4.296a6.428 6.428 0 0 1-4.228 1.572c-3.076 0-5.196-2.164-5.196-5.092v-.028A5.08 5.08 0 0 1 6.764 3Zm10.432 0c3.052 0 5.244 2.276 5.244 5.088v.028a5.116 5.116 0 0 1-5.272 5.12c-3.056-.02-5.248-2.296-5.248-5.112v-.028A5.116 5.116 0 0 1 17.196 3Zm-.028 2A2.96 2.96 0 0 0 14.2 8.068v.028a3.008 3.008 0 0 0 3 3.112 2.96 2.96 0 0 0 2.964-3.084v-.028A3.004 3.004 0 0 0 17.168 5ZM2.252 19.5h9V21h-9z" />
    </svg>
  );
});

Goland.propTypes = {
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

export default Goland;