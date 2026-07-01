"use client";

import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/data";

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero-section" aria-label="Featured shopping banners">
      <Image
        alt=""
        className="hero-bg"
        src={slide.image}
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="eyebrow">{slide.eyebrow}</span>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/shop">
            <ShoppingBag aria-hidden="true" size={18} />
            Shop Now
          </Link>
          <Link className="secondary-button" href="/contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="hero-controls" aria-label="Hero controls">
        <button
          type="button"
          aria-label="Previous banner"
          onClick={() =>
            setActive((index) => (index - 1 + heroSlides.length) % heroSlides.length)
          }
        >
          <ArrowLeft aria-hidden="true" size={18} />
        </button>
        <div className="hero-dots">
          {heroSlides.map((item, index) => (
            <button
              key={item.eyebrow}
              type="button"
              aria-label={`Show ${item.eyebrow}`}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next banner"
          onClick={() => setActive((index) => (index + 1) % heroSlides.length)}
        >
          <ArrowRight aria-hidden="true" size={18} />
        </button>
      </div>
    </section>
  );
}
