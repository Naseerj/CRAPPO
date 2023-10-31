import { useState, useEffect } from "react";


import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Index/LandingPage";
import Navbar from "./Navbar";
import Data from "./Data";

function App() {

  const [api, setApi] = useState([]);


  const url =  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'

  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setApi(result);
    console.log(result[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  return (
    <div className="App">
      <Navbar/>
      <LandingPage coins={api} />
      {/* <Data /> */}
      
    </div>
  );
}

export default App;
