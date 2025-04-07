const Pagination = ({
    pagination,
    selected,
    setSelected,
    path
}: {
    pagination: string[];
    selected: number;
    setSelected: (value: number) => void;
    path: string;
}) => {
    return pagination.map((_item, index) => (
        <button
            key={index}
            className={`border-2  ${
                index === selected
                    ? `${
                          path === "about"
                              ? "border-[var(--foreground-grey)]"
                              : "border-[var(--foreground-white)]"
                      }  bg-[var(--button)] `
                    : "border-transparent bg-[var(--foreground-grey)]"
            } w-3 h-3 rounded-full cursor-pointer transition-all duration-150`}
            onClick={() => setSelected(index)}
        ></button>
    ));
};
export default Pagination;
