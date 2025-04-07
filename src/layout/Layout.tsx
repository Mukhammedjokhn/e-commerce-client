import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import TopBar from "../components/topbar/TopBar";
import ScrollTop from "../components/scroll-top/ScrollTop";

const Layout = () => {
    const { pathname } = useLocation();
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <nav>
                <TopBar />
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
            {pathname === "/" && <ScrollTop />}

            <footer>
                <Footer />
            </footer>
        </div>
    );
};
export default Layout;
