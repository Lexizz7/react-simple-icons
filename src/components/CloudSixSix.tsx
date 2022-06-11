import * as React from 'react';

export type CloudSixSixProps = {
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

const CloudSixSix = React.forwardRef<SVGSVGElement, CloudSixSixProps>(function CloudSixSix(
  { color = 'currentColor', size = 24, title = 'cloud66', ...others },
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
      <path d='M11.985.317C7.0865 2.716 2.9666.4233 2.9666.4233 1.1064 3.486.216 6.1747 0 8.5272h23.9992c-.2165-2.3514-1.1074-5.0365-2.9665-8.0966 0 0-4.119 2.2905-9.0185-.1073zM5.2196 3.5273c.424 0 .7456.0853.8906.1594l-.1666.6417a1.7877 1.7877 0 0 0-.6865-.1334c-.6485 0-1.152.3871-1.152 1.1823 0 .7157.4282 1.1666 1.1572 1.1666.2464 0 .5202-.0537.6813-.1166l.124.6312c-.1505.0747-.4882.1594-.9282.1594-1.248 0-1.8916-.7751-1.8916-1.7927 0-1.2197.879-1.8979 1.9718-1.8979zm6.3144 0c1.1093 0 1.7145.8217 1.7145 1.8083 0 1.1717-.7179 1.8823-1.7739 1.8823-1.072 0-1.6989-.8006-1.6989-1.8187 0-1.071.6917-1.8719 1.7583-1.8719zm7.8091.0323c.6859 0 1.131.1226 1.4792.3823.3754.2757.6114.7149.6114 1.3458 0 .6837-.2517 1.1562-.6 1.4479-.3808.3125-.9594.4604-1.6666.4604-.424 0-.7244-.026-.928-.0521V3.6336c.2996-.048.6913-.074 1.104-.074zM7.003 3.5867h.8198v2.8947H9.258v.6781H7.003zm7.1779 0h.8208V5.643c0 .615.235.9281.6531.9281.4293 0 .6646-.2972.6646-.928V3.5866h.8156v2.003c0 1.103-.5638 1.6282-1.5073 1.6282-.9109 0-1.4468-.4988-1.4468-1.6385zm-2.6718.5823c-.5504 0-.8708.5212-.8708 1.2166 0 .7013.332 1.1958.877 1.1958.55 0 .8646-.5212.8646-1.2166 0-.6432-.3097-1.1958-.8708-1.1958zm7.9206.0104c-.1824 0-.301.0163-.3708.0323v2.3437c.0698.016.1825.0156.2843.0156.7398.0053 1.2219-.3987 1.2219-1.2541.0053-.744-.4336-1.1375-1.1354-1.1375zM.0052 9.7886c-.281 10.276 11.9798 13.8881 11.9798 13.8881l.0292.0063S24.281 20.0688 23.9951 9.7886h-.001zm10.7684 1.2802a5.5849 5.5849 0 0 1 .326.0083v1.4125c-.2117 0-.4367 0-.7364.024-1.6853.1333-2.434.967-2.6457 1.8842h.0375c.3989-.3983.9613-.628 1.7228-.628 1.36 0 2.5083.93 2.5083 2.5603 0 1.5583-1.2358 2.8384-2.9958 2.8384-2.1588 0-3.2196-1.557-3.2196-3.429 0-1.4736.5618-2.706 1.4353-3.4916.8112-.7125 1.8592-1.099 3.1322-1.1593a5.5849 5.5849 0 0 1 .4354-.0198zm6.9269 0a5.5849 5.5849 0 0 1 .327.0083v1.4125c-.2117 0-.4367 0-.7364.024-1.6853.1333-2.434.967-2.6457 1.8842h.0375c.3989-.3983.9613-.628 1.7228-.628 1.36 0 2.5072.93 2.5072 2.5603 0 1.5583-1.2352 2.8384-2.9947 2.8384-2.1593 0-3.2196-1.557-3.2196-3.429 0-1.4736.5618-2.706 1.4353-3.4916.8112-.7125 1.8592-1.099 3.1322-1.1593a5.5849 5.5849 0 0 1 .4344-.0198zm-8.8477 4.0061c-.512 0-.9356.301-1.1228.7-.0496.096-.075.2423-.075.4593.0373.8336.449 1.5823 1.3103 1.5823h.0125c.6614 0 1.0854-.5928 1.0854-1.3896 0-.7253-.3992-1.352-1.2104-1.352zm6.928 0c-.512 0-.9357.301-1.123.7-.0495.096-.075.2423-.075.4593.0374.8336.4491 1.5823 1.3105 1.5823h.0125c.6613 0 1.0853-.5928 1.0853-1.3896 0-.7253-.3992-1.352-1.2103-1.352Z' />
    </svg>
  );
});

export default CloudSixSix;
