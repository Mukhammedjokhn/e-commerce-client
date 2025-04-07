import { useEffect, useState } from "react";
import ChevronButton from "../chevron-button/ChevronButton";

const ScrollTop = () => {
    const [scrollToTopShow, setScrollToTopShow] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setScrollToTopShow(true);
            } else {
                setScrollToTopShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {scrollToTopShow && (
                <div className="flex items-center justify-end w-full pb-10 container">
                    <ChevronButton position="up" onClick={scrollToTop} />
                </div>
            )}
        </>
    );
};

export default ScrollTop;
