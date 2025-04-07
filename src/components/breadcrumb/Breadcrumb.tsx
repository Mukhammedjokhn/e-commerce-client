import { NavLink } from "react-router-dom";

type BreadcrumbProps = {
    breadcrumbLinks: BreadcrumbPropsType[];
};

const Breadcrumb = ({ breadcrumbLinks }: BreadcrumbProps) => {
    return (
        <nav className="text-sm">
            <ul className="flex items-center gap-2">
                <li>
                    <NavLink to="/" className="text-[var(--foreground-grey)]">
                        Home
                    </NavLink>
                </li>
                {breadcrumbLinks.map((crumb, index) => {
                    const isLast = index === breadcrumbLinks.length - 1;
                    return (
                        <li key={index} className="flex items-center gap-2">
                            <span>/</span>
                            {isLast ? (
                                <span>{crumb.name}</span>
                            ) : (
                                <NavLink
                                    to={`/${crumb.path}`}
                                    className="text-[var(--foreground-grey)]"
                                >
                                    {crumb.name}
                                </NavLink>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
