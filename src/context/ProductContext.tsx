/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode
} from "react";

const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCartState] = useState<ProductDataWithQuantity[]>([]);
    const [wishlist, setWishlistState] = useState<ProductData[]>([]);

    useEffect(() => {
        const storedCart = localStorage.getItem(CART_KEY);
        const storedWishlist = localStorage.getItem(WISHLIST_KEY);

        if (storedCart) setCartState(JSON.parse(storedCart));
        if (storedWishlist) setWishlistState(JSON.parse(storedWishlist));
    }, []);

    const setCart = (product: ProductData) => {
        const existingProduct = cart.find((item) => item._id === product._id);

        if (existingProduct) {
            const updated = cart.map((item) =>
                item._id === product._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCartState(updated);
            localStorage.setItem(CART_KEY, JSON.stringify(updated));
        } else {
            const updated = [...cart, { ...product, quantity: 1 }];
            setCartState(updated);
            localStorage.setItem(CART_KEY, JSON.stringify(updated));
        }
    };

    const setWishlist = (product: ProductData) => {
        const exists = wishlist.some((item) => item._id === product._id);
        if (!exists) {
            const updated = [...wishlist, product];
            setWishlistState(updated);
            localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
        }
    };

    const removeFromCart = (id: string) => {
        const updated = cart.filter((item) => item._id !== id);
        setCartState(updated);
        localStorage.setItem(CART_KEY, JSON.stringify(updated));
    };

    const removeFromWishlist = (id: string) => {
        const updated = wishlist.filter((item) => item._id !== id);
        setWishlistState(updated);
        localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
    };

    const updateQuantity = (id: string, quantity: number) => {
        const updated = cart.map((item) =>
            item._id === id
                ? { ...item, quantity: quantity > 0 ? quantity : 1 }
                : item
        );
        setCartState(updated);
        localStorage.setItem(CART_KEY, JSON.stringify(updated));
    };

    return (
        <ProductContext.Provider
            value={{
                cart,
                wishlist,
                setCart,
                setWishlist,
                removeFromCart,
                removeFromWishlist,
                updateQuantity
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};
