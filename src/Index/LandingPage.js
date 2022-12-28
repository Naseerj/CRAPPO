import React from "react";
import arrowRight from "../images/Arrow Right.svg";
import bitcoin from "../images/Illustration.svg";
import ethereum from "../images/Illustrations1.svg";
import barchart from "../images/Icon (4).svg";
import person from "../images/Icon (5).svg";
import earth from "../images/Icon (6).svg";

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
      <div className="flex justify-between text-white items-center w-[80%] mx-auto">
        <img src={ethereum} alt="" />
        <div className="text-left w-[41%]">
          <h2 className="font-bold text-[40px]">
            Why you should choose CRAPPO
          </h2>
          <p className="my-2 w-[390px]">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
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
      <div className="bg-white w-[60%] mx-auto">
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
    </div>
  );
};

export default LandingPage;
