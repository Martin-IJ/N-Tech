import web1 from "../assets/web1.jpeg";
import web2 from "../assets/web2.jpeg";
// import coWeb1 from "../assets/co-web1.jpeg";
// import coWeb2 from "../assets/co-web2.jpeg";
import print1 from "../assets/outdoor1.jpeg";
import print2 from "../assets/outdoor2.jpeg";
import seo1 from "../assets/SEO1.jpeg";
import seo2 from "../assets/SEO2.jpeg";
import ecom from "../assets/ecom1.jpeg";
import ecom2 from "../assets/e-com2.png";
import mobile1 from "../assets/mobile1.jpeg";
import mobile2 from "../assets/mobile2.jpeg";

const ourServices = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Whether you need a simple website or a complex web application, we have the expertise to turn your ideas into reality.",
    image: web1,
    banner: web2,
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "We create visually appealing and intuitive interfaces that enhance user experiences, driving engagement and conversions.",
    image: seo1,
    banner: seo2,
  },
  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "Our e-commerce development team can help you build a feature-rich online store that maximizes your business's potential.",
    image: ecom,
    banner: ecom2,
  },
  // {
  //   id: 4,
  //   title: "Content Management",
  //   description:
  //     "We design and implement content management systems (CMS) that allow you to easily update and manage your website's content.",
  //   image: coWeb1,
  //   banner: coWeb2,
  // },
  {
    id: 5,
    title: "Mobile App Development",
    description:
      "Extend your online presence with custom mobile applications tailored to your business goals.",
    image: mobile1,
    banner: mobile2,
  },
  {
    id: 6,
    title: "SEO Optimization",
    description:
      "Culmination of website content and off-site presence to improve rankings in the major search engines. Culmination of website content presence to improve rankings in the major search engines.",
    image: print1,
    banner: print2,
  },
];

export default ourServices;
