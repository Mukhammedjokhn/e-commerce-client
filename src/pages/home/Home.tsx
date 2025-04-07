import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import CategoriesBanner from "./sections/CategoriesBanner";
import Featured from "./sections/Featured";
import Month from "./sections/Month";
import OurProducts from "./sections/OurProducts";
import Today from "./sections/Today";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className='container flex flex-col gap-24 pt-10'>
                <Today />
                <Categories />
                <Month />
                <CategoriesBanner />
                <OurProducts />
                <Featured />
            </div>
        </div>
    );
};
export default Home;
