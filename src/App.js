import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/index.css";
import Association from "./pages/Association";
import Home from "./pages/Home";
import GetMsg from "./pages/GetMsg";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/associations/:slug" element={<Association />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
