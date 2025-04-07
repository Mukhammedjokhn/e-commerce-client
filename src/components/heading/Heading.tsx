const Heading = ({
    title,
    className,
}: {
    title: string;
    className?: string;
}) => {
    return <div className={`${className} text-3xl font-semibold`}>{title}</div>;
};
export default Heading;
