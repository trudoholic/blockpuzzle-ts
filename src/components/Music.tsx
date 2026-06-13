import { useEffect, useRef } from "react";
import { store } from "./GameClient";
import korobeiniki from './assets/korobeiniki.ogg'; // Import file if managed by Webpack/Vite

const Music = () => {
  const musicRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const music = musicRef.current;
    if (music) music.volume = 0.3;

    // unsub
    return store.subscribe((state, prevState) => {
      if (state.settings.music && state.status !== prevState.status) {
        if (music) {
          if (state.status === "started") {
            void music.play();
          }
          if (state.status === "paused") {
            music.pause();
          }
          if (state.status === "gameover") {
            music.pause();
            music.currentTime = 0;
          }
        }
      }
    });
  }, []);

  return (
    <audio ref={musicRef} src={korobeiniki} loop>
      Korobeiniki theme music
    </audio>
  );
};

export default Music;
