export const cardText ={
    hidden: {
        opacity: 0,
        x:-50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition : {
            type: "spring",
            stiffness: 400, 
            damping: 15,
            // ease: 'easeInOut',
            // delaChildren: 0.5
        }
    }
}

export const cardContainer1 = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 400, 
            damping: 15,
        }
    }
}

export const cardContainer2 = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 400, 
            damping: 15,
        }
    }
}

export const navContainer = {
    hidden: {
        x: 300,
        opacity: 0,
    },
    show: {
        opacity: 1,
        x: 0,
        transition : {
            type: "spring",
            stiffness: 400, 
            damping: 15,
        }
    }
}