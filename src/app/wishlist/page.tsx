import { WishlistContents } from "@/components/WishlistContents";

export default function WishlistPage() {
  return (
    <section className="section page-stack">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Wishlist</span>
          <h1>Saved products</h1>
        </div>
      </div>
      <WishlistContents />
    </section>
  );
}
