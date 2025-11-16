import { MoonIcon, SunIcon } from "lucide-react"
import { useThemeStore } from "../store/themeStore"



const Header = () => {
    const { toggleTheme, theme } = useThemeStore();
    return (
        <div className="navbar bg-transparent h-24 px-10 absolute">
            <div className="flex-1">
                <p className="text-xl font-medium font-inter text-accent font-stretch-expanded tracking-wider logo cursor-pointer hover:text-(--primary-content) transition duration-300 ease-in-out">
                    &lt;brynsgtn/&gt;
                </p>
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