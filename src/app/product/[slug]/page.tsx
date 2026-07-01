import { CheckCircle2, Star, Truck } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductActions } from "@/components/ProductActions";
import { ProductCard } from "@/components/ProductCard";
import {
  formatPrice,
  getProduct,
  getRelatedProducts,
  products
} from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  return {
    title: product
      ? `${product.name} | Spooner Kitchenware`
      : "Product | Spooner Kitchenware"
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);
  const price = product.salePrice ?? product.price;

  return (
    <>
      <section className="product-detail">
        <div className="product-gallery">
          <Image
            alt={product.name}
            className="product-main-image"
            src={product.image}
            width={760}
            height={760}
            priority
          />
          <div className="gallery-thumbs">
            {[product.image, ...related.slice(0, 3).map((item) => item.image)].map(
              (image, index) => (
                <Image
                  alt=""
                  key={`${image}-${index}`}
                  src={image}
                  width={110}
                  height={110}
                />
              )
            )}
          </div>
        </div>

        <div className="product-info">
          <span className="eyebrow">{product.category}</span>
          <h1>{product.name}</h1>
          <div className="rating-row">
            <Star aria-hidden="true" size={17} fill="currentColor" />
            <span>{product.rating.toFixed(1)}</span>
            <small>{product.reviewCount} reviews</small>
          </div>
          <div className="detail-price">
            <strong>{formatPrice(price)}</strong>
            {product.salePrice ? <span>{formatPrice(product.price)}</span> : null}
          </div>
          <div className="availability">
            <CheckCircle2 aria-hidden="true" size={19} />
            <span>{product.stock} in stock</span>
          </div>
          <p>{product.description}</p>
          <ProductActions product={product} />
          <div className="delivery-strip">
            <Truck aria-hidden="true" size={20} />
            <span>{product.delivery}</span>
          </div>
        </div>
      </section>

      <section className="section product-tabs">
        <div className="tab-list" role="tablist" aria-label="Product information">
          <button type="button">Description</button>
          <button type="button">Reviews</button>
          <button type="button">Specifications</button>
        </div>
        <div className="tab-content">
          <article>
            <h2>Description</h2>
            <p>{product.description}</p>
          </article>
          <article>
            <h2>Reviews</h2>
            <p>
              Customers rate this product {product.rating.toFixed(1)} out of 5
              from {product.reviewCount} reviews.
            </p>
          </article>
          <article>
            <h2>Specifications</h2>
            <ul>
              {product.specifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Related Products</span>
            <h2>Complete the order</h2>
          </div>
        </div>
        <div className="product-grid">
          {related.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}
