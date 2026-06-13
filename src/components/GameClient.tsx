import { storeFactory } from "../store";
import WelcomeDialog from "./WelcomeDialog";
import TopUI from "./TopUI";
import GamePad from "./GamePad";

export const { store, useGameStore } = storeFactory();

function GameClient() {

  return (
    <>
      <GamePad/>
      <TopUI/>
      <h1 className="text-3xl">Hello world!</h1>
      <WelcomeDialog/>
    </>
  )
}

export default GameClient
