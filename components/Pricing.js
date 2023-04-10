import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Nuestras Empresas
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Nuestra amplia trayectoria nos permitió conformar un grupo de empresas <strong>100%</strong> dedicadas a los instrumentos músicales
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 sm:px-0 lg:px-6 lg:grid-rows-3" >
          <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/virtualmusic.png"
                    width={145}
                    height={165}
                    alt="Virtual Music"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Virtual Music
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                  <a href="https://linktr.ee/virtualmusic.ml">
                  <ButtonOutline>Ver Más</ButtonOutline>
                  </a>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/sunsetmusic.png"
                    width={145}
                    height={165}
                    alt="Sunset Music"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Sunset Music
                </p>
                <div className="flex flex-row w-full justify-center mb-8 flex-none mt-4">
                  <ButtonOutline>Ver Más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/drumsmusic.png"
                    width={145}
                    height={165}
                    alt="Virtual Music"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Drums Music Store
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                  <ButtonOutline>Ver Más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/rockermusic.png"
                    width={145}
                    height={165}
                    alt="Rocker Music"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Rocker Music
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                  <ButtonOutline>Ver Más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/kingdom.png"
                    width={145}
                    height={165}
                    alt="Kingdom Music"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Kingdom Music
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                  <ButtonOutline>Ver Más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/outletmusic.png"
                    width={145}
                    height={165}
                    alt="Virtual Music"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Outlet Musical
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                  <ButtonOutline>Ver Más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center" style={{height:'350px', width:'350px'}}>
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20 "
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-10">
                  <Image
                    src="/assets/logos/musicpro.png"
                    width={145}
                    height={165}
                    alt="Music Pro"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Music Pro
                </p>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-4">
                  <ButtonOutline>Ver Más</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
                       
           
           
            
            
            
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Productos{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Conocé todos nuestros productos y sus caracteristicas
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-0 w-full px-0 mt-10 position-relative" variants={scrollAnimation} >
            <div style={{backgroundImage:'url("/assets/9.png")',paddingTop:'10vh',paddingBottom:'10vh',paddingRight:'10vh',paddingLeft:'10vh'}}>
            <a href="https://romulogarcia.mitiendanube.com/" style={{position:'center'}}>
            <ButtonPrimary >Nuestro Catálogo</ButtonPrimary >
            </a>
            </div>
              
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/dean.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/ampeg.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/medeli.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              
              <img
                src="/assets/Icon/sx.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/sunsetmusic.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/schecter.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Parte de nuestra historia{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
