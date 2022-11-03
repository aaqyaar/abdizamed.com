import React from "react";
import img from "assets/me.svg";
import { AnimatePresence, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <section className="w-full">
        <article className="mx-24 mt-16 grid grid-cols-1 place-items-center justify-items-center md:mt-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: [0, 60, 0] }}
            exit={{ opacity: 0 }}
          >
            <div id="me" className="pt-16 font-poppins md:mt-24 lg:mt-28">
              <div className="text-center text-xl tracking-widest md:mt-2 md:text-left lg:mb-4 lg:mt-6  lg:text-2xl">
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    "Self Taught & MERN Stack Dev",
                    2000,
                    "SEO & Mobile Dev",
                  ]}
                  wrapper="h2"
                  repeat={Infinity}
                />
              </div>

              <h1 className="md-2 mt-4  text-center text-sm font-semibold tracking-widest md:mb-2 md:text-left md:text-2xl lg:text-xl  xl:mb-4 xl:text-4xl">
                Hi, I'am <span>Abdi Zamed</span>
              </h1>
              <p className="my-2 text-center text-sm tracking-wide md:text-left md:text-lg lg:text-xl xl:my-4 xl:text-2xl">
                A Full Stack Developer with 2+ years of experience in{" "}
                <b>designing</b> and <b>developing</b> user interfaces,{" "}
                <b>testing</b>, <b>debugging</b>, and training staff within{" "}
                <b>modern technologies</b>. Proven ability in optimizing web &
                mobile functionalities that improve data retrieval and workflow
                efficiencies.
              </p>
              <div className="mb-4 flex justify-center md:mx-1 md:justify-start">
                <a
                  href="https://github.com/abdi-aaqyaar"
                  className=" md:text-md flex items-center gap-3 rounded border-2 border-gray-800 bg-gray-800 px-2 py-2 font-bold text-white transition  hover:-translate-y-2 hover:bg-white hover:text-black hover:shadow-md lg:px-3 lg:py-5 lg:text-xl"
                >
                  <FaGithub className="h-4 w-4 md:h-6 md:w-6" />
                  Connect on Github
                </a>
              </div>
            </div>
          </motion.div>
          <div className="lg:mt-30  md:mt-28 xl:mt-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, x: [0, -60, 0] }}
              exit={{ opacity: 0 }}
            >
              <Image src={img} alt="Portfolio Pic" />
            </motion.div>
          </div>
        </article>
      </section>
    </motion.div>
  );
}
