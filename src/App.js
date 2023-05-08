import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { Navigate, Route, Routes } from "react-router";
import Main from "./pages/MainPage";
import GanttPage from "./pages/GanttPage";
import PertPage from "./pages/PertPage";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/Gantt" element={<GanttPage />} />
          <Route path="/Pert" element={<PertPage />} />
          <Route path="/" element={<Navigate replace to="/main" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
