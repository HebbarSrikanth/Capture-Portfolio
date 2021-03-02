import React from "react";
import imagePath from "../img/home1.png";
//Import Styled Components
import styled from "styled-components";

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            your <span>Dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>
                    Contact us for any photography or videograpghy ideas that you have.We have professionals with
                    amazing skills to help you achieve it.
                </p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={imagePath} alt="Guy with a camera" />
            </Image>
        </About>
    );
};

const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: #fff;
`;

const Description = styled.div`
    flex: 1;
    padding-right: 7rem;
    h2 {
        font-weight: lighter;
    }
`;

const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;
