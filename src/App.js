import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import ImageEditor from "./screens/ImageEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="editor" element={<ImageEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
