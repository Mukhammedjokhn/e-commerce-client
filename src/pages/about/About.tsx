import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import AboutBanner from "./sections/AboutBanner";
import AboutUsers from "./sections/AboutUsers";

const About = () => {
    return (
        <div className="container py-20">
            <Breadcrumb breadcrumbLinks={[{ name: "About", path: "about" }]} />

            <AboutBanner />
            <AboutUsers />
        </div>
    );
};
export default About;
