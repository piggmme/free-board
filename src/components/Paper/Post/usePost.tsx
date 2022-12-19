import { useMode } from "../../../store/mode";
import { v4 as uuidv4 } from "uuid";
import { POST } from "../../../types/post";
import { useLayers } from "../../../store/layers";
import { useCanvas } from "../../../store/canvas";

export default function usePost() {
  const { mode, setMode } = useMode();
  const { canvas } = useCanvas();

  const {
    layers,
    setLayer,
    findLayer,
    bringLayerFront,
    bringLayerBack,
    sendLayerStep,
    addLayer,
    removeLayer,
  } = useLayers();

  const handleAddPost = (e: React.MouseEvent<HTMLDivElement>) => {
    if (mode !== "POST") return;
    const id = uuidv4();
    const newPost = {
      id,
      width: 200,
      height: 200,
      contents: "",
      createdAt: new Date().toDateString(),
      userId: "testUserId",
      style: {
        color: "black",
        background: "yello",
      },
    };

    addLayer({
      id,
      layerInfo: {
        id,
        position: {
          x: e.pageX,
          y: e.pageY,
        },
        type: "POST",
        postInfo: newPost,
      },
    });
    setMode("NONE");
  };

  return {
    handleAddPost,
  };
}
