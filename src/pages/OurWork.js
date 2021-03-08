import React from "react";
import Athlete from "../img/athlete-small.png";
import Goodtime from "../img/goodtimes-small.png";
import Racer from "../img/theracer-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//For Animation
import { motion } from "framer-motion";
import { animation } from "../animation";

const OurWork = () => {
    return (
        <Work variants={animation} initial="hidden" animate="show" exit="exit">
            <Movie>
                <h1>Good Athlete</h1>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={Athlete} alt="Athlete" />
                </Link>
            </Movie>
            <Movie>
                <h1>Good Time never ends</h1>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={Goodtime} alt="Couple" />
                </Link>
            </Movie>
            <Movie>
                <h1>The Racer</h1>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={Racer} alt="Racer" />
                </Link>
            </Movie>
        </Work>
    );
};

const Work = styled(motion.div)`
    min-height: 100vh;
    padding: 2rem 5rem;
    overflow: hidden;
    h1 {
        margin: 1rem 0rem;
    }
`;

const Movie = styled.div`
    padding-bottom: 5rem;
    .line {
        height: 0.5rem;
        margin-bottom: 2rem;
        background: #cccccc;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;
