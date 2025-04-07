import { ArrowRight, ArrowLeft, ArrowUp, ArrowDown } from "lucide-react";

const icons = {
    left: ArrowLeft,
    right: ArrowRight,
    up: ArrowUp,
    down: ArrowDown
};

const ChevronButton = ({
    position,
    onClick
}: {
    position: "left" | "right" | "up" | "down";
    onClick?: () => void;
}) => {
    const IconComponent = icons[position];

    return (
        <button
            onClick={onClick}
            className='w-10 h-10 rounded-full bg-[#eee] cursor-pointer flex items-center justify-center hover:bg-[#ddd] duration-150'
        >
            <IconComponent size={18} />
        </button>
    );
};

export default ChevronButton;
