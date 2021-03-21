import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useScroll = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.4 });

    if (inView) controls.start("show");
    else controls.start("hidden");

    return [controls, ref];
};
