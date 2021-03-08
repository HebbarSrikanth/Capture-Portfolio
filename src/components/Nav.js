import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
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
                    </li>
                    <li>
                        <Link to="/work">2. Our Work</Link>
                    </li>
                    <li>
                        <Link to="/contact">3. Contact</Link>
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

export default Nav;
