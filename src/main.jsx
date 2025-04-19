import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlockScholars from "./BlockScholars";
import { MissionPage, StoryPage } from "./FullMissionAndStoryPages";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<BlockScholars />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);