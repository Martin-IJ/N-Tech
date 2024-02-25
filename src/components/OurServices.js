import React from "react";
import ourServices from "../db/OurServicesDb";

const OurServices = () => {
  return (
    <div name="ourServices" className="bg-white py-10 overflow-hidden">
      <div className="max-w-[85%] w-full m-auto text-center space-y-7">
        <div className="flex flex-wrap items-center justify-center gap-5 m-auto">
          {ourServices.map((services) => {
            const { id, title, image } = services;
            return (
              <div
                key={id}
                className="relative group m-auto h-[200px] w-full md:w-[200px] overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute hidden z-10 h-full w-full group-hover:flex transition ease-in-out delay-300 items-center justify-center text-white text-xl font-semibold"
                  style={{ backgroundColor: "rgba(255, 0, 0, 0.5)" }}
                >
                  <p>{title}</p>
                </div>
                <div
                  className="group-hover:-rotate-12 group-hover:scale-125 transition ease-in delay-75 h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
