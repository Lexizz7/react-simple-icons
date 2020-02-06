import React from 'react';
import PropTypes from 'prop-types';

const PreCommit = props => {
  const { color, size, ...others } = props;
  return (
    <svg width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M23.355 10.444L13.556.645a2.2 2.2 0 0 0-3.112 0L.645 10.444a2.201 2.201 0 0 0 0 3.112l9.799 9.799a2.201 2.201 0 0 0 3.112 0l9.799-9.799a2.2 2.2 0 0 0 0-3.112zm-1.657 2.918l-8.337 8.337a1.922 1.922 0 0 1-1.362.563c-.493 0-.986-.188-1.362-.563L2.3 13.362A1.92 1.92 0 0 1 1.738 12c0-.514.2-.998.564-1.362l8.337-8.337c.363-.363.847-.563 1.361-.563s.998.2 1.362.564l8.337 8.337c.75.75.75 1.972-.001 2.723zM14.195 9.76c.094.173.142.399.142.678s-.047.505-.142.678c-.095.173-.22.306-.376.401a1.485 1.485 0 0 1-.542.191 4.033 4.033 0 0 1-.641.049h-1.504V9.119h1.504c.222 0 .435.017.641.049.205.033.386.097.542.191.156.095.281.228.376.401zm7.062 1.319L12.92 2.742c-.245-.245-.572-.381-.92-.381s-.675.135-.921.381l-8.337 8.337c-.245.246-.381.573-.381.921s.135.675.381.921l8.337 8.337a1.304 1.304 0 0 0 1.842 0l8.337-8.337a1.305 1.305 0 0 0-.001-1.842zm-5.213.4a2.437 2.437 0 0 1-.53.906 2.624 2.624 0 0 1-.943.635c-.386.16-.855.24-1.405.24h-2.034v3.155H9.197v-8.8h3.969c.55 0 1.019.08 1.405.24.386.16.7.372.943.635.242.263.419.563.53.9.111.337.166.686.166 1.048 0 .353-.055.7-.166 1.041z" />
    </svg>
  );
};

PreCommit.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PreCommit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default PreCommit;
