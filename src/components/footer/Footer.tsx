import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    SendHorizonal
} from "lucide-react";
import { Link } from "react-router-dom";
import qrcode from "../../assets/qrcode.png";
import googlePlay from "../../assets/google-play.png";
import appStore from "../../assets/app-store.png";

const Footer = () => {
    return (
        <footer className='bg-black text-white py-6 w-full h-[440px] flex flex-col justify-between pt-20'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8'>
                    <div className='md:col-span-1'>
                        <Link to={"/"} className='text-xl font-semibold mb-6'>
                            Exclusive
                        </Link>
                        <div className='mt-6'>
                            <p className='mb-4'>Subscribe</p>
                            <p className='mb-4'>Get 10% off your first order</p>
                            <div className='flex items-center justify-between border border-white h-12 rounded-sm px-4'>
                                <input
                                    type='email'
                                    placeholder='Enter your email'
                                    className='outline-none h-full text-base'
                                />
                                <button className='cursor-pointer'>
                                    <SendHorizonal size={20} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='md:col-span-1'>
                        <h2 className='text-xl font-semibold mb-6'>Support</h2>
                        <address className='not-italic leading-8'>
                            111 Bijoy sarani, Dhaka,
                            <br />
                            DH 1515, Bangladesh.
                        </address>
                        <p className='mb-2'>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                    </div>

                    <div className='md:col-span-1'>
                        <h2 className='text-xl font-semibold mb-6'>Account</h2>
                        <div className='flex flex-col'>
                            <Link
                                to={"/profile"}
                                className='mb-2 hover:underline'
                            >
                                My Account
                            </Link>
                            <Link to={"/auth"} className='mb-2 hover:underline'>
                                Login / Register
                            </Link>
                            <Link to={"/cart"} className='mb-2 hover:underline'>
                                Cart
                            </Link>
                            <Link
                                to={"/wishlist"}
                                className='mb-2 hover:underline'
                            >
                                Wishlist
                            </Link>
                            <Link to={"/shop"} className='mb-2 hover:underline'>
                                Shop
                            </Link>
                        </div>
                    </div>

                    <div className='md:col-span-1'>
                        <h2 className='text-xl font-semibold mb-6'>
                            Quick Link
                        </h2>
                        <div className='flex flex-col'>
                            <Link to={"/"} className='mb-2 hover:underline'>
                                Privacy Policy
                            </Link>
                            <Link to={"/"} className='mb-2 hover:underline'>
                                Terms Of Use
                            </Link>
                            <Link to={"/"} className='mb-2 hover:underline'>
                                FAQ
                            </Link>
                            <Link
                                to={"/contact"}
                                className='mb-2 hover:underline'
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className='md:col-span-1'>
                        <h2 className='text-xl font-semibold mb-6'>
                            Download App
                        </h2>
                        <p className='text-sm mb-2'>
                            Save $3 with App New User Only
                        </p>

                        <div className='flex mb-4'>
                            <div className='mr-4'>
                                <img
                                    src={qrcode}
                                    alt='QR Code'
                                    className='w-24 h-24'
                                />
                            </div>
                            <div className='flex flex-col justify-center space-y-2'>
                                <Link to={"/"} className='block'>
                                    <img src={googlePlay} alt='Google Play' />
                                </Link>
                                <Link to={"/"} className='block'>
                                    <img src={appStore} alt='App Store' />
                                </Link>
                            </div>
                        </div>

                        <div className='flex space-x-4 mt-4'>
                            <Link
                                to={"/"}
                                className='hover:text-gray-400 transition-colors'
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                to={"/"}
                                className='hover:text-gray-400 transition-colors'
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                to={"/"}
                                className='hover:text-gray-400 transition-colors'
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                to={"/"}
                                className='hover:text-gray-400 transition-colors'
                            >
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-[#333] pt-8 text-center text-[#888]'>
                <p>© Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
