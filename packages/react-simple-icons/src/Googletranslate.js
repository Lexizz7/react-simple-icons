import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Googletranslate = forwardRef(function Googletranslate({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M1.597 0C.719 0 0 .719 0 1.599v16.275c0 .878.719 1.597 1.597 1.597h10L13.074 24h9.33C23.28 24 24 23.293 24 22.428V6.39c0-.865-.719-1.572-1.597-1.572h-9.93L10.927 0zm11.109 5.539h9.697c.234 0 .455.091.62.255a.834.834 0 01.256.596v16.038a.824.824 0 01-.255.596.881.881 0 01-.62.255h-8.677l3.45-3.808h.004l-.74-2.302c.01-.009.58-.501 1.283-1.247a52.6 52.6 0 002.818 2.806l.772-.772c-1.272-1.154-2.205-2.07-2.89-2.805.918-1.087 1.851-2.455 2.049-3.708h2.034v.003h.002v-.94h-4.532v-1.52h-1.472v1.52h-2.204zm-5.966.46c1.012 0 1.861.374 2.513.975l-.99.952a2.194 2.194 0 00-1.523-.584c-1.306 0-2.364 1.08-2.364 2.409 0 1.33 1.058 2.409 2.364 2.409 1.508 0 2.13-1.08 2.19-1.808l-2.188-.002V9.066h3.511c.05.23.089.457.089.764 0 2.147-1.433 3.669-3.602 3.669a3.752 3.752 0 01-3.751-3.75c0-2.07 1.68-3.75 3.751-3.75zm7.863 5.447h4.766c-.308 1.084-.988 2.108-1.652 2.904-1.176-1.392-1.18-1.844-1.18-1.844h-1.222s.05.678 1.7 2.61c-.533.546-.946.875-.95.88Z" />
    </svg>
  );
});

Googletranslate.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Googletranslate;
