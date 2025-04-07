import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import CheckoutForm from "./CheckoutForm";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
    return (
        <div className="container py-20 pb-32">
            <Breadcrumb
                breadcrumbLinks={[
                    { name: "My Account", path: "account-setting" },
                    { name: "Product", path: "checkout" },
                    { name: "View Cart", path: "checkout" },
                    { name: "CheckOut", path: "checkout" },
                ]}
            />

            <div className="mt-20">
                <h1 className="text-4xl font-medium">Billing Details</h1>

                <div className="mt-10 flex justify-between gap-60">
                    <CheckoutForm />
                    <CheckoutProduct />
                </div>
            </div>
        </div>
    );
};
export default Checkout;
