import {
  Apple,
  BadgeDollarSign,
  CreditCard,
  MapPinned,
  Smartphone,
  WalletCards
} from "lucide-react";

const paymentOptions = [
  { name: "Visa", icon: CreditCard },
  { name: "Mastercard", icon: WalletCards },
  { name: "Apple Pay", icon: Apple },
  { name: "Google Pay", icon: Smartphone },
  { name: "PayPal", icon: BadgeDollarSign },
  { name: "M-Pesa", icon: Smartphone },
  { name: "Cash on Delivery", icon: MapPinned }
];

export default function CheckoutPage() {
  return (
    <section className="section checkout-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Checkout</span>
          <h1>Complete your order</h1>
        </div>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form">
          <fieldset>
            <legend>Customer Details</legend>
            <div className="form-grid">
              <label>
                Name
                <input placeholder="Full name" />
              </label>
              <label>
                Email
                <input placeholder="you@example.com" type="email" />
              </label>
              <label>
                Phone
                <input placeholder="0722 924 746" type="tel" />
              </label>
              <label>
                Delivery Address
                <textarea placeholder="Building, street, town, and notes" rows={4} />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Delivery Options</legend>
            <div className="option-grid">
              <label>
                <input defaultChecked name="delivery" type="radio" />
                Nairobi delivery
              </label>
              <label>
                <input name="delivery" type="radio" />
                Pickup at Kamukunji Trade Center
              </label>
              <label>
                <input name="delivery" type="radio" />
                Upcountry courier
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Payment Options</legend>
            <div className="payment-grid">
              {paymentOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <label key={option.name}>
                    <input name="payment" type="radio" />
                    <Icon aria-hidden="true" size={19} />
                    {option.name}
                  </label>
                );
              })}
            </div>
          </fieldset>
        </form>

        <aside className="order-summary checkout-summary">
          <h2>Order Summary</h2>
          <dl>
            <div>
              <dt>Items</dt>
              <dd>Calculated from cart</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>Calculated at checkout</dd>
            </div>
            <div className="summary-total">
              <dt>Total</dt>
              <dd>Confirm cart</dd>
            </div>
          </dl>
          <button className="primary-button full-width" type="button">
            Place Order
          </button>
        </aside>
      </div>
    </section>
  );
}
