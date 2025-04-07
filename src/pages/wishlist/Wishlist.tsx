import Button from "../../components/button/Button";
import ProductCard from "../../components/product-card/ProductCard";
import Skeleton from "../../components/skeleton/Skeleton";
import Title from "../../components/title/Title";
import { useProduct } from "../../context/ProductContext";
import { useGetProductsQuery } from "../../features/api/productApi";

const Wishlist = () => {
    const { wishlist } = useProduct();

    const { data: justData, isLoading } = useGetProductsQuery({
        type: "for-you"
    });

    return (
        <div className='container py-20'>
            <div className='w-full flex items-center justify-between'>
                <div>Wishlist ({wishlist.length})</div>

                <Button title='Move All To Bag' variant='outline' />
            </div>

            <div className='grid grid-cols-4 gap-10 mt-16'>
                {wishlist.length ? (
                    wishlist.map((item) => (
                        <ProductCard key={item._id} {...item} path='wishlist' />
                    ))
                ) : (
                    <div className='flex justify-center col-span-4'>
                        <h2 className='font-medium text-3xl'>
                            Wishlist is empty.
                        </h2>
                    </div>
                )}
            </div>

            <div className='mt-20'>
                <div className='flex items-center justify-between'>
                    <Title title='Just For You' />
                    <Button title='See All' variant='outline' />
                </div>
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    {justData && !isLoading ? (
                        justData.map((item) => (
                            <ProductCard key={item._id} {...item} path='home' />
                        ))
                    ) : (
                        <Skeleton />
                    )}
                </div>
            </div>
        </div>
    );
};
export default Wishlist;
