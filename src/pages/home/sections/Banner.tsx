import { ChevronRight } from "lucide-react";
import Slider from "../../../components/slider/Slider";

const Banner = () => {
    const categories: BannerCategories[] = [
        { title: "Woman’s Fashion", icon: true },
        { title: "Men’s Fashion", icon: true },
        { title: "Electronics", icon: false },
        { title: "Home & Lifestyle", icon: false },
        { title: "Medicine", icon: false },
        { title: "Sports & Outdoor", icon: false },
        { title: "Baby’s & Toys", icon: false },
        { title: "Groceries & Pets", icon: false },
        { title: "Health & Beauty", icon: false },
    ];

    return (
        <div className="w-full container flex items-center justify-between gap-2">
            <div className="border-r border-[var(--border)] w-[28%] h-full pt-10 pr-5">
                <div className="w-full h-full">
                    {categories.map((item, index) => (
                        <button
                            key={index}
                            className="flex items-center justify-between w-full cursor-pointer mb-4 relative"
                        >
                            <p className="text-base">{item.title}</p>
                            {item.icon && <ChevronRight />}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full h-full pt-10 pl-10">
                <Slider />
            </div>
        </div>
    );
};
export default Banner;
