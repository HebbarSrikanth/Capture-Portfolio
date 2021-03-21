import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
    const { pathname } = useLocation();
    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">
                    Capture
                </Link>
            </h1>
            <div>
                <ul>
                    <li>
                        <Link to="/">1. Home</Link>
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/" ? "65%" : "0%" }}
                        />
                    </li>
                    <li>
                        <Link to="/work">2. Our Work</Link>
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/work" ? "65%" : "0%" }}
                        />
                    </li>
                    <li>
                        <Link to="/contact">3. Contact</Link>
                        <Line
                            transition={{ duration: 0.75 }}
                            initial={{ width: "0%" }}
                            animate={{ width: pathname === "/contact" ? "65%" : "0%" }}
                        />
                    </li>
                </ul>
            </div>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    min-height: 10vh;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 5;
    ul {
        display: flex;
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
    li {
        padding: 0 2rem;
        position: relative;
    }
    #logo {
        font-size: 1.5rem;
        padding: 0 5rem;
        font-weight: lighter;
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    width: 0%;
    position: absolute;
    bottom: -80%;
    background: palevioletred;
`;

export default Nav;
