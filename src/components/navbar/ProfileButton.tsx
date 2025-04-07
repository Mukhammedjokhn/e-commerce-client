const ProfileButton = ({
    icon,
    label,
    onClick,
    danger = false,
}: {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    danger?: boolean;
}) => {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center gap-4 cursor-pointer px-2 py-1.5 rounded-md transition ${
                danger ? "text-red-500" : "text-[var(--foreground-white)]"
            } hover:bg-white/10`}
        >
            {icon}
            <p className="text-sm">{label}</p>
        </button>
    );
};

export default ProfileButton;
