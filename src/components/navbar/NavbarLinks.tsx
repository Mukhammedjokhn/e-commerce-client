import { NavLink } from "react-router-dom";

const NavbarLinks = ({ links }: NavbarLinksProps) => {
    return (
        <div className="flex items-center gap-12">
            {links.map((item, index) => (
                <NavLink key={index} to={item.path} className="relative pb-2">
                    {({ isActive }) => (
                        <>
                            <span className={`transition-all duration-300`}>
                                {item.title}
                            </span>
                            <span
                                className={`absolute left-0 bottom-1 w-full h-[2px] bg-[var(--primary-dark)] transition-transform origin-left duration-300 ${
                                    isActive ? "scale-x-100" : "scale-x-0"
                                }`}
                            />
                        </>
                    )}
                </NavLink>
            ))}
        </div>
    );
};
export default NavbarLinks;
