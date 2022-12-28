import React from "react";
import logo from "./images/Logo (3).svg";

const Navbar = () => {
  return (
    <div className="bg-brandBlue">
      <div className="bg-[#0D0D2B] text-white flex justify-between w-[90%] items-center p-4 mx-auto">
        <img src={logo} alt="" />
        <div className="flex flex-row justify-between w-[600px] items-center">
          <a href="">Products</a>
          <a href="">Features</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a className="border-r-red-500 " href="">
            Login
          </a>
          <hr className="origin-center rotate-90 bg-[#F2F2F2] w-8" />
          <button className="bg-[#3671E9] p-3 rounded-full w-[120px]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
