import Button from "../../../components/button/Button";
import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Countdown from "../../../components/countdown/Countdown";
import Heading from "../../../components/heading/Heading";
import ProductCard from "../../../components/product-card/ProductCard";
import Skeleton from "../../../components/skeleton/Skeleton";
import Title from "../../../components/title/Title";
import { useGetProductsQuery } from "../../../features/api/productApi";

const Today = () => {
    const { data: todayData, isLoading } =
        useGetProductsQuery({ type: "today" }) || [];
    return (
        <div className='mt-20 pb-16 border-b border-[var(--border)]'>
            <Title title="Today's" />
            <div className='flex items-center justify-between mt-5'>
                <div className='flex items-end gap-40'>
                    <Heading title='Flash Sales' />
                    <Countdown
                        hours={95}
                        minutes={19}
                        seconds={56}
                        isBanner={false}
                    />
                </div>

                <div className='flex items-center gap-2'>
                    <ChevronButton position='left' />
                    <ChevronButton position='right' />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-10 mt-10'>
                {todayData && !isLoading ? (
                    todayData.map((item) => (
                        <ProductCard key={item._id} {...item} path='home' />
                    ))
                ) : (
                    <Skeleton />
                )}
            </div>

            <div className='flex items-center justify-center mt-14'>
                <Button title='View All Products' />
            </div>
        </div>
    );
};
export default Today;
