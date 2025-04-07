import { useState } from "react";
import LoginInput from "../../components/input/LoginInput";
import Button from "../../components/button/Button";
import googleLogo from "../../assets/google-icon.png";

type SignUpProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignUp = ({ setIsLogin }: SignUpProps) => {
    const [formData, setFormData] = useState({
        name: "",
        emailOrNumber: "",
        password: ""
    });

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <form className='w-[400px]'>
                <h2 className='font-medium text-4xl'>Create an account</h2>
                <p className='mt-5'>Enter your details below</p>

                <div className='flex flex-col gap-5 my-10'>
                    <LoginInput
                        placeholder='Name'
                        type='text'
                        value={formData.name}
                        setValue={(value) => handleChange("name", value)}
                    />
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

                <Button title='Create Account' className='w-full' />
                <button
                    type='button'
                    className='flex items-center justify-center gap-4 w-full py-3 border border-[var(--border)] shadow rounded cursor-pointer my-5 '
                >
                    <img src={googleLogo} alt='Google Logo' />
                    <p>Sign up with Google</p>
                </button>

                <div className='flex items-center justify-center gap-2 mt-10'>
                    <p className='text-sm text-[#333]'>Already have account?</p>
                    <button
                        onClick={() => setIsLogin(true)}
                        className='relative cursor-pointer'
                        type='button'
                    >
                        <p>Login</p>
                        <p className='w-full h-[2px] bg-[var(--foreground-grey)] absolute -bottom-0 left-0'></p>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
