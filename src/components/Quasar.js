import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Quasar = forwardRef(function Quasar({ color = 'currentColor', size = 24, title = 'Quasar', ...others }, ref) {
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
      <path d="M14.34 12.001a2.342 2.342 0 0 1-4.683 0 2.342 2.342 0 0 1 4.684 0zm8.051-6a11.996 11.996 0 0 0-1.839-2.405l-2.707 1.562a9.002 9.002 0 0 0-2.825-1.637 11.107 11.107 0 0 0-2.187 3.12c3.012-.204 6.124.885 9.013 3.142l1.703-.983A11.969 11.969 0 0 0 22.39 6zm.001 12a11.99 11.99 0 0 0 1.162-2.796l-2.706-1.562c.202-1.091.2-2.198.005-3.266a11.112 11.112 0 0 0-3.796-.334c1.684 2.507 2.295 5.746 1.786 9.376l1.703.983A11.989 11.989 0 0 0 22.392 18zM12 24a11.968 11.968 0 0 0 3.002-.39v-3.126a9.024 9.024 0 0 0 2.83-1.629 11.102 11.102 0 0 0-1.609-3.454c-1.328 2.712-3.828 4.862-7.227 6.235v1.966c.98.26 1.99.392 3.004.397zM1.607 18a11.995 11.995 0 0 0 1.84 2.404l2.706-1.562a9.002 9.002 0 0 0 2.825 1.638 11.107 11.107 0 0 0 2.188-3.122c-3.013.206-6.124-.884-9.013-3.141L.45 15.2c.266.979.654 1.92 1.157 2.8zm0-12A11.99 11.99 0 0 0 .443 8.796L3.15 10.36a9.019 9.019 0 0 0-.005 3.265c1.273.332 2.546.445 3.796.334-1.683-2.507-2.296-5.746-1.785-9.376L3.453 3.6A11.994 11.994 0 0 0 1.606 6zm10.392-6a12.071 12.071 0 0 0-3.002.39v3.125a9.028 9.028 0 0 0-2.831 1.629 11.102 11.102 0 0 0 1.61 3.454c1.327-2.712 3.827-4.86 7.227-6.235V.398c-.98-.26-1.99-.392-3.004-.398z" />
    </svg>
  );
});

Quasar.propTypes = {
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

export default Quasar;
