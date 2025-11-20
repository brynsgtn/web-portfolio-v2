import ElectricBorder from "./ElectricBorder"
import { useThemeStore } from "../store/themeStore"
import DecryptedText from "./animations/DecryptedText";
import FallingText from "./animations/FallingText";


const AboutMe = () => {
    const { theme } = useThemeStore();


    return (
        <>
            <div className="min-h-screen pt-10">
                <h1 className="text-primary-content text-4xl font-bold  py-5 relative">
                    About Me
                    <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
                </h1>
                <div className="flex flex-col lg:flex-row mt-10 text-secondary-content py-5">
                    <div className="basis-1/2 mt-10 md:mt-0">
                        <p className="md:mt-10">
                            <DecryptedText
                                text="I am a full-stack developer with hands-on experience building web applications using the MERN stack. I enjoy turning ideas into functional, user-friendly systems, integrating features such as authentication, database management, and cloud deployment. My focus is on writing clean, maintainable code and following best practices throughout the development process."
                                animateOn="both"
                                revealDirection="start"
                                speed={100}
                            />
                        </p>
                        {/* <p className="mt-5">
                            <DecryptedText
                                text="I am proficient in both frontend and backend development, creating responsive user interfaces and reliable backend services. I work with modern frameworks and tools to deliver applications that are well-structured, efficient, and easy to maintain. I also prioritize testing, version control, and proper API design to ensure applications perform reliably under real-world conditions."
                                animateOn="both"
                                revealDirection="start"
                                speed={100}
                            />
                        </p> */}
                        <p className="mt-5">
                            <DecryptedText
                                text="I am currently learning TypeScript and Next.js to enhance my full-stack development skills. Outside of coding, I enjoy playing basketball, watching anime, and practicing video editing. I am passionate about exploring new technologies, building meaningful applications, and growing as a versatile software engineer."
                                animateOn="both"
                                revealDirection="start"
                                speed={100}
                            />
                        </p>
                    </div>
                    <div className="basis-1/2 text-center order-first my-auto hover-3d">
                        <ElectricBorder
                            color={`${theme === "dark" ? "#64ffda" : "#000"}`}
                            speed={1}
                            chaos={0.5}
                            thickness={7}
                            style={{ borderRadius: 10 }}
                            className="w-60 md:w-90 mx-auto"
                        >
                            <figure className="hover-gallery h-80 md:h-100 p-2 opacity-60 hover:opacity-100">
                                <img
                                    src="/pic.jpg"
                                    className=" w-full h-full object-cover"
                                />
                                <img
                                    src="/pic2.jpg"
                                    className=" w-full h-full object-cover"
                                />
                                <img
                                    src="/pic3.jpg"
                                    className="w-full h-full object-cover"
                                />
                            </figure>
                        </ElectricBorder>
                    </div>
                </div>
                <div className="h-80 mt-10">
                    <FallingText
                        text={`I build things on the internet and sometimes they even work on the first try.`}
                        highlightWords={["build", "things", "internet", "sometimes", "work", "first", "try"]}
                        highlightClass="highlighted"
                        trigger="hover"
                        backgroundColor="transparent"
                        wireframes={false}
                        gravity={0.40}
                        fontSize="2rem"
                        mouseConstraintStiffness={0.2}
                    />
                </div>

            </div>
        </>
    )
}

export default AboutMe