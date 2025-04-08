import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Auth from "../pages/auth/Auth";
import Wishlist from "../pages/wishlist/Wishlist";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import NotFound from "../pages/not-found/NotFound";
import Home from "../pages/home/Home";
import Account from "../pages/account/Account";
import ProductDetail from "../pages/product-detail/ProductDetail";

const Router = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/:id' element={<ProductDetail />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/account-setting' element={<Account />} />
                <Route path='/*' element={<NotFound />} />
            </Route>
        </Routes>
    );
};
export default Router;
