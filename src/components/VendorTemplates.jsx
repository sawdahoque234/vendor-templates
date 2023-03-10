/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import bannerimg from "../asstes/bannerimg.png";
import logo from "../asstes/logo.png";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
const VendorTemplates = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="example">
      <section class="mb-4  ">
        <div class="container mx-auto md:flex flex-wrap md:py-4 md:mt-4  md:px-12 px-10 pt-0 flex-col items-end bnrbtn">
          <button
            className="bg-black text-white active:bg-blue-500 
          border-0 md:py-2 py-1 md:px-8 px-4  md:mt-0 rounded-[30px] md:font-semibold focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Contact Us
          </button>

          {showModal ? (
            <>
              <div className="flex  overflow-x-hidden overflow-y-auto   z-50 outline-none focus:outline-none fixed">
                <div className="relative w-auto  mx-auto  ">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none bg-white">
                    <div className="flex items-start justify-between md:p-6 p-1 border-b border-solid border-gray-300  rounded-t ">
                      <h3 className="text-xl font-medium">Let's Know</h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      >
                        <span className=" opacity-7 h-5 w-5 text-sm block bg-green-500 py-0 text-white rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                    <div className="md:p-4 md:block flex flex-wrap">
                      <p>
                        <span className="flex items-start md:p-2">
                          <BsFillTelephoneFill className=" mt-1 mx-1 text-blue-600" />{" "}
                          +97145830141
                        </span>
                      </p>
                      <p>
                        <span className="flex items-start md:p-2">
                          <BsWhatsapp className=" mt-1 mx-1 text-green-400" />{" "}
                          +971504630141
                        </span>
                      </p>

                      <p>
                        <span className="flex items-start md:p-2">
                          <BiMap className=" mt-1 mx-1 text-emerald-400" />{" "}
                          Premise EO 15, Floor 1, In5 Tech <br />
                          Building. DIC, Dubai
                        </span>
                      </p>
                      <p>
                        <span className="flex items-start md:p-2 p-1">
                          <br />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        <div class="container lg:w-full mx-auto flex px-2 md:py-6 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 flex flex-col px-4 md:pr-12 md:items-start md:text-left md:mb-24 mb-12  items-center text-center ">
            <h1 class="md:mb-4 font-bold bnrtitle mx-6 md:mx-0">
              Launching Soon...
            </h1>
            <span className="flex md:py-6 py-10 bnrSpn">
              <h5 className="md:text-3xl text-xl ">Powered by </h5>
              <img src={logo} alt="" className="w-[35%] h-[35%] mx-2 mt-1" />
            </span>
          </div>
          <div className="bannerBg"></div>
          <div className="bannerbg "></div>
          <div class="lg:w-2/3 md:2/3 md:mt-0 mt-8 bnrimg">
            <img class=" rounded  " alt="hero" src={bannerimg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorTemplates;
