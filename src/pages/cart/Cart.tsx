import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { X } from "lucide-react";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

const Cart = () => {
    const navigate = useNavigate();
    const { cart, updateQuantity, removeFromCart } = useProduct();

    const handleQuantityChange = (id: string, newQuantity: number) => {
        updateQuantity(id, newQuantity);
    };

    if (!cart.length)
        return (
            <div className='w-full flex items-center justify-center text-3xl font-medium'>
                <h2>Cart is empty.</h2>
            </div>
        );

    return (
        <div className='container py-20'>
            <Breadcrumb breadcrumbLinks={[{ name: "Cart", path: "cart" }]} />

            <div className='mt-20'>
                <div
                    className='w-full grid grid-cols-4 gap-5 items-center py-4 px-10 font-medium rounded h-[70px]'
                    style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }}
                >
                    <p>Product</p>
                    <p className='text-center'>Price</p>
                    <p className='text-center'>Quantity</p>
                    <p className='text-center'>Subtotal</p>
                </div>

                {cart.map((pro) => (
                    <div
                        key={pro._id}
                        className='w-full grid grid-cols-4 gap-5 items-center h-20 px-10 mt-10 bg-white rounded cursor-pointer'
                        style={{
                            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                        }}
                    >
                        <div className='flex items-center gap-4 relative'>
                            {pro.quantity === 1 && (
                                <button
                                    className='w-4 h-4 rounded-full bg-[var(--red)] absolute -left-1 -top-1 flex items-center justify-center text-[var(--foreground-white)] cursor-pointer'
                                    onClick={() => removeFromCart(pro._id)}
                                >
                                    <X size={13} />
                                </button>
                            )}
                            <img
                                src={pro.product_image}
                                alt=''
                                className='w-12 object-cover'
                            />
                            <p>{pro.product_name}</p>
                        </div>
                        <p className='text-center'>${pro.price}</p>
                        <select
                            value={pro.quantity}
                            onChange={(e) =>
                                handleQuantityChange(
                                    pro._id,
                                    Number(e.target.value)
                                )
                            }
                            className='border-2 border-[var(--border)] py-1 px-3 rounded cursor-pointer outline-none w-20 mx-auto'
                        >
                            {[...Array(9)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>
                        <p className='text-center'>
                            ${(pro.price * pro.quantity).toFixed(2)}
                        </p>
                    </div>
                ))}

                <div className='flex items-center justify-between mt-10'>
                    <Button title='Return To Shop' variant='outline' />
                    <Button title='Update Cart' variant='outline' />
                </div>

                <div className='flex items-start justify-between mt-20'>
                    <div className='flex items-center gap-2'>
                        <input
                            type='text'
                            placeholder='Coupon Code'
                            className='outline-none border py-2.5 rounded px-6'
                        />
                        <Button title='Apply Coupon' />
                    </div>

                    <div className='min-h-[350px] border w-[500px] rounded p-6'>
                        <h2 className='font-medium text-xl'>Cart Total</h2>
                        <div className='border-b-2 border-[var(--border)] flex items-center justify-between py-4 mt-4'>
                            <p>Subtotal:</p>
                            <p>
                                $
                                {cart
                                    .reduce(
                                        (total, item) =>
                                            total + item.price * item.quantity,
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>
                        <div className='border-b-2 border-[var(--border)] flex items-center justify-between py-4 mt-4'>
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className='flex items-center justify-between pt-4 mt-4'>
                            <p>Total:</p>
                            <p>
                                $
                                {cart
                                    .reduce(
                                        (total, item) =>
                                            total + item.price * item.quantity,
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>

                        <div className='flex items-center justify-center mt-4'>
                            <Button
                                title='Proceed to checkout'
                                onClick={() => navigate("/checkout")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
