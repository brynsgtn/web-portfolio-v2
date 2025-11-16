
import RotatingText from "./animations/RotatingText";



const HeroSection = () => {

  return (
    <>
      <div className="min-h-screen pt-50">
        <p className="text-accent tracking-wider font-light text-xl mb-5">Hi, my name is </p>
        <h1 className="text-6xl md:text-7xl font-semibold text-second-content mb-5">Bryan Suguitan.</h1>
        <RotatingText
          texts={['Software Engineer', 'Full-Stack Developer', 'Frontend Developer', 'Backend Developer', 'QA Engineer']}
          mainClassName="ps-2 text-secondary-content font-semibold text-5xl md:text-6xl overflow-hidden py-0.5 sm:py-1 md:py-2 r rounded-lg w-fit"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={3000}
        />
        <p className="max-w-2xl ps-5 text-xl mt-5 font-extralight text-secondary-content">
          I build full stack applications with attention to usability, stability, and security. I like integrating cloud services, writing tests, and improving code through modern engineering practices
        </p>
        <div className="mt-10 md:ps-10">
          <button className="btn border-accent text-accent mt-5 hover:text-base-100 hover:bg-accent transition-colors duration-300 bg-transparent">
            About Me
          </button>
          <button
            onClick={() => window.open('/Suguitan-Bryan-CV(FSD).pdf', '_blank')}
            className="btn border-primary-content text-primary-content mt-5 ml-5 hover:text-base-100 hover:bg-primary-content transition-colors duration-300 bg-transparent"
          >
            Resume
          </button>
        </div>
      </div>

    </>

  )
}

export default HeroSection;