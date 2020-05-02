import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobephotoshop = forwardRef(function Adobephotoshop({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M5.9 6.16c0-.06.02-.11.1-.11C6.63 6.02 7.53 6 8.5 6c2.7 0 3.88 1.48 3.88 3.38 0 2.48-1.82 3.54-4.02 3.54-.37 0-.5-.02-.76-.02v3.8c0 .08-.03.11-.11.11H6.01c-.08 0-.11-.03-.11-.11zm1.7 5.18c.22.02.4.02.79.02 1.14 0 2.23-.4 2.23-1.95 0-1.24-.78-1.87-2.09-1.87-.39 0-.76.02-.93.03zm8.72-1.16c-.77 0-1.03.39-1.03.71 0 .35.18.6 1.21 1.13 1.53.74 2.01 1.45 2.01 2.5 0 1.56-1.19 2.4-2.8 2.4-.85 0-1.61-.18-2.03-.42-.06-.03-.08-.08-.08-.16V14.9c0-.1.05-.13.11-.08.61.4 1.36.58 2 .58.77 0 1.09-.32 1.09-.76 0-.35-.22-.66-1.21-1.18-1.39-.66-1.96-1.34-1.96-2.46 0-1.26.98-2.3 2.69-2.3.84 0 1.46.13 1.78.27.08.05.1.13.1.19v1.34c0 .08-.05.13-.14.1-.44-.26-1.11-.42-1.74-.42zM4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm.38 1h14.73a3.63 3.63 0 0 1 3.63 3.63v14.13a3.624 3.624 0 0 1-3.62 3.64H4.63c-2 0-3.63-1.63-3.63-3.63V4.93c0-2 1.63-3.63 3.63-3.63Z" />
    </svg>
  );
});

Adobephotoshop.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Adobephotoshop;
