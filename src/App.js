import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./components/class/game/Game";
import Result from "./components/functional/result/Result";
import Leaderboard from "./components/functional/leaderboard/Leaderboard";
import Home from "./components/hook/home/Home";
import Title from "./components/functional/title/Title";
import Footer from "./components/functional/footer/Footer";

//<Container />
function App() {
  return (
    
    <div className="App">
        <Title className={"title"} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/result" element={<Result />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
