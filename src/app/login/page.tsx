import { LockKeyhole, Mail, UserPlus } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export default function LoginPage() {
  return (
    <section className="auth-page">
      <div className="auth-panel">
        <Logo />
        <div>
          <span className="eyebrow">Customer Accounts</span>
          <h1>Login or create account</h1>
        </div>
        <form className="auth-form">
          <label>
            Email
            <span>
              <Mail aria-hidden="true" size={18} />
              <input placeholder="you@example.com" type="email" />
            </span>
          </label>
          <label>
            Password
            <span>
              <LockKeyhole aria-hidden="true" size={18} />
              <input placeholder="Password" type="password" />
            </span>
          </label>
          <button className="primary-button full-width" type="button">
            Login
          </button>
        </form>
        <div className="auth-links">
          <Link href="/account">Recover Password</Link>
          <Link href="/account">
            <UserPlus aria-hidden="true" size={16} />
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
}
