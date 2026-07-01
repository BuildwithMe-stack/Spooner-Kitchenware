"use client";

import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useCommerce } from "@/lib/commerce";
import { formatPrice } from "@/lib/data";

const shippingCost = 450;

export function CartContents() {
  const [coupon, setCoupon] = useState("");
  const { cartProducts, cartTotal, removeFromCart, updateQuantity } = useCommerce();

  const discount = useMemo(() => {
    return coupon.trim().toUpperCase() === "SPOONER10"
      ? Math.round(cartTotal * 0.1)
      : 0;
  }, [cartTotal, coupon]);

  const total = cartTotal + (cartProducts.length ? shippingCost : 0) - discount;

  if (cartProducts.length === 0) {
    return (
      <div className="empty-state">
        <ShoppingBag aria-hidden="true" size={42} />
        <h2>Your cart is empty</h2>
        <p>Browse the shop and add cookware, tools, appliances, or tableware.</p>
        <Link className="primary-button" href="/shop">
          Shop products
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <div className="cart-lines">
        {cartProducts.map(({ product, quantity }) => {
          const linePrice = (product.salePrice ?? product.price) * quantity;

          return (
            <article className="cart-line" key={product.id}>
              <Image
                alt={product.name}
                src={product.image}
                width={130}
                height={130}
              />
              <div>
                <Link href={`/product/${product.slug}`}>
                  <h2>{product.name}</h2>
                </Link>
                <span>{product.sku}</span>
                <strong>{formatPrice(linePrice)}</strong>
              </div>
              <div className="quantity-stepper">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => updateQuantity(product.id, quantity - 1)}
                >
                  <Minus aria-hidden="true" size={15} />
                </button>
                <input
                  aria-label={`${product.name} quantity`}
                  value={quantity}
                  type="number"
                  min="1"
                  onChange={(event) =>
                    updateQuantity(product.id, Number.parseInt(event.target.value, 10) || 1)
                  }
                />
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => updateQuantity(product.id, quantity + 1)}
                >
                  <Plus aria-hidden="true" size={15} />
                </button>
              </div>
              <button
                className="icon-only danger"
                type="button"
                aria-label={`Remove ${product.name}`}
                onClick={() => removeFromCart(product.id)}
              >
                <Trash2 aria-hidden="true" size={18} />
              </button>
            </article>
          );
        })}
      </div>

      <aside className="order-summary">
        <h2>Order Summary</h2>
        <label>
          Coupon Code
          <input
            value={coupon}
            onChange={(event) => setCoupon(event.target.value)}
            placeholder="Try SPOONER10"
          />
        </label>
        <dl>
          <div>
            <dt>Subtotal</dt>
            <dd>{formatPrice(cartTotal)}</dd>
          </div>
          <div>
            <dt>Shipping</dt>
            <dd>{formatPrice(shippingCost)}</dd>
          </div>
          <div>
            <dt>Discount</dt>
            <dd>-{formatPrice(discount)}</dd>
          </div>
          <div className="summary-total">
            <dt>Total</dt>
            <dd>{formatPrice(total)}</dd>
          </div>
        </dl>
        <Link className="primary-button full-width" href="/checkout">
          Proceed to Checkout
        </Link>
      </aside>
    </div>
  );
}
