"use client";

import { SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { categories, products } from "@/lib/data";
import { ProductCard } from "./ProductCard";

const brands = Array.from(new Set(products.map((product) => product.brand)));

export function ShopProductGrid() {
  const [category, setCategory] = useState("all");
  const [brand, setBrand] = useState("all");
  const [availability, setAvailability] = useState("all");
  const [rating, setRating] = useState("all");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("popular");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      const categoryName = categories.find((item) => item.slug === category)?.name;
      result = result.filter((product) => product.category === categoryName);
    }

    if (brand !== "all") {
      result = result.filter((product) => product.brand === brand);
    }

    if (availability === "in-stock") {
      result = result.filter((product) => product.stock > 0);
    }

    if (rating !== "all") {
      result = result.filter((product) => product.rating >= Number(rating));
    }

    if (price !== "all") {
      const [min, max] = price.split("-").map(Number);
      result = result.filter((product) => {
        const value = product.salePrice ?? product.price;
        return value >= min && value <= max;
      });
    }

    if (sort === "lowest") {
      result.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
    }

    if (sort === "highest") {
      result.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
    }

    if (sort === "newest") {
      result.sort((a, b) => Number(Boolean(b.isNew)) - Number(Boolean(a.isNew)));
    }

    if (sort === "popular") {
      result.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [availability, brand, category, price, rating, sort]);

  return (
    <div className="shop-layout">
      <aside className="filter-panel" aria-label="Shop filters">
        <div className="filter-title">
          <SlidersHorizontal aria-hidden="true" size={18} />
          <h2>Filters</h2>
        </div>
        <label>
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option value={item.slug} key={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Brand
          <select value={brand} onChange={(event) => setBrand(event.target.value)}>
            <option value="all">All brands</option>
            {brands.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          Price
          <select value={price} onChange={(event) => setPrice(event.target.value)}>
            <option value="all">Any price</option>
            <option value="0-3500">Under KSh 3,500</option>
            <option value="3500-6500">KSh 3,500 to 6,500</option>
            <option value="6500-15000">KSh 6,500 and above</option>
          </select>
        </label>
        <label>
          Availability
          <select
            value={availability}
            onChange={(event) => setAvailability(event.target.value)}
          >
            <option value="all">All stock</option>
            <option value="in-stock">In stock</option>
          </select>
        </label>
        <label>
          Rating
          <select value={rating} onChange={(event) => setRating(event.target.value)}>
            <option value="all">Any rating</option>
            <option value="4">4 stars and up</option>
            <option value="4.5">4.5 stars and up</option>
          </select>
        </label>
      </aside>

      <section className="shop-results" aria-label="Products">
        <div className="results-toolbar">
          <span>{filteredProducts.length} products</span>
          <label>
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="popular">Popular</option>
              <option value="newest">Newest</option>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </label>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </div>
  );
}
