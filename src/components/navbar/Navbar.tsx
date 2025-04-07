import { Link } from "react-router-dom";
import NavbarActions from "./NavbarActions";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
    const links: NavbarLinksType[] = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Sign Up",
            path: "/auth"
        }
    ];

    return (
        <div className='border-b border-[var(--border)] mt-10 pb-4 '>
            <div className='container flex items-center justify-between'>
                <Link to={"/"} className='font-bold text-2xl'>
                    Exclusive
                </Link>

                <NavbarLinks links={links} />

                <NavbarActions />
            </div>
        </div>
    );
};
export default Navbar;
