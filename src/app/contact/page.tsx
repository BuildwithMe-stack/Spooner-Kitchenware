import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { locationName, phoneNumber, whatsAppUrl } from "@/lib/data";

export default function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Contact</span>
          <h1>Spooner Kitchenware</h1>
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-details">
          <article>
            <MapPin aria-hidden="true" size={22} />
            <div>
              <h2>Location</h2>
              <p>{locationName}</p>
            </div>
          </article>
          <article>
            <Phone aria-hidden="true" size={22} />
            <div>
              <h2>WhatsApp</h2>
              <a href={whatsAppUrl}>{phoneNumber}</a>
            </div>
          </article>
          <article>
            <Clock aria-hidden="true" size={22} />
            <div>
              <h2>Business Hours</h2>
              <p>Monday to Saturday, 8:00 AM to 6:00 PM</p>
            </div>
          </article>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input placeholder="Your name" />
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
            Message
            <textarea placeholder="Tell us what you need" rows={5} />
          </label>
          <button className="primary-button" type="button">
            <Mail aria-hidden="true" size={18} />
            Send Message
          </button>
          <a className="secondary-button" href={whatsAppUrl}>
            <MessageCircle aria-hidden="true" size={18} />
            WhatsApp
          </a>
        </form>
      </div>

      <div className="map-wrap">
        <iframe
          title="Kamukunji Trade Center map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Kamukunji%20Trade%20Center%20Nairobi&output=embed"
        />
      </div>
    </section>
  );
}
