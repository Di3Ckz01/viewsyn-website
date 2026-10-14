import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import ThemeScreenshot from "@/components/ui/ThemeScreenshot";

export default function Hero() {
  return (
    <section className="premium-hero real-hero">
      <div className="container">
        <div className="premium-hero-copy real-hero-copy">
          <span className="premium-eyebrow">
            <i />
            Control y visibilidad para tu operación
          </span>

          <h1>
            Tu infraestructura.
            <br />
            Tu personal.
            <br />
            <span>Todo bajo control.</span>
          </h1>

          <p>
            ViewSyn centraliza activos, empleados, asignaciones,
            agentes, actividad y alertas para que tu organización
            trabaje con información clara desde un solo lugar.
          </p>

          <div className="premium-hero-actions">
            <Link
              href="/membresias"
              className="premium-primary-button"
            >
              Conocer membresías
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/tableros"
              className="premium-secondary-button"
            >
              Explorar ViewSyn
            </Link>
          </div>

          <div className="premium-trust-row">
            <span>
              <Check size={13} />
              Gestión de activos
            </span>

            <span>
              <Check size={13} />
              Control de asignaciones
            </span>

            <span>
              <Check size={13} />
              Seguridad por organización
            </span>
          </div>
        </div>

        <div className="real-hero-stage">
          <span className="real-shot-label">
            Producto real · Panel principal
          </span>

          <ThemeScreenshot
            lightSrc="/screenshots/ViewSyn/light/dashboard.png"
            darkSrc="/screenshots/ViewSyn/dark/dashboard.png"
            alt="Panel principal de ViewSyn"
            className="real-hero-screenshot"
            priority
          />
        </div>
      </div>
    </section>
  );
}
