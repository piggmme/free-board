import { useEffect } from "react";
import { useMode } from "../../store/mode";
import { MODE } from "../../types/mode";
import PencilButton from "./Button/PencilButton";
import PostButton from "./Button/PostButton";

export default function Toolbar() {
  const { mode, setMode } = useMode();

  return (
    <div className="fixed top-20 left-10 w-20 bg-white shadow-md p-10 rounded-full flex flex-col gap-3 items-center">
      <PostButton
        isActive={mode === "POST"}
        onClick={() => {
          setMode("POST");
        }}
      />
      <PencilButton
        isActive={mode === "PENCIL"}
        onClick={() => {
          setMode("PENCIL");
        }}
      />
    </div>
  );
}