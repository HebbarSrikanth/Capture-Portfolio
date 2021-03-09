import React from "react";
import imagePath from "../img/home1.png";
//Import Styled Components
import { Hide, Image, About, Description } from "../styles";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>Dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </div>
                <motion.p variants={fade}>
                    Contact us for any photography or videograpghy ideas that you have.We have
                    professionals with amazing skills to help you achieve it.
                </motion.p>
                <motion.button variants={fade}>Contact us</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnim} src={imagePath} alt="Guy with a camera" />
            </Image>
            <Wave />
        </About>
    );
};

export default AboutSection;
