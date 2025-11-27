import { MoonIcon, SunIcon } from "lucide-react"
import { useThemeStore } from "../store/themeStore"
import { useState, useEffect } from "react"


const Header = () => {
    const { toggleTheme, theme } = useThemeStore();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header when scrolling up or at the top
            if (currentScrollY < lastScrollY || currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide header when scrolling down (and not at the top)
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`navbar backdrop-blur shadow-2xl flex items-center justify-between h-24 px-10 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="flex-1">
                <a
                    href="/"
                    className="text-xl font-medium font-inter text-success font-stretch-expanded tracking-wider logo cursor-pointer hover:text-primary-content transition duration-300 ease-in-out"
                >
                    &lt;brynsgtn/&gt;
                </a>
            </div>
            <div className="flex items-center gap-3">
                {/* Theme toggle switch */}
                <MoonIcon className="w-6 h-6 primary-content ml-2" />
                <input
                    type="checkbox"
                    checked={theme === 'light'}
                    className="toggle toggle-primary-content"
                    onChange={toggleTheme}
                />
                <SunIcon
                    className={`${theme === 'light' ? 'text-warning' : 'text-primary-content'} w-6 h-6 mr-2`}
                />
            </div>
        </div>
    )
}

export default Header