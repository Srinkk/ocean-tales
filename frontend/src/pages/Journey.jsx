// src/pages/Journey.jsx
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import GLBViewer from "../components/GLBViewer";


const sections = [
  {
    id: "surface",
    bg: "bg-gradient-to-b from-sky-300 to-sky-500",
    title: "Dive Into the Deep",
    text: "The ocean covers over 70% of Earth’s surface. Let’s explore the beauty and life beneath the waves.",
    model: "glb",
  },
  {
    id: "turtles",
    bg: "bg-gradient-to-b from-sky-500 to-cyan-600",
    title: "The Ancient Navigators",
    text: "Sea turtles have roamed the oceans for over 100 million years. They return to the same beach where they were born to lay eggs.",
    model: "https://www.youtube.com/embed/WcQkn8VAgHY?si=Ac3tpXGvRvHCbvI7"
  },
  {
    id: "coral",
    bg: "bg-gradient-to-b from-cyan-600 to-blue-700",
    title: "Coral Reefs — Rainforests of the Sea",
    text: "Home to 25% of all marine species, coral reefs protect coastlines and support biodiversity — but they’re under threat from warming and acidification.",
    model: "https://my.spline.design/coralreefmodel"
  },
  {
    id: "bloop",
    bg: "bg-gradient-to-b from-blue-700 to-indigo-900",
    title: "The Bloop — Ocean's Unsolved Mystery",
    text: "In 1997, a mysterious ultra-low-frequency sound was detected in the South Pacific. Dubbed 'The Bloop', it was louder than any known animal and heard across thousands of miles. Though scientists suspect icequakes, some still believe it could’ve been an undiscovered deep-sea creature.",
    model: "https://www.youtube.com/embed/OBN56wL35IQ?si=3C6b4S2fTFJfmgzq" 
  },
  {
    id: "danger",
    bg: "bg-gradient-to-b from-indigo-900 to-gray-900",
    title: "Oceans in Danger",
    text: "Plastic pollution, overfishing, and climate change threaten marine ecosystems. Our actions ripple through these delicate waters.",
  },
  {
    id: "hope",
    bg: "bg-gradient-to-b from-gray-900 to-yellow-300",
    title: "Be the Change",
    text: "Support ocean conservation, reduce plastic use, and spread awareness. The future of our ocean depends on us.",
  },
];

export default function Journey() {
  return (
    <div className="w-full">
      <Navbar showExplore={false} />

      {sections.map(({ id, bg, title, text, model }, index) => {
        const isEven = index % 2 === 0;
        return (
          <section
            key={id}
            id={id}
            className={`${bg} min-h-screen flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"
              } items-center justify-center gap-12 px-6 py-20 text-white`}
          >
            <motion.div
              className={`md:w-1/2 text-center md:text-${isEven ? "left" : "right"}`}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">{title}</h2>
              <p className="text-lg max-w-xl justify-center mx-auto md:mx-0">{text}</p>
            </motion.div>
            {model === "glb" && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full max-w-4xl mt-10"
              >
                <GLBViewer modelPath="../assets/sea_turtle.glb" />
              </motion.div>
            )}

            {model && (
              <motion.div
                className="md:w-1/2 w-full flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <iframe
                  className="w-full max-w-2xl h-[350px] rounded-xl shadow-xl"
                  src={model}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </motion.div>
            )}
          </section>
        );
      })}
    </div>
  );
}
