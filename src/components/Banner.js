import React from "react";
import Laptop from "../assets/macbook.png";
import star from "../assets/Star 1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div
      name="home"
      className="bannerHeight relative isolate bg-bgrc-color flex text-main-color overflow-hidden"
      // style={{ height: "calc(100vh - 100px)" }}
    >
      <div className="max-w-[85%] m-auto flex justify-center gap-5 items-center">
        <div className="w-full lg:w-[55%] text-center lg:text-start space-y-10 lg:space-y-5">
          <h1 className="text-6xl md:text-8xl font-semibold ">
            <span className="relative">
              Build Strong
              <div className="absolute -top-1 -right-5 md:-top-2 md:-right-9 -z-10">
                <img src={star} alt="star" className="w-[50px] md:w-[80px]" />
              </div>
            </span>
            <br />
            <span className="textGradient bannerGradientText">
              Relationship
            </span>
            <br />
            with Client
          </h1>
          <p className="text-main-color">
            Our web design company specializes in the Professional <br />{" "}
            creation of unique website that converts visitors to <br />{" "}
            customers
          </p>
          <button className="default-border">
            <Link to="whypage" smooth={true} duration={500}>
              Read More
            </Link>
          </button>
        </div>

        <div className="hidden lg:block w-full lg:w-[45%]">
          <motion.img
            variants={fadeIn("left", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            src={Laptop}
            alt="laptop"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
