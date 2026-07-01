"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getProductSuggestions } from "@/lib/data";

export function SearchBox() {
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => getProductSuggestions(query), [query]);

  return (
    <div className="search-shell">
      <label className="sr-only" htmlFor="site-search">
        Search products
      </label>
      <Search aria-hidden="true" size={18} />
      <input
        id="site-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search cookware, appliances, storage..."
        type="search"
      />
      {suggestions.length > 0 ? (
        <div className="search-suggestions" role="listbox">
          {suggestions.map((product) => (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              onClick={() => setQuery("")}
              role="option"
            >
              <span>{product.name}</span>
              <small>{product.category}</small>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
