import { storeFactory } from "../store";
import Button from "./Button";
import WelcomeDialog from "./WelcomeDialog";

// const { store, useGameStore } = storeFactory();
const { useGameStore } = storeFactory();

function GameClient() {
  const music = useGameStore((state) => state.settings.music);
  const fx = useGameStore((state) => state.settings.fx);
  const toggleMusic = useGameStore((state) => state.toggleMusic);
  const toggleFx = useGameStore((state) => state.toggleFx);
  const buttonStatus = (on: boolean) => (on ? "On" : "Off");

  return (
    <>
      <h1 className="text-3xl">
        Hello world!
      </h1>
      <div>
        <Button className="first:mr-4" onClick={toggleMusic}>
          Music {buttonStatus(music)}
        </Button>
        <Button onClick={toggleFx}>Sound FX {buttonStatus(fx)}</Button>
      </div>
      <WelcomeDialog/>
    </>
  )
}

export default GameClient
