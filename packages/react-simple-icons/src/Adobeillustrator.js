import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Adobeillustrator = forwardRef(function Adobeillustrator({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M0 .3v23.4h24V.3H0zm1 1h22v21.4H1V1.3zm7.325 12.25l-.792 2.998c-.017.083-.05.102-.148.102H5.917c-.1 0-.115-.033-.1-.148l2.84-9.945c.05-.18.082-.338.098-.833 0-.066.033-.1.083-.1h2.096c.066 0 .1.018.116.1l3.185 10.794c.017.083 0 .132-.083.132h-1.65c-.083 0-.132-.02-.148-.086l-.825-3.015H8.322zm2.788-1.625c-.28-1.106-.94-3.528-1.188-4.7h-.017c-.214 1.17-.742 3.15-1.155 4.7h2.36zm4.5-5.558c0-.643.445-1.023 1.023-1.023.61 0 1.023.412 1.023 1.023 0 .66-.43 1.023-1.04 1.023-.6 0-1.01-.363-1.01-1.023zm.112 2.274c0-.08.033-.11.116-.11h1.57c.088 0 .12.033.12.116v7.895c0 .083-.016.116-.115.116h-1.55c-.1 0-.133-.05-.133-.13V8.64z" />
    </svg>
  );
});

Adobeillustrator.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Adobeillustrator;
