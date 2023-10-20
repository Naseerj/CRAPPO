import React, { useEffect, useState } from "react";

const Data = () => {
  const [api, setApi] = useState([]);

  const test = 'WORKING'

  const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en"


  const fetchData = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setApi(result);
    console.log(result[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // return  { api }
  
};


export default Data;


    //   {
    //      {api.map((datum) => {
    //     const { id, current_price, market_cap_change_24h } = datum;
    //     return (
    //       <div className="" key={id}>
    //         <div>{current_price}</div>
    //       </div>
    //     )
    //   })}
    // }