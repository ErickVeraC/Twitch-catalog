import React, { useState } from "react";
import GamesCataloge from "./components/GamesCataloge";
import NavBar from "./components/NavBar";
import ReccomendChannels from "./components/ReccomendChannels";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex">
      <div className="fixed top-0 left-0 w-full z-10">
        <NavBar />
      </div>
      <div
        className={`flex-none transition-all duration-300 ${
          isCollapsed ? "w-16" : "w-64"
        }`}
      >
        <ReccomendChannels isCollapsed={isCollapsed} onToggle={handleToggle} />
      </div>
      <div className="flex-grow ml-auto pt-20 px-6">
        <GamesCataloge />
      </div>
    </div>
  );
}

export default App;
