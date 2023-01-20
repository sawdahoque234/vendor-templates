/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import bannerimg from "../asstes/bannerimg.png";

const VendorTemplates = () => {
  return (
    <div>
      <section class=" overflow-hidden">
        {/* <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-left">
            <button class="inline-flex items-left bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Button
            </button>
          </div>
        </header> */}

        <section class="mx-3">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="sm:text-4xl  mb-4 font-[100px]">Launching Soon...</h1>
              <p>Powered by </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-[#ED636E] border-0 py-2 px-6 focus:outline-none rounded-[30px] font-[24px]">
                  Sign Up
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-2/3 w-2/3">
              <img
                class="object-cover object-center rounded "
                alt="hero"
                src={bannerimg}
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default VendorTemplates;
