import React from 'react';
import PropTypes from 'prop-types';

const Libreoffice = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M16.365 0a.597.597 0 00-.555.352.582.582 0 00.128.635l4.985 4.996a.605.605 0 00.635.133.59.59 0 00.363-.53V.577A.605.605 0 0021.335 0zM2.661 0a.59.59 0 00-.582.59v22.82a.59.59 0 00.582.59h18.67a.59.59 0 00.59-.59V8.716a.59.59 0 00-.17-.42L13.674.182a.59.59 0 00-.42-.181zm.59 1.184h9.754l7.733 7.77v13.863H3.251z" />
    </svg>
  );
};

Libreoffice.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Libreoffice.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Libreoffice;