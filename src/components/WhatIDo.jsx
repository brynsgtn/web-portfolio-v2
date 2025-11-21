import LogoLoop from "./animations/LogoLoop";
import {
    SiReact,
    SiMongodb,
    SiNodedotjs,
    SiTailwindcss,
    SiMysql,
    SiHtml5,
    SiCss3,
    SiSocketdotio,
    SiAxios,
    SiMocha,
    SiChai,
    SiSelenium,
    SiPython,
    SiRender
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5'
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import StarBorder from "./animations/StarBorder";
import TrueFocus from "./animations/TrueFocus";
import { useThemeStore } from "../store/themeStore";

const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNodedotjs />, title: "Node.js" },
    { node: <IoLogoJavascript />, title: "JavaScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiMongodb />, title: "MongoDB" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiHtml5 />, title: "HTML 5" },
    { node: <SiCss3 />, title: "CSS 3" },
    { node: <SiSocketdotio />, title: "Sockey.io" },
    { node: <SiAxios />, title: "Axios" },
    { node: <SiMocha />, title: "Mocha" },
    { node: <SiChai />, title: "Chai" },
    { node: <SiSelenium />, title: "Selenium" },
    { node: <SiPython />, title: "Python" },
    { node: <SiRender />, title: "Render" },
];

const techStacks = [
    {
        id: 'fullstack',
        title: 'Full-Stack Development',
        technologies: [
            'React.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'MySQL',
            'REST APIs',
            'Cloud Deployment',
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend Development',
        technologies: [
            'React.js',
            'HTML5 & CSS3',
            'Tailwind CSS',
            'Zustand',
            'Socket.io',
            'Axios',
            'Responsive Design',
            'Web Accessibility',
            'Performance Optimization',
            'Vercel',
        ]
    },
    {
        id: 'backend',
        title: 'Backend Development',
        technologies: [
            'Node.js',
            'Express.js',
            'MongoDB & Mongoose',
            'MySQL',
            'RESTful API Design',
            'Authentication (JWT)',
            'Socket.io',
            'API Security',
            'Database Design',
            'Render',
        ]
    },
    {
        id: 'qa',
        title: 'QA Engineering',
        technologies: [
            'Mocha',
            'Chai',
            'Selenium',
            'Postman',
            'Unit Testing',
            'Integration Testing',
            'E2E Testing',
            'Test Automation',
            'Bug Tracking & Reporting'
        ]
    }
];




const AccordionItem = ({ item, isOpen, onToggle }) => {


    return (
        <div className="border-b border-base-300 bg-base-100">
            <button
                onClick={onToggle}
                className="w-full py-8 px-6 flex items-center justify-between hover:cursor-pointer transition-colors"
            >
                <span className="text-lg font-semibold text-primary-content">{item.title}</span>
                <ChevronDown
                    className={`w-5 h-5 text-success transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="px-6 pb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {item.technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-secondary-content"
                            >
                                <span className="text-success">▹</span>
                                <span>{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
const WhatIDo = () => {
    const [openAccordion, setOpenAccordion] = useState('');
    const { theme } = useThemeStore();
    const handleToggle = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    const [direction, setDirection] = useState("right");

    useEffect(() => {
        const media = window.matchMedia("(min-width: 1024px)");

        const update = () => {
            setDirection(media.matches ? "up" : "right");
        };

        update();
        media.addEventListener("change", update);

        return () => media.removeEventListener("change", update);
    }, []);
    return (
        <>
            {/* Tech Stack Section */}
            <div className="min-h-screen pt-20 ">
                <h1 className="text-primary-content text-4xl font-bold mb-10  py-5 relative">
                    What I Do
                    <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
                </h1>
                {/* Accordion */}
                <div className="lg:flex justify-around items-center">
                    <div>
                        <StarBorder
                            className="backdrop-blur-sm max-w-2xl w-full mx-auto shadow-2xl"
                            color="cyan"
                            speed="5s"
                        >
                            <div className=" rounded-lg overflow-hidden shadow-lg hover:bg-transparent">
                                {techStacks.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        item={item}
                                        isOpen={openAccordion === item.id}
                                        onToggle={() => handleToggle(item.id)}
                                        className="hover:bg-none"
                                    />
                                ))}
                            </div>
                        </StarBorder>
                    </div>

                    {/* Logo Loop */}
                    <div style={{ position: 'relative', overflow: 'hidden' }} className=" px-10 mt-10 h-20 lg:h-130 align-middle border border-success rounded-3xl shadow-2xl">
                        <LogoLoop
                            logos={techLogos}
                            speed={30}
                            direction={direction}
                            logoHeight={55}
                            gap={60}
                            hoverSpeed={0}
                            scaleOnHover
                            ariaLabel="Technology partners"
                            className="rounded-lg overflow-hidden bg-transparent w-fit"
                        />

                    </div>
                </div>
                <div className="mt-15">
                    <TrueFocus
                        sentence="Code. Learn. Evolve."
                        manualMode={false}
                        blurAmount={15}
                        borderColor={theme === 'dark' ? '#64ffda' : '#007bff'}
                        glowColor={theme === 'dark' ? '#64ffda' : '#007bff'}
                        animationDuration={2}
                        pauseBetweenAnimations={1.5}
                    />


                </div>

            </div>
        </>
    )
}

export default WhatIDo