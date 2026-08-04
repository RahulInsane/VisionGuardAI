import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="text-center mt-8 mb-8">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        VisionGuard AI
      </motion.h1>

      <motion.p

        initial={{ opacity:0 }}

        animate={{ opacity:1 }}

        transition={{ delay:.2 }}

        className="mt-3 text-zinc-400 text-lg"

      >

        Detect whether an uploaded image is AI Generated or Real.

      </motion.p>

    </section>
  );
}

export default Hero;