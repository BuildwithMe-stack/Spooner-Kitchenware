import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="logo-link" href="/" aria-label="Spooner Kitchenware home">
      <Image
        src="/logo.jpg"
        alt="Spooner Kitchenware"
        width={compact ? 58 : 84}
        height={compact ? 58 : 84}
        priority
      />
      <span>
        <strong>Spooner</strong>
        <small>Kitchenware</small>
      </span>
    </Link>
  );
}
