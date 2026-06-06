import "./App.css";
import Products from "./Product";
import About from "./About";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />

      <Routes>
        <Route path="/" element={<Products search={search} />} />
        <Route path="/product" element={<Products search={search} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;