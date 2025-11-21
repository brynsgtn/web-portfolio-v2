
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';


const projects = [
    {
        year: '2025',
        name: 'E-Commerce Store',
        builtWith: ['MERN', 'Tailwind CSS', 'JWT', 'Cloudinary', 'Redis', 'Stripe', 'Render'],
        github: 'https://github.com/brynsgtn/e-commerce-store',
        live: 'https://e-commerce-store-lman.onrender.com/'
    },
    {
        year: '2025',
        name: 'Bucket List App',
        builtWith: ['MERN', 'Tailwind CSS', 'JWT', 'Render', 'Mongoose', 'Toastify'],
        github: 'https://github.com/brynsgtn/bucket-list-app',
        live: 'https://bucket-list-app-9lfh.onrender.com/'
    },
    {
        year: '2024',
        name: 'Dish Discover',
        builtWith: ['ReactJs', 'Mantine', 'TheMealDB', 'SWR', 'React Toastify', 'Netlify'],
        github: 'https://github.com/brynsgtn/recipe-finder',
        live: 'https://dish-discover-brynsgtn.netlify.app/'
    },
    {
        year: '2024',
        name: 'ShopSmart',
        builtWith: ['ReactJs', 'Bootstrap', 'FakeStoreAPI', 'SweetAlert2', 'Netlify'],
        github: 'https://github.com/brynsgtn/fake-store',
        live: 'https://shopsmart-brynsgtn.netlify.app/'
    },
    {
        year: '2024',
        name: 'To-Do List',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'Bootstrap', 'Firebase', 'Netlify'],
        github: 'https://github.com/brynsgtn/toDoList',
        live: 'https://to-do-list-brynsgtn.netlify.app/'
    },

    {
        year: '2024',
        name: 'Web Portfolio v1',
        builtWith: ['ReactJs', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/brynsgtn/web-portfolio',
        live: 'https://brynsgtn-webportfolio.vercel.app/'
    },
    {
        year: '2024',
        name: 'TrackFit Health Monitor',
        builtWith: ['ReactJs', 'Tailwind CSS', 'Netlify'],
        github: 'https://github.com/brynsgtn/fitness-first',
        live: 'https://track-fit-mapua.netlify.app/'
    },
    {
        year: '2024',
        name: 'NBA Memory Game',
        builtWith: ['ReactJs', 'Bootstrap', 'Vercel'],
        github: 'https://github.com/brynsgtn/memory-game',
        live: 'https://memory-game-beryl-nu.vercel.app/'
    },
    {
        year: '2024',
        name: 'CV Builder',
        builtWith: ['ReactJs', 'CSS', 'Netlify'],
        github: 'https://github.com/brynsgtn/cv-builder',
        live: 'https://cv-builder-prototype.netlify.app/'
    },
    {
        year: '2024',
        name: 'Dynamic Digital Clock',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'DayJS', 'MicroModal', 'Vite', 'Netlify'],
        github: 'https://github.com/brynsgtn/Dynamic-Digital-Clock',
        live: 'https://digital-clock-brynsgtn.netlify.app/'
    },
    {
        year: '2024',
        name: 'Cash Register',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'Netlify'],
        github: 'https://github.com/brynsgtn/cashRegister',
        live: 'https://cash-register-brynsgtn.netlify.app/'
    },
    {
        year: '2024',
        name: 'US Phone Number Validator',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'Netlify'],
        github: 'https://github.com/brynsgtn/telephoneNumberValidator',
        live: 'https://us-number-validator.netlify.app/'
    },
    {
        year: '2024',
        name: 'Palindrome Checker',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'Netlify'],
        github: 'https://github.com/brynsgtn/palindromeChecker',
        live: 'https://palindromechecker-brynsgtn.netlify.app/'
    },
    {
        year: '2024',
        name: 'Roman Numeral Converter',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'Netlify'],
        github: 'https://github.com/brynsgtn/romanNumeralConverter',
        live: 'https://romannumeralconverterapp.netlify.app/'
    },
    {
        year: '2024',
        name: 'Weather App',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'OpenWeatherMapAPI', 'Netlify'],
        github: 'https://github.com/brynsgtn/weatherApp',
        live: 'https://weather-application-brynsgtn.netlify.app/'
    },
    {
        year: '2024',
        name: 'Pokémon Search App',
        builtWith: ['HTML', 'CSS', 'TypeScript', 'PokeAPI', 'Netlify'],
        github: 'https://github.com/brynsgtn/pokemonSearchApp',
        live: 'https://pokesearchapp.netlify.app/'
    }
];


const OtherProjects = () => {
    return (
        <div className='min-h-screen py-20 lg:py-30'>
            <h1 className="text-primary-content text-4xl lg:text-5xl font-semibold mb-10 py-5 relative">
                Other Projects
                <span className="absolute left-0 bottom-0 w-24 border-b-2 border-primary-content"></span>
            </h1>
            <p className="text-success tracking-wider font-light mb-8 text-lg">
                A collection of other projects I've worked on
            </p>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="">
                            <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-content">
                                Year
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-content">
                                App Name
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-content">
                                Built With
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-semibold text-secondary-content">
                                Links
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {projects.map((project, index) => (
                            <tr
                                key={index}
                                className=" hover:bg-base-200 transition-colors"
                            >
                                <td className="px-6 py-4 text-success font-normal">
                                    {project.year}
                                </td>
                                <td className="px-6 py-4 text-primary-content font-semibold">
                                    {project.name}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.builtWith.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-success text-xs rounded-full border border-success/30"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary-content hover:text-success transition-colors"
                                                aria-label="View GitHub repository"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary-content hover:text-success transition-colors"
                                                aria-label="View live project"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 mb-8 px-4 py-2 mt-20 text-success hover:text-primary-content transition-colors group hover:cursor-pointer"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back</span>
            </button>
        </div>
    );
};

export default OtherProjects;