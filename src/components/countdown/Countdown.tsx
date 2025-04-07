import { useState, useEffect } from "react";

type CountdownProps = {
    hours?: number;
    minutes?: number;
    seconds?: number;
    isBanner: boolean;
};

const Countdown = ({
    hours = 0,
    minutes = 0,
    seconds = 0,
    isBanner
}: CountdownProps) => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    const [timeLeft, setTimeLeft] = useState<number>(totalSeconds);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const calculateTime = (timeInSeconds: number) => {
        const days = Math.floor(timeInSeconds / (3600 * 24));
        const remainingHours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
        const remainingMinutes = Math.floor((timeInSeconds % 3600) / 60);
        const remainingSeconds = timeInSeconds % 60;

        return { days, remainingHours, remainingMinutes, remainingSeconds };
    };

    const { days, remainingHours, remainingMinutes, remainingSeconds } =
        calculateTime(timeLeft);

    return (
        <div>
            {isBanner ? (
                <div className='flex items-center gap-4 my-4'>
                    <div className='w-16 h-16 bg-[var(--background-light)] rounded-full flex flex-col items-center justify-center'>
                        <p className='text-xs font-semibold'>
                            {days.toString().padStart(2, "0")}
                        </p>
                        <p className='text-xs'>Days</p>
                    </div>
                    <div className='w-16 h-16 bg-[var(--background-light)] rounded-full flex flex-col items-center justify-center'>
                        <p className='text-xs font-semibold'>
                            {remainingHours.toString().padStart(2, "0")}
                        </p>
                        <p className='text-xs'>Hours</p>
                    </div>
                    <div className='w-16 h-16 bg-[var(--background-light)] rounded-full flex flex-col items-center justify-center'>
                        <p className='text-xs font-semibold'>
                            {remainingMinutes.toString().padStart(2, "0")}
                        </p>
                        <p className='text-xs'>Minutes</p>
                    </div>
                    <div className='w-16 h-16 bg-[var(--background-light)] rounded-full flex flex-col items-center justify-center'>
                        <p className='text-xs font-semibold'>
                            {remainingSeconds.toString().padStart(2, "0")}
                        </p>
                        <p className='text-xs'>Seconds</p>
                    </div>
                </div>
            ) : (
                <div className='flex items-center gap-4'>
                    <div className='text-xl font-medium text-left'>
                        <p className='text-xs'>Days</p>
                        <p className='font-bold text-3xl'>
                            {days.toString().padStart(2, "0")}
                        </p>
                    </div>
                    <div className='text-[var(--button)] text-3xl mt-2'>:</div>
                    <div className='text-xl font-medium text-left'>
                        <p className='text-xs'>Hours</p>
                        <p className='font-bold text-3xl'>
                            {remainingHours.toString().padStart(2, "0")}
                        </p>
                    </div>
                    <div className='text-[var(--button)] text-3xl mt-2'>:</div>
                    <div className='text-xl font-medium text-left'>
                        <p className='text-xs'>Minutes</p>
                        <p className='font-bold text-3xl'>
                            {remainingMinutes.toString().padStart(2, "0")}
                        </p>
                    </div>
                    <div className='text-[var(--button)] text-3xl mt-2'>:</div>
                    <div className='text-xl font-medium text-left'>
                        <p className='text-xs'>Seconds</p>
                        <p className='font-bold text-3xl'>
                            {remainingSeconds.toString().padStart(2, "0")}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Countdown;
