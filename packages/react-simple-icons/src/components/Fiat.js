import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Fiat = forwardRef(function Fiat({ color = 'currentColor', size = 24, title = 'Fiat', ...others }, ref) {
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
      <path d="M12.572 11.348l.027-5.957h1.34c.608 1.327.998 3.081 1.304 5.957zm-2.141 9.42h2.222l.025-7.252h2.663c.209 1.28.26 5.231.273 7.252h2.155c.204-8.953-.428-14.014-2.174-17.537h-5.367zm8.873 0h2.322l.493-15.327H24l-.014-2.21h-6.524v2.213h1.896zM8.952 3.233H6.21l.294 17.537h2.4zm-6.2 10.264h1.95V11.23h-1.95l.007-5.706h2.545L5.29 3.232H0l.478 17.537h2.325Z" />
    </svg>
  );
});

Fiat.propTypes = {
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

export default Fiat;