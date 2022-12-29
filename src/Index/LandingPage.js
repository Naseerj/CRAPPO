import React from "react";
import arrowRight from "../images/Arrow Right.svg";
import bitcoin from "../images/Illustration.svg";
import ethereum from "../images/Illustrations1.svg";
import barchart from "../images/Icon (4).svg";
import person from "../images/Icon (5).svg";
import earth from "../images/Icon (6).svg";
import smallbitcoin from "../images/logos_bitcoin.svg";
import smallethereum from '../images/Icon (7).svg'
import litecoin from '../images/Icon (8).svg'
import chart from '../images/Chart.svg'
const LandingPage = () => {
  return (
    <div className="bg-brandBlue w-82 bg-bitcoin">
      <div className="w-[50%] text-left p-6  pl-16 ">
        <div className="bg-[#FFFFFF1A]  flex justify-between w-[350px] items-center rounded-full p-2">
          <button className="bg-white rounded-full w-[100px] p-2">
            75% save
          </button>
          <p className="text-white">For the Black Friday weekend</p>
        </div>

        <h1 className="text-[64px]  text-white text-left leading-[76px] font-bold my-7">
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
      <div className="text-white flex justify-between w-[80%]  mx-auto items-center">
        <div className="flex justify-between w-72  items-center">
          <img src={barchart} alt="" />
          <div className="text-left">
            <h1 className="text-2xl font-bold ">30B$</h1>
            <p>Digital Currency Exchanged</p>
          </div>
        </div>
        <div className="flex justify-between w-72 items-center">
          <img src={person} alt="" />
          <div className="text-left">
            <h1 className="text-2xl font-bold ">10M+</h1>
            <p>Trusted Wallets Inverstor</p>
          </div>
        </div>
        <div className="flex justify-between w-72 items-center">
          <img src={earth} alt="" />
          <div className="text-left">
            <h1 className="text-2xl font-bold ">195</h1>
            <p>Countries Supported</p>
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
        <div className="text-white my-24">
          <h3 className="font-bold text-[40px]">Check how much you can earn</h3>
          <p>
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
            <select className="border-b-2 border-black " name="" id="">
              <option value="">TH/s</option>
              <option value="">Bitcoin</option>
            </select>
            <button className="text-white bg-[#3671E9] rounded-full w-36 text-center p-2">
              Calculate
            </button>
          </div>
          <div className="mt-16">
            <h4 className="text-[16px] text-[#3671E9]">
              ESTIMATED 24 HOUR REVENUE:
            </h4>
            <h3 className="text-[32px]">0.055 130 59 ETH ($1275)</h3>
            <p>
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF]">
        <h4 className="text-center font-bold text-black pt-44 text-[30px]">
          Trade securely and market the high growth cryptocurrencies.
        </h4>
        <div className="flex justify-around mx-auto p-12 ">
          <div className="grid-rows-4 gap-y-6 h-[400px] bg-white hover:bg-[#2B076E] delay-700 transition-all w-[30%] p-6 items-center text-center align-middle rounded-xl ">
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
            <button className="mt-12"><img className="w-16" src={arrowRight} alt="" /></button>
          </div>
          <div className="grid-rows-4 bg-red-500 w-[30%] p-6 items-center text-center align-middle rounded-xl ">
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
            <button className="mt-12"><img className="w-16" src={arrowRight} alt="" /></button>
          </div>
          <div className="grid-rows-4 bg-red-500 w-[30%] p-6 items-center text-center align-middle rounded-xl ">
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
            <button className="mt-12"><img className="w-16" src={arrowRight} alt="" /></button>
          </div>
        </div>
      </div>
      <div className="text-white p-12">
        <h2 className="text-[30px] font-bold text-white">Market sentiments, portfolio, and run the infrastructure of your choice</h2>
        <div className="flex justify-between items-center p-8">
        <div className="w-[400px]">
        <h2 className="text-[32px] font-bold">Invest Smart</h2>
        <p className="text-[16px] py-6">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
        <button className="text-white bg-[#3671E9] rounded-full w-36 text-center p-2 py-6">Learn More</button>
        </div>
       <div>
       <img src={chart} alt="" />
       </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
