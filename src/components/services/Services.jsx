import { useRef } from "react";
import "./services.scss"
import { motion,useInView} from "framer-motion";


const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    
    },
}

const Services = () => {

    const ref=useRef()

    const isInView = useInView(ref,{margin:"-100px"})
    return(
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
         <motion.div className="textContainer" variants={variants}>
            <p>
                I focus on helping your brand grow <br/>and move forward
            </p>
            <hr/>
         </motion.div>
         <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="people.webp"/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <button>SKILLS I HAVE!</button>
            </div>
         </motion.div>
         <motion.div className="listContainer" variants={variants}>
         <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Python</h2>
                <p>
                     Skilled in utilizing Python libraries and frameworks to streamline development processes.
                     Strong problem-solving abilities and a passion for continuous learning and improvement in Python development. </p>
                    <a href="#Contact"> <button className="button">Go</button></a> 
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>MySQL</h2>
                <p>Skilled in writing complex SQL queries, stored procedures,
                     and triggers to ensure efficient data retrieval and manipulation.</p>
                    <a href="#Contact"> <button className="button">Go</button></a> 
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Front End</h2>
                <p>Proficient in front-end development with expertise in HTML, CSS, and JavaScript. Skilled in crafting responsive and visually appealing web interfaces. Experience with modern frameworks like React  
                   </p>
              <a href="#Contact"> <button className="button">Go</button></a> 
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>After Effects & UI/UX</h2>
                <p>Proficient in UX/UI design methodologies, wireframing, and prototyping tools. Strong understanding of user-centered design principles and usability best practices.
                     Skilled in creating intuitive interfaces that enhance user experience and drive engagement. </p>
                    <a href="#Contact"> <button className="button">Go</button></a> 
            </motion.div>
            
         </motion.div>
        </motion.div>
       

    )
}

export default Services;