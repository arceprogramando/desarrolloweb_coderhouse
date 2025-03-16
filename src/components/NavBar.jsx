import { arrow } from "../assets";
import { headerUrl } from "../constants";


const NavBar = () => {
    
    return (
        <>
            <nav className="w-full max-w-screen-lg text-xs mx-auto" >
                <ul className=" flex justify-around uppercase ">
                    {headerUrl.map((nav) => (
                        <li
                            key={nav.id}
                            className="hover:text-violet-400 cursor-pointer font-thin tracking-[.2em] flex items-center">
                            {nav.title}
                            <img src={arrow} alt="button arrow down" className="w-2 h-2" />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavBar