import React from "react";
import imagePath from "../img/home1.png";
//Import Styled Components
import { Hide, Image, About, Description } from "../styles";

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

export default AboutSection;
