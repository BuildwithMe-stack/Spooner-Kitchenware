import {
  Heart,
  LogOut,
  MapPinned,
  PackageCheck,
  UserRound,
  WalletCards
} from "lucide-react";
import Link from "next/link";

const accountItems = [
  { label: "Profile", icon: UserRound },
  { label: "Orders", icon: PackageCheck },
  { label: "Wishlist", icon: Heart, href: "/wishlist" },
  { label: "Addresses", icon: MapPinned },
  { label: "Payment Methods", icon: WalletCards },
  { label: "Logout", icon: LogOut }
];

export default function AccountPage() {
  return (
    <section className="section dashboard-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">My Account Dashboard</span>
          <h1>Manage your Spooner account</h1>
        </div>
      </div>
      <div className="dashboard-grid">
        {accountItems.map((item) => {
          const Icon = item.icon;
          const content = (
            <>
              <Icon aria-hidden="true" size={23} />
              <span>{item.label}</span>
            </>
          );

          return item.href ? (
            <Link className="dashboard-tile" href={item.href} key={item.label}>
              {content}
            </Link>
          ) : (
            <button className="dashboard-tile" type="button" key={item.label}>
              {content}
            </button>
          );
        })}
      </div>

      <div className="account-panels">
        <article>
          <h2>Recent Orders</h2>
          <p>No orders yet. Completed purchases will appear here with order tracking.</p>
        </article>
        <article>
          <h2>Saved Addresses</h2>
          <p>Add home, business, and pickup addresses for faster checkout.</p>
        </article>
      </div>
    </section>
  );
}
