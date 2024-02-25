import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Packages = () => {
  return (
    <div name="services" className="bg-white py-20 overflow-hidden">
      <div className="max-w-[85%] w-full m-auto text-center space-y-7">
        <motion.h1
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-5xl"
        >
          Website Design <span className="text-default">Packages</span>
        </motion.h1>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="max-w-[700px] w-full m-auto text-faded-black"
        >
          We offer a few standard packages as well as custom projects. Our web
          design company specializes in the professional creation of unique
          sites.
        </motion.p>
        <div className="flex flex-wrap justify-center lg:justify-between gap-10">
          <div className="relative isolate hover:scale-110 ease-in duration-200 overflow-hidden max-w-[360px] w-full h-[600px] py-2 px-10 space-y-10 text-start rounded-xl bg-[#F6F7FB]">
            <h1 className="absolute -z-10 top-56 -left-3 text-[#F6F7FB] drop-shadow-xl rotate-90 text-[9rem] font-black">
              <span className="drop-shadow-md">LANDING</span>
            </h1>
            <h3 className="text-3xl">Landing Page</h3>
            <h2 className="text-6xl">
              $700. <span className="text-2xl font-bold align-top">99</span>
            </h2>
            <div className="space-y-5 text-faded-black">
              {/* <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Time - 7
                days
              </p> */}
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> 5 - 14
                blocks
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Social
                links
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" />{" "}
                Photo gallery
              </p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
            </div>
            <div className="w-full flex justify-center">
              <button className="packages-border">Select Plan</button>
            </div>
          </div>

          <div className="relative isolate hover:scale-110 ease-in duration-200 overflow-hidden max-w-[360px] w-full h-[600px] py-2 px-10 space-y-10 text-start rounded-xl bg-[#31333E] text-white">
            <h1 className="absolute -z-10 top-80 -left-40 text-[#31333E] drop-shadow-xl rotate-90 text-[9rem] font-black">
              <span className="drop-shadow-md">APPLICATION</span>
            </h1>
            <h3 className="text-3xl">App development</h3>
            <h2 className="text-6xl">
              $1100. <span className="text-2xl font-bold align-top">99</span>
            </h2>
            <div className="space-y-5">
              {/* <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Time - 7
                days
              </p> */}
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> 5 - 14
                blocks
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Social
                links
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" />{" "}
                Video/photo gallery
              </p>
              <p>-</p>
              <p>-</p>
            </div>
            <div className="w-full flex justify-center">
              <button className="packages-border">Select Plan</button>
            </div>
          </div>

          <div className="relative isolate hover:scale-110 ease-in duration-200 overflow-hidden max-w-[360px] w-full h-[600px] py-2 px-10 space-y-10 text-start rounded-xl bg-[#F6F7FB]">
            <h1 className="absolute -z-10 top-80 -left-40 text-[#F6F7FB] drop-shadow-xl rotate-90 text-[9rem] font-black">
              <span className="drop-shadow-md">eCOMMERCE</span>
            </h1>
            <h3 className="text-3xl">eCommerce</h3>
            <h2 className="text-6xl">
              $1500. <span className="text-2xl font-bold align-top">99</span>
            </h2>
            <div className="space-y-5 text-faded-black">
              {/* <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Time - 7
                days
              </p> */}
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> 5 - 14
                blocks
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Social
                links
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" />{" "}
                Video/photo gallery
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> Contact
                form, CTA
              </p>
              <p className="flex items-center">
                <BsCheckLg className="text-green-500 text-lg mr-3" /> SEO
                package
              </p>
            </div>
            <div className="w-full flex justify-center">
              <button className="packages-border">Select Plan</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
