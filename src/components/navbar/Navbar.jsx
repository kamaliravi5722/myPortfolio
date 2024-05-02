import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return(
        <div className="navbar">
       {/* sidebar */}
      <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>
                Kamali
            </motion.span>
            <div className="social">
                <a href="#"><img src="facebook.png" alt=""/></a>
                <a href="https://www.instagram.com/luna_kat_ze?igsh=MWc2MTJyNjNsZm9jZw%3D%3D"><img src="instagram.png" alt=""/></a>
                <a href="#"><img src="youtube.png" alt=""/></a>
            </div>
        </div>
        </div>
    )
}

export default Navbar