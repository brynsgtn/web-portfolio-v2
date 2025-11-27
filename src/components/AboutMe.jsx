import ElectricBorder from "./animations/ElectricBorder";
import { useThemeStore } from "../store/themeStore";
import DecryptedText from "./animations/DecryptedText";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
};

const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
};

const GitHubStats = ({ username, trigger }) => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://api.github.com/users/${username}`);
                if (!res.ok) throw new Error("Failed to fetch");
                const data = await res.json();
                setStats({
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    gists: data.public_gists
                });
            } catch (err) {
                console.error(err);
                setError("Unable to load GitHub stats");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, [username]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-8">
                <div className="animate-pulse flex gap-4">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="h-20 w-32 bg-base-300 rounded-lg"></div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return <p className="text-error text-center py-4">{error}</p>;
    }

    const statItems = [
        { label: "Repositories", value: stats.repos, icon: "📦" },
        { label: "Followers", value: stats.followers, icon: "👥" },
        { label: "Following", value: stats.following, icon: "👤" },
        { label: "Gists", value: stats.gists, icon: "📝" }
    ];

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={trigger ? "visible" : "hidden"}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
            {statItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={trigger ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="bg-base-200 rounded-lg p-4 text-center hover:bg-base-300 transition-all duration-300 hover:scale-105 border border-base-300"
                >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-3xl font-bold text-primary-content mb-1">
                        {item.value}
                    </div>
                    <div className="text-sm text-secondary-content opacity-70">
                        {item.label}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

const AboutMe = () => {
    const { theme } = useThemeStore();

    const sectionRef = useRef(null);

    const sectionInView = useInView(sectionRef, {
        once: false,
        margin: "0px 0px -150px 0px"
    });

    return (
        <div ref={sectionRef} className="min-h-screen pt-10 xl:px-50">

            <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                transition={{ duration: 0.7 }}
                className="text-primary-content text-4xl font-bold py-5 relative"
            >
                About Me
                <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
            </motion.h1>

            <div className="flex flex-col lg:flex-row mt-10 text-secondary-content py-5">

                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    className="basis-1/2 mt-10 md:mt-0"
                >
                    <p className="md:mt-10">
                        <DecryptedText
                            text="I am a full stack developer with hands on experience building web applications using the MERN stack. I enjoy turning ideas into functional and user friendly systems with features such as authentication, database management, and cloud deployment. My focus is always on clean and maintainable code."
                            animateOn="both"
                            revealDirection="start"
                            speed={100}
                        />
                    </p>

                    <p className="mt-5">
                        <DecryptedText
                            text="I am learning TypeScript and Next.js to improve my skills. I enjoy basketball, anime, and video editing. I like exploring new technologies and building meaningful applications that help me grow as a software engineer."
                            animateOn="both"
                            revealDirection="start"
                            speed={100}
                        />
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    animate={sectionInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    className="basis-1/2 text-center order-first my-auto hover-3d"
                >
                    <ElectricBorder
                        color={`${theme === "dark" ? "#64ffda" : "#000"}`}
                        speed={1}
                        chaos={0.5}
                        thickness={7}
                        style={{ borderRadius: 10 }}
                        className="w-60 md:w-90 mx-auto"
                    >
                        <figure className="hover-gallery h-80 md:h-100 p-2 opacity-60 hover:opacity-100">
                            <img src="/pic.jpg" className="w-full h-full object-cover" />
                            <img src="/pic2.jpg" className="w-full h-full object-cover" />
                            <img src="/pic3.jpg" className="w-full h-full object-cover" />
                        </figure>
                    </ElectricBorder>
                </motion.div>

            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                transition={{ duration: 0.8 }}
                className="mt-10 max-w-4xl mx-auto"
            >
                <h2 className="text-primary-content text-xl font-semibold mb-4">
                    GitHub Activity
                </h2>

                <GitHubStats username="brynsgtn" trigger={sectionInView} />

                <div className="mt-8 flex justify-center">
                    <GitHubCalendar
                        username="brynsgtn"
                        blockSize={11}
                        blockMargin={5}
                        colorScheme={theme === "light" ? "dark" : "light"}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default AboutMe;
