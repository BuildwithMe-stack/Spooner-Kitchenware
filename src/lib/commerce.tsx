"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { products, type Product } from "./data";

type CartLine = {
  productId: string;
  quantity: number;
};

type CommerceContextValue = {
  cart: CartLine[];
  wishlist: string[];
  addToCart: (productId: string, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  cartProducts: Array<CartLine & { product: Product }>;
  clearCart: () => void;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);

const cartKey = "spooner-cart";
const wishlistKey = "spooner-wishlist";

function readJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CommerceProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setCart(readJson<CartLine[]>(cartKey, []));
    setWishlist(readJson<string[]>(wishlistKey, []));
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) {
      window.localStorage.setItem(cartKey, JSON.stringify(cart));
    }
  }, [cart, ready]);

  useEffect(() => {
    if (ready) {
      window.localStorage.setItem(wishlistKey, JSON.stringify(wishlist));
    }
  }, [ready, wishlist]);

  const addToCart = useCallback((productId: string, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((line) => line.productId === productId);

      if (existing) {
        return current.map((line) =>
          line.productId === productId
            ? { ...line, quantity: Math.min(line.quantity + quantity, 99) }
            : line
        );
      }

      return [...current, { productId, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setCart((current) =>
      current
        .map((line) =>
          line.productId === productId
            ? { ...line, quantity: Math.max(1, Math.min(quantity, 99)) }
            : line
        )
        .filter((line) => line.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((current) => current.filter((line) => line.productId !== productId));
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const value = useMemo<CommerceContextValue>(() => {
    const cartProducts = cart
      .map((line) => {
        const product = products.find((item) => item.id === line.productId);
        return product ? { ...line, product } : null;
      })
      .filter((line): line is CartLine & { product: Product } => Boolean(line));

    const cartTotal = cartProducts.reduce((total, line) => {
      const price = line.product.salePrice ?? line.product.price;
      return total + price * line.quantity;
    }, 0);

    return {
      cart,
      wishlist,
      addToCart,
      updateQuantity,
      removeFromCart,
      toggleWishlist,
      isWishlisted: (productId) => wishlist.includes(productId),
      cartCount: cart.reduce((count, line) => count + line.quantity, 0),
      wishlistCount: wishlist.length,
      cartTotal,
      cartProducts,
      clearCart
    };
  }, [addToCart, cart, clearCart, removeFromCart, toggleWishlist, updateQuantity, wishlist]);

  return (
    <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>
  );
}

export function useCommerce() {
  const context = useContext(CommerceContext);

  if (!context) {
    throw new Error("useCommerce must be used inside CommerceProvider");
  }

  return context;
}
