import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bell,
  Monitor,
} from "lucide-react";

import ThemeScreenshot from "@/components/ui/ThemeScreenshot";

export default function ProductShowcase() {
  return (
    <section className="real-showcase-section">
      <div className="container real-showcase-layout">
        <div className="real-showcase-copy">
          <span className="section-kicker">
            ViewSyn en acción
          </span>

          <h2>
            La operación se vuelve
            <span> visible y accionable.</span>
          </h2>

          <p>
            Consulta actividad, estado de los equipos y eventos
            operativos desde una experiencia construida para
            mantener el contexto en un solo lugar.
          </p>

          <div className="real-showcase-points">
            <article>
              <span><Monitor size={17} /></span>
              <div>
                <strong>Infraestructura visible</strong>
                <p>Equipos, responsables y estado operativo.</p>
              </div>
            </article>

            <article>
              <span><Activity size={17} /></span>
              <div>
                <strong>Actividad centralizada</strong>
                <p>Información reportada por los agentes ViewSyn.</p>
              </div>
            </article>

            <article>
              <span><Bell size={17} /></span>
              <div>
                <strong>Seguimiento operativo</strong>
                <p>Alertas y eventos que requieren atención.</p>
              </div>
            </article>
          </div>

          <Link href="/tableros" className="premium-text-link">
            Conocer los tableros
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="real-showcase-visual">
          <span className="real-shot-label">
            Producto real · Actividad
          </span>

          <ThemeScreenshot
            lightSrc="/screenshots/ViewSyn/light/activity.png"
            darkSrc="/screenshots/ViewSyn/dark/activity.png"
            alt="Vista de actividad de ViewSyn"
            className="real-showcase-screenshot"
          />
        </div>
      </div>
    </section>
  );
}
