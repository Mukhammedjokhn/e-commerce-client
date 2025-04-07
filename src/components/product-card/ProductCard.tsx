import { Heart, Eye, Trash2, Trash } from "lucide-react";
import { useProduct } from "../../context/ProductContext";

type ProductCardProps = ProductData & CardProps;

const ProductCard = ({
    _id,
    discount,
    discount_price,
    isNew,
    price,
    product_image,
    product_name,
    path = "home",
    view_count,
    colors,
    rating
}: ProductCardProps) => {
    const {
        setCart,
        cart,
        wishlist,
        setWishlist,
        removeFromWishlist,
        removeFromCart
    } = useProduct();

    const isInCart = cart.some((item) => item._id === _id);
    const isInWishlist = wishlist.some((item) => item._id === _id);

    return (
        <div className='w-full cursor-pointer relative'>
            <div className='relative p-4 bg-[var(--card)] rounded h-[300px] overflow-hidden group'>
                <div className='absolute top-3 left-3 flex gap-2 items-center'>
                    {discount > 0 && (
                        <span className='bg-[var(--button)] text-white text-xs font-semibold px-2 py-1 rounded'>
                            -{discount}%
                        </span>
                    )}
                    {isNew && (
                        <span className='bg-[var(--success)] text-white text-xs font-semibold px-2 py-1 rounded'>
                            NEW
                        </span>
                    )}
                </div>

                <img
                    src={product_image || "/default.png"}
                    alt={product_name}
                    className='w-full h-56 object-cover'
                />
                <div className='absolute top-2 right-2 flex flex-col gap-2'>
                    {path === "wishlist" && (
                        <button
                            onClick={() => removeFromWishlist(_id)}
                            className='p-2 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer duration-150'
                        >
                            <Trash2 size={16} className='text-gray-600' />
                        </button>
                    )}

                    {path === "just" && (
                        <button className='p-2 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer duration-150'>
                            <Eye size={16} className='text-gray-600' />
                        </button>
                    )}

                    {(path === "home" || path === "color") && (
                        <>
                            {isInWishlist ? (
                                <button
                                    onClick={() => removeFromWishlist(_id)}
                                    className='p-2 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer duration-150'
                                >
                                    <Heart
                                        size={16}
                                        className='text-[var(--button)]'
                                    />
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        setWishlist({
                                            _id,
                                            product_image,
                                            product_name,
                                            colors,
                                            discount,
                                            discount_price,
                                            isNew,
                                            price,
                                            rating,
                                            view_count
                                        })
                                    }
                                    className='p-2 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer duration-150'
                                >
                                    <Heart
                                        size={16}
                                        className='text-gray-600'
                                    />
                                </button>
                            )}
                            <button className='p-2 bg-white rounded-full shadow hover:bg-gray-200 cursor-pointer duration-150'>
                                <Eye size={16} className='text-gray-600' />
                            </button>
                        </>
                    )}
                </div>

                {isInCart ? (
                    <button
                        className={`absolute bottom-0 left-0 w-full py-3 text-sm font-medium bg-red-600 hover:bg-red-700 text-white transform ${
                            path === "home" || path === "color"
                                ? "group-hover:translate-y-0 translate-y-full"
                                : "translate-y-0"
                        } duration-300 ease-in-out z-10 cursor-pointer flex items-center justify-center gap-2`}
                        onClick={() => removeFromCart(_id)}
                    >
                        <Trash size={20} />
                        <p>In Cart</p>
                    </button>
                ) : (
                    <button
                        className={`absolute bottom-0 left-0 w-full py-3 text-sm font-medium bg-black hover:bg-black/80 text-white transform ${
                            path === "home" || path === "color"
                                ? "group-hover:translate-y-0 translate-y-full"
                                : "translate-y-0"
                        } duration-300 ease-in-out z-10 cursor-pointer`}
                        onClick={() =>
                            setCart({
                                _id,
                                product_image,
                                product_name,
                                colors,
                                discount,
                                discount_price,
                                isNew,
                                price,
                                rating,
                                view_count
                            })
                        }
                    >
                        Add To Cart
                    </button>
                )}
            </div>

            <div className='relative p-4 bg-transparent'>
                <h3 className='text-base font-medium'>{product_name}</h3>
                {path === "color" ? (
                    <div>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='text-red-500 font-semibold'>
                                ${price}
                            </span>
                            {discount_price > 0 && (
                                <span className='text-gray-400 line-through'>
                                    ${discount_price}
                                </span>
                            )}
                            <div className='flex items-center text-yellow-500'>
                                {"★★★★☆"}
                                <span className='text-gray-500 text-sm ml-1'>
                                    ({view_count})
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center gap-2 mt-2'>
                            {colors.map((item, index) => (
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
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='flex items-center gap-2 mt-1'>
                            <span className='text-red-500 font-semibold'>
                                ${price}
                            </span>
                            {discount_price > 0 && (
                                <span className='text-gray-400 line-through'>
                                    ${discount_price}
                                </span>
                            )}
                        </div>
                        {path !== "wishlist" && (
                            <div className='flex items-center mt-1 text-yellow-500'>
                                {"★★★★☆"}
                                <span className='text-gray-500 text-sm ml-1'>
                                    ({view_count})
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductCard;
