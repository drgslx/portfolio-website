"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    animated={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="h-full flex flex-col items-center lg:flex-row overflow-hidden justify-center px-4 sm:px-8 md:12 lg:px-20 xl:px-48"
    >
      {/* Profile picture container*/}
      <div className=" lg:h-full lg:w-1/2 relative rounded-xl overflow-hidden" style={{ maxHeight: "60vh"}}>
        <Image
          src="/dragos2.jpg"
          alt="Dragos-picture"
          className="object-cover rounded-full"
          layout="fill"
        />
      </div>

      {/* TEXT CONTAINER*/}
      <div className="p-8 flex lg:h-full lg:w-1/2 flex-col gap-8 items-center justify-center">
        {/* Title*/}
        <h1 className="text-3xl md:text-6xl font-bold">About me</h1>
        <p className="text-center md:text-xl">
          Hello! My name is Dragos Alexa and I am an IT enthusiast! <br /><br />
          Motivated by my passion for technology and a desire to expand my horizons, I am enthusiastic about transitioning into web development and software development. I see these areas as dynamic fields where I can further develop my skills and contribute to cutting-edge and creative projects.
        </p>
        {/*Buttons Container */}
        <div className="flex gap-4 w-full items-center justify-center">
          <button className="p-4 rounded border-2 border-black text-black hover:bg-black hover:text-white">
            <Link href="/portfolio">View My work</Link>
          </button>
          <button className="p-4 rounded border-2 border-black bg-black text-white hover:bg-white hover:text-black">
          <Link href="/contact">Contact Me!</Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;