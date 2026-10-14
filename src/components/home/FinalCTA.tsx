import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="premium-final-cta-section">
      <div className="container">
        <div className="premium-final-cta">
          <div className="premium-final-cta-glow" />

          <div className="premium-final-cta-copy">
            <span className="section-kicker">Empieza con ViewSyn</span>
            <h2>Lleva el control de tu operación<span> a un solo lugar.</span></h2>
            <p>
              Centraliza activos, empleados, asignaciones, agentes, actividad y alertas con una
              plataforma diseñada para mantener la información bajo control.
            </p>

            <div className="premium-final-cta-actions">
              <Link href="/membresias" className="premium-primary-button">
                Comprar membresía <ArrowRight size={16} />
              </Link>
              <Link href="/contacto" className="premium-secondary-button">Hablar con ventas</Link>
            </div>
          </div>

          <div className="premium-final-cta-side">
            <span><ShieldCheck size={23} /></span>
            <div>
              <small>Acceso organizado</small>
              <strong>Usuarios, roles y permisos por organización</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
