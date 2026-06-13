import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { useGameStore } from "./GameClient";
import Controls from "./Controls";
import Links from "./Links";
// import { Close, Content, Overlay } from "./Dialog";
import Button from "./Button";
import { useEffect } from "react";

const MenuDialog = () => {
  const open = useGameStore((state) => state.menu);
  const openMenu = useGameStore((state) => state.openMenu);
  const music = useGameStore((state) => state.settings.music);
  const fx = useGameStore((state) => state.settings.fx);
  const toggleMusic = useGameStore((state) => state.toggleMusic);
  const toggleFx = useGameStore((state) => state.toggleFx);

  useEffect(() => {
    const musicStorage = localStorage.getItem("music");
    const fxStorage = localStorage.getItem("fx");

    if (musicStorage === "false") {
      toggleMusic(false);
    }
    if (fxStorage === "false") {
      toggleFx(false);
    }
  }, [toggleFx, toggleMusic]);

  useEffect(() => {
    localStorage.setItem("music", music.toString());
    localStorage.setItem("fx", fx.toString());
  }, [music, fx]);

  const handleClick = () => {
    openMenu(!open);
  };

  const buttonStatus = (on: boolean) => (on ? "On" : "Off");

  return (
    <Dialog.Root open={open} modal onOpenChange={handleClick}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <div className="absolute top-8 left-8 bg-zinc-800 text-zinc-500">
            <VisuallyHidden.Root>
              <Dialog.Title>Menu</Dialog.Title>
              <Dialog.Description>Menu</Dialog.Description>
            </VisuallyHidden.Root>
            <div className="mb-4 flex justify-between">
              <div>
                <Button className="mr-4" onClick={toggleMusic}>Music {buttonStatus(music)}</Button>
                <Button className="mr-4" onClick={toggleFx}>Sound FX {buttonStatus(fx)}</Button>
              </div>
              <Dialog.Close>Close</Dialog.Close>
            </div>

            <Controls />
            <Links />

            <h2 className="text-lg mb-4">Have fun!</h2>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default MenuDialog;
