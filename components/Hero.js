import React, { useMemo, useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import { Link as LinkScroll } from "react-scroll";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";


const Hero = ({
  
  listUser = [    
    {
      name: "Nuestra primera Fábrica de Guitarras",
      number: "1976",
      icon: "/assets/Icon/fabrica.svg",
    },
    {
      name: "Primeras operaciones internacionales",
      number: "1994",
      icon: "/assets/Icon/avion.svg",
    },
    {
      name: "Nuestra expansión como grupo",
      number: "2011",
      icon: "/assets/Icon/guitarra.svg",
    }
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [activeLink, setActiveLink] = useState(null);

  

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    > 
      
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                Experiencia y Trayectoria en <strong>Grupo Rómulo García</strong>.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Los mejores productos, al <strong>mejor</strong> precio del mercado
              </p>

              <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              <ButtonPrimary >Nuestra Historia</ButtonPrimary >
            </LinkScroll>
              
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/option2-01.png"
                  alt="RG Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-3 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-60 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 sm:w-24 h-24 mr-6 lg:w-12 lg:h-12 rounded-full">
                  <img src={listUsers.icon} className="sm:h-20 w-20 lg:w-8 lg:h-8" />
                </div>
                <div className="flex flex-col">
                  <p className="text-3xl text-black-600 font-bold">
                    {listUsers.number}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
