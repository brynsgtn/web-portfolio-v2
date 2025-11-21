



import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ExternalLink, Github } from 'lucide-react';

const ChromaGrid = ({ items, className = '', radius = 400, damping = 0.45, fadeOut = 0.6, ease = 'power3.out' }) => {
    const rootRef = useRef(null);
    const fadeRef = useRef(null);
    const setX = useRef(null);
    const setY = useRef(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px');
        setY.current = gsap.quickSetter(el, '--y', 'px');
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x, y) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = e => {
        const r = rootRef.current.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardMove = e => {
        const c = e.currentTarget;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative w-full h-full flex flex-col gap-12 p-6  ${className}`}
            style={{
                '--r': `${radius}px`,
                '--x': '50%',
                '--y': '50%',

            }}
        >
            {items.map((project, i) => {
                const isEven = i % 2 === 0;

                return (
                    <article
                        key={i}
                        onMouseMove={handleCardMove}
                        className="group relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 bg-black/40 backdrop-blur-sm"
                        style={{
                            '--card-border': project.accentColor || '#3B82F6',
                            '--spotlight-color': 'rgba(255,255,255,0.1)'
                        }}
                    >
                        {/* Spotlight effect */}
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-100"
                            style={{
                                background: 'radial-gradient(circle 500px at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 40%)'
                            }}
                        />

                        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0`}>
                            {/* Project image/gif */}
                            <div className="relative z-20 w-full lg:w-[55%] h-[200px] md:h-[220px] lg:h-[450px] flex-shrink-0 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-fill transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent lg:hidden" />

                                {/* Accent border glow on image */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    style={{
                                        boxShadow: `inset 0 0 50px ${project.accentColor}30`
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 w-full lg:w-[45%] flex flex-col justify-center p-4 md:p-5 lg:p-10">
                                <div className="mb-3 lg:mb-5">
                                    <div className="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                                        <div
                                            className="w-1 h-6 lg:h-8 rounded-full"
                                            style={{ backgroundColor: project.accentColor }}
                                        />
                                        <h3 className="text-lg md:text-xl lg:text-3xl font-bold text-white group-hover:text-white/90 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed line-clamp-2 xl:line-clamp-none">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-6">
                                    {project.tech?.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1.5 lg:px-2 lg:py-1.5 text-xs font-normal border border-success rounded-xl text-white/80 transition-colors"
                                            style={{
                                                boxShadow: `0 0 20px ${project.accentColor}10`
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex flex-wrap gap-2 lg:gap-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-3 lg:py-1.5 text-xs lg:text-sm font-medium text-white/90 bg-white/5 rounded-lg hover:bg-white/10 transition-all border border-white/10 hover:border-white/20"
                                        >
                                            <Github size={14} className="lg:w-[18px] lg:h-[18px]" />
                                            <span className=''>View Code</span>
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 lg:px-3 lg:py-1.5 text-xs lg:text-sm font-medium text-white rounded-lg transition-all border-2 hover:scale-105 hover:bg-success"
                                            style={{
                                                borderColor: project.accentColor,
                                                boxShadow: `0 0 20px ${project.accentColor}30`
                                            }}
                                        >
                                            <ExternalLink size={14} className="lg:w-[18px] lg:h-[18px]" />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Accent border glow */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-5"
                            style={{
                                boxShadow: `0 0 40px ${project.accentColor}20, inset 0 0 40px ${project.accentColor}10`
                            }}
                        />
                    </article>
                );
            })}


        </div>
    );
};

export default ChromaGrid;