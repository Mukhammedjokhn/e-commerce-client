import { useState } from "react";
import checkoutTypesImage from "../../assets/checkout-type.png";
import Button from "../../components/button/Button";
import image from "../../assets/iphone-14-pro.png";
import image2 from "../../assets/categories-banner.png";

const CheckoutProduct = () => {
    const [checkoutType, setCheckoutType] = useState<"cash" | "bank">("cash");
    return (
        <div className="min-h-[800px] w-full p-10">
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <img
                            src={image}
                            alt="iPhone 14 Pro"
                            className="w-10 object-cover"
                        />

                        <p>iPhone 14 Pro</p>
                    </div>

                    <p>$650</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <img
                            src={image2}
                            alt="Speaker"
                            className="w-10 object-cover"
                        />

                        <p>Gaming Speaker</p>
                    </div>

                    <p>$1100</p>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-[var(--border)] flex items-center justify-between py-4 mt-4">
                    <p>Subtotal:</p>
                    <p>$1750</p>
                </div>
                <div className="border-b-2 border-[var(--border)] flex items-center justify-between py-4 mt-4">
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className="flex items-center justify-between pt-4 mt-4">
                    <p>Total:</p>
                    <p>$1750</p>
                </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <input
                            type="radio"
                            id="bank"
                            name="checkoutType"
                            value="bank"
                            checked={checkoutType === "bank"}
                            onChange={() => setCheckoutType("bank")}
                            className="w-5 h-5 accent-[var(--background-dark)] cursor-pointer"
                        />
                        <label htmlFor="bank" className="cursor-pointer">
                            Bank
                        </label>
                    </div>

                    <img src={checkoutTypesImage} alt="Check Out Type" />
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="radio"
                        id="cash"
                        name="checkoutType"
                        value="cash"
                        checked={checkoutType === "cash"}
                        onChange={() => setCheckoutType("cash")}
                        className="w-5 h-5 accent-[var(--background-dark)] cursor-pointer"
                    />
                    <label htmlFor="cash" className="cursor-pointer">
                        Cash on delivery
                    </label>
                </div>
            </div>

            <div className="flex items-center justify-between gap-5 mt-5 w-full">
                <div className="flex items-center gap-5 w-full">
                    <input
                        type="text"
                        placeholder="Coupon Code"
                        className="outline-none border py-2.5 rounded px-6"
                    />
                    <Button title="Apply Coupon" className="w-full" />
                </div>
            </div>

            <div className="mt-5">
                <Button title="Place Order" />
            </div>
        </div>
    );
};
export default CheckoutProduct;
