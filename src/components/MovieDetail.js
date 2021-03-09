import React, { useEffect, useState } from "react";
import { MovieState } from "../MovieDetails";
import styled from "styled-components";
//For Animation
import { motion } from "framer-motion";
import { animation } from "../animation";
import { useHistory } from "react-router";

const MovieDetails = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [currentMovie, setCurrentMovie] = useState("");

    useEffect(() => {
        const movie = movies.filter((m) => m.url === url);
        setCurrentMovie(movie[0]);
        console.log(setMovies);
        //eslint-disable-next-line
    }, [movies, url]);

    if (!currentMovie) return <div></div>;

    return (
        <StyledMovie variants={animation} initial="hidden" animate="show" exit="exit">
            <h1>{currentMovie.title}</h1>
            <img src={currentMovie.mainImg} alt={currentMovie.title} />
            <Award>
                {currentMovie.awards.map((award) => (
                    <div className="movie" key={award.title}>
                        <h3>{award.title}</h3>
                        <div className="line"></div>
                        <p>{award.description}</p>
                    </div>
                ))}
            </Award>
            <img src={currentMovie.secondaryImg} alt={currentMovie.secondaryImg} />
        </StyledMovie>
    );
};

const StyledMovie = styled(motion.div)`
    overflow: hidden;
    h1 {
        text-align: center;
        padding: 3rem 0rem;
    }
    img {
        width: 100%;
        height: 90vh;
        object-fit: cover;
    }
`;

const Award = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 4rem 2rem;
    h3 {
        font-size: 1.5rem;
        padding-bottom: 2rem;
    }
    .line {
        height: 0.3rem;
        margin-bottom: 2rem;
        background: #23d997;
    }
    .movie {
        padding: 1rem 2rem;
    }
`;

export default MovieDetails;
