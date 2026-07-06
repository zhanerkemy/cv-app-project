import { BrowserRouter, Routes, Route } from "react-router-dom";

import StartPage from "./pages/StartPage/StartPage";
import InnerPage from "./pages/InnerPage/InnerPage";
import EditPage from "./pages/EditPage/EditPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/resume" element={<InnerPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;