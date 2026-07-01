import { ArrowRight, Clock, PackageSearch, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";
import { HeroSlider } from "@/components/HeroSlider";
import { ProductCard } from "@/components/ProductCard";
import {
  categories,
  products,
  reviews,
  shopBenefits
} from "@/lib/data";

export default function HomePage() {
  const featured = products.slice(0, 8);
  const bestSellers = products.filter((product) => product.isBestSeller);
  const newArrivals = products.filter((product) => product.isNew).slice(0, 4);

  return (
    <>
      <HeroSlider />

      <section className="section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Categories</span>
            <h2>Shop by kitchen need</h2>
          </div>
          <Link className="text-link" href="/shop">
            View all
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <CategoryGrid />
      </section>

      <section className="section tinted-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Featured Products</span>
            <h2>Popular picks for busy kitchens</h2>
          </div>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Best Sellers</span>
            <h2>Customer favorites</h2>
          </div>
          <Link className="text-link" href="/shop?sort=popular">
            Shop best sellers
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
        <div className="carousel-row">
          {bestSellers.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div>
          <span className="eyebrow">New Arrivals</span>
          <h2>Fresh stock just landed</h2>
          <p>
            New cookware, serving pieces, storage sets, and electrical appliances
            are added as stock arrives.
          </p>
          <div className="quick-stats">
            <span>
              <PackageSearch aria-hidden="true" size={18} />
              {categories.length} departments
            </span>
            <span>
              <Clock aria-hidden="true" size={18} />
              Same-day dispatch
            </span>
            <span>
              <ShieldCheck aria-hidden="true" size={18} />
              Secure checkout
            </span>
          </div>
        </div>
        <div className="product-grid compact-grid">
          {newArrivals.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>

      <section className="section why-section" id="why-shop">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Why Shop With Us</span>
            <h2>Made for reliable everyday buying</h2>
          </div>
        </div>
        <div className="benefit-grid">
          {shopBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article className="benefit-item" key={benefit.title}>
                <Icon aria-hidden="true" size={23} />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Customer Reviews</span>
            <h2>Trusted by home cooks and trade buyers</h2>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    aria-hidden="true"
                    fill="currentColor"
                    key={index}
                    size={16}
                  />
                ))}
              </div>
              <p>{review.quote}</p>
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
