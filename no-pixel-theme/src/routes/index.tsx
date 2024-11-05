import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useKeyListener } from "~/hooks/useKeyListener";
import { useNuiEvent } from "~/hooks/useNuiEvent";
import { useVisibilityNuiStore } from "~/hooks/useNuiStore";
import Home from "~/pages/home";
import { fetchNui } from "~/utils/fetchNui";

export function Component() {
  const { value: visible, setValue } = useVisibilityNuiStore();
  const navigate = useNavigate();

  useKeyListener(["Escape", "Backspace"], () => {
    fetchNui("setVisible", !visible);
  });

  useNuiEvent("setPath", (path) => {
    navigate({
      pathname: path as unknown as string,
    });
  });

  useEffect(() => {
    setValue(true);
  }, []);

  return (
    <>
      {visible && (
        <>
          <div className="z-10 absolute w-screen h-screen">
            <Home />
          </div>
          <div className="bg-black/90 -z-10 h-screen w-screen"></div>
        </>
      )}
    </>
  );
}
