import React, { useEffect } from "react";
import Hero from "../layouts/home/Hero";
import TableGrid from "../layouts/home/TableGrid";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <Hero />
      <TableGrid />
    </main>
  );
};

export default Home;
