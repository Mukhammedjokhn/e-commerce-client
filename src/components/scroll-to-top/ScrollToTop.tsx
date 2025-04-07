import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const path = useLocation();

    const scrollTop = () => {
        window.scrollTo(0, 0);
    };

    useEffect(() => {
        scrollTop();
    }, [path]);

    return null;
};

export default ScrollToTop;
