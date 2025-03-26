import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import ImageEditor from "./screens/ImageEditor";
import TamilNewyear from "./screens/TamilNewyear";
import GoodFriday from "./screens/GoodFriday";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="tamil-new-year" element={<TamilNewyear />} />
        <Route path="good-friday" element={<GoodFriday />} />
        <Route path="editor" element={<ImageEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
