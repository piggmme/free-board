import reactLogo from "./assets/react.svg";
import Paper from "./components/Paper/Paper";
import Toolbar from "./components/Toolbar/Toolbar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import useYLayers from "./hook/useYLayers";
import Loading from "./components/common/Loading";

function App() {
  const { isLoading } = useYLayers();

  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Paper />
        <Toolbar />
        {isLoading ? <Loading /> : null}
      </DndProvider>
    </div>
  );
}

export default App;
