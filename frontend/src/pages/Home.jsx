import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import oceanBg from "../assets/ocean-bg-home.jpg";
import turtle from "../assets/turtle-home.png";
import starfish from "../assets/starfish-home.png"
import OceanBackgroundWrapper from "../components/OceanBackgroundWrapper";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <OceanBackgroundWrapper>
    <Navbar/>
    <div
      className="relative min-h-screen bg-blue-900 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${oceanBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
   
      <div className="relative z-10 flex-1 flex-col items-center justify-center w-full h-full px-6 pt-20 pb-16 md:px-20 mt-5">
     
        <section className="flex text-center md:text-left  w-[60%]">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }} 
            className="text-4xl md:text-7xl font-semibold leading-tight md:w-[700px] "
          >
            PROTECT OUR <span className="text-yellow-400">OCEAN'S </span>WONDERS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full md:w-[100px] mt-6 flex justify-center align-start"
          >
            <img
              src={starfish}
              alt="starfish in ocean"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          
        </section>
        <section className="flex flex-col md:flex-row justify-between items-start max-w-screen md:gap-x-16 py-10">
          {/* Text Section */}
          <div className="flex flex-col flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeInOut" }} 
              className="text-md max-w-md flex justify-center md:justify-start text-gray-400"
            >
              Join the mission to protect the diverse and enchanting creatures of the ocean.
              Our actions today ensure a vibrant, healthy sea for tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 2, ease: "easeOut" }} 
              className="mt-4 flex justify-start"
            >
              <Link
                to="/learn"
                className="bg-[#4aa1ca] hover:bg-blue-400 text-[#1f2125] font-semibold px-6 py-3 rounded-full"
              >
                Learn More
              </Link>
            </motion.div>
             <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full md:w-[100px] mt-6 flex justify-center align-start"
          >
            <img
              src={starfish}
              alt="starfish in ocean"
              className="w-full h-auto object-contain"
            />
          </motion.div>
          </div>

          {/* Turtle Right - One-time animation */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: -110 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full md:w-[600px] flex justify-center align-start"
          >
            <img
              src={turtle}
              alt="Turtle in ocean"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </section>
      </div>
    </div>
    </OceanBackgroundWrapper>
  );
}