import { links } from "../constants/navigation";
import { TbChristmasTreeFilled } from "react-icons/tb";

const NavBar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex flex-row justify-between p-6 font-[family-name:var(--font-body)]">
            <div className="flex flex-row gap-2 tracking-wide">
                <TbChristmasTreeFilled size={26} />
                XmasJoy
            </div>
            <div>
                <ul className="flex gap-8 p-2 mr-10 ">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="tracking-widest">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;