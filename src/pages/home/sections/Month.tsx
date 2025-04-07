import Button from "../../../components/button/Button";
import Heading from "../../../components/heading/Heading";
import ProductCard from "../../../components/product-card/ProductCard";
import Skeleton from "../../../components/skeleton/Skeleton";
import Title from "../../../components/title/Title";
import { useGetProductsQuery } from "../../../features/api/productApi";

const Month = () => {
    const { data: monthData, isLoading } = useGetProductsQuery({
        type: "month"
    });

    return (
        <div className='border-[var(--border)]'>
            <Title title='This Month' />
            <div className='flex items-center justify-between mt-5'>
                <Heading title='Best Selling Products' />

                <Button title='View All' />
            </div>

            <div className='grid grid-cols-4 gap-10 mt-10'>
                {monthData && !isLoading ? (
                    monthData.map((item) => (
                        <ProductCard key={item._id} {...item} path='home' />
                    ))
                ) : (
                    <Skeleton />
                )}
            </div>
        </div>
    );
};
export default Month;
