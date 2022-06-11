import * as React from 'react';

export type BurgerkingProps = {
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

const Burgerking = React.forwardRef<SVGSVGElement, BurgerkingProps>(function Burgerking(
  { color = 'currentColor', size = 24, title = 'burgerking', ...others },
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
      <path d='M15.39 12.614c-.72 0-1.11.538-1.11 1.215v1.508c0 .125-.043.182-.12.182-.056 0-.098-.035-.147-.133l-.971-1.885c-.37-.72-.755-.887-1.196-.887-.734 0-1.14.552-1.14 1.243v4.314c0 .678.392 1.215 1.112 1.215.72 0 1.112-.537 1.112-1.215v-1.507c0-.126.042-.182.119-.182.055 0 .097.035.146.133l.972 1.885c.37.719.769.886 1.195.886.735 0 1.14-.551 1.14-1.242v-4.315c0-.677-.391-1.215-1.111-1.215zm-4.02-.405c.364 0 .68-.286.68-.642 0-.238-.099-.412-.224-.572-.203-.266-.385-.496-.476-.74-.02-.056-.007-.105.056-.154.217-.167.469-.537.469-1.124 0-.886-.734-1.389-1.622-1.389h-.79c-.553 0-.819.321-.819.754v3.114c0 .419.245.754.692.754.448 0 .693-.335.693-.754v-.74c0-.09.042-.133.111-.133.084 0 .112.049.126.133.063.356.23.837.42 1.082.237.314.46.411.685.411zm-1.146-2.666h-.098c-.119 0-.175-.07-.175-.161v-.474c0-.09.056-.16.175-.16h.098c.294 0 .385.208.385.39 0 .174-.091.405-.385.405zm-3.761 2.666c1.132 0 1.734-.677 1.734-1.528V8.328c0-.419-.245-.754-.692-.754-.448 0-.693.335-.693.754v2.276c0 .167-.097.363-.35.363-.251 0-.335-.196-.335-.363V8.328c0-.419-.252-.754-.7-.754-.447 0-.691.335-.691.754v2.353c0 .852.594 1.528 1.727 1.528zm12.011-.034c.392 0 .7-.23.7-.65 0-.412-.308-.642-.7-.642h-.63c-.118 0-.174-.07-.174-.16v-.133c0-.091.056-.161.175-.161h.482c.336 0 .602-.202.602-.559 0-.355-.266-.558-.602-.558h-.482c-.12 0-.175-.07-.175-.16V9.04c0-.091.056-.161.175-.161h.629c.392 0 .7-.23.7-.65 0-.411-.308-.642-.7-.642h-1.321c-.553 0-.818.321-.818.754v3.079c0 .432.265.754.818.754h1.321zm2.642 3.127h-.342c-.615 0-1.09.286-1.09.914 0 .573.517.845.901.845.189 0 .322.056.322.202 0 .182-.224.3-.462.3-.79 0-1.328-.537-1.328-1.535 0-1.11.734-1.515 1.3-1.515.692 0 .804.349 1.287.349a.927.927 0 0 0 .936-.915.95.95 0 0 0-.398-.788c-.427-.315-1.07-.545-1.979-.545-1.629 0-3.216 1.026-3.216 3.414 0 2.282 1.587 3.35 3.153 3.35 1.643 0 2.685-1.012 2.685-2.492 0-.935-.587-1.584-1.769-1.584zm-12.43-2.688c-.783 0-1.21.587-1.21 1.32v4.132c0 .734.427 1.32 1.21 1.32.783 0 1.21-.586 1.21-1.32v-4.132c0-.733-.427-1.32-1.21-1.32zm11.494-.405c.447 0 .692-.335.692-.754v-.74c0-.09.042-.132.112-.132.084 0 .111.049.125.133.063.355.231.837.42 1.082.238.314.461.412.685.412.363 0 .678-.286.678-.643 0-.237-.098-.412-.224-.572-.237-.3-.384-.496-.475-.74-.02-.056-.007-.105.056-.153.217-.168.469-.538.469-1.124 0-.887-.735-1.39-1.623-1.39h-.79c-.552 0-.817.321-.817.754v3.114c0 .419.244.753.692.753zm.615-3.301c0-.09.056-.161.175-.161h.098c.293 0 .384.21.384.391 0 .175-.09.405-.384.405h-.098c-.12 0-.175-.07-.175-.16zm-18.87 3.267h.986c.93 0 1.496-.622 1.496-1.397 0-.621-.37-.907-.454-.977-.035-.028-.07-.056-.07-.084 0-.035.021-.048.056-.09.133-.154.266-.398.266-.754 0-.838-.567-1.285-1.448-1.285h-.832c-.552 0-.817.321-.817.754v3.079c0 .433.265.754.817.754zm.413-3.386c0-.09.056-.16.175-.16h.09c.301 0 .392.209.392.39 0 .168-.09.405-.391.405h-.091c-.12 0-.175-.07-.175-.16zm0 1.634c0-.091.056-.161.175-.161h.126c.335 0 .433.223.433.426 0 .181-.098.44-.433.44h-.126c-.12 0-.175-.07-.175-.161zm11.878 1.794c1.098 0 1.79-.699 1.79-1.718 0-.649-.391-1.096-1.174-1.096h-.224c-.413 0-.734.196-.734.636 0 .39.342.58.601.58.133 0 .217.041.217.139 0 .125-.147.21-.315.21-.524 0-.88-.37-.88-1.062 0-.768.489-1.047.866-1.047.462 0 .539.238.86.238.37 0 .623-.308.623-.629a.669.669 0 0 0-.266-.544c-.294-.217-.706-.377-1.321-.377-1.084 0-2.14.712-2.14 2.36 0 1.576 1.056 2.31 2.097 2.31zm-8.718 3.762a.354.354 0 0 1-.07-.188c0-.077.042-.133.126-.21.196-.181.678-.635.944-1.047.202-.314.286-.6.286-.837 0-.607-.552-1.082-1.153-1.082-.385 0-.748.216-.993.614-.329.53-.72 1.145-.972 1.39-.063.062-.098.076-.146.076-.084 0-.12-.056-.12-.146v-.699c0-.684-.405-1.235-1.139-1.235-.74 0-1.14.551-1.14 1.235v4.3c0 .685.399 1.237 1.14 1.237.734 0 1.14-.552 1.14-1.236v-.991c0-.084.035-.147.119-.147.111 0 .14.112.167.168.161.384.63 1.2 1.063 1.682.294.32.657.524 1.042.524.65 0 1.196-.566 1.196-1.173 0-.377-.161-.657-.469-.991-.392-.427-.853-.986-1.021-1.244zm15.751 6.702C19.432 23.707 16.313 24 12 24c-4.313 0-7.432-.293-9.25-1.32-1.09-.614-1.642-1.451-1.642-2.052 0-.342.181-.537.587-.537h20.61c.406 0 .587.195.587.537 0 .6-.552 1.438-1.643 2.053zm1.056-15.917H1.695c-.406 0-.587-.209-.587-.586C1.108 3.944 4.47 0 12 0c7.46 0 10.892 3.944 10.892 6.178 0 .377-.181.586-.587.586Z' />
    </svg>
  );
});

export default Burgerking;
