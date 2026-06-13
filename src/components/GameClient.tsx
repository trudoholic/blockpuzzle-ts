import { storeFactory } from "../store";
import WelcomeDialog from "./WelcomeDialog";
import TopUI from "./TopUI";

// const { store, useGameStore } = storeFactory();
export const { useGameStore } = storeFactory();

function GameClient() {

  return (
    <>
      <TopUI/>
      <h1 className="text-3xl">Hello world!</h1>
      <WelcomeDialog/>
    </>
  )
}

export default GameClient
