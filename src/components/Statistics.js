import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="bg-white flex justify-center" ref={ref}>
      <div className="max-w-[85%] w-full flex flex-col items-center gap-10 py-10">
        <p className="text-4xl font-semibold">Statistics</p>
        <div className="flex justify-center lg:justify-between gap-10 flex-wrap text-center text-6xl font-semibold">
          <div>
            <p>
              {inView ? <CountUp start={0} end={32} duration={3} /> : null}
              <span className="textGradient">+</span>
            </p>
            <p className="text-lg">Professionals team</p>
          </div>
          <div>
            <p>
              {inView ? <CountUp start={0} end={200} duration={3} /> : null}
              <span className="textGradient">+</span>
            </p>
            <p className="text-lg">Satisfied customers</p>
          </div>
          <div>
            <p>
              {inView ? <CountUp start={0} end={175} duration={3} /> : null}
              <span className="textGradient">+</span>
            </p>
            <p className="text-lg">Successful projects</p>
          </div>
          <div>
            <p>
              {inView ? <CountUp start={0} end={5} duration={3} /> : null}
              <span className="textGradient">+</span>
            </p>
            <p className="text-lg">Years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
