import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Themoviedatabase = forwardRef(function Themoviedatabase({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M19.491 21.899c2.106 0 3.531-1.424 3.531-3.531V3.531C23.022 1.425 21.598 0 19.491 0H4.509C2.403 0 .978 1.424.978 3.531V24l1.809-2.101V3.531a1.721 1.721 0 0 1 1.719-1.719h14.982c.949.002 1.718.77 1.719 1.719v14.837a1.721 1.721 0 0 1-1.719 1.719H6.92l-1.81 1.812-.011-.014zM8.787 11.466H7.09v5.698h1.697c3.793 0 3.793-5.698 0-5.698zm0 4.559h-.551v-3.419h.551c2.215 0 2.215 3.418 0 3.418zM8.456 10.389h1.139V5.83h1.418V4.699H7.037V5.83h1.419v4.559zM14.063 7.201l-1.971-2.502h-.366v5.785h1.156v-3.18l1.182 1.531 1.183-1.531-.008 3.18h1.156V4.699h-.36l-1.971 2.502zM15.983 14.315c.358-.247.51-.689.526-1.124.023-1.004-.606-1.729-1.617-1.729h-2.255v5.706h2.255a1.695 1.695 0 0 0 1.681-1.694v-.02-.008c0-.466-.231-.878-.585-1.127l-.004-.003zm-2.204-1.714h1.013c.327 0 .526.255.526.573a.533.533 0 0 1-.526.574h-1.013V12.6zm1.013 3.427h-1.013v-1.139h1.027c.309 0 .559.25.559.559v.014a.566.566 0 0 1-.566.566h-.001z" />
    </svg>
  );
});

Themoviedatabase.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Themoviedatabase;
