import bannerImage from "../../../assets/categories-banner.png";
import Button from "../../../components/button/Button";
import Countdown from "../../../components/countdown/Countdown";

const CategoriesBanner = () => {
    return (
        <div className='mt-2 pb-20 w-full h-[500px] border border-[var(--border)] flex items-center justify-between p-16 bg-[var(--background-dark)]'>
            <div>
                <h3 className='text-[var(--success)]'>Categories</h3>
                <h1 className='font-semibold text-5xl text-[var(--foreground-white)] leading-16 mt-6'>
                    Enhance Your <br /> Music Experience
                </h1>

                <Countdown hours={143} minutes={59} seconds={35} isBanner />

                <Button
                    title='Buy Now!'
                    className='bg-[var(--success)] hover:bg-[var(--success)] mt-4'
                />
            </div>
            <div>
                <img src={bannerImage} alt='banner' />
            </div>
        </div>
    );
};
export default CategoriesBanner;
