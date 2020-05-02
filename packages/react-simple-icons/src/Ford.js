import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Ford = forwardRef(function Ford({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M11.996 7.825C5.376 7.825 0 9.696 0 12c0 2.313 5.375 4.175 12.004 4.175C18.634 16.175 24 14.313 24 12c0-2.304-5.367-4.175-12.004-4.175zm.008.362c6.391 0 11.581 1.712 11.581 3.813 0 2.11-5.19 3.813-11.58 3.813C5.604 15.813.423 14.11.423 12c0-2.1 5.181-3.813 11.58-3.813zm-3.14.684c-.17 0-.342.008-.514.022-1.139.097-2.233.741-2.233 1.721 0 .495.353.9.9.883.645-.018 1.174-.539 1.448-1.183.097-.238-.097-.344-.185-.203-.16.256-.398.45-.645.574-.3.141-.626.106-.724-.141-.132-.353.15-.865.804-1.113.944-.344 1.924-.114 2.877.062.009 0 .062.027.018.053-.168.088-.336.168-.6.389-.186.167-.433.38-.618.609-.186.23-.318.432-.495.662-.026.035-.052.035-.052.035-.433.07-.848.124-1.236.388-.08.053-.106.16-.062.23s.141.08.212.026c.238-.185.485-.265.768-.273.008 0 .017 0 .017.008.01 0 .01.01 0 .018-.423.592-.53.724-.847 1.086a9.206 9.206 0 0 1-.503.512c-.724.67-1.5.662-1.783.238-.168-.256-.141-.52-.035-.741.14-.274.405-.468.635-.583.088-.044.115-.15.027-.247-.053-.07-.186-.08-.283-.062a1.515 1.515 0 0 0-1.165 1.624c.07.742.68 1.174 1.377 1.165.547-.008 1.068-.176 1.686-.803.582-.6 1.12-1.483 1.615-2.304.018-.026.027-.044.106-.053.31-.035.777-.079 1.068-.097.062-.008.08-.009.106.027.07.097.194.176.283.23.053.026.07.035.105.035.045 0 .08-.018.097-.045.036-.035.045-.079.027-.105-.018-.036-.22-.15-.23-.195-.008-.026.027-.035.027-.035a.656.656 0 0 0 .406-.327c.097-.185.106-.423-.062-.556-.15-.123-.37-.097-.556.062a.677.677 0 0 0-.212.592c.01.035 0 .053-.044.053-.273.017-.538.026-.83.044-.026 0-.026-.01-.017-.027.335-.582.838-.997 1.394-1.412.036-.027.027-.08.027-.124 1.006.22 1.977.627 3.019.618.423 0 .838-.062 1.235-.282.345-.194.486-.362.495-.547.008-.124-.08-.203-.203-.177-1.05.247-2.057.238-3.107.115-1.198-.147-2.347-.45-3.539-.446zm6.83.384c0 .009.009.009.009.017 0-.008-.009-.017-.009-.017zm-4.72 1.308c.025 0 .048.008.068.025.053.044.027.167-.026.247a.416.416 0 0 1-.256.185c-.018.01-.035 0-.044-.044a.419.419 0 0 1 .132-.362.194.194 0 0 1 .126-.051zm7.818.016c-.044 0-.07.009-.097.053-.07.141-.97 1.483-1.139 1.748-.026.044-.061.035-.07-.01-.018-.158-.15-.335-.362-.414a.913.913 0 0 0-.486-.053c-.29.035-.556.194-.785.37-.353.265-.653.61-1.042.866-.211.14-.503.256-.697.08-.177-.16-.159-.522.115-.804.026-.027.062-.009.053.018a.36.36 0 0 0 .106.344c.114.106.282.115.432.044a.571.571 0 0 0 .3-.433.49.49 0 0 0-.45-.556c-.22-.017-.441.062-.644.239a1.14 1.14 0 0 0-.256.282c-.018.035-.053.035-.053-.009.009-.362-.141-.573-.442-.582-.238-.01-.485.123-.68.273a5.704 5.704 0 0 0-.6.618c-.026.027-.043.027-.052-.026a1.343 1.343 0 0 0-.177-.645c-.044-.061-.124-.088-.194-.044-.035.018-.141.07-.23.133-.044.035-.053.08-.035.14.106.363.088.778-.062 1.122-.132.318-.397.609-.706.706-.203.062-.415.035-.547-.15-.177-.247-.106-.68.159-1.042.238-.317.574-.52.918-.644.044-.018.044-.044.035-.08a1.737 1.737 0 0 0-.062-.167c-.035-.08-.114-.097-.23-.088a1.923 1.923 0 0 0-.688.23c-.573.308-.865.908-.997 1.226-.062.15-.115.247-.177.335-.088.115-.203.221-.414.406-.018.018-.036.053-.018.089a.995.995 0 0 0 .159.212c.035.017.07-.01.088-.018a2.07 2.07 0 0 0 .406-.362c.027-.035.062-.018.08.035a.91.91 0 0 0 .573.618c.53.177 1.077-.08 1.492-.53.265-.282.362-.467.459-.59.168-.213.512-.69.91-.99.15-.114.317-.194.405-.14.07.044.097.15-.018.352-.406.75-1.015 1.625-1.12 1.845-.018.036 0 .062.035.062h.618c.035 0 .044-.018.061-.035.318-.495.61-.962.927-1.448.018-.026.036-.009.036.009a.925.925 0 0 0 .097.37.551.551 0 0 0 .476.265.9.9 0 0 0 .389-.079c.132-.053.238-.115.317-.168.045-.035.053.027.053.027-.07.388.018.856.406 1.041.468.23.98-.097 1.271-.38.027-.026.062-.026.062.036a.509.509 0 0 0 .15.335c.247.248.742.15 1.245-.238.318-.247.653-.6.953-.962.009-.018.018-.035 0-.062-.044-.044-.115-.106-.159-.15-.017-.017-.053-.009-.07 0-.31.291-.592.636-.989.91-.132.097-.353.167-.45.044-.035-.053-.035-.124 0-.212.132-.31 1.995-3.151 2.092-3.32.017-.026 0-.052-.035-.052zm-1.962 1.78c.048 0 .094.01.135.03.23.105.159.37.053.582-.009.018-.009.026-.009.044s.036.044.062.053c.009 0 .018.009 0 .035-.08.168-.15.265-.247.415a1.674 1.674 0 0 1-.318.344c-.185.16-.45.327-.662.212-.097-.053-.141-.185-.132-.291.008-.309.14-.618.388-.927.251-.308.52-.494.73-.496z" />
    </svg>
  );
});

Ford.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Ford;
