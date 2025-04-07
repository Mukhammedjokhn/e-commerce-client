import { Mail, Phone } from "lucide-react";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import Button from "../../components/button/Button";

const Contact = () => {
    return (
        <div className='container py-20 pb-32'>
            <Breadcrumb
                breadcrumbLinks={[{ name: "Contact", path: "contact" }]}
            />

            <div className='w-full flex items-center gap-10 mt-20'>
                <div
                    className='w-[550px] h-[450px] p-10 flex flex-col justify-between'
                    style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }}
                >
                    <div>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 rounded-full bg-[var(--button)] text-[var(--foreground-white)] flex items-center justify-center'>
                                <Phone />
                            </div>
                            <p className='font-medium'>Call To Us</p>
                        </div>
                        <p className='text-sm mt-5'>
                            We are available 24/7, 7 days a week.
                        </p>
                        <p className='text-sm mt-5'>Phone: +8801611112222</p>
                    </div>
                    <div className='w-full h-[1px] bg-[var(--background-dark)]'></div>
                    <div>
                        <div className='flex items-center gap-4'>
                            <div className='w-10 h-10 rounded-full bg-[var(--button)] text-[var(--foreground-white)] flex items-center justify-center'>
                                <Mail />
                            </div>
                            <p className='font-medium'>Write To US</p>
                        </div>
                        <p className='text-sm mt-5'>
                            Fill out our form and we will contact you within 24
                            hours.
                        </p>
                        <p className='text-sm mt-5'>
                            Emails: customer@exclusive.com
                        </p>
                        <p className='text-sm mt-5'>
                            Emails: support@exclusive.com
                        </p>
                    </div>
                </div>
                <div
                    className='w-full h-[450px] p-10 flex flex-col justify-between'
                    style={{
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
                    }}
                >
                    <div className='grid grid-cols-3 gap-5'>
                        <input
                            type='text'
                            placeholder='Your Name *'
                            className='outline-none bg-[#eee] p-3.5 rounded text-sm w-full'
                        />
                        <input
                            type='email'
                            placeholder='Your Email *'
                            className='outline-none bg-[#eee] p-3.5 rounded text-sm w-full'
                        />
                        <input
                            type='text'
                            placeholder='Your Phone *'
                            className='outline-none bg-[#eee] p-3.5 rounded text-sm w-full'
                        />
                    </div>
                    <div>
                        <textarea
                            placeholder='Your Message'
                            className='outline-none bg-[#eee] p-3.5 rounded text-sm w-full h-[210px] resize-none'
                        ></textarea>
                    </div>
                    <div className='w-full flex items-center justify-end'>
                        <Button title='Send Massage' />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Contact;
