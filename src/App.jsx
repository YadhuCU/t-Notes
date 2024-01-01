import { Route, Routes } from "react-router-dom";
import "./App.css";
import Archive from "./pages/Archive";
import Home from "./pages/Home";
import Trash from "./pages/Trash";
import AllFolders from "./pages/AllFolders";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div className="grid">
      <Sidebar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/archive"} element={<Archive />} />
        <Route path={"/trash"} element={<Trash />} />
        <Route path={"/folders"} element={<AllFolders />} />
      </Routes>
    </div>
  );
}

export default App;
