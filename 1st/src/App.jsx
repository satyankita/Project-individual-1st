import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Top from "./components/Top";
import Navbottom from "./components/Navbottom";
import HeroVideo from "./components/HeroVideo";
import Banner from "./components/Banner";
import TrendingCollection from "./components/TrendingCollection";
import MensAccessories from "./components/MensAccessories";
import CategoriesSection from "./components/CategoriesSection";
import TraditionalCollection from "./components/TraditionalCollection";
import Footer from "./components/Footer";


import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");

  return (

    <div>

      <Top />

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Navbottom />

      <HeroVideo />

      <TrendingCollection search={search} />
      <Banner />

      <CategoriesSection search={search} />

      <TraditionalCollection search={search} />
      <Footer />

      

      

    </div>
  );
}

export default App;