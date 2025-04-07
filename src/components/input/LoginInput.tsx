import { useState } from "react";

type LoginInputProps = {
    type: "text" | "number" | "email" | "password";
    placeholder: string;
    value: string;
    setValue: (value: string) => void;
};

const LoginInput = ({
    type,
    placeholder,
    value,
    setValue
}: LoginInputProps) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className='relative w-full'>
            <label
                className={`absolute left-2 transition-all duration-200 pointer-events-none text-[var(--foreground-grey)] ${
                    isFocused || value
                        ? "top-1 text-xs"
                        : "top-1/2 text-base -translate-y-1/2"
                }`}
            >
                {placeholder}
            </label>

            <input
                type={type}
                className='w-full border-b border-[var(--border)] outline-none p-2 pt-6'
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    );
};

export default LoginInput;
