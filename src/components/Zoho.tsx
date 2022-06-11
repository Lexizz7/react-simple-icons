import * as React from 'react';

export type ZohoProps = {
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

const Zoho = React.forwardRef<SVGSVGElement, ZohoProps>(function Zoho(
  { color = 'currentColor', size = 24, title = 'zoho', ...others },
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
      <path d='M19.838 14.351c-.203-.244-.306-.579-.306-1.009 0-.438.103-.779.305-1.024.202-.246.477-.368.833-.368.353 0 .625.122.828.368.202.245.305.586.305 1.024 0 .428-.103.763-.305 1.008-.203.244-.475.366-.828.366-.354 0-.628-.121-.832-.365zm-1.556-3.727h4.932v5.307h-4.932v-1.163l.148-.414a.17.17 0 0 0 .01-.084l-.158-1.214v-2.432zm.318 2.717c0 .307.051.593.155.857.104.265.257.503.46.713.19.196.408.345.652.445.245.1.513.15.804.15.28 0 .544-.05.788-.15.244-.1.465-.249.661-.445.205-.21.36-.447.465-.711.105-.264.157-.55.157-.859 0-.308-.052-.594-.157-.857a2.11 2.11 0 0 0-.465-.707c-.196-.2-.416-.35-.66-.452a2.037 2.037 0 0 0-.79-.152 1.953 1.953 0 0 0-1.456.604 2.044 2.044 0 0 0-.46.704 2.34 2.34 0 0 0-.154.86zm4.97-2.828v5.166l.43-.43v-5.233l-.43.497zm-4.56-.791l-.502.547h4.802l.478-.552-4.777.005zm-1.992.432l.303-.87-4.8.669-.063.21.15.593 4.41-.602zm.314.18l.239 1.682.374 2.637.136-.38-.576-4.436-.173.497zm-5.068 1.149l.097.043-1.935 4.391-4.28-1.93L8.08 9.596l4.184 1.886zm-.923 1.104c0-.262-.046-.518-.139-.77-.098-.266-.237-.495-.418-.685s-.4-.341-.658-.45a1.969 1.969 0 0 0-.776-.163h-.012a1.93 1.93 0 0 0-.784.176c-.27.117-.505.282-.704.493-.2.21-.362.464-.488.76a2.516 2.516 0 0 0-.207.976c0 .258.044.51.132.758a1.89 1.89 0 0 0 1.087 1.13c.253.108.511.162.772.162h.007c.263-.002.524-.058.782-.169a2.23 2.23 0 0 0 .711-.499c.202-.21.365-.464.49-.758a2.48 2.48 0 0 0 .205-.961zm5.993.29l.335 2.36-4.777.671-.505-3.56.37-.84c.002-.002 0-.005 0-.007a.175.175 0 0 0 .01-.108l-.072-.29 4.303-.587.336 2.36zm-.543 1.97a.874.874 0 0 0-.01-.127l-.504-3.432c-.023-.158-.077-.278-.164-.357a.37.37 0 0 0-.256-.094.537.537 0 0 0-.079.006.398.398 0 0 0-.297.182.494.494 0 0 0-.068.265c0 .039.003.08.01.123l.187 1.32-1.475.217-.187-1.32a.586.586 0 0 0-.162-.353.359.359 0 0 0-.253-.1.496.496 0 0 0-.071.006.418.418 0 0 0-.309.18.48.48 0 0 0-.069.266.8.8 0 0 0 .01.126l.505 3.433c.023.158.078.278.169.355.07.061.16.092.26.091a.59.59 0 0 0 .087-.006.375.375 0 0 0 .284-.182.504.504 0 0 0 .063-.258.851.851 0 0 0-.01-.125l-.206-1.357 1.475-.216.206 1.356a.56.56 0 0 0 .167.353.38.38 0 0 0 .259.094.525.525 0 0 0 .079-.006.392.392 0 0 0 .294-.18.492.492 0 0 0 .065-.26zm-4.458-3.724l-.277-1.103-4.262-1.95.343 1.161 4.196 1.893zM7.8 9.348l-.319-1.076-1.509 3.582.184 1.226L7.8 9.348zm2.01 2.072a1.12 1.12 0 0 0-.438-.096.957.957 0 0 0-.469.125c-.283.157-.515.442-.693.86a1.942 1.942 0 0 0-.173.752c0 .116.015.226.044.33.087.312.288.532.61.67.149.063.293.094.433.094a.962.962 0 0 0 .469-.124c.283-.156.512-.436.686-.845a2 2 0 0 0 .178-.772c0-.113-.014-.221-.042-.323-.085-.313-.284-.534-.604-.67zm-4.83.322l.518 3.41-4.739.742L0 11.245l3.912-.599.882-.135.187 1.231zm-.5 3.024a.485.485 0 0 0-.007-.084.365.365 0 0 0-.078-.177.357.357 0 0 0-.16-.106.75.75 0 0 0-.246-.035c-.09 0-.194.01-.311.03l-1.343.23c.014-.104.065-.24.156-.406a5.35 5.35 0 0 1 .448-.668l.155-.208c.025-.031.061-.078.107-.14.308-.403.498-.731.57-.989a2.07 2.07 0 0 0 .08-.562c0-.106-.008-.21-.026-.314a.855.855 0 0 0-.07-.234.331.331 0 0 0-.118-.14.451.451 0 0 0-.233-.048c-.083 0-.182.01-.299.03l-1.552.266c-.188.032-.327.088-.416.17a.33.33 0 0 0-.106.25.44.44 0 0 0 .007.08c.022.132.09.229.201.278a.57.57 0 0 0 .237.044c.063 0 .132-.007.207-.02l1.3-.219a.695.695 0 0 1-.038.307c-.04.108-.136.261-.29.457l-.2.249c-.35.424-.6.786-.753 1.087a2.35 2.35 0 0 0-.223.613 1.69 1.69 0 0 0-.036.337c0 .078.006.152.018.225a.92.92 0 0 0 .078.257.337.337 0 0 0 .133.148c.05.028.125.039.228.04.13 0 .305-.02.526-.058l1.409-.24c.25-.044.423-.103.523-.186a.327.327 0 0 0 .122-.264zm.663-4.563l-.02.109.599 3.944.14-.73L5.27 9.55l-.125.654zM5.07 8.706L.303 9.47.02 10.883l4.772-.73.277-1.446z' />
    </svg>
  );
});

export default Zoho;
