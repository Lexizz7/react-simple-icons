import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sonicwall = forwardRef(function Sonicwall({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M23.638 10.303h-.045v-.1h.045c.037 0 .055.019.055.051s-.018.05-.055.05zm.15-.05c0-.059-.038-.112-.127-.112h-.162v.364h.094v-.14h.035l.085.14h.11l-.104-.151a.102.102 0 00.068-.101m-.15.34a.267.267 0 110-.535.267.267 0 010 .535zm0-.574a.307.307 0 100 .614.307.307 0 000-.614m-7.7.1l-.621 1.846-.014.04-.013-.04-.611-1.854h-.497l-.611 1.854-.014.04-.013-.04-.62-1.846h-.616l.981 2.726h.505l.615-1.778.014-.038.013.038.615 1.778h.505l.982-2.726h-.6M1.033 11.355c-.615-.126-.732-.287-.732-.539v-.007c0-.267.254-.46.605-.46.293 0 .526.087.755.285l.021.018.006-.006v-.302a1.303 1.303 0 00-.775-.225c-.49 0-.86.305-.86.708v.008c0 .408.26.627.895.755.598.12.71.277.71.525v.007c0 .287-.257.487-.626.487-.36 0-.616-.106-.91-.378l-.021-.019-.005.005v.312c.283.212.574.309.924.309.522 0 .886-.302.886-.734v-.008c0-.395-.26-.616-.873-.74m10.083-1.23c-.4 0-.732.128-.998.387a1.282 1.282 0 00-.398.956c0 .36.11.667.329.922.261.301.618.452 1.07.452.239 0 .454-.045.647-.135.096-.044.184-.12.264-.183v-.336c-.242.273-.54.41-.894.41-.33 0-.603-.106-.82-.317a1.058 1.058 0 01-.324-.79 1.067 1.067 0 01.554-.963c.176-.1.367-.149.574-.149.189 0 .362.038.52.114.15.072.28.177.39.314v-.35c-.078-.065-.165-.143-.26-.19a1.465 1.465 0 00-.654-.143m6.602.713l.36.927-.074-.003a7.525 7.525 0 00-.65.008zm.903.96l-.645-1.68h-.524l-.64 1.715c-.63.117-1.037.392-.836.936.278.758 1.542 1.212 1.542 1.212s-1.253-.808-.604-1.332c.29-.234.803-.41 1.29-.536l.28.725h.536l-.321-.837c.411-.084.721-.124.721-.124s-.365-.045-.8-.08m3.57-1.678h-.517v2.714h1.547v-.493h-1.03V10.12m-2.095 0h-.517v2.714h1.547v-.493h-1.03V10.12M8.728 12.847h.256v-2.73h-.256v2.73m-1.01-.633l-1.82-2.095h-.06v2.734h.283v-2.07l1.805 2.07h.061v-2.734h-.27v2.095m-2.985-.176c-.095.169-.228.301-.398.398-.17.097-.355.145-.554.145-.3 0-.555-.105-.767-.316a1.05 1.05 0 01-.318-.775c0-.206.047-.394.143-.562a1.07 1.07 0 01.4-.401c.17-.1.351-.149.542-.149.194 0 .377.05.55.149a1.067 1.067 0 01.545.95c0 .206-.048.393-.143.561zm-.964-1.91c-.24 0-.464.06-.67.18-.207.119-.37.284-.49.495-.12.211-.18.44-.18.688 0 .371.132.687.395.949.262.26.584.392.966.392.377 0 .697-.132.959-.394.262-.263.393-.582.393-.96 0-.38-.131-.7-.394-.96a1.336 1.336 0 00-.979-.39" />
    </svg>
  );
});

Sonicwall.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Sonicwall;
