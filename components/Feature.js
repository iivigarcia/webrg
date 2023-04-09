import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import CustomizedDialogs from "./Popup";

const text = "<p>R&oacute;mulo Garc&iacute;a fue un excelente m&uacute;sico. Hombre de clase trabajadora, tuvo que salir a trabajar a los 15 a&ntilde;os para colaborar con su familia y poder seguir incrementando conocimientos en su pasi&oacute;n: &ldquo;La guitarra&rdquo;</p>"+"<br />"+"<p>Con el correr de los a&ntilde;os adem&aacute;s de trabajar, comenz&oacute; a dar clases particulares de guitarra, pero no era lo que quer&iacute;a realmente. Le interesaban otras cosas. Motivado por su gran pasi&oacute;n y por el incesante pedido de sus alumnos, comenz&oacute; a comprar guitarras para vend&eacute;rselas a estos. Pero su inter&eacute;s fue m&aacute;s all&aacute;.</p>"
+"<p>Para su primera compra tuvo que vender un tocadiscos que ten&iacute;a en su casa."+"<br />";

const features = [
  "Virtual Music",
  "Drums Music Store",
  "Sunset Music",
  "Rocker Music",
  "Outlet Musical",
  "Music Pro"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/ale-lore.jpg"
              alt="Socios"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            Nuestra Historia
          </h3>
          <p className="my-2 text-black-500">
          Rómulo García fue un excelente músico. Hombre de clase trabajadora, tuvo que salir a trabajar a los 15 años para colaborar con su familia y poder seguir incrementando conocimientos en su pasión: “La guitarra”...
          </p>
          
          <CustomizedDialogs title={"Nuestra Historia"}/>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
