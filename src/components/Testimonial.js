import React, { useState, useRef, useEffect } from "react";
import customersReview from "../db/TestimonialDb";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Testimonial = () => {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView && containerRef.current) {
      const intervalId = setInterval(() => {
        const newScrollLeft = containerRef.current.scrollLeft + 1;

        if (newScrollLeft >= containerRef.current.scrollWidth) {
          containerRef.current.scrollLeft = 0;
        } else {
          containerRef.current.scrollLeft = newScrollLeft;
        }
      }, 20);

      return () => clearInterval(intervalId);
    }
  }, [isInView]);

  return (
    <div className="bg-white py-10 overflow-x-hidden">
      <div className="md:max-w-[85%] w-full mx-auto flex flex-col items-center">
        <Typography className="text-4xl font-semibold">Testimonial</Typography>
        <div
          ref={containerRef}
          className="w-full flex px-5 md:px-7 py-10 gap-5 overflow-x-auto"
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {customersReview.map((data) => {
            const { id, avatar, name, description, message } = data;

            return (
              <Card
                key={id}
                color="transparent"
                shadow={false}
                className="w-full min-w-full md:min-w-[50%] md:w-[50%] p-10 shadow-xl"
              >
                <CardHeader
                  color="transparent"
                  floated={false}
                  shadow={false}
                  className="mx-0 flex items-center gap-4 pt-0 pb-8"
                >
                  <Avatar
                    size="lg"
                    variant="circular"
                    src={avatar}
                    alt="tania andrew"
                  />
                  <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                      <Typography variant="h5" color="blue-gray">
                        {name}
                      </Typography>
                      <div className="5 flex items-center gap-0">
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                        <StarIcon />
                      </div>
                    </div>
                    <Typography color="blue-gray">{description}</Typography>
                  </div>
                </CardHeader>
                <CardBody className="mb-6 p-0">
                  <Typography>&quot;{message}&quot;</Typography>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
