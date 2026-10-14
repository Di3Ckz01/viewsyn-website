import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import {
  
  ArrowRight,
  Bell,
  FileBarChart,
  HardDrive,
  MonitorCog,
  ShieldCheck,
  Users,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
};

const features: Feature[] = [
  {
    icon: HardDrive,
    title: "Activos y asignaciones",
    description:
      "Centraliza los equipos de tu organización y conserva la trazabilidad de responsables, entregas y devoluciones.",
    details: [
      "Gestión de activos",
      "Asignaciones y responsables",
      "Historial de movimientos",
    ],
  },
  {
    icon: Users,
    title: "Empleados y áreas",
    description:
      "Organiza al personal de tu empresa y relaciona empleados, áreas y equipos desde un mismo lugar.",
    details: [
      "Registro de empleados",
      "Organización por áreas",
      "Relación con activos",
    ],
  },
  {
    icon: MonitorCog,
    title: "Agentes y actividad",
    description:
      "Conecta los equipos mediante el agente ViewSyn y consulta la información operativa recopilada.",
    details: [
      "Emparejamiento de equipos",
      "Estado de agentes",
      "Actividad y uso de aplicaciones",
    ],
  },
  {
    icon: Bell,
    title: "Alertas y mantenimiento",
    description:
      "Identifica eventos que requieren atención y conserva el historial de mantenimiento de los equipos.",
    details: [
      "Alertas operativas",
      "Seguimiento de eventos",
      "Mantenimientos y reparaciones",
    ],
  },
  {
    icon: FileBarChart,
    title: "Reportes y trazabilidad",
    description:
      "Consulta información consolidada y mantén historial de los principales movimientos de tu operación.",
    details: [
      "Reportes operativos",
      "Consulta histórica",
      "Exportación de información",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y organizaciones",
    description:
      "Administra organizaciones, usuarios, roles y permisos manteniendo separado el contexto de cada empresa.",
    details: [
      "Usuarios y roles",
      "Permisos de acceso",
      "Separación por organización",
    ],
  },
];

export default function FunctionalitiesPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="internal-hero">
          <div className="internal-hero-glow" />

          <div className="container internal-hero-content">
            <span className="section-kicker">
              Funcionalidades
            </span>

            <h1>
              Todo lo que necesitas para mantener
              <span> tu operación bajo control.</span>
            </h1>

            <p>
              ViewSyn reúne en una sola plataforma la administración de
              activos, empleados, asignaciones, agentes, actividad,
              alertas y seguridad de tu organización.
            </p>

            <div className="internal-hero-actions">
              <Link
                href="/membresias"
                className="btn btn-primary btn-large"
              >
                Comprar membresía
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/tableros"
                className="btn btn-secondary btn-large"
              >
                Ver tableros
              </Link>
            </div>
          </div>
        </section>

        <section className="features-detail-section">
          <div className="container">
            <div className="features-detail-heading">
              <span className="section-kicker">
                Plataforma ViewSyn
              </span>

              <h2>
                Una plataforma.
                <span> Diferentes áreas de control.</span>
              </h2>

              <p>
                Cada módulo forma parte del mismo ecosistema y comparte
                el contexto operativo de la organización.
              </p>
            </div>

            <div className="features-detail-grid">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    className="feature-detail-card"
                    key={feature.title}
                  >
                    <div className="feature-detail-icon">
                      <Icon size={21} />
                    </div>

                    <div className="feature-detail-content">
                      <h3>{feature.title}</h3>

                      <p>{feature.description}</p>

                      <ul>
                        {feature.details.map((detail) => (
                          <li key={detail}>
                            <span />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="features-flow-section">
          <div className="container">
            <div className="features-flow-heading">
              <span className="section-kicker">
                Cómo funciona
              </span>

              <h2>
                De la configuración
                <span> a la visibilidad operativa.</span>
              </h2>
            </div>

            <div className="features-flow">
              <article>
                <span>01</span>
                <h3>Configura tu organización</h3>
                <p>
                  Registra la empresa, áreas, usuarios y permisos.
                </p>
              </article>

              <div className="flow-line" />

              <article>
                <span>02</span>
                <h3>Registra personal y activos</h3>
                <p>
                  Centraliza empleados, equipos y responsables.
                </p>
              </article>

              <div className="flow-line" />

              <article>
                <span>03</span>
                <h3>Conecta los agentes</h3>
                <p>
                  Empareja los equipos que reportarán información.
                </p>
              </article>

              <div className="flow-line" />

              <article>
                <span>04</span>
                <h3>Supervisa tu operación</h3>
                <p>
                  Consulta actividad, alertas, asignaciones y reportes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="internal-final-cta">
          <div className="container">
            <div className="internal-final-cta-card">
              <div>
                <span className="section-kicker">
                  Empieza con ViewSyn
                </span>

                <h2>
                  Lleva estas funcionalidades
                  <span> a tu organización.</span>
                </h2>

                <p>
                  Consulta las membresías disponibles y elige la que se
                  adapte a las necesidades de tu operación.
                </p>
              </div>

              <Link
                href="/membresias"
                className="btn btn-primary btn-large"
              >
                Ver membresías
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}