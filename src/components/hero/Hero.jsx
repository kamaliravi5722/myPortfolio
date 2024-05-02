import "./hero.scss";
import {motion} from "framer-motion"


const sliderVariants ={
    initial:{
        x:0,
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            reapeatType:"mirror",
            duration:20,  
        },
    },
};
const textVariants ={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
    
};

const Hero = () => {
    return(
     <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>
                KAMALI
            </motion.h2>
            <motion.h1 variants={textVariants}>
                Web Developer and UI designer
            </motion.h1>
       
        <motion.div variants={textVariants} className="button">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}><a href="#Contact">Contact Me</a></motion.button>
        </motion.div>
        <motion.img variants={textVariants} animate="scrollButton" src="scroll.png" alt="" />
        </motion.div>
        </div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
            Writer Content Creator Influenser
        </motion.div>
        <div className="imageContainer">
            <img src="image1.png" alt="" />
        </div>

     </div>
    );
};

export default Hero;