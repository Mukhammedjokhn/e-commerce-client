import Heading from "../../../components/heading/Heading";
import Title from "../../../components/title/Title";
import aboutDelivery from "../../../assets/about-delivery.png";
import aboutService from "../../../assets/about-service.png";
import aboutSafe from "../../../assets/about-guarantee.png";

import featuresPlaystation from "../../../assets/features-playstation.png";
import featuresWomen from "../../../assets/features-women.png";
import featuresPerfume from "../../../assets/features-perfume.png";
import featuresSpeakers from "../../../assets/features-speakers.png";

const Featured = () => {
    return (
        <div className="pb-10">
            <Title title="Featured" />
            <div className="mt-5">
                <Heading title="New Arrival" />
            </div>

            <div className="grid grid-cols-4 gap-10 mt-14 h-[600px]">
                <div className="border h-full col-span-2 flex items-center justify-center bg-[var(--background-dark)] rounded cursor-pointer relative">
                    <img src={featuresPlaystation} alt="" />

                    <div className="absolute bottom-10 left-10 text-[var(--foreground-white)]">
                        <h2 className="font-semibold text-2xl">
                            PlayStation 5
                        </h2>
                        <p className="text-sm font-light my-3">
                            Black and White version of the PS5 <br /> coming out
                            on sale.
                        </p>

                        <button className="cursor-pointer underline">
                            Shop Now
                        </button>
                    </div>
                </div>

                <div className="col-span-2 grid grid-rows-2 gap-10 h-full">
                    <div className="border w-full h-full flex items-center justify-end bg-[#0D0D0D] rounded cursor-pointer relative">
                        <img src={featuresWomen} alt="" />

                        <div className="absolute bottom-8 left-8 text-[var(--foreground-white)]">
                            <h2 className="font-semibold text-2xl">
                                Women’s Collections
                            </h2>
                            <p className="text-sm font-light my-2">
                                Featured woman collections that <br /> give you
                                another vibe.
                            </p>

                            <button className="cursor-pointer underline">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10 w-full h-full">
                        <div className="border w-full h-full flex items-center justify-center bg-[var(--background-dark)]/90 rounded cursor-pointer relative">
                            <img src={featuresSpeakers} alt="" />
                            <div className="absolute bottom-8 left-8 text-[var(--foreground-white)]">
                                <h2 className="font-semibold text-2xl">
                                    Speakers
                                </h2>
                                <p className="text-sm font-light my-1">
                                    Amazon wireless speakers
                                </p>

                                <button className="cursor-pointer underline">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                        <div className="border w-full h-full flex items-center justify-center bg-[var(--background-dark)]/90 rounded cursor-pointer relative">
                            <img src={featuresPerfume} alt="" />
                            <div className="absolute bottom-8 left-8 text-[var(--foreground-white)]">
                                <h2 className="font-semibold text-2xl">
                                    Perfume
                                </h2>
                                <p className="text-sm font-light my-1">
                                    GUCCI INTENSE OUD EDP
                                </p>

                                <button className="cursor-pointer underline">
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-evenly mt-32">
                <div className="w-[300px] h-[180px] flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-[var(--foreground-grey)] rounded-full flex items-center justify-center transition-colors duration-300">
                        <div className="w-14 h-14 bg-[var(--background-dark)] rounded-full flex items-center justify-center text-[var(--foreground-white)] transition-colors duration-300">
                            <img src={aboutDelivery} alt="About Delivery" />
                        </div>
                    </div>

                    <h2 className="font-semibold text-xl">
                        FREE AND FAST DELIVERY
                    </h2>

                    <p className="text-sm">
                        Free delivery for all orders over $140
                    </p>
                </div>
                <div className="w-[300px] h-[180px] flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-[var(--foreground-grey)] rounded-full flex items-center justify-center transition-colors duration-300">
                        <div className="w-14 h-14 bg-[var(--background-dark)] rounded-full flex items-center justify-center text-[var(--foreground-white)] transition-colors duration-300">
                            <img src={aboutService} alt="About Delivery" />
                        </div>
                    </div>

                    <h2 className="font-semibold text-xl">
                        24/7 CUSTOMER SERVICE
                    </h2>

                    <p className="text-sm">Friendly 24/7 customer support</p>
                </div>
                <div className="w-[300px] h-[180px] flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-[var(--foreground-grey)] rounded-full flex items-center justify-center transition-colors duration-300">
                        <div className="w-14 h-14 bg-[var(--background-dark)] rounded-full flex items-center justify-center text-[var(--foreground-white)] transition-colors duration-300">
                            <img src={aboutSafe} alt="About Delivery" />
                        </div>
                    </div>

                    <h2 className="font-semibold text-xl">
                        MONEY BACK GUARANTEE
                    </h2>

                    <p className="text-sm">We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
};
export default Featured;
