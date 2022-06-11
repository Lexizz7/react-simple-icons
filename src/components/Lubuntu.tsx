import * as React from 'react';

export type LubuntuProps = {
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

const Lubuntu = React.forwardRef<SVGSVGElement, LubuntuProps>(function Lubuntu(
  { color = 'currentColor', size = 24, title = 'lubuntu', ...others },
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
      <path d='M12 0C5.373 0 .001 5.374.001 12.001c0 .154.003.307.009.46 3.832-2.705 10.368-7.163 11.987-7.28.537-.68 2.37-1.22 2.704-1.209l-.957 1.198s-.03 1.224-.388 1.462c3.34 2.233 4.944 10.262 5.626 15.126A11.98 11.98 0 0024 12.001C24 5.374 18.629 0 12 0zm-.593 10.842c-.899.027-2.743 2.712-4.825 5.588-1.001 1.382-2.035 2.823-2.988 4.134A11.96 11.96 0 0012 24c2.347 0 4.537-.672 6.386-1.837-1.423-4.35-4.128-11.299-6.897-11.315a.394.394 0 00-.082-.006zM4.679 11.94c-.823-.007-2.86.701-4.607 1.375.178 1.632.681 3.166 1.447 4.535.35-.53.716-1.077 1.08-1.61 1.386-2.038 2.729-3.838 2.413-4.21-.056-.062-.171-.09-.333-.09zm2.165 1.025c-.664.1-3.064 3.09-4.97 5.478.31.487.653.948 1.028 1.384 1.96-3.21 4.153-6.707 4.035-6.851a.16.16 0 00-.093-.011Z' />
    </svg>
  );
});

export default Lubuntu;
