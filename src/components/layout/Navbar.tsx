import {ArrowUpRight} from "lucide-react"

const navLinks = ["Product", "Solutions", "Resources"];

function Navbar(){
    return(
        <header className="w-full">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white" aria-label="DevFlow home">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">D</span>
                    <span>devflow</span>
                </a>

                {/* Desktop Navigation */}

                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link)=>(
                        <a key={link} href="#" className="text-sm text-zinc-400 transition-colors duration-200 hover:text-white">{link}</a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <button className="hidden text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white sm:block">
                        Log in
                    </button>
                    <button className="group flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5">
                        Start building
                        <ArrowUpRight size={15} strokeWidth={2} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;