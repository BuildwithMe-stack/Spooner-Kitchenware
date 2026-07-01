"use client";

import { Heart } from "lucide-react";
import Link from "next/link";
import { useCommerce } from "@/lib/commerce";
import { products } from "@/lib/data";
import { ProductCard } from "./ProductCard";

export function WishlistContents() {
  const { wishlist } = useCommerce();
  const wishlistProducts = products.filter((product) => wishlist.includes(product.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="empty-state">
        <Heart aria-hidden="true" size={42} />
        <h2>No saved products yet</h2>
        <p>Save products now and move them to cart later.</p>
        <Link className="primary-button" href="/shop">
          Explore products
        </Link>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {wishlistProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
