/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import bannerimg from "../asstes/bannerimg.png";
import logo from "../asstes/logo.png";
const VendorTemplates = () => {
  return (
    <div>
      <section class=" mx-3">
        <div class="container mx-auto md:flex flex-wrap py-4 mt-4  px-12 flex-col md:items-end ">
          <button class=" bg-black text-white border-0 py-2 px-8  md:mt-0 rounded-[30px] font-semibold">
            Contact Us
          </button>
        </div>

        <div class="container lg:w-full mx-auto flex px-2 py-6 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 flex flex-col px-4 md:pr-12 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="mb-4 font-bold ">Launching Soon...</h1>
            <span className="flex py-6">
              <h5 className="text-3xl ">Powered by </h5>
              <img src={logo} alt="" className="w-[35%] h-[35%] mx-2 mt-2" />
            </span>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-[#ED636E] border-0 py-2 mt-2 px-6 focus:outline-none rounded-[30px] font-[24px]">
                Sign Up
              </button>
            </div>
          </div>
          <div class="lg:w-2/3 md:w-2/3 ">
            <img
              class="object-cover object-center rounded "
              alt="hero"
              src={bannerimg}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorTemplates;
