import { Route, Routes } from "react-router-dom";

import HeaderHome from "./layouts/Header/HeaderHome";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <HeaderHome />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
