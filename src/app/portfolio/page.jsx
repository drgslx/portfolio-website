"use client"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const PortfolioPage = ({}) => {
  const items = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Food ordering app",
      desc:
        "Food ordering app with functionalities like add to cart, filtering, reseting the filter and so on. As well as food galery and products. The application is created in angular.js lorem loremc filter and so on. As well as food galery and products. The application is created in angular.js lorem loremc filter and so on. As well as food galery and products. The application is created in angular.js lorem loremc filter and so on. As well as food galery and products. The application is created in angular.js lorem loremc",
      img:
        "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "Ecommerce ",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img:
        "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "Vanilla Book App",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img:
        "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img:
        "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
      img:
        "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    
  ];

  const { scrollY } = useViewportScroll();

  const ref = useRef();

  const x = useTransform(scrollY, [0, 1], ["100%", "0%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center overflow-scroll h-100vh w-full"
    >
      <div className="p-8"><h1 className="text-6xl font-bold mb-8">Portfolio</h1></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`bg-gradient-to-r ${item.color} rounded-lg `}
            whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}
          >
            <div className="p-4 m-4">
              <h1 className="text-3xl  font-bold mb-2">{item.title}</h1>
              <p className="text-gray-800">{item.desc}</p>
            </div>
            <div className="relative h-60">
              <Image
                src={item.img}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-b-lg"
              />
            </div>
            <div className="p-4">
              <Link href={item.link} className="text-blue-600 hover:underline">
                Check Github!
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;