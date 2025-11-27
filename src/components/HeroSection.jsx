import { useState, useEffect, useRef } from "react";
import RotatingText from "./animations/RotatingText";
import { SocialIcon } from "react-social-icons";
import { ChevronDown } from "lucide-react";
import { motion, useInView } from "framer-motion";

const HeroSection = () => {
  const [showExplore, setShowExplore] = useState(true);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: false, margin: "-100px 0px -100px 0px" });

  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowExplore(window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };


  return (
    <div ref={sectionRef} className="min-h-screen pt-30 md:pt-40 lg:pt-50 xl:px-50 xl:pt-60 relative">

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        transition={{ duration: 0.7 }}
        className="text-success tracking-wider font-light text-3xl mb-5"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl md:text-7xl font-semibold text-primary-content mb-5"
      >
        Bryan Suguitan.
      </motion.h1>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <RotatingText
          texts={[
            "Software Engineer",
            "Full-Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "QA Tester",
          ]}
          mainClassName="text-secondary-content font-semibold text-3xl md:text-6xl overflow-hidden py-0.5 sm:py-1 md:py-2 r rounded-lg w-fit"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-2xl text-md md:text-xl mt-5 font-extralight text-secondary-content"
      >
        I build full stack applications with attention to usability, stability, and security. I like integrating cloud services, writing tests, and improving code through modern engineering practices
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={sectionInView ? "visible" : "hidden"}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-5 flex flex-wrap items-center gap-3"
      >
        <SocialIcon network="github" href="https://github.com/brynsgtn" target="_blank" borderRadius="35%" />
        <SocialIcon network="linkedin" href="https://www.linkedin.com/in/bryan-suguitan/" target="_blank" borderRadius="35%" />
        <SocialIcon network="facebook" href="https://www.facebook.com/brynsgtn" target="_blank" borderRadius="35%" />
        <SocialIcon network="instagram" href="https://www.instagram.com/brynsgtn/" target="_blank" borderRadius="35%" />
        <button
          onClick={() => window.open('/Suguitan-Bryan-CV(FSD).pdf', '_blank')}
          className="btn border-success text-success md:ml-5 hover:text-base-100 hover:bg-success transition-colors duration-300 bg-transparent rounded-md block md:inline mt-5 md:mt-0"
        >
          Resume
        </button>
      </motion.div>

      {showExplore && (
        <motion.button
          variants={fadeUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          transition={{ duration: 0.7, delay: 0.5 }}
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 md:px-6 py-2 md:border md:border-success/30 md:bg-success/10 backdrop-blur-sm rounded-md flex items-center gap-2 hover:bg-success/20 transition-all cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-success text-sm font-medium hidden md:block">
            Explore More
          </span>
          <ChevronDown className="w-4 h-4 text-success animate-bounce" />
        </motion.button>
      )}
    </div>
  );
};

export default HeroSection;
