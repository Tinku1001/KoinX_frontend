import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Diffinfo from "./components/Diffinfo";
import MayLike from "./components/MayLike";
import Getstarted from "./components/Getstarted";
import BreadCrumb from "./components/BreadCrumb";

function App() {
  const [paths, setPaths] = useState(["Cryptocurrencies", "Bitcoin"]);
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <BreadCrumb paths={paths} />
      <Main />
      <Diffinfo />
      <MayLike />
      <div className="hidden sm:block md:block">
        <Getstarted />
      </div>
    </div>
  );
}

export default App;
