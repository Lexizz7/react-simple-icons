import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobelightroomcc = forwardRef(function Adobelightroomcc({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm3.24 18.76a3.623 3.623 0 0 1-3.62 3.64H4.63c-2 0-3.63-1.63-3.63-3.64V4.94C1 2.93 2.63 1.3 4.63 1.3h14.73a3.63 3.63 0 0 1 3.63 3.63v14.13zM6.65 16.63c-.12 0-.15-.05-.15-.15V5.73c0-.08.03-.13.12-.13H8.2c.08 0 .1.03.1.12v9.26h4.12c.08 0 .11.03.09.12l-.25 1.42c-.02.08-.07.12-.15.12H6.65v-.01zm7.5-6.48c0-.12 0-.41-.05-.97 0-.08.02-.1.08-.13.61-.25 2.06-.69 3.68-.69.08 0 .12.02.12.1V9.9c0 .08-.03.1-.12.1-.63-.03-1.56.05-1.91.2v6.31c0 .08-.03.12-.12.12h-1.57c-.08 0-.12-.03-.12-.12v-6.36h.01z" />
    </svg>
  );
});

Adobelightroomcc.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Adobelightroomcc;
