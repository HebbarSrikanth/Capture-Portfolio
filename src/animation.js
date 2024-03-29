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
        width: "0",
    },
    show: {
        width: "100%",
        transition: {
            duration: 1,
            ease: "easeOut",
        },
    },
};

export const serviceAnimation = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};

export const scrollAnimation = {
    hidden: {
        opacity: 0,
        scale: 1.05,
        transition: {
            duration: 0.3,
        },
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3,
        },
    },
};

export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            when: "beforeChildren",
            staggerChildren: 0.25,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
};
