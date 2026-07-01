import { CartContents } from "@/components/CartContents";

export default function CartPage() {
  return (
    <section className="section page-stack">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Shopping Cart</span>
          <h1>Review your order</h1>
        </div>
      </div>
      <CartContents />
    </section>
  );
}
