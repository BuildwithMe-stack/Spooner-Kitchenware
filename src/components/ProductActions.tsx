"use client";

import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCommerce } from "@/lib/commerce";
import type { Product } from "@/lib/data";

export function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isWishlisted, toggleWishlist } = useCommerce();

  return (
    <div className="product-detail-actions">
      <div className="quantity-stepper">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((value) => Math.max(1, value - 1))}
        >
          -
        </button>
        <input
          aria-label="Quantity"
          value={quantity}
          onChange={(event) =>
            setQuantity(Math.max(1, Number.parseInt(event.target.value, 10) || 1))
          }
          type="number"
          min="1"
          max="99"
        />
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQuantity((value) => Math.min(99, value + 1))}
        >
          +
        </button>
      </div>
      <button className="primary-button" type="button" onClick={() => addToCart(product.id, quantity)}>
        <ShoppingCart aria-hidden="true" size={18} />
        Add to Cart
      </button>
      <button className="dark-button" type="button" onClick={() => addToCart(product.id, quantity)}>
        <ShoppingBag aria-hidden="true" size={18} />
        Buy Now
      </button>
      <button
        className={`secondary-button ${isWishlisted(product.id) ? "is-active" : ""}`}
        type="button"
        onClick={() => toggleWishlist(product.id)}
      >
        <Heart aria-hidden="true" size={18} fill="currentColor" />
        Add to Wishlist
      </button>
    </div>
  );
}
