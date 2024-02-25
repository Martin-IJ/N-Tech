import React from "react";
import phone from "../assets/aboutPhone.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div name="about" className="overflow-x-hidden bg-main-color text-white">
      <div className="max-w-[85%] w-full m-auto py-10">
        <div className="w-full lg:flex gap-10 space-y-10 lg:space-y-0 items-center text-center lg:text-start">
          <div className="w-full lg:w-[50%]">
            <motion.img
              variants={fadeIn("right", 0)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              src={phone}
              alt=""
              className="w-[400px] mx-auto"
            />
          </div>
          
          <div className="w-full lg:w-[50%] flex flex-col gap-7">
            <h1 className="text-5xl font-semibold">
              We Are Professional Digital Team
            </h1>
            <p className="text-2xl text-faded-black">
              Our web design company specializes in the professional creation of
              unique sites.
            </p>
            <p className="text-faded-black leading-loose">
              Our team constantly monitors the emergence of new technologies
              that we are not afraid to implement in web projects. We create
              only selling websites – this is an achievement by drawing the
              design and working out usability. The approach to each new project
              is individual, we treat every customer equally, regardless of the
              size of the company and its budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
