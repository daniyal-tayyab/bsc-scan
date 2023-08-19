import { Route, Routes } from "react-router-dom";

import HeaderHome from "./layouts/Header/HeaderHome";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <HeaderHome />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
