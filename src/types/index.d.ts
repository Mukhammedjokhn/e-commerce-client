declare type NavbarLinksType = {
    title: string;
    path: string;
};

declare type NavbarLinksProps = {
    links: NavbarLinksType[];
};

declare type BreadcrumbPropsType = {
    name: string;
    path: string;
};

declare type BannerCategories = {
    title: string;
    icon: boolean;
};

declare type CartData = {
    product_name: string;
    product_image: string;
    price: number;
    quantity: number;
    subtotal: number;
};

declare type ColorType = {
    color: string;
    selected: boolean;
};

declare type ProductData = {
    _id: string;
    product_name: string;
    product_image: string;
    discount: number;
    price: number;
    discount_price: number;
    isNew: boolean;
    rating: number;
    view_count: number;
    colors: ColorType[] | [];
    type: "all" | "today" | "month" | "our-product" | "for-you";
};

declare type CardProps = {
    path: "home" | "wishlist" | "just" | "color";
};

declare type ProductDataWithQuantity = ProductData & {
    quantity: number;
};

declare type ProductContextType = {
    cart: ProductDataWithQuantity[];
    wishlist: ProductData[];
    setCart: (product: ProductData) => void;
    setWishlist: (product: ProductData) => void;
    removeFromCart: (id: string) => void;
    removeFromWishlist: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
};

declare type SignUpDataType = {
    name: string;
    email: string;
    password: string;
};

declare type SignInDataType = {
    email: string;
    password: string;
};

// declare type UserDataType = {

// }

declare type AuthState = {
    userData: string | null;
    token: string | null;
};

declare type TransformResponseData = {
    innerData: ProductData[];
    message: string;
    variant: string;
};
