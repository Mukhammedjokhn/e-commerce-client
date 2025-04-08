import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useGetProductsQuery } from "../../features/api/productApi";
import ProductCard from "../../components/product-card/ProductCard";
import Skeleton from "../../components/skeleton/Skeleton";
import Title from "../../components/title/Title";
import Rating from "../../components/rating/Rating";
import { useMemo, useState } from "react";
import { useProduct } from "../../context/ProductContext";
import { Heart, Minus, Plus } from "lucide-react";

const ProductDetail = () => {
    const { state } = useLocation();
    const productData = state as ProductData;
    const { data, isLoading } = useGetProductsQuery({ type: "all" });
    const [sizes, setSizes] = useState<"xs" | "s" | "m" | "l" | "xl">("m");

    const filterData = useMemo(() => {
        return data
            ?.filter((pro) => pro.type !== "our-product")
            .sort(() => 0.5 - Math.random())
            .slice(0, 4);
    }, [data]);

    const navigate = useNavigate();
    const { setCart, setWishlist, wishlist, removeFromWishlist, cart } =
        useProduct();

    const isInWishlist = wishlist.some((pro) => pro._id === productData._id);
    const isInCart = cart.some((pro) => pro._id === productData._id);

    const toggleWishlist = (id: string) => {
        if (!isInWishlist) {
            setWishlist(productData);
        } else {
            removeFromWishlist(id);
        }
    };

    const handleBuy = () => {
        navigate("/cart");
        setCart(productData);
    };

    return (
        <div className='container py-20 pb-32'>
            <Breadcrumb
                breadcrumbLinks={[
                    { name: "Gaming", path: "" },
                    { name: productData.product_name, path: productData._id }
                ]}
            />

            <div className='mt-20 flex gap-16'>
                <div className='flex w-2/3 gap-6'>
                    <div className='grid gap-6'>
                        {[1, 2, 3, 4].map((_, idx) => (
                            <button
                                key={idx}
                                className='w-44 h-36 rounded bg-[var(--card)] shadow-sm cursor-pointer flex items-center justify-center'
                            >
                                <img
                                    src={productData.product_image}
                                    alt={productData.product_name}
                                    className='w-28 h-28 object-cover'
                                />
                            </button>
                        ))}
                    </div>

                    <div className='flex-1 h-[648px] rounded bg-[var(--card)] shadow-sm flex items-center justify-center'>
                        <img
                            src={productData.product_image}
                            alt={productData.product_name}
                            className='w-full h-full object-cover rounded'
                        />
                    </div>
                </div>
                <div className='w-1/3 min-h-[648px] rounded flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>
                        {productData.product_name}
                    </h1>

                    <div className='flex items-center gap-2'>
                        <Rating rating={3.5} />
                        <p className='text-sm'>
                            ({productData.view_count} reviews)
                        </p>
                        <p>| </p>
                        <p className='text-green-500'>In Stock</p>
                    </div>

                    <p className='text-2xl font-normal'>
                        ${productData.price}.00
                    </p>

                    <p className='text-[#333] text-sm'>
                        Durable and stylish controller skin designed for a
                        perfect fit, offering comfort, protection, and easy
                        application without leaving any residue.
                    </p>

                    <div className='w-full h-[2px] bg-[var(--border)]'></div>

                    <div className='flex items-center gap-6'>
                        <p>Colours:</p>
                        <div className=''>
                            {productData.colors.length ? (
                                productData.colors.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`w-5 h-5 rounded-full ${
                                            item.selected
                                                ? "border-2"
                                                : "border-2 border-transparent"
                                        }`}
                                        style={{
                                            backgroundColor: item.color
                                        }}
                                    >
                                        <div
                                            className={`w-full h-full border-2 ${
                                                item.selected
                                                    ? "border-white"
                                                    : "border-transparent"
                                            } rounded-full`}
                                        ></div>
                                    </div>
                                ))
                            ) : (
                                <div className='flex items-center gap-2'>
                                    <div
                                        className={`w-5 h-5 rounded-full bg-[var(--button)] border-2`}
                                    >
                                        <div
                                            className={`w-full h-full border-2 border-[var(--foreground-white)] rounded-full`}
                                        ></div>
                                    </div>
                                    <div
                                        className={`w-5 h-5 rounded-full bg-[var(--background-dark)]`}
                                    >
                                        <div
                                            className={`w-full h-full  rounded-full`}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='flex items-center gap-6'>
                        <p>Size:</p>

                        <div className='flex items-center gap-2'>
                            {["xs", "s", "m", "l", "xl"].map((item, inx) => (
                                <button
                                    className={`uppercase border w-8 h-8 flex items-center justify-center rounded cursor-pointer ${
                                        sizes === item &&
                                        "bg-[var(--button)] text-[var(--foreground-white)]"
                                    }`}
                                    onClick={() =>
                                        setSizes(
                                            item as
                                                | "xs"
                                                | "s"
                                                | "m"
                                                | "l"
                                                | "xl"
                                        )
                                    }
                                    key={inx}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='flex items-center gap-4 h-10'>
                        <div className='flex items-center gap-2 h-full border border-[var(--border)] rounded cursor-pointer'>
                            <button className='text-2xl font-semibold border-r h-full px-2 rounded-tl rounded-bl border-[var(--border)] text-gray-600 cursor-pointer active:bg-[var(--button)] active:text-[var(--foreground-white)]'>
                                <Minus size={20} />
                            </button>
                            <p className='text-lg font-semibold px-2'>
                                {isInCart
                                    ? cart
                                          .filter(
                                              (pro) =>
                                                  pro._id === productData._id
                                          )
                                          .map((item, inx) => (
                                              <div key={inx}>
                                                  {item.quantity}
                                              </div>
                                          ))
                                    : 1}
                            </p>
                            <button className='text-2xl font-semibold border-l h-full px-2 rounded-tr rounded-br border-[var(--border)] text-gray-600 cursor-pointer active:bg-[var(--button)] active:text-[var(--foreground-white)]'>
                                <Plus size={20} />
                            </button>
                        </div>
                        <button
                            onClick={handleBuy}
                            className='text-[var(--foreground-white)] bg-[var(--button)] hover:bg-[var(--button-hover)] rounded cursor-pointer h-full px-14 text-sm duration-150'
                        >
                            Buy Now
                        </button>

                        <button
                            onClick={() => toggleWishlist(productData._id)}
                            className={`h-full px-3.5  border border-[var(--border)] rounded cursor-pointer duration-150 ${
                                isInWishlist
                                    ? "bg-[var(--button)] text-[var(--foreground-white)]"
                                    : "text-gray-600"
                            }`}
                        >
                            <Heart size={16} />
                        </button>
                    </div>
                </div>
            </div>

            <div className='mt-20'>
                <Title title='Related Item' />
                <div className='grid grid-cols-4 gap-10 mt-10'>
                    {filterData && !isLoading ? (
                        filterData.map((item) => (
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
export default ProductDetail;
