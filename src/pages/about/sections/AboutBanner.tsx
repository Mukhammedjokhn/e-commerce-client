import aboutGirls from "../../../assets/about-girls.png";
import { Briefcase, CircleDollarSign, Store, Wallet } from "lucide-react";

const AboutBanner = () => {
    return (
        <div>
            <div className='flex items-center justify-between mb-40'>
                <div className='w-full pr-30'>
                    <h1 className='text-[54px] font-semibold'>Our Story</h1>

                    <p className='text-base mt-5 leading-7'>
                        Launced in 2015, Exclusive is South Asia’s premier
                        online shopping makterplace with an active presense in
                        Bangladesh. Supported by wide range of tailored
                        marketing, data and service solutions, Exclusive has
                        10,500 sallers and 300 brands and serves 3 millioons
                        customers across the region.
                    </p>

                    <p className='text-base mt-10 leading-7'>
                        Exclusive has more than 1 Million products to offer,
                        growing at a very fast. Exclusive offers a diverse
                        assotment in categories ranging from consumer.
                    </p>
                </div>

                <div className='w-full'>
                    <img
                        src={aboutGirls}
                        alt='About Girls'
                        className='w-[700px] h-[600px] object-cover rounded'
                    />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-10'>
                <button className='w-full h-[280px] border rounded border-[var(--border)] hover:bg-[var(--button)] duration-300 cursor-pointer p-10 flex flex-col items-center gap-5 group'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] group-hover:bg-white/50 rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] group-hover:bg-white rounded-full flex items-center justify-center text-[var(--foreground-white)] group-hover:text-black transition-colors duration-300'>
                            <Store size={30} />
                        </div>
                    </div>

                    <h2 className='font-bold text-3xl transition-colors duration-300 group-hover:text-white'>
                        10.5k
                    </h2>
                    <p className='transition-colors duration-300 group-hover:text-white'>
                        Sallers active our site
                    </p>
                </button>
                <button className='w-full h-[280px] border rounded border-[var(--border)] hover:bg-[var(--button)] duration-300 cursor-pointer p-10 flex flex-col items-center gap-5 group'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] group-hover:bg-white/50 rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] group-hover:bg-white rounded-full flex items-center justify-center text-[var(--foreground-white)] group-hover:text-black transition-colors duration-300'>
                            <CircleDollarSign size={30} />
                        </div>
                    </div>

                    <h2 className='font-bold text-3xl transition-colors duration-300 group-hover:text-white'>
                        33k
                    </h2>
                    <p className='transition-colors duration-300 group-hover:text-white'>
                        Mopnthly Produduct Sale
                    </p>
                </button>
                <button className='w-full h-[280px] border rounded border-[var(--border)] hover:bg-[var(--button)] duration-300 cursor-pointer p-10 flex flex-col items-center gap-5 group'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] group-hover:bg-white/50 rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] group-hover:bg-white rounded-full flex items-center justify-center text-[var(--foreground-white)] group-hover:text-black transition-colors duration-300'>
                            <Briefcase size={30} />
                        </div>
                    </div>

                    <h2 className='font-bold text-3xl transition-colors duration-300 group-hover:text-white'>
                        45.5k
                    </h2>
                    <p className='transition-colors duration-300 group-hover:text-white'>
                        Customer active in our site
                    </p>
                </button>
                <button className='w-full h-[280px] border rounded border-[var(--border)] hover:bg-[var(--button)] duration-300 cursor-pointer p-10 flex flex-col items-center gap-5 group'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] group-hover:bg-white/50 rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] group-hover:bg-white rounded-full flex items-center justify-center text-[var(--foreground-white)] group-hover:text-black transition-colors duration-300'>
                            <Wallet size={30} />
                        </div>
                    </div>

                    <h2 className='font-bold text-3xl transition-colors duration-300 group-hover:text-white'>
                        25k
                    </h2>
                    <p className='transition-colors duration-300 group-hover:text-white'>
                        Anual gross sale in our site
                    </p>
                </button>
            </div>
        </div>
    );
};
export default AboutBanner;
