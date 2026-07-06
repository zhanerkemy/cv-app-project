import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage/StartPage";
import InnerPage from "./pages/InnerPage/InnerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/resume" element={<InnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;