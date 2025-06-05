import ChallengeOne from "./Challenges/ChallengeOne";
import ChallengeTwo from "./Challenges/ChallengeTwo";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/one" element={<ChallengeOne />} />
        <Route path="/two" element={<ChallengeTwo />} />
      </Routes>
    </div>
  );
}

export default App;
