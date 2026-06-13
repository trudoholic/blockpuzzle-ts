import { storeFactory } from "../store";
import WelcomeDialog from "./WelcomeDialog";
import TopUI from "./TopUI";

export const { store, useGameStore } = storeFactory();

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
