import { useState, useEffect, useRef } from "react";
import { User, LogOut, Star, Package2, XCircle } from "lucide-react";
import ProfileButton from "./ProfileButton";
import { useLocation, useNavigate } from "react-router-dom";

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className='relative' ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-1.5 rounded-full cursor-pointer ${
                    pathname.includes("/account") &&
                    "bg-[var(--button)] text-[var(--foreground-white)]"
                }  `}
            >
                <User />
            </button>

            {isOpen && (
                <div className='absolute right-0 w-60 bg-black/80 backdrop-blur-xs rounded-md shadow-lg p-4 transition-all duration-300 animate-fade-in z-10 flex flex-col gap-2'>
                    <ProfileButton
                        icon={<User />}
                        label='Manage My Account'
                        onClick={() => {
                            setIsOpen(false);
                            navigate("/account-setting");
                        }}
                    />
                    <ProfileButton
                        icon={<Package2 />}
                        label='My Order'
                        onClick={() => setIsOpen(false)}
                    />
                    <ProfileButton
                        icon={<XCircle />}
                        label='My Cancellations'
                        onClick={() => setIsOpen(false)}
                    />
                    <ProfileButton
                        icon={<Star />}
                        label='My Reviews'
                        onClick={() => setIsOpen(false)}
                    />
                    <ProfileButton
                        icon={<LogOut />}
                        label='Logout'
                        onClick={() => setIsOpen(false)}
                        danger
                    />
                </div>
            )}
        </div>
    );
};

export default Profile;
