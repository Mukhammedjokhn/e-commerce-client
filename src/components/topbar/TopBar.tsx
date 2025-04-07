import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const menuRef = useRef<HTMLDivElement | null>(null);

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

    const handleLanguageSelect = (lang: string) => {
        setSelectedLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="w-full h-12 bg-[var(--background-dark)] text-[var(--foreground-white)]">
            <div className="container flex items-center justify-between h-full px-4 md:px-0">
                <div className="hidden md:block w-1/4"></div>

                <div className="text-[12px] sm:text-[14px] flex items-center gap-2 justify-center w-full md:w-2/4 text-center">
                    <p className="font-light truncate max-w-[200px] sm:max-w-full">
                        Summer Sale For All Swim Suits And Free Express Delivery
                        - OFF 50%!
                    </p>
                    <button className="hidden sm:inline hover:text-[var(--primary-white)] font-semibold cursor-pointer underline">
                        ShopNow
                    </button>
                </div>

                <div
                    className="w-1/4 flex justify-end relative z-20"
                    ref={menuRef}
                >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-1 cursor-pointer text-sm"
                    >
                        <p>{selectedLanguage}</p>
                        <ChevronDown
                            className={`transition-transform duration-200 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    <div
                        className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-36 sm:w-40 bg-black/90 backdrop-blur-sm rounded-md shadow-lg z-10 transition-all duration-300 ease-out origin-top ${
                            isOpen
                                ? "opacity-100 translate-y-0 scale-100"
                                : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                        }`}
                    >
                        {["English", "Uzbek"].map((lang) => (
                            <button
                                key={lang}
                                onClick={() => handleLanguageSelect(lang)}
                                className={`
                                    w-full text-left px-4 py-2 text-sm transition-colors duration-200
                                    ${
                                        selectedLanguage === lang
                                            ? "text-[var(--primary-white)] font-semibold"
                                            : "text-white"
                                    }
                                    hover:bg-white/10 hover:text-[var(--primary-white)]
                                `}
                            >
                                {lang}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
