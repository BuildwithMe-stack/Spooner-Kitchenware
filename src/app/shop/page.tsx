import { CategoryGrid } from "@/components/CategoryGrid";
import { ShopProductGrid } from "@/components/ShopProductGrid";

export default function ShopPage() {
  return (
    <>
      <section className="page-hero shop-hero">
        <span className="eyebrow">Shop</span>
        <h1>Find the right kitchenware faster</h1>
        <p>
          Filter by category, brand, price, availability, and rating across
          cookware, cutlery, tableware, appliances, storage, and restaurant supplies.
        </p>
      </section>
      <section className="section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Categories</span>
            <h2>Browse departments</h2>
          </div>
        </div>
        <CategoryGrid />
      </section>
      <section className="section">
        <ShopProductGrid />
      </section>
    </>
  );
}
