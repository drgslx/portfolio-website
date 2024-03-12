"use client"

import { motion, useViewportScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Certifications = ({}) => {

  const certificates = [
    {
      id: 1,
      color: "from-red-300 to-blue-300",
      title: "Building Modern Projects with React",
      desc:
        "Creating modern projects according to Today's trends, inluding Redux, React Router, etc.",
      img:"/modern-projects-react.jpg",
      link: "https://lama.dev",
    },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",
      title: "React.js: Building an interface ",
      desc:
          "Building a web interface with React.JS and react basic functionalities",
      img:
        "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 3,
      color: "from-violet-300 to-purple-300",
      title: "React.js Essential Training",
      desc:
          " Learned about React Essentials and how to use it in your projects, including Hooks",
      img:
        "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc:
          "Food ordering app with functionalities like add to cart, filtering, reseting the filter and so on",
      img:
        "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc:
          "Food ordering app with functionalities like add to cart, filtering, reseting the filter and so on",
      img:
        "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    {
      id: 4,
      color: "from-purple-300 to-red-300",
      title: "Spotify Music App",
      desc:
          "Food ordering app with functionalities like add to cart, filtering, reseting the filter and so on",
      img:
        "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      link: "https://lama.dev",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Spotify Music App",
        desc:
            "Food ordering app with functionalities like add to cart, filtering, reseting the filter and so on",
        img:
          "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        link: "https://lama.dev",
      },
      {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Spotify Music App",
        desc:
            "Food ordering app with functionalities like add to cart, filtering, reseting the filter and so on",
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
     
  
      className="flex flex-col justify-center items-center bg-gray-900 h-100vh w-full" 
    >
      <div className="p-8"><h1 className="text-6xl text-stone-100 font-bold mb-8">Certifications</h1></div>
      
      <motion.div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-14 md:gap-8">
        {certificates.map((certificate) => (
          <motion.div
          initial={{ opacity: 0, scale: 0}}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
            key={certificate.id}
            className={` bg-gradient-to-r bg-stone-100 rounded-lg flex flex-col justify-between items-center`}
            whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}
          >
            <div className="p-8 m-8">
              <h1 className="text-3xl md:text-sm lg:text-lg  font-bold mb-2">{certificate.title}</h1>
              <div className="relative h-60">
              <Image
                src={certificate.img}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-b-lg h-400px w-200px"
              />
            </div>
              <p className="text-gray-800">{certificate.desc}</p>
            </div>
            <div className="p-4">
              <Link href={certificate.link} className="text-blue-600 hover:underline">
                Check Certificate
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      

     
    </motion.div>
  );
};

export default Certifications;