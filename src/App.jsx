import GamesCataloge from "./components/GamesCataloge";
import NavBar from "./components/NavBar";
import ReccomendChannels from "./components/ReccomendChannels";

function App() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
        <NavBar />
      </div>
      <div className="col-span-3">
        <ReccomendChannels />
      </div>
      <div className="col-span-9">
        <GamesCataloge />
      </div>
    </div>
  );
}

export default App;
