export const animation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1,
        },
    },
};

export const titleAnimation = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    },
};

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    },
};

export const photoAnim = {
    hidden: {
        opacity: 0,
        scale: 2,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.75,
            ease: "easeOut",
        },
    },
};

export const lineAnim = {
    hidden: {
        width: "0%",
    },
    show: {
        width: "100%",
        transition: {
            duration: 1,
        },
    },
};
