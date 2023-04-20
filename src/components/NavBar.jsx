import { headerUrl } from "../constants";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavBar = () => {
    const colorMouseOver = (event) => {
        console.log("El mouse está sobre el elemento: ", event.target);
    }
    return (
        <>
            <nav className="w-full max-w-screen-lg text-xs" >
                <ul className=" flex justify-around uppercase ">
                    {headerUrl.map((nav, index) => (
                        <li
                            key={nav.id}
                            onMouseOver={colorMouseOver}
                            className="hover:text-violet-400 cursor-pointer font-thin tracking-[.2em] ">
                            {nav.title} <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default NavBar