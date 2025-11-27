import ChromaGrid from "./animations/ChromaGrid";
import { useThemeStore } from "../store/themeStore";
import { ArrowRight } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const WhatIBuilt = () => {
  const { theme } = useThemeStore();
  const projects = [
    {
      image: "/plateaccess.gif",
      title: "PlateAccess",
      description: "A license plate recognition and access control system with real time entry monitoring and automated access logging. Integrated with a Python Flask LPR API.",
      tech: ["MERN", "Socket.io", "JWT", "Tailwind CSS", "Axios", "Zustand", "Render"],
      accentColor: theme === "light" ? "#007bff" : "#64ffda",
      github: "https://github.com/brynsgtn/plate-access",
      demo: "https://plate-access.onrender.com/"
    },
    {
      image: "/maritext.gif",
      title: "Maritext",
      description: "A real time messaging web app with email verification, password reset, contact management, delivery states, typing indicators, unsend, and invite a friend features.",
      tech: ["MERN", "Socket.io", "Mailtrap", "Cloudinary", "JWT", "Tailwind CSS", "Axios", "Zustand", "Render"],
      accentColor: theme === "light" ? "#007bff" : "#64ffda",
      github: "https://github.com/brynsgtn/maritext-realtime-chat-app",
      demo: "https://maritext-realtime-chat-app.onrender.com/"
    },
    {
      image: "/attendancesystem.gif",
      title: "Attendance System",
      description: "A secure attendance system with JWT auth, role based access, automated onboarding, Mailtrap emails, and a responsive light and dark UI.",
      tech: ["MERN", "JWT", "Framer Motion", "Mailtrap", "Tailwind CSS", "Axios", "Zustand", "Render"],
      accentColor: theme === "light" ? "#007bff" : "#64ffda",
      github: "https://github.com/brynsgtn/attendance-system-webapp",
      demo: "https://intern-attendance-webapp.onrender.com/"
    }
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-150px 0px -150px 0px" });

  return (
    <div ref={sectionRef} className="min-h-screen text-primary-content py-20 px-4 xl:px-50">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="text-primary-content text-4xl font-bold mb-10 py-5 relative"
      >
        What I Built
        <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
      </motion.h1>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        style={{ minHeight: '1200px', position: 'relative' }}
      >
        <ChromaGrid
          items={projects}
          radius={400}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </motion.div>

      {/* Other Projects Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-20 text-center"
      >
        <button
          onClick={() => window.location.href = '/other-projects'}
          className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-success text-success hover:bg-success hover:text-base-100 transition-all duration-300 rounded-lg font-semibold group hover:cursor-pointer"
        >
          View Other Projects
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
};

export default WhatIBuilt;
