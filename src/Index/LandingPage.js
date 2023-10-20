import React, { useState } from "react";
import { motion } from "framer-motion";
// import Data from '../Data'

import arrowRight from "../images/Arrow Right.svg";
import bitcoin from "../images/Illustration.svg";
import ethereum from "../images/Illustrations1.svg";
import barchart from "../images/Icon (4).svg";
import person from "../images/Icon (5).svg";
import earth from "../images/Icon (6).svg";
import smallbitcoin from "../images/logos_bitcoin.svg";
import smallethereum from "../images/Icon (7).svg";
import litecoin from "../images/Icon (8).svg";
import chart from "../images/Chart.svg";
import statistic from "../images/Statistic.svg";
import table from "../images/Table.svg";
import logo from "../images/Logo (3).svg";
import visa from "../images/Visa.svg";
import mastercard from "../images/Mastercard.svg";
import whitebitcoin from "../images/Bitcoin.svg";
import youtube from "../images/youtube 1.svg";
import twitter from "../images/twitter 1.svg";
import linkedin from "../images/linkedin 1.svg";
import instagram from "../images/instagram 1.svg";
import facebook from "../images/facebook-f 1.svg";

const bitcoinImg = {
  bgImg: `url("${bitcoin}")`,
};
const LandingPage = (props) => {
  // const api = Data();
  const [hover, setHover] = useState(false);
  const [hoverout, setHoverOut] = useState(!false);

  const handleHover = () => {
    if (hover === false) {
      console.log("a");
      setHover(true);
    } else {
      setHover(false);
      console.log("a");
    }
  };

  const handleHoverOut = () => {
    if (hover === true) {
      console.log("a");
      setHover(false);
    } else {
      setHover(true);
      console.log("a");
    }
  };

  return (
    <div className="bg-brandBlue  bg-bitcoin xl:bg-red-700 ">
      <div className="flex justify-between w-[90%] mx-auto ">
        <div className=" w-[50%] p-5 mt-24">
          <div className="bg-[#FFFFFF1A]  flex justify-between w-[370px] items-center rounded-full p-2 ">
            <button className="bg-white rounded-full w-[100px] p-2 font-bold">
              75% save
            </button>
            <p className="text-white pr-5">For the Black Friday weekend</p>
          </div>
          <h1 className="text-[64px] w-[37rem]  text-white text-left leading-[76px] font-bold my-7">
            Fastest & secure platform to invest in crypto
          </h1>
          <p className="text-white my-8 w-[400px]">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <button className="text-white bg-[#3671E9] flex rounded-full w-36 justify-between p-2 text-center">
            Try For Free <img src={arrowRight} alt="" />
          </button>
        </div>
        <div className="active mt-24"></div>
      </div>
      {/* <div className=" w-80 bg-red-500 flex ">
        <div className="w-[50%] text-left p-12  pl-16 ">
          <div className="   w-10/12  pl-0 relative right-[110%] ">
            <div className="bg-[#FFFFFF1A]  flex justify-between w-[350px] items-center rounded-full p-2 ">
              <button className="bg-white rounded-full w-[100px] p-2">
                75% save
              </button>
              <p className="text-white">For the Black Friday weekend</p>
            </div>

            <h1 className="text-[64px]  text-white text-left leading-[76px] font-bold my-7">
              Fastest & secure platform to invest in crypto
            </h1>
            <p className="text-white my-8 w-[400px]">
              Buy and sell cryptocurrencies, trusted by 10M wallets with over
              $30 billion in transactions.
            </p>
            <button className="text-white bg-[#3671E9] flex rounded-full w-36 justify-between p-2 text-center">
              Try For Free <img src={arrowRight} alt="" />
            </button>
          </div>
          <div className="active bg-gray-600">
            <div>ARSENAL</div>
          </div>
        </div>
      </div> */}
      <div className="text-white flex justify-between w-[80%]  mx-auto items-center mt-44">
        <div className="flex justify-between w-72  items-center">
          <img src={barchart} alt="" />
          <div className="text-left">
            <h1 className="text-[35px] font-bold ">30B$</h1>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>
        <div className="flex justify-between w-72 items-center">
          <img src={person} alt="" />
          <div className="text-left">
            <h1 className="text-[35px] font-bold ">10M+</h1>
            <p>Trusted Wallets Inverstor</p>
          </div>
        </div>
        <div className="flex justify-between w-70 items-center">
          <img src={earth} alt="" />
          <div className="text-left">
            <h1 className="text-[35px] font-bold ">195</h1>
            <p>Countries Supported </p>
          </div>
        </div>
      </div>
      <div className="bg-brandBlue h-[1000px]">
        <div className="flex justify-between text-white items-center w-[80%] mx-auto">
          <img src={ethereum} alt="" />
          <div className="text-left w-[41%]">
            <h2 className="font-bold text-[40px]">
              Why you should choose CRAPPO
            </h2>
            <p className="my-2 w-[390px]">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="bg-[#3671E9] rounded-full w-36  p-2 my-6 ">
              Learn More
            </button>
          </div>
        </div>
        <div className="text-white my-20 relative top-32">
          <h3 className="font-bold text-[40px]">Check how much you can earn</h3>
          <p className="w-[500px] mx-auto">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="bg-white w-[60%] h-[28%]  mx-auto p-8 text-left grid-rows-2  rounded-lg relative top-[130px] drop-shadow-md ">
          <div className="flex justify-between mb-8">
            <input
              className="border-b-2 border-solid border-black w-[500px] text-left outline-none"
              type="text"
              placeholder="Enter your hash rate"
            />
            <select
              className="border-b-2 border-black outline-none "
              name=""
              id=""
            >
              <option value="">TH/s</option>
              <option value="">BTC</option>
              <option value="">ETH</option>
              <option value="">LTC</option>
            </select>
            <button className="text-white bg-[#3671E9] rounded-full w-36 text-center p-2">
              Calculate
            </button>
          </div>
          <div className="mt-16">
            <h4 className="text-[16px] text-[#3671E9] font-bold">
              ESTIMATED 24 HOUR REVENUE:
            </h4>
            <h3 className="text-[32px] font-bold">
              0.055 130 59 ETH <span className="text-[#3671E9]">($1275)</span>
            </h3>
            <p>
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <h4 className="text-center font-bold text-black pt-64 text-[40px] w-[680px] mx-auto">
          Trade securely and market the high growth cryptocurrencies.
        </h4>
        <div className="flex justify-around mx-auto p-12 ">
          <div
            onClick={() => {
              handleHover();
              // setHover(true)
            }}
            className="grid-rows-4 gap-y-6 h-[400px] bg-white hover:bg-[#2B076E] hover:text-white  delay- transition-all w-[30%] p-6 items-center text-center align-middle rounded-xl "
          >
            <img
              className="text-center align-middle mx-auto"
              src={smallbitcoin}
              alt=""
            />
            <p className="my-6 font-bold text-[32px]">
              Bitcoin<sup>btn</sup>
            </p>
            <p className="font-[16px]">
              Digital currency in which a record of transactions is maintained.
            </p>

            <button
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
              className="mt-12 flex items-center bg-[#3671E9] p-2 rounded-full w-{hover? 62: 0} mx-auto justify-between font-[18px] text-white"
            >
              {hover ? "Start mining" : ""}
              <img className="w-12" src={arrowRight} alt="" />
            </button>
          </div>
          <div className="grid-rows-4  w-[30%] p-6 items-center text-center align-middle rounded-xl ">
            <img
              className="text-center align-middle mx-auto"
              src={smallethereum}
              alt=""
            />
            <p className="my-6 font-bold text-[32px]">
              Ethereum<sup>btn</sup>
            </p>
            <p className="font-[16px]">
              Digital currency in which a record of transactions is maintained.
            </p>
            <button className="mt-12 border-4 border-rgba(43, 7, 110, 0.20) rounded-[4rem]">
              <img className="w-12" src={arrowRight} alt="" />
            </button>
          </div>
          <div className="grid-rows-4  w-[30%] p-6 items-center text-center align-middle rounded-xl ">
            <img
              className="text-center align-middle mx-auto"
              src={litecoin}
              alt=""
            />
            <p className="my-6 font-bold text-[32px]">
              Litecoin<sup>btn</sup>
            </p>
            <p className="font-[16px]">
              Digital currency in which a record of transactions is maintained.
            </p>
            <button
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverOut}
              className="mt-12 flex items-center bg-[#3671E9] p-2 rounded-full w-{hover? 48: 0} mx-auto justify-between font-[18px] text-white transition delay-150 duration-300 ease-in-out font-bold "
            >
              <p className="">{hover ? "Start mining" : ""}</p>
              <img className="w-12 ml-{hover? 4: 0}" src={arrowRight} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-white p-12 bg-[#2B076E]">
        <h2 className="text-[30px] font-bold text-white">
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h2>
        <div className="flex justify-between items-center p-8">
          <div className="w-[400px]">
            <h2 className="text-[32px] font-bold">Invest Smart</h2>
            <p className="text-[16px] py-6">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <button className="text-white bg-[#3671E9] rounded-full w-36 text-center p-2 py-6">
              Learn More
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src={chart} alt="" />
          </motion.div>
        </div>
      </div>
      <div className="text-white p-12 bg-[#2B076E]">
        <div className="flex justify-between items-center p-8 flex-row-reverse">
          <div className="w-[400px]">
            <h2 className="text-[32px] font-bold">
              Grow your profit and track your investments
            </h2>
            <p className="text-[16px] py-6">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <button className="text-white bg-[#3671E9] rounded-full w-36 text-center p-2 py-6">
              Learn More
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src={statistic} alt="" />
          </motion.div>
        </div>
      </div>
      <div className="text-white p-12 bg-[#2B076E]">
        <div className="flex justify-between items-center p-8">
          <div className="w-[400px]">
            <h2 className="text-[32px] font-bold">Invest Smart</h2>
            <p className="text-[16px] py-6">
              Get full statistic information about the behaviour of buyers and
              sellers will help you to make the decision.{" "}
            </p>
            <button className="text-white bg-[#3671E9] rounded-full w-36 text-center p-2 py-6">
              Learn More
            </button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <img src={table} alt="" />
          </motion.div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#2B076E] to-[#0D0D2B]; ">
        <div className="bg-[#3671E9] flex justify-between w-[70%] mx-auto p-6 rounded-xl items-center">
          <div>
            <h1 className="font-bold text-[32px] text-white mb-2 mt-6">
              Start mining now
            </h1>
            <p className="text-white text-[16px] w-[250px] my-4">
              Join now with CRAPPO to get the latest news and start mining now
            </p>
          </div>
          <div className="pl-8">
            <input
              className="border-b-2 border-solid border-white w-[450px] text-left outline-none bg-[#3671E9] placeholder:text-white"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <button className="bg-white px-4 py-[5px] mt-6 rounded-full font-bold  place-items-center ">
            Subscribe
            {/* {api} */}
          </button>
        </div>
      </div>
      {/* {props.id.map((coins)=>{
        return(
          <div>
            <h1>{coins}</h1>
          </div>
        )
      })} */}
      {props.coins.map((coins) => {
        return <div key={coins.id}>
          <h1>{coins.id}</h1>
        </div>;
      })}
      <footer className="bg-[#0D0D2B]">
        <div className="bg-[#0D0D2B] text-white flex justify-between p-8 h-[300px]">
          <img className="w-44  self-start" src={logo} alt="" />
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-[20px]">Quick Link</h2>
            <p>Home</p>
            <p>Products</p>
            <p>About</p>
            <p>Features</p>
            <p> Contact</p>
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="font-bold text-[20px]">Resources</h2>
            <p> Download Whitepapper</p>
            <p>Smart Token</p>
            <p>Blockchain Explorer</p>
            <p>Crypto API</p>
            <p>Interest</p>
          </div>
          <div>
            <h3 className="font-bold text-[25px]">
              We accept following payment systems
            </h3>
            <div className="flex justify-between">
              <img src={visa} alt="" />
              <img src={mastercard} alt="" />
              <img src={whitebitcoin} alt="" />
            </div>
          </div>
        </div>
        <div className="flex justify-between p-6">
          <p className="text-white">©2021 CRAPPO. All rights reserved</p>
          <div className="w-[250px] flex justify-between">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
