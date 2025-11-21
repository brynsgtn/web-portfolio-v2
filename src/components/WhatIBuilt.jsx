import ChromaGrid from "./animations/ChromaGrid";
import { useThemeStore } from "../store/themeStore";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const WhatIBuilt = () => {
    const { theme } = useThemeStore();
    const projects = [

        {
            image: "./public/plateaccess.gif",
            title: "PlateAccess",
            description: "A license plate recognition and access control system with real time entry monitoring and automated access logging. Integrated with a Python Flask LPR API. ",
            tech: ["MERN", "Socket.io", "JWT", "Tailwind CSS", "Axios", "Zustand", "Render"],
            accentColor: theme === "light" ? "#007bff" : "#64ffda",
            github: "https://github.com/brynsgtn/plate-access",
            demo: "https://plate-access.onrender.com/"
        },
        {
            image: "./public/maritext.gif",
            title: "Maritext",
            description: "A real time messaging web app with email verification, password reset, contact management, delivery states, typing indicators, unsend, and invite a friend features.",
            tech: ["MERN", "Socket.io", "Mailtrap", "Cloudinary", "JWT", "Tailwind CSS", "Axios", "Zustand", "Render"],
            accentColor: theme === "light" ? "#007bff" : "#64ffda",
            github: "https://github.com/brynsgtn/maritext-realtime-chat-app",
            demo: "https://maritext-realtime-chat-app.onrender.com/"
        },
        {
            image: "./public/attendancesystem.gif",
            title: "Attendance System",
            description: "A secure attendance system with JWT auth, role based access, automated onboarding, Mailtrap emails, and a responsive light and dark UI.",
            tech: ["MERN", "JWT", "Framer Motion", "Mailtrap", "Tailwind CSS", "Axios", "Zustand", "Render"],
            accentColor: theme === "light" ? "#007bff" : "#64ffda",
            github: "https://github.com",
            demo: "https://example.com"
        }
    ];

    return (
        <div className="min-h-screen  text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-primary-content text-4xl font-bold mb-10  py-5 relative">
                    What I Built
                    <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
                </h1>

                {/* Featured Projects */}
                <div style={{ minHeight: '1200px', position: 'relative' }}>
                    <ChromaGrid
                        items={projects}
                        radius={400}
                        damping={0.45}
                        fadeOut={0.6}
                        ease="power3.out"
                    />
                </div>

                {/* Other Projects */}
                <div className="mt-20 text-center">
                    <button
                        onClick={() => window.location.href = '/other-projects'}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-success text-success hover:bg-success hover:text-base-100 transition-all duration-300 rounded-lg font-semibold group hover:cursor-pointer"
                    >
                        View Other Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform " />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhatIBuilt;