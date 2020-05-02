import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Apacheflink = forwardRef(function Apacheflink({ color = 'currentColor', size = 24, ...others }, ref) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <path d="M8.302 23.976c-.58-.044-1.34-.187-1.979-.372a9.06 9.06 0 0 1-2.944-1.511c-.368-.285-1.153-1.07-1.473-1.473C.716 19.121.11 17.49.05 15.622a8.333 8.333 0 0 1 .328-2.602c.068-.229.071-.255.057-.53a4.173 4.173 0 0 1 .1-1.116c.061-.244.23-.61.34-.742l.068-.08-.01.434c-.012.622-.011.623.187.275A8.388 8.388 0 0 1 2.84 9.11c.194-.176.369-.338.388-.359.019-.021.09-.178.159-.349.207-.514.392-.796.593-.898.175-.09.334-.044.371.104a.856.856 0 0 1-.007.217.727.727 0 0 0-.013.16c.005 0 .157-.079.339-.175.65-.347 1.115-.546 2.094-.892.323-.115.628-.225.676-.246.276-.116.425-.506.398-1.039a1.446 1.446 0 0 0-.102-.505 4.148 4.148 0 0 0-.122-.317c-.05-.098-.043-.115.038-.092.233.067.512.292.687.555.102.154.273.522.274.592 0 .056.036.03.113-.084.307-.454.309-.97.004-1.488-.111-.19-.429-.503-.645-.637-.277-.17-.444-.22-.74-.217-.229.002-.25-.002-.317-.057-.083-.07-.13-.219-.109-.343.025-.142.266-.6.431-.82.195-.26.636-.684.917-.884.912-.648 2.056-1.04 3.386-1.16.32-.03.332-.032.398-.103.062-.066.082-.073.22-.073.133 0 .17.012.319.097.157.091.173.096.239.066.05-.022.132-.027.28-.017.169.01.22.007.264-.024.077-.054.171-.047.31.024.067.033.264.093.438.13.819.182 1.477.436 2.103.815.111.067.206.122.211.122.009 0-.003-.088-.032-.246L16.39.9l.152.09c.2.12.38.307.479.496.069.133.085.15.121.127.029-.017.064-.019.11-.003.054.019.093.075.2.293.074.149.142.277.15.286.01.01.084-.058.167-.148.176-.192.337-.3.55-.373.2-.067.32-.053.41.048.09.1.09.23-.004.427-.18.38-.26.728-.23.994l.017.137.108-.076c.1-.07.122-.076.305-.076.192 0 .4.058.4.112 0 .012-.051.083-.113.159-.184.226-.23.353-.227.626.003.251.014.308.177.868.059.205.128.473.152.595a.87.87 0 0 0 .06.222c.04 0 .313-.226.478-.394.099-.1.187-.182.195-.182.033 0 .091.19.117.376.03.22.007.432-.073.692-.048.156-.049.17-.012.247.061.128.07.266.028.444-.07.302-.199.51-.533.858l-.172.18-.028.24c-.016.133-.05.332-.076.442a.9.9 0 0 0-.035.214c.007.007.029-.002.049-.019.053-.044.216-.019.378.058.333.158.972.741 1.222 1.116l.135.201.215.054c.884.224 1.572.866 1.952 1.823.12.3.204.683.264 1.186.019.154.06.29.18.589.085.213.168.447.183.519.042.193.018.442-.06.626-.037.086-.087.23-.113.32-.091.323-.239.533-.487.693-.08.051-.204.11-.277.13-.137.037-.599.25-.6.277-.001.008.032.022.073.03.22.044.509.252.582.42.015.035.073.123.129.197.213.28.265.537.188.943l-.04.213.062.076c.22.271.409.622.478.892.098.379.096.747-.005 1.303l-.044.235.08.116c.154.223.184.436.106.737-.194.752-.766 1.31-1.563 1.522l-.156.041v.208c0 .16-.012.234-.05.317a.66.66 0 0 1-.32.319c-.224.099-.558-.007-.722-.23-.082-.11-.089-.113-.208-.113a.817.817 0 0 1-.226-.037c-.248-.087-.362-.257-.368-.547l-.004-.168-.156-.094a2.384 2.384 0 0 1-.563-.457l-.15-.165.078.155c.336.667-.045 1.39-.846 1.604-.164.045-.289.053-.992.07-1.085.026-9.019.022-9.366-.005zm13.506-.401c.101-.088.143-.312.08-.433-.058-.115-.14-.15-.384-.17-.277-.02-.354-.06-.354-.178 0-.153.025-.16.64-.168.597-.008.777-.037 1.038-.17.23-.116.522-.478.549-.682l.013-.095-.165.047c-.625.175-1.467.207-2.083.079-.665-.14-1.28-.52-1.497-.926l-.054-.101-.03.07a1.26 1.26 0 0 0-.03.334c-.002.247.003.275.073.42.145.305.46.601.842.793.2.101.205.105.192.178l-.042.242c-.037.212-.016.326.081.437a.516.516 0 0 0 .404.175c.094 0 .152.014.192.045.206.16.421.202.535.103zm-5.004-.184c.464-.067.614-.069.863-.014.51.113 1.036.023 1.267-.218.152-.158.198-.41.104-.565-.116-.19-.42-.32-.756-.32-.234 0-.355.034-.764.208a3.774 3.774 0 0 1-.377.144c-.174.035-.265-.062-.265-.279 0-.232.065-.308.56-.66.427-.3.681-.647.744-1.01.028-.169-.003-.402-.061-.458a1.582 1.582 0 0 0-.295-.107c-.83-.244-1.212-.561-1.573-1.308a5.485 5.485 0 0 1-.35-.909 4.378 4.378 0 0 0-.152-.435c-.27-.595-.927-1.133-1.683-1.377-.32-.104-.523-.14-1.033-.184a14.72 14.72 0 0 1-.564-.057l-.12-.018.168-.086c.206-.104.356-.153.576-.185.314-.047.528-.055.757-.03.922.104 1.617.578 2.108 1.438.182.32.313.647.44 1.102.147.526.28.792.534 1.06.41.435.959.63 1.769.63.178 0 .4-.012.492-.025.378-.053.77-.188 1.06-.363.318-.191.614-.542.71-.84.029-.09.064-.165.078-.165.014 0 .104.018.2.04.164.039.188.039.386 0 .318-.06.403-.054.484.032.122.13.275.154.45.07a.555.555 0 0 0 .178-.15c.058-.08.07-.118.064-.207-.007-.107-.01-.11-.193-.23a1.342 1.342 0 0 1-.186-.132c0-.007.045-.043.101-.08.077-.05.125-.064.192-.058.103.009.104-.004.005-.197a.832.832 0 0 0-.402-.396c-.337-.164-.719-.164-1.145 0-.256.1-.295.101-.47.024-.231-.102-.466-.138-.785-.12-.392.024-.651-.017-.75-.118l-.073-.073.315-.029c.49-.045.632-.088 1.066-.327.268-.148.428-.188.83-.211.58-.033.855-.132 1.01-.363.055-.082.083-.106.108-.09a.636.636 0 0 0 .778-.486c.016-.084.012-.089-.238-.31a2.533 2.533 0 0 1-.255-.241c0-.01.039-.05.085-.092.143-.125.245-.104.534.108.05.037.054.037.054-.005 0-.095-.059-.25-.228-.61-.199-.42-.215-.47-.253-.804-.12-1.03-.675-1.892-1.542-2.395a2.065 2.065 0 0 0-.212-.115c-.009 0-.05.071-.093.158a1.23 1.23 0 0 1-.168.252c-.075.078-.107.095-.182.095-.106 0-.18-.055-.18-.133 0-.03.032-.123.072-.207.12-.259.155-.44.12-.645-.08-.478-.53-1.016-1.092-1.31-.22-.114-.245-.11-.259.031-.015.162.02.49.077.71.026.102.117.346.202.541.218.5.284.72.285.94a.732.732 0 0 1-.039.271.83.83 0 0 1-.282.32c-.083.043-.175.045-.157.004.127-.29.169-.431.179-.609.014-.25-.02-.365-.234-.804-.214-.439-.274-.68-.261-1.042l.01-.254-.058.115a6.699 6.699 0 0 1-.249.409c-.305.472-.403.726-.403 1.044 0 .294.114.704.278 1 .032.058.054.11.048.117a.57.57 0 0 1-.145-.116c-.134-.126-.325-.452-.325-.554 0-.068-.044-.055-.24.07-.365.235-.628.473-.975.885-.506.602-1.196 1.05-2.04 1.328-.198.065-.845.238-1.437.386-1.62.402-2.188.602-2.937 1.034-1.484.854-2.26 2-2.413 3.565-.054.56.023 1.409.184 2.017.025.091-.13-.112-.227-.3-.174-.333-.285-.744-.34-1.26-.05-.461.005-1.38.112-1.872l.015-.07-.357.015c-.886.037-1.618.288-2.217.76a2.451 2.451 0 0 0-.255.225l-.06.072.015-.07c.028-.127.17-.404.285-.555.24-.317.723-.62 1.227-.771.132-.04.537-.139.9-.22.364-.08.678-.152.7-.158.02-.006.09-.108.154-.226.064-.118.18-.303.257-.41.077-.109.136-.201.131-.206a3.854 3.854 0 0 0-.391.05c-.21.033-.674.098-1.03.145-.719.095-1.124.17-1.5.278-1.16.335-1.83.983-2.179 2.11l-.09.292.047.137c.075.223.33.72.5.972.663.99 1.704 1.793 2.981 2.299.29.114.324.135.474.283.089.087.158.162.154.166-.018.019-.754-.174-1.072-.28a6.756 6.756 0 0 1-2.114-1.146 2.898 2.898 0 0 0-.443-.284 5.35 5.35 0 0 1-1.402-1.033 2.975 2.975 0 0 1-.487-.672l-.103-.192.147.135c.32.294.783.595 1.012.659.052.014.05.005-.044-.161a5.613 5.613 0 0 1-.364-.787 1.602 1.602 0 0 0-.282-.492c-.747-.971-1.293-1.946-1.674-2.99l-.117-.323-.02.106a5.454 5.454 0 0 0-.025.539l-.004.432.14.385c.145.396.665 1.798.71 1.915.014.036.02.066.015.066-.005 0-.091-.104-.19-.23-.229-.288-.484-.67-.53-.793l-.037-.094.014.084c.074.448.273 1.12.466 1.573.586 1.376 1.55 2.583 2.722 3.407 1.142.803 2.692 1.367 4.063 1.478.132.01 2.083.021 4.335.023 3.518.002 4.13-.002 4.347-.034zm1.685-6.667a2.756 2.756 0 0 1-.76-.276c-.461-.27-.788-.742-.82-1.184-.01-.155-.01-.156.023-.073.208.529.61.955 1.163 1.233.254.128.394.18.69.257l.264.068-.216-.002c-.119-.001-.274-.011-.344-.023zm2.631-2.4c-.241-.058-.51-.273-.584-.47a.743.743 0 0 1 .02-.479l.038-.07.017.096c.044.24.214.446.457.554.072.032.256.08.41.107.229.04.376.083.465.136.007.004.014-.104.017-.239.005-.237.004-.244-.035-.186-.083.122-.2.216-.271.216-.095 0-.513-.152-.628-.228-.143-.094-.188-.186-.188-.383 0-.14-.009-.176-.054-.224l-.054-.058.114-.104c.19-.172.305-.216.57-.216.257 0 .367.04.547.193.256.22.342.757.193 1.204l-.055.164-.444.004a4.386 4.386 0 0 1-.535-.017zm.29-.85c.085-.043.135-.137.132-.248-.002-.069-.022-.105-.089-.167-.14-.129-.328-.092-.41.08-.108.228.139.454.368.336zm-2.035 8.588a2.086 2.086 0 0 1-.256-.599c-.08-.356-.008-.927.152-1.203l.06-.106-.2.015a5.06 5.06 0 0 1-.316.016H18.7v.177c0 .354-.164.786-.422 1.108l-.134.168.245.017c.134.009.316.038.405.065.18.055.404.192.529.323.1.105.118.112.051.019zm3.292-.84a.807.807 0 0 0 .417-.375c.086-.175.179-.638.196-.976.011-.215.005-.32-.027-.468-.04-.187-.184-.519-.273-.631l-.045-.057-.118.084c-.26.186-.467.215-.73.1-.128-.055-.2-.07-.398-.078l-.243-.01-.08.14a2.15 2.15 0 0 1-1.013.922l-.184.084-.017.128c-.068.525.283.887 1.052 1.084.402.103.536.118.955.111.318-.005.392-.013.508-.059zm-19.311-3.72c.22-1.066 1.028-1.779 2.4-2.12.343-.085.907-.196 1.933-.382 1.346-.243 1.761-.372 2.257-.703l.3-.2-1.266-.007c-1.552-.009-1.755.01-2.36.21-.383.128-.759.296-1.798.808-.494.244-.903.439-.908.434-.009-.01.374-.345.57-.498.642-.506 1.693-1.09 2.365-1.315 1.148-.384 2.03-.458 3.891-.325l.89.063.347-.086c.34-.085.688-.151 1.344-.257a4.31 4.31 0 0 0 .334-.061c.005-.005-.011-.016-.036-.025a1.502 1.502 0 0 1-.364-.181.996.996 0 0 1-.15-.11c0-.005.31-.006.69-.002.69.008.692.008.934-.058 1.502-.406 2.734-1.512 3.392-3.045.137-.32.376-1.003.358-1.022-.007-.007-.087.033-.178.088-.23.142-.72.384-1.005.498a7.14 7.14 0 0 1-2.207.498l-.214.016-.17.16c-.6.565-1.503 1.102-2.328 1.386-.46.158-.746.223-2.226.504-.733.139-1.565.302-1.85.361-2.068.435-3.391.979-4.106 1.689-.243.24-.374.427-.516.73-.072.154-.15.274-.263.4a2.032 2.032 0 0 0-.422.802c-.093.372-.051.916.108 1.381.056.166.203.507.218.507a.79.79 0 0 0 .036-.138zm-.82-.868l-.025-.366-.26-.39a21.757 21.757 0 0 1-.468-.737c-.19-.319-.63-1.166-.753-1.452l-.051-.12.013.096c.026.182.15.674.237.943.193.6.513 1.261.86 1.783.157.235.453.628.464.617a3.887 3.887 0 0 0-.016-.374zm-.01-1.4c-.076-.396-.04-.932.086-1.249.053-.135.163-.356.176-.356.005 0 .044.095.086.21.076.212.18.415.211.414.01 0 .059-.071.11-.158.05-.086.16-.248.244-.36l.154-.203-.095-.06c-.306-.193-.585-.636-.705-1.117-.117-.475-.153-1.2-.088-1.794.018-.162.028-.3.022-.306-.017-.016-.35.399-.558.692a7.86 7.86 0 0 0-.865 1.589l-.106.264.104.294a9.417 9.417 0 0 0 1.255 2.35 1.269 1.269 0 0 0-.03-.21zm1.469-1.875c-.07-.29-.1-.672-.1-1.351 0-.653.005-.75.056-1.033.067-.368.191-.793.304-1.038.083-.178.323-.592.337-.578.004.004-.023.237-.06.517-.108.806-.13 1.103-.113 1.568.019.533.114 1.2.172 1.2.023 0 .03-.113.028-.498a5.641 5.641 0 0 1 .24-1.76c.2-.698.622-1.618 1.01-2.196a.872.872 0 0 0 .08-.135c0-.008-.063-.005-.139.006-.922.141-1.671.76-2.045 1.69l-.093.23.01-.163c.032-.469.125-1.128.19-1.345.008-.024-.015.01-.05.074-.277.512-.54 1.976-.539 3.004 0 .753.134 1.297.406 1.658.128.17.336.271.306.15zm1.274-.919c.212-.104.503-.187 1.772-.507.555-.14 1.138-.296 1.297-.349a4.045 4.045 0 0 0 1.568-.944c.462-.444.617-.68.763-1.162.067-.223.067-.224.11-.168.185.245.182.832-.005 1.2-.026.05-.038.093-.027.093.05 0 .315-.196.426-.315.291-.311.426-.595.66-1.39a3.77 3.77 0 0 1 .12-.368c.021-.024.108.176.16.373.028.104.04.24.04.44-.003.329-.063.58-.214.879l-.086.17.128-.069c.31-.166.875-.858 1.116-1.367a1.83 1.83 0 0 0 .21-.887c.002-.425-.087-.704-.344-1.075-.336-.485-1.093-1.05-1.755-1.311-.102-.04-.168-.091-.284-.22-.083-.092-.14-.167-.126-.167.03 0 .472.12.77.209.705.21 1.258.52 1.684.942.493.488.727 1.001.724 1.586-.003.518-.185.988-.586 1.519-.078.102-.14.19-.14.197 0 .02.384-.152.624-.278.303-.16.792-.49.98-.658.261-.237.61-.82.76-1.272.145-.441.169-.936.063-1.345-.093-.361-.33-.777-.625-1.099l-.127-.138h.122c.066 0 .127-.01.134-.022.03-.048-.04-.15-.148-.219-.186-.118-.263-.128-.606-.085-.385.049-.999.05-1.296.001-.257-.042-.543-.132-.681-.214l-.094-.056.873-.012c.665-.01.921-.022 1.075-.052.223-.043.38-.103.432-.167.03-.036.023-.051-.06-.138-.268-.277-.767-.62-1.27-.875a6.067 6.067 0 0 0-2.787-.659c-.387 0-.86.04-1.068.089l-.06.014.072-.077c.094-.1.408-.254.64-.312.41-.104.979-.14 1.533-.1.774.058 1.33.2 2.077.532.158.07.308.127.333.125.06-.005.134-.074.171-.162l.031-.072.075.161c.041.09.075.173.075.188 0 .059.044-.007.072-.11a.347.347 0 0 1 .052-.121c.024-.016.087.125.166.37l.056.173.124-.123c.147-.145.151-.14.172.174l.013.208.11-.069c.062-.038.118-.06.126-.052.008.01.038.093.068.185.087.27.205.494.342.652.07.081.166.219.212.306.046.087.094.155.105.152.038-.012.204-.307.284-.502a.733.733 0 0 1 .094-.187c.033 0 .052.267.04.567a2.001 2.001 0 0 0 0 .297.97.97 0 0 0 .125-.084.692.692 0 0 1 .133-.084c.051 0-.061.75-.145.967-.032.08.035.04.191-.116.087-.086.158-.143.158-.126 0 .061-.141.586-.192.716a3.69 3.69 0 0 1-.156.324 2.98 2.98 0 0 0-.237.547l-.017.067.117-.08c.128-.088.19-.115.893-.391.621-.244.971-.413 1.112-.539.15-.134.233-.297.233-.46v-.124l-.069.094c-.132.181-.446.44-.736.61l-.096.056.075-.082c.318-.35.536-.836.537-1.202 0-.132-.034-.324-.076-.427-.031-.075-.032-.073-.21.363-.205.504-.4.908-.531 1.102-.194.286-.483.544-.658.588-.06.015-.064.012-.042-.03.041-.076.097-.321.122-.536.014-.112.03-.669.038-1.237.013-1.012.03-1.281.093-1.551.031-.133.031-.136-.072-.408a5.899 5.899 0 0 0-.168-.402c-.067-.134-.215-.34-.244-.34-.01 0-.07.12-.137.267l-.12.267-.012-.225c-.01-.18-.022-.24-.064-.298a1.697 1.697 0 0 0-.437-.385 5.05 5.05 0 0 0-.721-.36c-.057-.017-.057-.016-.04.112.009.07.023.155.03.186.014.055.01.057-.077.04a.728.728 0 0 1-.407-.234c-.061-.066-.117-.115-.124-.108a.939.939 0 0 0 .06.224c.038.117.066.218.06.224-.016.016-.182-.048-.254-.1a1.152 1.152 0 0 1-.187-.247 1.473 1.473 0 0 0-.22-.287c-.156-.133-.228-.15-.97-.227a1.392 1.392 0 0 1-.449-.11c-.036-.015-.034 0 .016.114.032.072.066.17.074.216l.016.084-.104-.02c-.16-.03-.355-.108-.534-.216-.158-.096-.169-.098-.451-.116a3.625 3.625 0 0 0-.98.065l-.18.044.18.02c.24.025.45.092.577.185.103.074.189.16.19.191 0 .008-.19.02-.425.027-.676.018-1.102.125-1.701.425-.3.15-1.124.682-1.328.856-.12.103-.339.392-.34.447 0 .03.046.054.175.09.97.279 1.577.984 1.697 1.97.087.709.074 1.148-.045 1.62-.183.725-.656 1.424-1.186 1.753-.195.121-.6.277-.721.278h-.068l.124-.136c.29-.317.5-.72.642-1.233.079-.285.087-.586.02-.812-.048-.163-.063-.165-.11-.017a2.59 2.59 0 0 1-.255.536c-.05.077-.387.432-.766.81-.862.856-1.223 1.301-1.56 1.919a5.181 5.181 0 0 0-.54 1.635c-.05.396-.037 1.068.021 1.068.01 0 .094-.037.188-.084zm11.427-3.6c.621-.209 1.103-.434 1.51-.703.294-.194.681-.575.9-.884.214-.304.525-.963.477-1.012-.027-.026-.45.134-.592.224-.153.098-.245.172-.698.561-.446.383-.535.448-.763.557-.238.115-.38.126-.532.04a.33.33 0 0 1-.098-.068c0-.007.044-.04.096-.072.104-.065.304-.258.285-.277a2.006 2.006 0 0 0-.31.158c-.812.463-1.238.85-1.308 1.192-.02.098.005.1.263.016.628-.205 1.372-.596 2.308-1.213.272-.179.406-.252.528-.287a.664.664 0 0 1 .174-.036c.03.03-.27.375-.513.592-.608.542-1.16.908-1.798 1.189-.16.07-.279.128-.265.128.014 0 .165-.046.336-.104zm.89-3.788c.256-.385.336-.674.37-1.33.032-.619.098-.988.265-1.47.04-.114.067-.21.062-.216-.025-.025-.266.291-.35.46-.24.487-.428 1.344-.517 2.36-.02.222-.036.413-.036.425 0 .042.1-.07.206-.23z" />
    </svg>
  );
});

Apacheflink.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Apacheflink;
