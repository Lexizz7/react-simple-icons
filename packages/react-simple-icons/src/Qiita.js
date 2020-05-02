import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Qiita = forwardRef(function Qiita({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M7.883 11.615c0-1.92-1.474-3.904-3.974-3.904C1.987 7.71 0 9.183 0 11.679c0 1.92 1.474 3.905 3.973 3.905.801 0 1.602-.256 2.275-.736L7.402 16l.513-.512-1.09-1.088c.673-.736 1.058-1.696 1.058-2.785zm-3.974-3.2c1.827 0 3.269 1.408 3.269 3.232 0 1.569-1.218 3.233-3.237 3.233-2.018 0-3.236-1.632-3.236-3.2 0-2.049 1.634-3.265 3.204-3.265zm5.864 1.568h.673v5.44h-.673zm.32-.736a.574.574 0 0 1-.576-.576c0-.32.256-.576.576-.576.32 0 .577.256.577.576 0 .32-.256.576-.577.576zm2.724 0a.574.574 0 0 1-.577-.576c0-.32.257-.576.577-.576.32 0 .577.256.577.576 0 .32-.256.576-.577.576zm-.32.736h.673v5.44h-.673zm4.71 5.537c-1.25 0-1.987-.96-1.987-1.92V8.479h.673v1.504h2.371v.672h-2.37v2.977c0 .608.48 1.248 1.313 1.248.224 0 .449-.064.64-.192l.065-.032.32.576-.064.032c-.288.16-.64.256-.961.256zm4.454.032c-1.827 0-2.916-1.44-2.916-2.848 0-1.825 1.442-2.913 2.852-2.913.737 0 1.314.256 1.73.736v-.544H24v5.44h-.673v-.607c-.384.48-.961.736-1.666.736zm-.064-5.089c-1.09 0-2.18.832-2.18 2.24 0 1.089.834 2.177 2.244 2.177.64 0 1.282-.288 1.698-.8v-2.817a2.29 2.29 0 0 0-1.762-.8z" />
    </svg>
  );
});

Qiita.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Qiita;
