import type { Metadata } from "next";
import {
  Activity,
  Bell,
  Boxes,
  FileBarChart,
  LayoutDashboard,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ExpandableThemeScreenshot from "@/components/ui/ExpandableThemeScreenshot";

export const metadata: Metadata = {
  title: "Tableros | ViewSyn",
  description:
    "Conoce vistas reales de ViewSyn para actividad, activos, alertas y reportes.",
};

const showcases = [
  {
    kicker: "Actividad",
    title: "Entiende cómo se utiliza la infraestructura.",
    description:
      "Consulta tiempos, cobertura de agentes y actividad por empleado conservando el contexto operativo.",
    icon: Activity,
    light: "/screenshots/ViewSyn/light/activity.png",
    dark: "/screenshots/ViewSyn/dark/activity.png",
    alt: "Tablero de actividad de ViewSyn",
  },
  {
    kicker: "Activos",
    title: "Inventario y responsables desde una sola vista.",
    description:
      "Relaciona activos con empleados, áreas, agentes y estados para mantener trazabilidad de la infraestructura.",
    icon: Boxes,
    light: "/screenshots/ViewSyn/light/assets.png",
    dark: "/screenshots/ViewSyn/dark/assets.png",
    alt: "Vista de activos de ViewSyn",
  },
  {
    kicker: "Alertas",
    title: "Da seguimiento a lo que requiere atención.",
    description:
      "Visualiza severidad, estado y contexto de los eventos para mantener un seguimiento operativo claro.",
    icon: Bell,
    light: "/screenshots/ViewSyn/light/alerts.png",
    dark: "/screenshots/ViewSyn/dark/alerts.png",
    alt: "Vista de alertas de ViewSyn",
  },
  {
    kicker: "Reportes",
    title: "Convierte la operación en información consultable.",
    description:
      "Accede a reportes de actividad, inventario, conectividad, alertas, aplicaciones y asignaciones.",
    icon: FileBarChart,
    light: "/screenshots/ViewSyn/light/reports.png",
    dark: "/screenshots/ViewSyn/dark/reports.png",
    alt: "Centro de reportes de ViewSyn",
  },
];

export default function DashboardsPage() {
  return (
    <>
      <Navbar />

      <main className="premium-route-main nox-dashboards-v2">
        <section className="nox-dashboards-hero">
          <div className="container">
            <span className="section-kicker">Tableros</span>

            <div className="nox-dashboards-hero-grid">
              <h1>
                Información operativa
                <span> que sí puedes leer.</span>
              </h1>

              <p>
                Vistas reales de ViewSyn para consultar la operación,
                identificar pendientes y mantener el contexto de tu
                organización en un solo lugar.
              </p>
            </div>
          </div>
        </section>

        <section className="nox-dashboard-featured-section">
          <div className="container">
            <div className="nox-dashboard-featured-heading">
              <span className="nox-dashboard-featured-icon">
                <LayoutDashboard size={19} />
              </span>

              <div>
                <span className="section-kicker">Panel principal</span>

                <h2>
                  Una vista ejecutiva
                  <span> antes de entrar al detalle.</span>
                </h2>
              </div>

              <p>
                Indicadores, actividad, agentes, aplicaciones,
                alertas y pendientes reunidos en un tablero general.
              </p>
            </div>

            <ExpandableThemeScreenshot
              lightSrc="/screenshots/ViewSyn/light/dashboard.png"
              darkSrc="/screenshots/ViewSyn/dark/dashboard.png"
              alt="Panel principal real de ViewSyn"
              label="Producto real · Panel principal"
              className="nox-dashboard-featured-shot"
              priority
            />
          </div>
        </section>

        <section className="nox-dashboard-modules-section">
          <div className="container">
            <div className="nox-dashboard-modules-heading">
              <span className="section-kicker">Vistas clave</span>

              <h2>
                Cada módulo mantiene
                <span> el mismo lenguaje visual.</span>
              </h2>

              <p>
                En lugar de reducir cada pantalla a una miniatura,
                mostramos cada módulo con espacio suficiente para
                apreciar realmente la interfaz.
              </p>
            </div>

            <div className="nox-dashboard-module-list">
              {showcases.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    className={`nox-dashboard-module ${
                      index % 2 === 1 ? "is-reversed" : ""
                    }`}
                    key={item.kicker}
                  >
                    <div className="nox-dashboard-module-copy">
                      <span className="nox-dashboard-module-icon">
                        <Icon size={18} />
                      </span>

                      <span className="section-kicker">
                        {item.kicker}
                      </span>

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>
                    </div>

                    <ExpandableThemeScreenshot
                      lightSrc={item.light}
                      darkSrc={item.dark}
                      alt={item.alt}
                      label={`Producto real · ${item.kicker}`}
                      className="nox-dashboard-module-shot"
                    />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
