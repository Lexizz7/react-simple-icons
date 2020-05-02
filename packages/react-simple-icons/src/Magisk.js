import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Magisk = forwardRef(function Magisk({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M10.857 14.458s.155.921-.034 2.952c-.236 2.546.97 6.59.97 6.59s1.645-4.052 1.358-6.67c-.236-2.152.107-2.904.034-2.803-1.264 1.746-2.328-.069-2.328-.069zM13.939 16.643c.206 1.591-.023 2.462-.32 4.164-.15.861 3.068-2.589 4.302-4.645.206-.343-1.18 1.337-2.551.137-.951-.832-1.114-1.085-1.853-1.808-.249-.244.277 1.014.423 2.151zM10.427 14.618c-.739.723-.903.976-1.853 1.808-1.371 1.2-2.757-.48-2.551-.137 1.234 2.057 4.452 5.506 4.302 4.645-.297-1.703-.526-2.574-.32-4.164.147-1.137.673-2.395.423-2.151zM13.593 11.779c1.504.434 2.088 2.523 3.606 2.781.314.053.667.148 1.079.128.77-.037 1.744-.472 3.045-2.318.385-.546-.955 3.514-4.313 3.563-2.46.036-2.747-2.408-4.387-2.482-.592-.027-.629-1.156-.629-1.156s.706-.774 1.598-.517zM10.407 11.767c-1.504.434-2.088 2.523-3.606 2.781-.314.053-.667.148-1.079.128-.77-.037-1.744-.472-3.045-2.318-.385-.546.955 3.514 4.313 3.563 2.46.036 2.747-2.408 4.387-2.482.592-.027.629-1.156.629-1.156s-.706-.774-1.598-.517zM16.033 11.747c1.513 1.146 1.062 2.408 1.911 2.048 2.859-1.212 2.359-7.434 2.128-6.682-1.303 4.242-4.143 4.48-6.876 2.528-.534-.381 1.985 1.459 2.837 2.105zM10.793 9.641C8.06 11.592 5.22 11.355 3.917 7.113c-.231-.752-.731 5.469 2.128 6.682.849.36.398-.902 1.911-2.048.852-.646 3.371-2.486 2.837-2.105zM16.319 10.225c3.3-.136 3.909-5.545 3.65-4.885-1.165 2.963-5.574 1.848-5.995 3.718-.083.367.747 1.233 2.345 1.167zM10.015 9.058c-.421-1.87-4.831-.755-5.995-3.718-.259-.66.35 4.749 3.65 4.885 1.599.066 2.428-.8 2.345-1.167zM13.768 8.234s1.794-.964 3.33-1.384c1.435-.393 2.512-1.359 2.631-2.38.089-.76-1.11-2.197-1.11-2.197s-.841 2.334-1.945 3.501c-1.201 1.27-.745 1.099-2.906 2.46zM7.315 5.774C6.211 4.607 5.37 2.273 5.37 2.273S4.171 3.709 4.26 4.47c.12 1.021 1.196 1.987 2.631 2.38 1.536.421 3.33 1.384 3.33 1.384-2.162-1.361-1.705-1.19-2.906-2.46zM13.55 8.086c1.943-1.594 2.976-3.673 4.657-5.949.317-.429-1.419-1.465-2.105-1.533S14.84 3.057 14.775 4.54c-.059 1.354-1.486 3.761-1.224 3.547zM9.214 4.539C9.149 3.056 8.573.535 7.887.603S5.465 1.707 5.782 2.136c1.681 2.276 2.713 4.356 4.657 5.949.261.214-1.165-2.193-1.224-3.547zM13.745 2.937c.137-1.098.631-1.9 1.613-2.574-.868-.29-1.591-.526-1.968-.217s-1.403 1.342-1.266 3.023.007 7.962.305 7.846c.16-4.302 1.522-5.538 1.316-8.077zM11.559 11.014c.297.116.167-6.165.305-7.846S10.976.454 10.598.145C10.221-.164 9.499.072 8.63.362c.983.674 1.476 1.476 1.613 2.574-.206 2.539 1.156 3.775 1.316 8.077z" />
    </svg>
  );
});

Magisk.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Magisk;
