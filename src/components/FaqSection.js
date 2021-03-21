import React from "react";
import { About } from "../styles";
import styled from "styled-components";
import ToggleFAQ from "./ToggleFAQ";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./Scroll";
import { scrollAnimation } from "../animation";

const FaqSection = () => {
    const [controls, ref] = useScroll();
    return (
        <FAQ ref={ref} variants={scrollAnimation} animate={controls} initial="hidden">
            <h2>
                Any Questions? <span>FAQ</span>
            </h2>
            <AnimateSharedLayout>
                <ToggleFAQ title="How do I start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur neque.</p>
                    </div>
                </ToggleFAQ>

                <ToggleFAQ title="Daily Schedule?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur neque.</p>
                    </div>
                </ToggleFAQ>

                <ToggleFAQ title="Different Payment Methods?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur neque.</p>
                    </div>
                </ToggleFAQ>

                <ToggleFAQ title="What Product do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur neque.</p>
                    </div>
                </ToggleFAQ>
            </AnimateSharedLayout>
        </FAQ>
    );
};

const FAQ = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;
