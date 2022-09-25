import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Association from "./pages/Association";
import Home from "./pages/Home";
import NewMessage from "./pages/NewMessage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:association_slug" element={<Association />} />
          <Route path="/new-message" element={<NewMessage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
