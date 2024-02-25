import React from "react";
import { PiAtomThin } from "react-icons/pi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { TbWorldCode } from "react-icons/tb";

const WhyPage = () => {
  return (
    <div name="whypage" className="bg-white overflow-hidden">
      <div className="max-w-[85%] w-full m-auto text-center py-20 flex flex-col gap-10">
        <h1 className="text-5xl font-semibold">Why Choose Us</h1>
        <p className="max-w-[560px] w-full m-auto text-faded-black">
          Biggest brands in the automotive industry recommend our company as a
          reliable corporate website developer
        </p>
        <div className="flex justify-center lg:justify-between flex-wrap gap-10">
          <div className="bg-[#E4DEFD] rounded-xl p-10 w-full md:w-[70%] lg:w-[30%]">
            <div className="bg-white inline-flex p-4 rounded-full hover:text-default text-4xl">
              <PiAtomThin />
            </div>
            <p className="text-2xl font-semibold mt-5 mb-3">Big experience</p>
            <p className="text-faded-black">
              Many years of work in this field is an excellent indicator that
              companies trust us and in response we offer unique solutions.
            </p>
          </div>
          <div className="bg-[#DEFDEB] rounded-xl p-10 w-full md:w-[70%] lg:w-[30%]">
            <div className="bg-white inline-flex p-4 rounded-full hover:text-default text-4xl">
              <LiaPeopleCarrySolid />
            </div>
            <p className="text-2xl font-semibold mt-5 mb-3">Strong team</p>
            <p className="text-faded-black">
              An excellent team of professionals will help you to bring all your
              ideas to life in the best possible way and with flexible
              functionality.
            </p>
          </div>
          <div className="bg-[#FDEEDE] rounded-xl p-10 w-full md:w-[70%] lg:w-[30%]">
            <div className="bg-white inline-flex p-4 rounded-full hover:text-default text-4xl">
              <TbWorldCode />
            </div>
            <p className="text-2xl font-semibold mt-5 mb-3">
              Personal solutions
            </p>
            <p className="text-faded-black">
              Individual approach to your project. flexible solutions for your
              tasks to achieve your goals on the path to success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
