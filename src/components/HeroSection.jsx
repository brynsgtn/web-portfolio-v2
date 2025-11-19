import { Button } from "./ui/button"
import RotatingText from "./animations/RotatingText";
import { SocialIcon } from "react-social-icons";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen pt-50 relative">
        <p className="text-success tracking-wider font-light text-xl mb-5">Hi, my name is </p>
        <h1 className="text-6xl md:text-7xl font-semibold text-primary-content mb-5">Bryan Suguitan.</h1>
        <RotatingText
          texts={['Software Engineer', 'Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'QA Engineer']}
          mainClassName="text-secondary-content font-semibold text-5xl md:text-6xl overflow-hidden py-0.5 sm:py-1 md:py-2 r rounded-lg w-fit"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
        <p className="max-w-2xl text-xl mt-5 font-extralight text-secondary-content">
          I build full stack applications with attention to usability, stability, and security. I like integrating cloud services, writing tests, and improving code through modern engineering practices
        </p>
        <div className="mt-5">
          <SocialIcon network="github" href="https://github.com/brynsgtn" target="_blank" borderRadius="35%" />
          <SocialIcon network="linkedin" href="https://www.linkedin.com/in/bryan-suguitan/" target="_blank" borderRadius="35%" className="ms-3" />
          <SocialIcon network="facebook" href="https://www.facebook.com/brynsgtn" target="_blank" borderRadius="35%" className="ms-3" />
          <SocialIcon network="instagram" href="https://www.instagram.com/brynsgtn/" target="_blank" borderRadius="35%" className="ms-3" />
          <button
            onClick={() => window.open('/Suguitan-Bryan-CV(FSD).pdf', '_blank')}
            className="btn border-success text-success ml-5 hover:text-base-100 hover:bg-success transition-colors duration-300 bg-transparent rounded-md"
          >
            Resume
          </button>
        </div>

        <button
          onClick={scrollToNext}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 px-6 py-3 border border-success/30 bg-success/10 backdrop-blur-sm rounded-md flex items-center gap-2 hover:bg-success/20 transition-all cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-success text-sm font-medium">Explore More</span>
          <ChevronDown className="w-4 h-4 text-success animate-bounce" />
        </button>
      </div>
    </>
  )
}

export default HeroSection;