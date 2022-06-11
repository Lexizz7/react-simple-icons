import * as React from 'react';

export type AzureartifactsProps = {
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

const Azureartifacts = React.forwardRef<SVGSVGElement, AzureartifactsProps>(function Azureartifacts(
  { color = 'currentColor', size = 24, title = 'azureartifacts', ...others },
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
      <path d='M5.2 0c-.552 0-1 .43-1 .958V11.5h15.6V.958c0-.529-.448-.958-1-.958H5.2zm3.2 2.3h2.4c.331 0 .6.257.6.575a.588.588 0 0 1-.6.575H8.4a.588.588 0 0 1-.6-.575c0-.318.269-.575.6-.575zM1.064 12C.476 12 0 12.448 0 13v10c0 .552.476 1 1.064 1H8.8a1 1 0 0 1-1-1v-8h-3a.6.6 0 1 1 0-1.201h3V12H1.064z M23 12H8.299v11c0 .552.477 1 1.064 1H23a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1zm-9.8 10.2H9.6V21h3.6v1.2zm2.4-1.8h-6v-1.2h6v1.2zM15 15h-2.4a.6.6 0 0 1 0-1.201H15A.602.602 0 0 1 15 15z' />
    </svg>
  );
});

export default Azureartifacts;
