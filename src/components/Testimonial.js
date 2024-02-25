import React from "react";
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
  return (
    <div className="bg-white py-10 overflow-x-hidden">
      <div className="md:max-w-[85%] w-full mx-auto flex flex-col items-center">
        <Typography className="text-4xl font-semibold">Testimonial</Typography>
        <div className="w-full flex px-5 md:px-7 py-10 gap-5 overflow-x-auto">
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
          {/* <Card
            color="transparent"
            shadow={false}
            className="w-full min-w-full md:min-w-0 md:w-[50%] p-10 shadow-xl"
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <Typography color="blue-gray">
                  Frontend Lead @ Google
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim.
                I use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card>
          <Card
            color="transparent"
            shadow={false}
            className="w-full min-w-full md:min-w-0 md:w-[50%] p-10 shadow-xl"
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <Typography color="blue-gray">
                  Frontend Lead @ Google
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim.
                I use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
