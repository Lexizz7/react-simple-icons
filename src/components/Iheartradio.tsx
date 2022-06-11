import * as React from 'react';

export type IheartradioProps = {
  /**
   * Hex color or color name
   */
  title?: string;
  /**
   * The size of the Icon.
   */
  color?: string;
  /**
   * The title provides an accessible short text description to the SVG
   */
  size?: string | number;
};

const Iheartradio = React.forwardRef<SVGSVGElement, IheartradioProps>(function Iheartradio(
  { color = 'currentColor', size = 24, title = 'iheartradio', ...others },
  ref,
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color}
      viewBox='0 0 24 24'
      ref={ref}
      {...others}
    >
      <title>{title}</title>
      <path d='M4.403 21.983c.597 0 1.023-.306 1.023-.817v-.012c0-.489-.375-.784-1.017-.784H3.182v1.613zm-1.67-1.8c0-.125.102-.228.221-.228h1.489c.488 0 .88.148 1.13.398.193.193.307.472.307.784v.011c0 .654-.443 1.034-1.062 1.154l.988 1.272c.046.051.074.102.074.164 0 .12-.114.222-.227.222-.091 0-.16-.05-.21-.12l-1.12-1.453H3.183v1.346a.228.228 0 01-.228.227.227.227 0 01-.221-.227v-3.55m6.674 2.29l-.914-2.035-.915 2.034zm-2.812 1.164l1.614-3.528c.056-.125.142-.2.284-.2h.022c.137 0 .228.075.279.2l1.613 3.522a.31.31 0 01.029.113c0 .12-.097.216-.216.216-.108 0-.182-.074-.222-.165l-.415-.914H7.402l-.415.926c-.04.097-.113.153-.216.153a.204.204 0 01-.204-.204.26.26 0 01.028-.12m6.078-.118c1.005 0 1.647-.682 1.647-1.563v-.011c0-.88-.642-1.574-1.647-1.574h-.932v3.148zm-1.38-3.335c0-.125.102-.228.221-.228h1.16c1.249 0 2.112.858 2.112 1.977v.012c0 1.119-.863 1.988-2.113 1.988h-1.159a.226.226 0 01-.221-.227v-3.522m4.481-.029c0-.124.103-.227.222-.227.125 0 .227.103.227.227v3.579a.228.228 0 01-.227.227.227.227 0 01-.222-.227v-3.579m5.027 1.801v-.011c0-.904-.659-1.642-1.568-1.642s-1.556.727-1.556 1.63v.012c0 .903.659 1.642 1.567 1.642.91 0 1.557-.728 1.557-1.631zm-3.59 0v-.011c0-1.097.824-2.057 2.033-2.057 1.21 0 2.023.949 2.023 2.045v.012c0 1.096-.824 2.056-2.034 2.056s-2.022-.949-2.022-2.045m2.03-17.192c0 1.397-.754 2.773-2.242 4.092a.345.345 0 01-.458-.517c1.333-1.182 2.01-2.385 2.01-3.575v-.016c0-.966-.606-2.103-1.38-2.588a.345.345 0 11.367-.586c.97.61 1.703 1.974 1.703 3.174zM14.76 7.677a.345.345 0 11-.337-.602c.799-.448 1.336-1.318 1.339-2.167a2.096 2.096 0 00-1.124-1.855.345.345 0 11.321-.611 2.785 2.785 0 011.493 2.46v.011c-.004 1.09-.683 2.199-1.692 2.764zm-2.772-1.015a1.498 1.498 0 11.001-2.997 1.498 1.498 0 01-.001 2.997zm-2.303.882a.345.345 0 01-.47.133c-1.009-.565-1.688-1.674-1.692-2.764v-.01a2.785 2.785 0 011.493-2.461.346.346 0 01.321.611 2.096 2.096 0 00-1.124 1.855c.003.849.54 1.719 1.34 2.166a.345.345 0 01.132.47zM7.464 8.825a.344.344 0 01-.488.03C5.49 7.536 4.734 6.16 4.734 4.763v-.016c0-1.2.732-2.564 1.703-3.174a.346.346 0 01.367.586c-.774.485-1.38 1.622-1.38 2.588v.016c0 1.19.677 2.393 2.01 3.575a.345.345 0 01.03.487zM16.152 0c-1.727 0-3.27.915-4.164 2.252C11.094.915 9.55 0 7.823 0A4.982 4.982 0 002.84 4.983c0 1.746 1.106 3.005 2.261 4.17l4.518 4.272a.371.371 0 00.626-.27V9.827c0-.963.78-1.743 1.743-1.745a1.745 1.745 0 011.742 1.745v3.328c0 .326.39.493.626.27l4.518-4.272c1.155-1.165 2.261-2.424 2.261-4.17A4.982 4.982 0 0016.152 0M4.582 14.766h1.194v1.612h1.532v-1.612H8.5v4.307H7.308v-1.637H5.776v1.637H4.582v-4.307m6.527 2.353a.563.563 0 00-.578-.587c-.308 0-.55.238-.578.587zm-2.264.305v-.012c0-.972.696-1.741 1.68-1.741 1.15 0 1.68.842 1.68 1.82 0 .075 0 .16-.007.24H9.971c.093.364.357.549.72.549.277 0 .498-.105.738-.34l.647.536c-.32.406-.782.677-1.447.677-1.045 0-1.784-.695-1.784-1.729m7.29-1.68h1.17v.67c.19-.454.498-.75 1.051-.725v1.23h-.098c-.609 0-.954.351-.954 1.12v1.034h-1.168v-3.329m2.95 2.295v-1.353h-.393v-.942h.393v-.842h1.17v.842h.775v.942h-.775v1.126c0 .234.105.332.32.332.153 0 .301-.043.442-.11v.916c-.209.117-.485.19-.812.19-.7 0-1.12-.307-1.12-1.1m-15.65-3.584a.62.62 0 100 1.24.62.62 0 000-1.24m10.502 3.952c-.303.013-.483-.161-.483-.371 0-.203.16-.307.454-.307h.667v.036c-.004.137-.06.617-.638.642zm1.746-1.008c0-1.033-.739-1.729-1.784-1.729-.665 0-1.126.271-1.447.677l.647.536c.24-.234.461-.34.738-.34.359 0 .621.182.716.537l.001.025-.77.003c-.956.013-1.458.37-1.458 1.045 0 .65.464.999 1.262.999.432 0 .764-.17.987-.401v.32h1.106v-1.628l.002-.032V17.4M3.458 15.99h-.043a.61.61 0 00-.61.61v2.474h1.263v-2.474a.61.61 0 00-.61-.61' />
    </svg>
  );
});

export default Iheartradio;
