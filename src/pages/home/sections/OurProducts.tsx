import Button from "../../../components/button/Button";
import ChevronButton from "../../../components/chevron-button/ChevronButton";
import Heading from "../../../components/heading/Heading";
import ProductCard from "../../../components/product-card/ProductCard";
import Skeleton from "../../../components/skeleton/Skeleton";
import Title from "../../../components/title/Title";
import { useGetProductsQuery } from "../../../features/api/productApi";

const OurProducts = () => {
    const { data: ourProductData, isLoading } = useGetProductsQuery({
        type: "our-product"
    });

    return (
        <div className='pb-12'>
            <Title title='Our Products' />
            <div className='flex items-center justify-between mt-5'>
                <Heading title='Explore Our Products' />

                <div className='flex items-center gap-2'>
                    <ChevronButton position='left' />
                    <ChevronButton position='right' />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-10 mt-10'>
                {ourProductData && !isLoading ? (
                    ourProductData.map((item) => (
                        <ProductCard key={item._id} {...item} path='color' />
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
export default OurProducts;
