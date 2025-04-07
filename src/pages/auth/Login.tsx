import { useState } from "react";
import LoginInput from "../../components/input/LoginInput";
import Button from "../../components/button/Button";

type LoginUpProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login = ({ setIsLogin }: LoginUpProps) => {
    const [formData, setFormData] = useState({
        emailOrNumber: "",
        password: ""
    });

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form className='w-[400px]'>
                <h2 className='font-medium text-4xl'>Log in to Exclusive</h2>
                <p className='mt-5'>Enter your details below</p>

                <div className='flex flex-col gap-5 my-10'>
                    <LoginInput
                        placeholder='Email or Phone Number'
                        type='text'
                        value={formData.emailOrNumber}
                        setValue={(value) =>
                            handleChange("emailOrNumber", value)
                        }
                    />
                    <LoginInput
                        placeholder='Password'
                        type='password'
                        value={formData.password}
                        setValue={(value) => handleChange("password", value)}
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <Button title='Log In' className='px-14' />
                    <button
                        type='button'
                        className='text-[var(--button)] cursor-pointer'
                    >
                        Forget Password?
                    </button>
                </div>

                <div className='flex items-center justify-center gap-2 mt-10'>
                    <p className='text-sm text-[#333]'>
                        Don't have an account?
                    </p>
                    <button
                        onClick={() => setIsLogin(false)}
                        className='relative cursor-pointer'
                        type='button'
                    >
                        <p>Sign Up</p>
                        <p className='w-full h-[2px] bg-[var(--foreground-grey)] absolute -bottom-0 left-0'></p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
