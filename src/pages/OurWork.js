import React from "react";
import Athlete from "../img/athlete-small.png";
import Goodtime from "../img/goodtimes-small.png";
import Racer from "../img/theracer-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//For Animation
import { motion } from "framer-motion";
import { animation, fade, photoAnim, lineAnim } from "../animation";

const OurWork = () => {
    return (
        <Work variants={animation} initial="hidden" animate="show" exit="exit">
            <Movie>
                <motion.h1 variants={fade}>Good Athlete</motion.h1>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={Athlete} alt="Athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h1 variants={fade}>Good Time never ends</motion.h1>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <Hide>
                        <motion.img variants={photoAnim} src={Goodtime} alt="Couple" />
                    </Hide>
                </Link>
            </Movie>
            <Movie>
                <motion.h1 variants={fade}>The Racer</motion.h1>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <Hide>
                        <motion.img variants={photoAnim} src={Racer} alt="Racer" />
                    </Hide>
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 2rem 5rem;
    overflow: hidden;
    motion.h1 {
        margin: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 5rem;
    .line {
        height: 0.3rem;
        margin: 2rem auto;
        background: #23d997;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default OurWork;
