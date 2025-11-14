import { MoonIcon, SunIcon } from "lucide-react"


const Header = () => {
    return (
        <div className="navbar bg-transparent shadow-md h-24 px-10">
            <div className="flex-1">
                <p className="text-2xl font-medium text-primary-content font-stretch-expanded tracking-wider logo cursor-pointer hover:text-primary transition duration-300 ease-in-out">
                    &lt;brynsgtn/&gt;
                </p>
            </div>
            <div className="flex items-center gap-3">
                {/* Theme toggle switch */}
                <MoonIcon className="w-6 h-6 text-primary-content ml-2" />
                <input type="checkbox" defaultChecked className="toggle" />
                <SunIcon className="w-6 h-6 text-primary-content mr-2" />
            </div>
        </div>
    )
}

export default Header