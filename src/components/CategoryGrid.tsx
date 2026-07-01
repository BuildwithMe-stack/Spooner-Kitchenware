import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data";

export function CategoryGrid() {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <Link
          className="category-card"
          href={`/shop?category=${category.slug}`}
          key={category.slug}
        >
          <Image
            alt={category.name}
            src={category.image}
            width={420}
            height={420}
            sizes="(max-width: 720px) 44vw, (max-width: 1100px) 25vw, 180px"
          />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
