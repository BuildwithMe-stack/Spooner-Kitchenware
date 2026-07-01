export default function PrivacyPage() {
  return (
    <section className="section prose-page">
      <span className="eyebrow">Privacy Policy</span>
      <h1>How Spooner Kitchenware handles customer information</h1>
      <p>
        Customer details are used to process orders, provide delivery updates,
        manage accounts, and support secure checkout.
      </p>
      <p>
        Live customer data should be stored in Supabase with row level security
        enabled and payment information handled through Stripe or supported payment providers.
      </p>
    </section>
  );
}
