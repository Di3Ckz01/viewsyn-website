"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggle from "@/components/layout/ThemeToggle";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/funcionalidades", label: "Funcionalidades" },
  { href: "/tableros", label: "Tableros" },
  { href: "/membresias", label: "Membresías" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`premium-header ${
        scrolled ? "is-scrolled" : ""
      }`}
    >
      <div className="container">
        <nav className="premium-navbar">
          <Link
            href="/"
            className="premium-brand"
            onClick={closeMenu}
          >
            <span className="premium-brand-mark">V</span>

            <span className="premium-brand-name">
              View<span>Syn</span>
            </span>
          </Link>

          <div className="premium-nav-links">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href) ? "is-active" : ""
                }
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="premium-nav-actions">
            <ThemeToggle />

            {platformUrl ? (
              <a
                href={platformUrl}
                className="premium-login-link"
              >
                Iniciar sesión
              </a>
            ) : (
              <span
                className="premium-login-link"
                aria-disabled="true"
                title="Configura NEXT_PUBLIC_PLATFORM_URL para habilitar el acceso"
              >
                Iniciar sesión
              </span>
            )}

            <Link
              href="/membresias"
              className="premium-nav-cta"
              onClick={closeMenu}
            >
              Empezar
            </Link>

            <button
              type="button"
              className="premium-mobile-trigger"
              aria-label={
                open ? "Cerrar menú" : "Abrir menú"
              }
              aria-expanded={open}
              onClick={() =>
                setOpen((current) => !current)
              }
            >
              {open ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </nav>

        <div
          className={`premium-mobile-menu ${
            open ? "is-open" : ""
          }`}
        >
          <div className="premium-mobile-menu-inner">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href) ? "is-active" : ""
                }
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            <div className="premium-mobile-menu-actions">
              {platformUrl ? (
                <a
                  href={platformUrl}
                  onClick={closeMenu}
                >
                  Iniciar sesión
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  title="Configura NEXT_PUBLIC_PLATFORM_URL para habilitar el acceso"
                >
                  Iniciar sesión
                </span>
              )}

              <Link
                href="/membresias"
                onClick={closeMenu}
              >
                Empezar con ViewSyn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}