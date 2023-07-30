
// import "./App.css";

// function App() {
//   return (
//     <>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;
// import React from "react";
// import ReactDOM from "react-dom";
import Home from "./pages/Home";
import Setup from "./pages/Setup";
import Quiz from "./pages/Quiz";
import BestScores from "./pages/BestScores";
import { Route, Routes } from "react-router";
// import { useGlobalContext } from "./context";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/bestscores" element={<BestScores />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
