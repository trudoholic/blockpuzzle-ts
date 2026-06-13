import { useEffect, useRef } from "react";
import { store } from "./GameClient";
import React from "react";

import rotate from '../assets/rotate.ogg';
import move from '../assets/move.wav';
import clear from '../assets/clear.ogg';
import lvup from '../assets/lvup.ogg';
import landing from '../assets/landing.ogg';
import drop from '../assets/drop.ogg';
import gameover from '../assets/gameover.ogg';

const SoundEffects = () => {
  const sounds = useRef({
    rotate: useRef<HTMLAudioElement>(null),
    move: useRef<HTMLAudioElement>(null),
    clear: useRef<HTMLAudioElement>(null),
    lvup: useRef<HTMLAudioElement>(null),
    landing: useRef<HTMLAudioElement>(null),
    drop: useRef<HTMLAudioElement>(null),
    gameover: useRef<HTMLAudioElement>(null),
  });

  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    const move = sounds.current.move.current;

    // an audio context is needed in this case to play te move sound repeatedly correctly
    if (move) {
      const moveTrack = audioContextRef.current.createMediaElementSource(move);
      moveTrack.connect(audioContextRef.current.destination);
    }

    // unsub
    return store.subscribe((state, prevState) => {
      if (state.status === "started" && audioContextRef.current?.state === "suspended") {
        void audioContextRef.current.resume();
      }

      if (state.settings.fx && state.status !== prevState.status && state.status === "gameover") {
        void sounds.current.gameover.current?.play();
      }

      if (
        state.sound !== prevState.sound &&
        state.settings.fx &&
        state.status === "started" &&
        state.sound.fx !== "noop"
      ) {
        const soundFx = sounds.current[state.sound.fx].current;

        if (soundFx) {
          soundFx.currentTime = 0;
          soundFx.play();
          state.noopSound();
        }
      }
    });
  }, []);

  return (
    <>
      <audio ref={sounds.current.rotate} src={rotate}>
        Rotate sound Effect
      </audio>
      <audio ref={sounds.current.move} src={move}>
        Move sound Effect
      </audio>
      <audio ref={sounds.current.clear} src={clear}>
        Clear sound Effect
      </audio>
      <audio ref={sounds.current.lvup} src={lvup}>
        LevelUp sound Effect
      </audio>
      <audio ref={sounds.current.landing} src={landing}>
        Landing sound Effect
      </audio>
      <audio ref={sounds.current.drop} src={drop}>
        Drop sound Effect
      </audio>
      <audio ref={sounds.current.gameover} src={gameover}>
        Game over sound Effect
      </audio>
    </>
  );
};

export default React.memo(SoundEffects);
