import React from "react";
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//For Animation
import { motion } from "framer-motion";
import { animation } from "../animation";

const AboutUs = () => {
    return (
        <motion.div variants={animation} initial="hidden" animate="show" exit="exit">
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
};

export default AboutUs;
