const Button = ({
    title,
    className = "",
    onClick,
    variant = "default"
}: {
    title: string;
    className?: string;
    onClick?: () => void;
    variant?: "default" | "outline";
}) => {
    const defaultStyle =
        "text-sm px-10 py-3.5 rounded-sm select-none duration-150 cursor-pointer";

    const variantStyles =
        variant === "outline"
            ? "border-2 border-[var(--border)] font-medium"
            : "bg-[var(--button)] text-[var(--foreground-white)] hover:bg-[var(--button-hover)]";

    return (
        <button
            onClick={onClick}
            className={`${defaultStyle} ${variantStyles} ${className}`}
        >
            {title}
        </button>
    );
};

export default Button;
