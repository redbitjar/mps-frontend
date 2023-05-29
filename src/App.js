import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Navigate, Route, Routes } from "react-router";
import Main from "./pages/MainPage";
import GanttPage from "./pages/GanttPage";
import PertPage from "./pages/PertPage";
import "./styles.css";
import CustomAxiosSp01 from "./sample/pages/CustomAxiosSp01";
import CustomNode from "./pages/CustomNode";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/Gantt" element={<GanttPage />} />
        {/* <Route path="/Pert" element={<PertPage />} /> */}
        <Route path="/Pert" element={<CustomNode />} />
        <Route path="/" element={<Navigate replace to="/main" />} />
        <Route path="/sample" element={<CustomAxiosSp01 />} />
      </Routes>
    </div>
  );
}

export default App;
