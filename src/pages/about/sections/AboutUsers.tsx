import aboutTom from "../../../assets/about-tom.png";
import aboutEmma from "../../../assets/about-emma.png";
import aboutWill from "../../../assets/about-will.png";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import Pagination from "../../../components/pagination/Pagination";

import aboutDelivery from "../../../assets/about-delivery.png";
import aboutService from "../../../assets/about-service.png";
import aboutSafe from "../../../assets/about-guarantee.png";

const teamMembers = [
    {
        name: "Tom Cruise",
        role: "Founder & Chairman",
        image: aboutTom
    },
    {
        name: "Emma Watson",
        role: "Managing Director",
        image: aboutEmma
    },
    {
        name: "Will Smith",
        role: "Product Designer",
        image: aboutWill
    }
];

const TeamMember = ({
    name,
    role,
    image
}: {
    name: string;
    role: string;
    image: string;
}) => {
    return (
        <div className='w-full cursor-pointer flex flex-col'>
            <div className='bg-[var(--card)] rounded pt-10 w-full h-[400px] flex justify-center items-center'>
                <img src={image} alt={name} className='object-contain h-full' />
            </div>
            <h2 className='text-3xl font-medium mt-5 mb-2'>{name}</h2>
            <p>{role}</p>
            <div className='flex items-center gap-2 mt-3'>
                <Twitter size={20} />
                <Instagram size={20} />
                <Linkedin size={20} />
            </div>
        </div>
    );
};

const AboutUsers = () => {
    const [isSelected, setIsSelected] = useState(2);

    const pagination = ["", "", "", "", ""];
    return (
        <div className='mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-32'>
                {teamMembers.map((member, index) => (
                    <TeamMember
                        key={index}
                        name={member.name}
                        role={member.role}
                        image={member.image}
                    />
                ))}
            </div>

            <div className='w-full flex items-center justify-center mt-10 gap-2'>
                <Pagination
                    path='about'
                    pagination={pagination}
                    selected={isSelected}
                    setSelected={setIsSelected}
                />
            </div>

            <div className='flex items-center justify-evenly mt-32'>
                <div className='w-[300px] h-[180px] flex flex-col items-center gap-4'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] rounded-full flex items-center justify-center text-[var(--foreground-white)] transition-colors duration-300'>
                            <img src={aboutDelivery} alt='About Delivery' />
                        </div>
                    </div>

                    <h2 className='font-semibold text-xl'>
                        FREE AND FAST DELIVERY
                    </h2>

                    <p className='text-sm'>
                        Free delivery for all orders over $140
                    </p>
                </div>
                <div className='w-[300px] h-[180px] flex flex-col items-center gap-4'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] rounded-full flex items-center justify-center text-[var(--foreground-white)] transition-colors duration-300'>
                            <img src={aboutService} alt='About Delivery' />
                        </div>
                    </div>

                    <h2 className='font-semibold text-xl'>
                        24/7 CUSTOMER SERVICE
                    </h2>

                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                <div className='w-[300px] h-[180px] flex flex-col items-center gap-4'>
                    <div className='w-20 h-20 bg-[var(--foreground-grey)] rounded-full flex items-center justify-center transition-colors duration-300'>
                        <div className='w-14 h-14 bg-[var(--background-dark)] rounded-full flex items-center justify-center text-[var(--foreground-white)] transition-colors duration-300'>
                            <img src={aboutSafe} alt='About Delivery' />
                        </div>
                    </div>

                    <h2 className='font-semibold text-xl'>
                        MONEY BACK GUARANTEE
                    </h2>

                    <p className='text-sm'>We reurn money within 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsers;
