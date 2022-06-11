import * as React from 'react';

export type BootsProps = {
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

const Boots = React.forwardRef<SVGSVGElement, BootsProps>(function Boots(
  { color = 'currentColor', size = 24, title = 'boots', ...others },
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
      <path d='M22.979 8.337c.201-.23.326-.516.326-.73 0-.143-.083-.234-.218-.234-.224 0-.493.276-.493.691a.848.848 0 0 0 .018.175c-.257.4-.524.807-.793 1.198a1.491 1.491 0 0 0-.292-.029c-.649 0-1.319.487-1.319 1.367a1.697 1.697 0 0 0 .114.632c-.555.633-1.044 1.044-1.375 1.044-.13 0-.208-.071-.208-.219 0-.158.076-.409.229-.758l1.91-4.228 2.062-.242.234-.489-1.993.067.346-.763-.776.092-.35.695-2.79.09-.501.995 2.917-.344-.587 1.165a2.636 2.636 0 0 0-1.086-.212 3.927 3.927 0 0 0-1.766.425 1.81 1.81 0 0 0-.792-.175c-.673 0-1.436.324-2.056.893-.126-.388-.39-.62-.778-.62-.454 0-.935.238-1.396.623-.276-.225-.673-.29-1.095-.132a2.802 2.802 0 0 0 .35-1.317c0-.781-.365-1.354-1.032-1.7a5.165 5.165 0 0 1 .723-.493 1.72 1.72 0 0 0-.233-.164 6.642 6.642 0 0 0-.942.473c-.42-.134-.922-.202-1.496-.202C5.18 5.911 2.66 7.45 2.66 9.35c0 .837.473 1.137.942 1.137.438 0 .866-.246 1.002-.544-.381-.078-.607-.408-.607-.827 0-1.481 1.792-2.774 3.63-2.774.412 0 .769.077 1.062.218-1.117.86-1.975 2.03-2.682 3.282a1.937 1.937 0 0 0-.298-.024c-.528 0-.91.224-.91.666 0 .298.194.554.494.739-.44.911-.822 1.822-1.19 2.652-.128-.252-.419-.416-.755-.416-.807 0-1.418.712-1.418 1.594 0 .575.233 1.125.636 1.566-.38.425-.796.676-1.28.69a.858.858 0 0 1-.452-.114c.38-.042.692-.325.683-.692-.008-.367-.314-.628-.734-.617a.793.793 0 0 0-.783.817c.017.695.608 1.062 1.38 1.044.667-.015 1.24-.253 1.75-.654a3.266 3.266 0 0 0 1.769.5c2.049 0 3.787-1.745 3.787-4.087 0-.93-.24-1.668-.599-2.231a4.598 4.598 0 0 0 1.705-1.06c.637-.63 1.11-.572 1.381-.403-1.057 1.097-1.916 2.867-1.916 4.056 0 .737.295 1.217.862 1.217 1.7 0 3.73-3.278 3.705-5.08.546-.605 1.276-.965 1.869-.965a1.186 1.186 0 0 1 .307.037c-1.329.94-2.157 2.547-2.157 3.782 0 .655.322 1.152.95 1.152 1.17 0 2.692-1.823 2.692-3.64 0-.559-.159-.978-.41-1.273a2.599 2.599 0 0 1 1.34-.392 2.11 2.11 0 0 1 .834.18l-1.172 2.323c-.272.568-.378.988-.378 1.293 0 .469.275.71.711.71.636 0 1.385-.59 2.132-1.436.323.4.826.579 1.242.579a2.215 2.215 0 0 0 .404-.039c-.314.397-.838.696-1.607.889l-10.17 2.548c-1.545.386-2.49 1.148-2.034 2.608.353-.29.987-.573 2.63-1.073l9.232-2.816c1.35-.411 2.207-1.38 2.572-2.356.628-.306 1.189-.89 1.189-1.7.001-.894-.749-1.429-1.021-2.078zm-16.16 2.322a2.241 2.241 0 0 1 .321.33 3.023 3.023 0 0 1-.503.062q.09-.197.182-.392zm-1.592-.214c0-.231.279-.27.577-.236q-.162.3-.314.604c-.167-.105-.263-.235-.263-.368zm-2.271 5.663c-.34-.317-.507-.727-.502-1.068a1 1 0 0 1 .12-.462.756.756 0 0 0 .693.418.903.903 0 0 0 .35-.071 10.415 10.415 0 0 1-.661 1.183zm1.403.511a2.317 2.317 0 0 1-.641-.086c1.053-1.185 1.84-3.085 2.697-4.993a4.882 4.882 0 0 0 1.013-.087c.172.363.277.805.277 1.331 0 1.723-1.266 3.835-3.346 3.835zm3.366-5.816a3.254 3.254 0 0 0-.7-.577c.608-1.251 1.284-2.432 2.13-3.335.287.297.443.702.443 1.186-.001 1.204-.796 2.262-1.872 2.726zm2.597 3.579c-.164 0-.246-.142-.246-.382 0-1.047 1.778-4.474 2.673-4.474.17 0 .246.142.246.388-.002 1.058-1.77 4.468-2.673 4.468zm4.588-.996c-.17 0-.245-.135-.245-.388 0-.81.72-2.513 1.877-3.511.128.213.186.482.187.763.005 1.34-1.224 3.136-1.82 3.136zm5.744-2.368a1.326 1.326 0 0 1-.032-.295c0-.523.373-.946.865-.946q.05 0 .096.004c-.317.446-.63.866-.931 1.237zm1.867.593a1.275 1.275 0 0 1-.763.252c-.385 0-.713-.159-.917-.432.387-.47.77-.997 1.13-1.533.42.236.592.782.592 1.276a2.15 2.15 0 0 1-.044.437zm.494-.6c-.015-.6-.315-1.175-.825-1.444.202-.308.396-.617.579-.917.191.39.477.813.477 1.368a2.214 2.214 0 0 1-.232.994z' />
    </svg>
  );
});

export default Boots;
