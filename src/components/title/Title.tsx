const Title = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center gap-3 select-none">
            <div className="w-5 h-10 bg-[var(--button)] rounded-sm"></div>
            <p className="font-medium text-[var(--button)] text-sm">{title}</p>
        </div>
    );
};
export default Title;
