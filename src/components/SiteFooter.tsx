import {
  Camera,
  Hash,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Share2
} from "lucide-react";
import Link from "next/link";
import { locationName, phoneNumber, whatsAppUrl } from "@/lib/data";
import { Logo } from "./Logo";

const links = [
  ["Shop", "/shop"],
  ["About", "/#why-shop"],
  ["Contact", "/contact"],
  ["Privacy Policy", "/privacy"],
  ["Terms & Conditions", "/terms"],
  ["Returns Policy", "/returns"]
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Logo compact />
          <p>
            Kitchenware, appliances, storage, and restaurant supplies from
            Kamukunji Trade Center.
          </p>
          <a className="footer-contact" href={whatsAppUrl}>
            <MessageCircle aria-hidden="true" size={18} />
            {phoneNumber}
          </a>
          <span className="footer-contact">
            <MapPin aria-hidden="true" size={18} />
            {locationName}
          </span>
        </div>

        <div>
          <h2>Links</h2>
          <div className="footer-links">
            {links.map(([label, href]) => (
              <Link href={href} key={label}>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2>Newsletter</h2>
          <form className="newsletter-form">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <Mail aria-hidden="true" size={18} />
            <input id="newsletter-email" placeholder="Email address" type="email" />
            <button aria-label="Sign up" type="submit">
              <Send aria-hidden="true" size={18} />
            </button>
          </form>
          <div className="social-links" aria-label="Social media">
            <a href="#" aria-label="Instagram">
              <Camera aria-hidden="true" size={19} />
            </a>
            <a href="#" aria-label="Facebook">
              <Share2 aria-hidden="true" size={19} />
            </a>
            <a href="#" aria-label="X">
              <Hash aria-hidden="true" size={19} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Copyright 2026 Spooner Kitchenware.</span>
        <span>Built for fast, mobile-first shopping.</span>
      </div>
    </footer>
  );
}
