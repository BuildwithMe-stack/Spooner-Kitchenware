"use client";

import {
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  ShoppingCart,
  UserRound,
  X
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCommerce } from "@/lib/commerce";
import { locationName, phoneNumber, whatsAppUrl } from "@/lib/data";
import { Logo } from "./Logo";
import { SearchBox } from "./SearchBox";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/shop#categories", label: "Categories" },
  { href: "/shop?sort=newest", label: "New Arrivals" },
  { href: "/shop?sort=popular", label: "Best Sellers" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { cartCount, wishlistCount } = useCommerce();

  return (
    <header className="site-header">
      <div className="top-bar">
        <div>
          <MapPin aria-hidden="true" size={15} />
          <span>{locationName}</span>
        </div>
        <a href={whatsAppUrl}>
          <MessageCircle aria-hidden="true" size={15} />
          <span>WhatsApp: {phoneNumber}</span>
        </a>
        <span className="top-bar-delivery">Free delivery on selected Nairobi orders</span>
      </div>

      <div className="header-main">
        <Logo compact />
        <SearchBox />
        <div className="header-actions">
          <Link className="icon-action" href="/wishlist" aria-label="Wishlist">
            <Heart aria-hidden="true" size={20} />
            {wishlistCount > 0 ? <span>{wishlistCount}</span> : null}
          </Link>
          <Link className="icon-action" href="/cart" aria-label="Cart">
            <ShoppingCart aria-hidden="true" size={20} />
            {cartCount > 0 ? <span>{cartCount}</span> : null}
          </Link>
          <Link className="login-link" href="/login">
            <UserRound aria-hidden="true" size={18} />
            <span>Login / Register</span>
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      <nav
        className={`site-nav ${open ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Main navigation"
      >
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
