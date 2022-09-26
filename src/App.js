import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/Container";

import "./assets/styles/index.css";
import Admin from "./pages/Admin";
import Association from "./pages/Association";
import Home from "./pages/Home";
import NewMessage from "./pages/NewMessage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:association_slug" element={<Association />} />
            <Route path="/new-message" element={<NewMessage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
