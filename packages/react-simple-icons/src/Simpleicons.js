import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Simpleicons = forwardRef(function Simpleicons({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M12 12v-1.5c-2.484 0-4.5-2.016-4.5-4.5S9.516 1.5 12 1.5s4.5 2.016 4.5 4.5H18c0-3.312-2.688-6-6-6S6 2.688 6 6s2.688 6 6 6zM15.037 12.826c2.858 1.678 3.816 5.355 2.138 8.214h1.68c.423-.954.642-1.987.643-3.03.003-4.144-3.352-7.505-7.494-7.51V12c1.066 0 2.113.286 3.033.826zM12.003 10.5H12h.003M6.828 21.04C6.3 20.148 6 19.11 6 18v-.03H4.5V18c-.002 1.047.218 2.084.645 3.04h1.683zM15 22.5v-6h1.5V15h-9v1.5H9v6H4.5V24h15v-1.5H15zm-1.5 0h-3v-6h3v6zM9.078 5.922C9.035 7.58 10.343 8.957 12 9c1.597-.04 2.88-1.326 2.922-2.922C14.965 4.42 13.656 3.043 12 3c-1.597.04-2.88 1.326-2.922 2.922zm4.422.08c0 .828-.672 1.5-1.5 1.5-.83 0-1.5-.673-1.5-1.502 0-.83.67-1.5 1.5-1.5.828 0 1.5.672 1.5 1.5z" />
    </svg>
  );
});

Simpleicons.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Simpleicons;
