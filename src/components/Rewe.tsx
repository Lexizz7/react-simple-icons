import * as React from 'react';

export type ReweProps = {
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

const Rewe = React.forwardRef<SVGSVGElement, ReweProps>(function Rewe(
  { color = 'currentColor', size = 24, title = 'rewe', ...others },
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
      <path d='M16.597 12.45h.025l.579-3.166c.066-.36.214-.488.63-.488h.58c.307 0 .481.118.481.395 0 .064-.009.135-.026.216l-1.278 5.285c-.078.357-.195.512-.635.512h-.696c-.396 0-.51-.138-.598-.495l-.799-3.449h-.015l-.807 3.455c-.081.363-.195.49-.588.49h-.697c-.449 0-.56-.145-.642-.497l-1.269-5.3c-.016-.082-.036-.153-.036-.216 0-.278.18-.396.49-.396h.69c.417 0 .57.126.635.488l.575 3.167h.015l.738-3.167c.085-.362.233-.488.63-.488h.653c.391 0 .543.126.63.488l.735 3.167zM.498 15.205c-.349 0-.498-.144-.498-.496V9.3c0-.355.15-.503.498-.503h1.835c1.984 0 2.736.747 2.736 2.02 0 .776-.42 1.425-1.35 1.75l1.467 2.025c.089.124.125.22.125.306 0 .205-.24.307-.508.307H3.72c-.32 0-.444-.126-.669-.49l-1.206-1.931h-.019v1.926c0 .353-.15.495-.51.495H.498zm19.479 0c-.35 0-.485-.127-.485-.478V9.285c0-.362.136-.49.485-.49h3.251c.356 0 .486.127.486.489v.462c0 .347-.13.478-.486.478h-1.867v1.061h1.583c.358 0 .484.13.484.49v.426c0 .348-.126.477-.485.477H21.36v1.095h2.143c.363 0 .497.133.497.49v.463c0 .351-.134.478-.497.478h-3.526zm-13.411 0c-.351 0-.498-.144-.498-.496V9.3c0-.355.147-.503.498-.503h3.211c.354 0 .504.149.504.503v.429c0 .347-.15.496-.504.496H7.928v1.06H9.49c.36 0 .511.146.511.507v.388c0 .35-.15.499-.51.499H7.927v1.094h2.131c.356 0 .51.146.51.512v.423c0 .352-.154.495-.51.495H6.566zM2.351 11.68c.557 0 .793-.234.793-.743s-.236-.745-.793-.745h-.526v1.488h.526Z' />
    </svg>
  );
});

export default Rewe;
