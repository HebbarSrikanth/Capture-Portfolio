import React from "react";
import imagePath from "../img/home1.png";

const AboutSection = () => {
    return (
        <>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            your <span>Dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any photography or videograpghy ideas that you have.We have professionals with
                    amazing skills to help you achieve it.
                </p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={imagePath} alt="Guy with a camera" />
            </div>
        </>
    );
};

export default AboutSection;
