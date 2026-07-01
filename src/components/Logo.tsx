import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="logo-link" href="/" aria-label="Spooner Kitchenware home">
      <Image
        src="/logo.svg"
        alt="Spooner Kitchenware"
        width={compact ? 178 : 224}
        height={compact ? 46 : 58}
        priority
      />
    </Link>
  );
}
