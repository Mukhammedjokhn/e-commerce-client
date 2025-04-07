import {
    Camera,
    Gamepad2,
    Headphones,
    Smartphone,
    TvMinimal,
    Watch
} from "lucide-react";
import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Heading from "../../../components/heading/Heading";
import Title from "../../../components/title/Title";

const Categories = () => {
    const categoriesData = [
        {
            name: "Phones",
            icon: Smartphone
        },
        {
            name: "Computers",
            icon: TvMinimal
        },
        {
            name: "SmartWatch",
            icon: Watch
        },
        {
            name: "Camera",
            icon: Camera
        },
        {
            name: "HeadPhones",
            icon: Headphones
        },
        {
            name: "Gaming",
            icon: Gamepad2
        }
    ];

    return (
        <div className='pb-16 border-b border-[var(--border)]'>
            <Title title='Categories' />
            <div className='flex items-center justify-between mt-5'>
                <Heading title='Browse By Category' />

                <div className='flex items-center gap-2'>
                    <ChevronButton position='left' />
                    <ChevronButton position='right' />
                </div>
            </div>

            <div className='mt-20 grid grid-cols-6 gap-10'>
                {categoriesData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={index}
                            className='border border-[var(--border)] h-[150px] rounded cursor-pointer flex flex-col items-center justify-center gap-3 hover:bg-[var(--button)] hover:text-[var(--foreground-white)] duration-150'
                        >
                            <Icon size={40} />
                            <p>{item.name}</p>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
export default Categories;
