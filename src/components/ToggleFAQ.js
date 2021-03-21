import React, { useState } from "react";
import { motion } from "framer-motion";

const ToggleFAQ = ({ children, title }) => {
    const [clicked, setClicked] = useState(false);
    return (
        <motion.div layout className="question" onClick={() => setClicked(!clicked)}>
            <motion.h4 layout>{title}</motion.h4>
            {clicked ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    );
};

export default ToggleFAQ;
