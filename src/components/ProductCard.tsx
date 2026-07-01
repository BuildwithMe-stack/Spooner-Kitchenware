"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/lib/commerce";
import { formatPrice, type Product } from "@/lib/data";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, isWishlisted, toggleWishlist } = useCommerce();
  const price = product.salePrice ?? product.price;

  return (
    <article className="product-card">
      <Link className="product-image-link" href={`/product/${product.slug}`}>
        {product.badge ? <span className="product-badge">{product.badge}</span> : null}
        <Image
          alt={product.name}
          className="product-image"
          src={product.image}
          width={520}
          height={520}
          sizes="(max-width: 720px) 50vw, (max-width: 1100px) 33vw, 260px"
        />
      </Link>
      <div className="product-card-body">
        <Link href={`/product/${product.slug}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="rating-row" aria-label={`${product.rating} out of 5 stars`}>
          <Star aria-hidden="true" size={15} fill="currentColor" />
          <span>{product.rating.toFixed(1)}</span>
          <small>({product.reviewCount})</small>
        </div>
        <div className="price-row">
          <strong>{formatPrice(price)}</strong>
          {product.salePrice ? <span>{formatPrice(product.price)}</span> : null}
        </div>
        <small className={`stock-label ${product.stock < 10 ? "is-low" : ""}`}>
          {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
        </small>
        <div className="product-actions">
          <button type="button" onClick={() => addToCart(product.id)}>
            <ShoppingCart aria-hidden="true" size={17} />
            Add to Cart
          </button>
          <button
            className={isWishlisted(product.id) ? "is-active" : ""}
            type="button"
            aria-label={`Add ${product.name} to wishlist`}
            onClick={() => toggleWishlist(product.id)}
          >
            <Heart aria-hidden="true" size={17} fill="currentColor" />
          </button>
        </div>
      </div>
    </article>
  );
}
