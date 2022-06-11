import * as React from 'react';

export type ReacttableProps = {
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

const Reacttable = React.forwardRef<SVGSVGElement, ReacttableProps>(function Reacttable(
  { color = 'currentColor', size = 24, title = 'reacttable', ...others },
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
      <path d='M16.738 1.263c.626 0 1.183.192 1.624.581.417.369.692.88.842 1.507.253 1.054.169 2.505-.222 4.398a1.105 1.105 0 01-.06.195c.712.187 1.347.395 1.906.626 1.352.559 2.301 1.264 2.817 2.158.313.542.427 1.12.31 1.696-.11.546-.415 1.04-.882 1.482-.784.745-2.08 1.396-3.91 2.002a1.1 1.1 0 01-.236.05c.201.729.343 1.4.424 2.013.193 1.452.056 2.629-.46 3.524-.314.543-.758.93-1.316 1.118-.528.177-1.107.16-1.725-.023-1.039-.308-2.253-1.106-3.696-2.39a1.1 1.1 0 01-.195-.228c-.516.521-1.013.966-1.491 1.335-1.16.894-2.247 1.364-3.28 1.364-.626 0-1.183-.19-1.624-.58-.417-.37-.692-.88-.842-1.507-.253-1.054-.169-2.506.222-4.398.016-.079.04-.154.072-.224-.687-.183-1.301-.386-1.844-.61C1.82 14.793.871 14.088.355 13.194c-.313-.542-.427-1.12-.31-1.697.11-.545.415-1.039.882-1.482.784-.744 2.08-1.396 3.91-2.002.071-.023.143-.039.215-.048a14.937 14.937 0 01-.403-1.936c-.193-1.452-.056-2.629.46-3.524.314-.543.758-.93 1.316-1.118.528-.177 1.107-.16 1.725.023 1.039.308 2.253 1.106 3.696 2.39.05.045.097.094.137.147.51-.515 1.002-.954 1.475-1.32 1.16-.893 2.247-1.364 3.28-1.364zM7.359 13.761a.342.342 0 00-.582.106c-1.284 3.436-1.554 5.806-.809 7.11.762 1.332 2.413.889 4.953-1.33l.077-.068.053-.059a.351.351 0 00-.016-.427 36.239 36.239 0 01-2.074-2.743 34.032 34.032 0 01-1.502-2.425l-.06-.106zm10.46 2.534l-.067.005c-1.169.206-2.29.352-3.363.437-.91.072-1.845.105-2.808.1h-.12l-.07.006a.343.343 0 00-.198.554C13.48 20.2 15.361 21.6 16.84 21.6c1.512 0 1.954-1.643 1.326-4.928l-.02-.1-.02-.066a.342.342 0 00-.374-.206zm-6.231-1.137H9.385l.252.44a.632.632 0 00.548.318h1.403v-.758zm3.087 0h-2.203v.758h1.403a.632.632 0 00.548-.317l.252-.441zM19 9.098a.355.355 0 00-.379.226 35.885 35.885 0 01-1.352 3.184 33.75 33.75 0 01-1.366 2.525l-.063.106-.03.064a.345.345 0 00.155.412.36.36 0 00.237.044c3.692-.595 5.92-1.543 6.687-2.846.784-1.332-.456-2.554-3.72-3.666l-.1-.033zm-11.118-.76l-.082.003c-3.692.595-5.92 1.543-6.687 2.846-.784 1.332.456 2.554 3.72 3.666l.1.033.069.016c.161.021.321-.07.379-.226a35.885 35.885 0 011.352-3.184 33.75 33.75 0 011.366-2.525l.063-.106.03-.064a.345.345 0 00-.155-.412.36.36 0 00-.237-.044zm3.707 5.051H8.37l.507.885h2.71v-.885zm4.102 0h-3.218v.885h2.71l.508-.885zm-4.102-1.768H7.862l-.073.128a.632.632 0 000 .628l.073.128h3.726v-.884zm4.61 0h-3.726v.884h3.726l.073-.128a.632.632 0 000-.628l-.073-.128zm-4.61-1.768h-2.71l-.508.884h3.218v-.884zm3.595 0h-2.711v.884h3.218l-.507-.884zm2.849-6.83c-.762-1.332-2.413-.889-4.953 1.33l-.077.068-.053.059a.351.351 0 00.016.427c.768.926 1.46 1.84 2.074 2.743.52.765 1.021 1.573 1.502 2.425l.06.106.04.058a.342.342 0 00.582-.106c1.284-3.436 1.554-5.806.809-7.11zm-6.444 5.188h-1.403a.632.632 0 00-.548.317l-.253.44h2.204v-.757zm2.287 0h-1.403v.757h2.204l-.253-.44a.632.632 0 00-.548-.317zM7.286 2.274c-1.511 0-1.953 1.642-1.326 4.928l.02.1.02.065c.06.146.214.235.375.207a35.507 35.507 0 013.363-.437 33.252 33.252 0 012.807-.1h.12l.07-.006a.343.343 0 00.198-.554c-2.286-2.802-4.168-4.203-5.647-4.203z' />
    </svg>
  );
});

export default Reacttable;
