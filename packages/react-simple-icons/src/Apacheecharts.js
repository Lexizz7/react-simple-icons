import React from 'react';
import PropTypes from 'prop-types';

const Apacheecharts = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.354 17.813a1.319 1.319 0 0 0-1.284-1.616c-.383 0-.718.172-.967.424-1.358 1.371-3.304 2.134-5.386 2.134-4.329 0-7.825-3.327-7.797-7.656.021-3.286 2.72-5.937 6.016-5.937a6.016 6.016 0 0 1 5.068 9.258 1.343 1.343 0 0 0-.209.721 1.319 1.319 0 1 0 1.319-1.319c-.019 0-.037.002-.056.003a1.467 1.467 0 0 1 2.486 1.286l.024-.001c.81 0 1.467.657 1.467 1.467a1.47 1.47 0 0 1-.681 1.236z" />
    </svg>
  );
};

Apacheecharts.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Apacheecharts.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Apacheecharts;
