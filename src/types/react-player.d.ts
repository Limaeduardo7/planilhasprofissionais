declare module 'react-player' {
  import { ComponentType } from 'react';

  interface ReactPlayerProps {
    url: string;
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    light?: boolean;
    volume?: number;
    muted?: boolean;
    playbackRate?: number;
    width?: string | number;
    height?: string | number;
    style?: object;
    progressInterval?: number;
    playsinline?: boolean;
    pip?: boolean;
    className?: string;
    [key: string]: any;
  }

  const ReactPlayer: ComponentType<ReactPlayerProps>;
  export default ReactPlayer;
} 