import * as React from 'react';

export type OpenbsdProps = {
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

const Openbsd = React.forwardRef<SVGSVGElement, OpenbsdProps>(function Openbsd(
  { color = 'currentColor', size = 24, title = 'openbsd', ...others },
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
      <path d='M13.695 1.653c-.202.47-.146 1.02-.293 1.509-.034.112-.146.452-.308.429-.333-.048-.16-.688-.545-.7l.12.934c-.577.073-.498-.829-.733-1.195-.27-.423-.335.192-.317.38.011.122.036.242.05.363.026.21.032.393.005.603-.552-.007-.35-.733-.754-.844l.03.874c-.612-.005-.89-.557-1.159-1.025-.112-.196-.261-.574-.53-.453.126.544.423 1.064.454 1.63.007.145-.13.516-.333.448-.469-.158-.406-1.008-.796-1.231-.08-.045-.204-.006-.29-.002 0 .45.198.996.356 1.418.034.09.129.41-.069.403-.353-.01-.441-.695-.8-.615.044.185.153.335.215.513.037.109.106.219.126.332.044.247-.269.267-.432.22-.384-.114-.66-.428-.935-.703-.076-.076-.277-.344-.404-.222-.141.135.136.373.215.464.234.271.488.589.6.935.049.148.058.36-.09.462-.146.1-.384-.083-.502-.16-.362-.239-.721-.654-1.176-.664l-.107.271.29.392.752.845-.875-.362c.035.229.583.506.475.742-.064.14-.38.142-.505.124-.446-.064-.762-.396-1.177-.515-.366-.105-.298.18-.09.343.072.057.141.117.211.177.125.108.245.219.362.336.183.183.343.378.513.573l-.875-.03v.06l.845.392-.151.603c-.244 0-.442-.067-.664-.163-.151-.066-.31-.175-.482-.163-.206.014-.328.202-.19.377.206.263.62.412.883.617.1.078.247.212.133.345-.225.264-.832-.074-1.128.013v.06c.275.161.839.253 1 .549.128.231-.232.756-.487.736-.227-.019-.436-.275-.603-.41-.401-.322-.83-.7-1.298-.923-.801-.38-1.597.226-2.232.622.081.256.402-.017.603.029.271.061.477.313.651.513.84.968 1.543 2.064 1.857 3.319.083.33.224.725-.023 1.021-.066.08-.165.09-.238.155-.055.05-.052.118.023.141.138.043.34-.021.475-.054.443-.107.949-.346 1.15-.78.125-.271.169-.797.48-.905.068.29.394.673.363.965-.029.259-.302.56-.461.751-.057.068-.193.217-.112.315.082.097.25-.112.3-.16.229-.216.73-.558.865-.062.118.432-.261 1.13-.45 1.509-.054.105-.297.435-.202.553.11.135.338-.218.387-.282.19-.249.856-.987 1.21-.722.431.324.282.555.119.994-.046.123-.216.433-.1.55.111.114.258.01.315-.098.104-.197.383-.78.661-.631.175.093.441.251.543.425.158.272.02.815-.022 1.111-.024.17-.207.702-.055.825.14.113.254-.228.296-.312.149-.295.32-.597.54-.845.08-.089.192-.237.327-.212.7.131-.015.829.273 1.185.058.072.215.067.3.083l.362-.935c.184.07.455.095.591.248.114.128.137.344.17.506.092.454.142.896.084 1.357.057.042.148.138.225.088.097-.062.11-.315.143-.42.106-.332.269-.65.42-.965.099-.207.37-.427.565-.142.2.292.12.804.246 1.138.32-.158.355-.825.362-1.147l.415.061.25.513.45 1.297c.234-.09.16-.538.187-.754.035-.293.103-.882.318-1.1.086-.087.258-.095.37-.137.129.312.199.666.354.965.06.116.198.242.337.17.133-.068.128-.224.111-.35-.042-.313-.113-.62-.138-.936.598-.042.95.441 1.325.845.145.155.271.362.485.422l-.31-.905-.172-.845c.217-.09.676-.534.905-.47.34.097.6 1.046 1.023.823.18-.095.088-.257.003-.383-.126-.188-.506-.639-.465-.874.03-.175.324-.379.494-.377.391.006 1.071.304 1.297.618l.272-.03c-.04-.54-.85-.787-.966-1.328a.404.404 0 01.004-.172c.086-.347.294-.195.51-.102.067.029.213.103.269.02.06-.091-.048-.212-.087-.289-.082-.156-.156-.337-.122-.513.282.074.455.242.694.4.056.038.18.131.251.08.075-.056-.036-.167-.071-.208-.106-.123-.432-.42-.4-.6.022-.122.227-.252.31-.335.276-.276.59-.556.815-.875h.03c.532.621 2.203.186 1.99-.754-.132.019-.256.123-.392.077-.594-.205-.45-1.157-1.116-1.163-.049-.62-.298-1.24-.599-1.78-.138-.247-.424-.473-.525-.725-.055-.14-.046-.36-.052-.512.349-.054.177-.407.05-.603-.142-.218-.292-.477-.475-.66-.226-.227-.562-.374-.533-.758.027-.357.642-.311.747-.633-.183.008-.363.053-.543.083-.449.075-.527-.076-.317-.475.183-.349.474-.613.73-.905.083-.093.336-.306.205-.441-.107-.112-.286.058-.377.119-.333.22-.705.384-1.086.502-.113.035-.448.166-.486-.035-.051-.272.463-.322.395-.628-.205.049-.61.374-.807.223-.238-.18.111-.643.149-.856.038-.216-.136-.224-.258-.09-.043.048-.081.1-.12.15-.07.087-.126.17-.17.271-.494-.288.44-.623.265-.89-.063-.095-.179 0-.235.05-.117.102-.558.61-.654.237-.106-.412.108-.908.22-1.297.028-.102.159-.376.032-.449-.185-.106-.266.253-.31.359a2.333 2.333 0 01-.615.839c-.086.077-.232.225-.36.19-.187-.051-.188-.57-.182-.728.003-.075.045-.205-.028-.26-.096-.071-.147.072-.16.14-.048.222-.186.856-.515.44-.298-.376.163-1.157-.444-1.315l-.332 1.056c-.398-.087-.31-.656-.211-.966l-.181-.06a3.303 3.303 0 01-.112.362c-.16.451-.375.539-.541.03-.127-.388-.082-.807-.145-1.207-.025-.159-.04-.32-.198-.392zm.03.905c.153.364-.008.82.237 1.176.25.364.716.168 1.02.397.108.081.022.256-.007.358-.1.347-.278.604-.465.905.655-.335.875-1.29.965-1.96h.03c-.026.596-.007 1.182 0 1.779.003.27-.037.582.272.633V4.46c.323.093.808.502 1.159.381.179-.061.342-.277.467-.411.094-.102.175-.212.244-.332h.03l-.12.965-.302-.06.663.473.261.226-.2.294-.875.636c.637-.094.958-.564 1.418-.935-.15.63-.491 1.262-.332 1.93h.03l.362-1.448c.274.13.37.476.633.633.383.228.919-.204 1.267-.331-.227.322-.57.548-.633.965l-.272-.12c.236.606.519 1.19.62 1.84.093.594-.024 1.183.016 1.78.02.275.133.517.179.784-.563.191-.666.98-1.207 1.236.043-.188.11-.377.11-.573 0-.14-.066-.282-.03-.422.073-.277.314-.508.412-.784.152-.43.05-.835-.009-1.267l.301.03-.758-1.177-.376-.573.139-.392c-.762.586-1.867 1.188-1.87 2.293l.271-.091.09.664-.422.06v.06c.353.1.722.149 1.056.306.244.114.514.265.682.479.56.71.112 1.818-.31 2.473-.213.33-.594.634-.734.996.382-.092.577-.457.792-.754.091-.127.17-.303.325-.362.24-.09.32.354.371.512.065.2.218.546.18.755-.071.401-.415.662-.34 1.116.166-.202.217-.604.482-.702.17-.062.347.095.513.12.36.053.73-.082.996-.326.285-.263.48-.686.408-1.083-.043-.24-.177-.476-.16-.724.012-.2.148-.362.22-.543.173-.427.152-.912-.257-1.189a.86.86 0 00-.362-.138c.033-.222.264-.706.53-.418.188.202.29.558.396.81.389.918.392 2.006-.163 2.865-.394.61-1.02 1.11-1.548 1.6l-.21-.604h-.061c-.07.36.185.772.332 1.086-.33-.075-.645-.415-.996-.362.099.17.748.572.242.754.003.148-.11.25-.2.362-.201.248-.454.618-.766.724l-.573-1.508h-.03c.084.661.314 1.305.61 1.9.154.307.403.611.506.935-.187-.159-.306-.413-.466-.603a6.313 6.313 0 00-.952-.892c-.227-.177-.45-.376-.754-.345.345.31.868.475.835 1.056-.01.165-.193.237-.322.296-.339.155-.67.322-1.026.438-.098.032-.279.12-.382.087-.11-.037-.097-.277-.109-.369-.037-.285.121-1.028-.172-1.146-.128 1.01.132 1.929.21 2.926h-.03c-.17-.737-.439-1.558-.838-2.202-.11-.177-.343-.597-.579-.543l.62 1.086.013.46-.452.08-1.297.033c.047-.373.13-.746.2-1.116.014-.081.074-.326-.078-.326-.14 0-.169.408-.189.507-.108.542-.204 1.106-.205 1.66h-.03c0-.913-.41-1.73-.784-2.535-.104.155.041.377.086.543.099.371.113.737.065 1.116-.612-.118-1.275-.278-1.84-.543.149-.357.576-.889.573-1.267-.554.556-.804 1.335-1.086 2.052h-.03l.12-1.448-.21-1.237c-.132.133-.06.399-.04.573.033.275.015.688-.188.9-.112.117-.226.014-.346-.034-.335-.136-.582-.36-.875-.564-.104-.072-.293-.15-.28-.302.032-.433.656-.638.672-1.026-.72.31-1.062 1.088-1.629 1.57.186-.785.782-1.703.634-2.535-.152.084-.145.295-.185.453a4.324 4.324 0 01-.388.965c-.4-.231-.72-.623-.983-.996-.073-.102-.233-.26-.235-.392-.002-.128.145-.274.225-.362.244-.265.54-.465.872-.603-.237-.147-.706.2-.965.272.175-.37.65-.732.513-1.177-.393.307-.66.97-.935 1.388h-.03l-.574-1.267.754.271c.023-.27-.36-.373-.573-.422.126-.328.476-.578.392-.965h-.06c-.087.28-.269.759-.573.844l-.09-.482h-.03c-.119.253.029.447-.04.687-.037.125-.217.106-.28.222-.085.158-.092.37-.164.539-.172.407-.5.706-.904.874l-.037-.54.459-.515-.483.361c-.062-.161-.203-.465-.12-.633.073-.145.254-.24.362-.362l-.483.241c-.163-.422.135-.3.302-.603-.122.07-.325.2-.471.133-.187-.085-.384-.64-.464-.827l.512-.09v-.03c-.242.03-.626.12-.663-.211h.633v-.03l-.712-.08-.194-.252-.421-.543c.251-.075.683-.075.935 0-.368-.387-1.024.182-1.327-.453l.754-.15v-.03c-.234 0-.67.135-.874.028-.054-.028-.094-.075-.134-.12-.388-.438.48-.478.766-.44.55.076.975.452 1.358.833.194.193.473.538.754.595.278.055.51-.122.724-.263 0 .212-.022.422.15.573 0-.416.005-.857.07-1.267.023-.152.083-.352.263-.38.225-.034.531.309.693.44.002-.234-.175-.432-.319-.603-.396-.47-1.025-.914-1.58-1.177v-.03c.823.142 1.442.625 2.322.392v-.06l-1.026-.15c.043-.321.276-.734.203-1.057-.1-.44-.568-.644-.746-1.025.306.118.63.29.966.297.188.005.336-.098.512-.14.485-.113.766.123 1.086.446.088-.305-.15-.559-.334-.784-.186-.229-.35-.46-.57-.659-.267-.24-.662-.52-.815-.85.25.049.49.256.694.402.359.255.715.503 1.116.691.211.1.578.265.754.054l-.965-.362c.07-.101.17-.188.221-.302.138-.307-.104-.568-.191-.844.185.068.345.227.543.26.464.078.734-.47 1.086-.653L9.11 6.45c.201-.168.112-.494.078-.724-.099-.664-.493-1.251-.59-1.9h.03c.381.816.835 1.696 1.598 2.201l-.277-.363-.477-.723c.095-.037.188-.077.269-.142.528-.423.078-1.012.002-1.517h.03c.065.155.14.314.235.453.441.638 1.023.536 1.696.482l-.18 1.328h.03c.089-.283.258-.516.318-.815.11-.544-.006-1.084-.017-1.629h.03c.048.322.179.63.282.936.162.482.293 1.01.653 1.387l-.331-1.357c.958-.001 1.219-.647 1.236-1.509zm-.271 2.082l-.483 2.172c.372-.227.45-1.053.483-1.448h.03c.065.348.096.696.238 1.025.056.13.117.305.275.302l-.386-1.357zm-2.956.392c.006.771.387 1.473.24 2.262.146-.088.15-.295.152-.452.004-.365-.06-.723-.06-1.086h.03c.105.364.39 1.09.814 1.146-.05-.196-.211-.344-.319-.513-.238-.374-.472-1.13-.857-1.357zm6.184.332c-.336.526-.736 1.245-1.237 1.629v.03c.38-.068.791-.549.905-.905h.03c-.005.536-.251 1.105-.03 1.629h.03c.16-.543.077-1.184.215-1.75.043-.177.203-.473.087-.633zM14.69 6.57c-.178.402-.265.775-.634 1.056v.06c.265.07.45-.262.513-.482h.03c.026.203.05.624.272.694l-.149-.694zm-6.456.03c.065.743 1.063 1.244.935 2.052.16-.094.119-.269.065-.423-.112-.317-.298-.596-.427-.905.289.264.716.562 1.117.393l-.633-.263zm4.163.242c-.091.3-.347.886-.241 1.176h.06l.211-.724h.03c.075.273.153.687.483.724l-.483-1.176zm-2.021.754l.15 1.267h.061l-.03-.905c.197.137.463.474.724.362-.1-.11-.247-.129-.362-.222-.187-.151-.286-.482-.543-.502zm6.636.18c-.318.32-.584.539-1.025.664v.061c.261.075.514-.07.724-.211-.035.177-.26.64-.09.754l.289-.875zm1.539.624c.138.01.242.186.323.282.239.279.508.575.612.935-.697-.144-1.452-.045-2.142.12.154-.405.446-.834.785-1.1.115-.092.258-.25.422-.237zm-6.697.07l-.181.936c.151-.115.187-.481.211-.664l.272.302a1.058 1.058 0 00-.302-.573zm2.956.091l-.573.573.543-.392.09.543c.106-.154.05-.578-.06-.724zm-6.334.078a.252.252 0 00-.06.013v.03c.253.256.463.61.621.935.088.179.063.376.253.483-.015-.353-.166-.62-.302-.935.214.124.5.31.754.24v-.06c-.342-.152-.607-.281-.905-.518-.11-.088-.224-.2-.361-.188zm-2.082.284c.029.255.237.35.422.49a3.5 3.5 0 01.687.657c.127.166.205.452.37.573-.036-.444-.298-.966-.725-1.147v-.03c.434.084.867.246 1.297.06v-.06l-.513-.02zm14.027.09c.296.115.613.522.724.815l-.664-.09zm-7.3.03l-.271.514.301-.332.181.302zm5.95.712a.536.536 0 01.172.031c.365.143.267.9.19 1.188-.061.234-.17.495-.4.604-.167-.3-.415-.496-.724-.64-.154-.073-.41-.101-.517-.243-.103-.137-.208-.646-.068-.78.152-.147.57-.117.766-.117.163 0 .392-.051.581-.043zm-3.054.013l-.513.392.453-.241-.06.362c.128-.09.175-.371.12-.513zm4.404.18c.136.011.37-.002.47.1.331.34.145 1.25-.259 1.44l-.12-.695c.032.002.062 0 .09-.003v.003h.09l-.04-.013c.356-.085.295-.577-.051-.59l-.09-.03.049.032-.018.001v-.003h-.06l.01.011c-.023.005-.046.01-.071.02zm-1.538.122c-.062.063-.152.11-.198.187-.318.545.886.559.546-.03-.039-.068-.108-.111-.167-.157l-.121.06h-.06zm-6.335.12c0 .154-.03.31.12.392v-.301l.363.12zm-1.676.086c-.046.002-.092.005-.134.005.053.194.137.36.302.482l-.181-.392.362.03c-.07-.127-.211-.131-.349-.125zm3.685.011c-.09.01-.168.168-.169.325l.15-.271.182.12c-.05-.132-.109-.18-.163-.174zm-4.845.084l-.513.09.423.513-.241-.422.361-.06zm-2.655.42c-.307.013-.66.365-.904.515v.06l.875.302c-.018-.229-.315-.297-.513-.331l.603-.544a.386.386 0 00-.06-.002zm1.6.063l-1.237.332v.06l.663.238.393.275c-.043-.32-.383-.375-.604-.543.28-.053.66-.058.785-.362zm3.107.332c-.129.02-.23.12-.091.21zm.995.18l-.03.212c.094-.056.11-.105.09-.211zm1.357 0c-.117.035-.214.118-.09.212zm1.117.302l-.302.09v.121zm1.146.03v.362c.113-.11.113-.25 0-.362zm4.272.179c.425.004.846.395.75.847-.062.29-.242.605-.528.718-.149.06-.486.04-.498-.175-.01-.2.388-.478.468-.694-.558.427-.9.79-1.659.694v-.03c.447-.331.634-.895 1.059-1.224a.645.645 0 01.408-.136zm-9.943.032c-.146.076-.235.236-.272.393l.362.09-.2-.193zm-4.585.061l-1.147.603c.04.225.262.104.423.093.23-.015.657.06.784.27l.211-.03c-.054-.342-.546-.342-.814-.363.197-.2.48-.259.543-.573zm5.822.241l-.332.423.422.15-.302-.18c.063-.132.31-.247.212-.393zm-2.625.09l-.362.333c.142.047.468.233.573.09l-.392-.15zm7.813 0l.422.333v.06l-.392.211a.938.938 0 00.543-.211.883.883 0 00-.573-.392zm-9.683.121c-.183.41-.464.743-.784 1.056-.184.179-.471.346-.543.603L7.45 13.8l.694-.14c-.414-.296-1.14.033-1.539.21.275-.55.813-.769.935-1.418l-.03-.03zm5.701.03c-.13.043-.146.149-.18.272l.18.03zm1.237.212l.03.332a.503.503 0 00.272-.332l-.212.15zm-4.193.422c-.13.038-.2.131-.06.211zm5.34.181l-.031.422-.271-.18c.028.182.156.27.332.3l.03-.542zm-6.758.03c-.22.069-.596.692-.694.905.2-.008.895.018.996-.12l-.664-.091zm3.7.059c-.166.01-.327.105-.502.105-.507 0-1.34-.252-1.775.092-.396.314-.42.734-.669 1.132-.121.194-.336.325-.512.465-.065.052-.184.127-.159.227.03.122.238.187.34.233.228.105.477.187.724.238.131.027.328.022.44.103.204.148.135.653.163.876.227-.13.524-.52.633-.755-.241.073-.347.31-.513.483l-.09-.633c.705-.062 1.015-.833 1.43-1.296.253-.282.57-.405.893-.575-.19-.227-.455.013-.634.15-.479.37-.755.816-1.176 1.238l.241-.633h-.03c-.131.314-.288.65-.603.814l.12-.422h-.03c-.127.303-.27.452-.603.452l.301-.694h-.03l-.392.664-.12-.03.301-.573h-.03c-.152.244-.313.59-.633.512l.27-.512c-.15.118-.216.4-.394.471-.081.032-.235-.027-.202-.135.042-.14.272-.278.363-.397.31-.405.56-1.067 1.018-1.316.376-.205.947.054 1.358.05.235-.004.503-.084.573-.333a.427.427 0 00-.072-.001zm-7.591.092l-.03.181.12-.181zm14.875.029c.228.004.48.037.61.214.133.18.101.427.17.632.052-.216.046-1.024.477-.57.349.367.256 1.162-.087 1.502-.216.213-.735.343-.992.144-.393-.303-.494-.926-.608-1.378-.027-.109-.154-.36-.084-.461.058-.086.209-.08.3-.082.065 0 .138-.002.214-.001zm2.65.182c.569.103.615.907 1.117 1.147v.06c-.285.143-.38-.002-.573-.211l.211.392c-.233-.036-.283-.262-.422-.423l.21.453c-.346 0-.493-.057-.633-.392h-.03l.06.271-.214-.152.114-.39zm-4.735.03c-.123.036-.188.105-.09.212zm-4.163.242l.332.362.15-.362-.15.241zm3.047 0l-.03.452-.302-.18c-.017.198.288.424.453.512l-.06-.784zm-8.175.512c-.094.452-.417.859-.707 1.207-.138.166-.35.333-.41.543.5-.144 1.063-.652 1.6-.603-.138-.268-.783.103-1.026.15.196-.29.463-.542.59-.874.052-.14.086-.327-.047-.423zm6.998.272c-.23.036-.218.264-.271.452-.128-.127-.258-.303-.452-.271l.573.694zm-2.805.03l-.302.272-.03-.151h-.09l.03.392c.176-.03.358-.347.392-.513zm.815.483l-.151.392h-.03l-.242-.332.211.694h.03c.08-.202.365-.572.182-.754zm3.348.18l-.09.031.18.995c-.192-.168-.785-.942-1.025-.663.555.177.786.825 1.267 1.116l-.15-.573zm1.508.242c-.153.374.22.775.362 1.116-.392-.202-.74-.539-1.207-.543v.12c.672.06 1.03.747 1.569 1.057-.005-.563-.488-1.21-.664-1.75zm-6.123.453l-.212.03c.072.169.197.306.256.482.065.196.023.466.227.573.095-.212.327-.557.271-.784-.17.085-.252.268-.27.453h-.031zm-2.806.03c0 .592-.08 1.148-.241 1.72.21.007.32-.211.433-.363.225-.299.45-.628.804-.784v-.03c-.359-.047-.807.49-.935.784h-.03c.106-.41.2-.924.03-1.327zm5.31.03c-.244.093-.182.42-.182.633l-.693-.482c.038.123.136.16.228.245.18.167.337.557.586.6zm1.538.573c-.213.377.097 1.154.15 1.569h-.03c-.168-.355-.492-.649-.754-.935-.037-.04-.228-.301-.296-.192-.071.114.278.385.343.463.241.286.459.609.642.935.105.189.197.44.397.543-.15-.778-.39-1.586-.392-2.383zm-10.045.302c.223.066.35.219.362.452l-.694.483zm5.007.24l-.03.031c.147.405.293.742.364 1.177.034.202.013.465.179.603.17-.322.23-.695.385-1.026.09-.19.234-.356.188-.573-.29.143-.461.787-.543 1.086-.15-.399-.104-1.092-.543-1.297zm2.051.303c.341.677.594 1.314.785 2.05.212-.118.183-.329.18-.542-.005-.497.186-.99.152-1.478-.143.048-.168.194-.193.332-.06.329-.06.669-.14.995-.163-.38-.293-1.279-.784-1.357zm6.365.24l.453.665-.664-.302zM8.657 19.18c.647.057.205.652-.06.935zm8.296.724l.272.845c-.224-.157-.488-.414-.604-.664zm-5.502.455l.344.058-.272.965h-.03l-.06-.754zm2.85.174c.062 0 .121.013.169.053.163.138-.067.805-.141.977l-.332-.965c.086-.022.2-.063.304-.065Z' />
    </svg>
  );
});

export default Openbsd;
