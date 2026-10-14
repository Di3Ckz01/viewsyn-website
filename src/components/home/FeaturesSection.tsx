import Link from "next/link";
import { Activity, Bell, Boxes, FileBarChart, MonitorCog, ShieldCheck, Users, Wrench } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="premium-features-section" id="funcionalidades">
      <div className="container">
        <div className="premium-features-heading">
          <div>
            <span className="section-kicker">Funcionalidades</span>
            <h2>Menos herramientas.<br /><span>Más control.</span></h2>
          </div>
          <p>
            ViewSyn reúne en un mismo entorno la información necesaria para administrar activos,
            personal y operación tecnológica.
          </p>
        </div>

        <div className="premium-features-bento">
          <article className="premium-feature-card premium-feature-large">
            <div className="premium-feature-top">
              <span className="premium-feature-icon"><Boxes size={21} /></span>
              <span className="premium-feature-number">01</span>
            </div>
            <div className="premium-feature-content">
              <span className="premium-feature-label">Infraestructura</span>
              <h3>Activos y asignaciones</h3>
              <p>Centraliza equipos, responsables, entregas, devoluciones e historial de movimientos.</p>
            </div>
            <div className="premium-assets-visual">
              <div className="premium-assets-row">
                <span><MonitorCog size={15} /></span>
                <div><strong>Equipo registrado</strong><small>Responsable asignado</small></div>
                <i />
              </div>
              <div className="premium-assets-row">
                <span><Users size={15} /></span>
                <div><strong>Empleado</strong><small>Área y asignaciones</small></div>
                <i />
              </div>
            </div>
          </article>

          <article className="premium-feature-card premium-feature-large">
            <div className="premium-feature-top">
              <span className="premium-feature-icon"><Activity size={21} /></span>
              <span className="premium-feature-number">02</span>
            </div>
            <div className="premium-feature-content">
              <span className="premium-feature-label">Visibilidad</span>
              <h3>Agentes y actividad</h3>
              <p>Conecta los equipos y consulta información operativa recopilada por los agentes ViewSyn.</p>
            </div>
            <div className="premium-activity-visual">
              <span style={{ height: "38%" }} />
              <span style={{ height: "64%" }} />
              <span style={{ height: "48%" }} />
              <span style={{ height: "79%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "91%" }} />
              <span style={{ height: "72%" }} />
            </div>
          </article>

          <article className="premium-feature-card premium-feature-small">
            <div className="premium-feature-top"><span className="premium-feature-icon"><Users size={20} /></span></div>
            <div className="premium-feature-content">
              <span className="premium-feature-label">Organización</span>
              <h3>Empleados y áreas</h3>
              <p>Organiza personal, áreas y relación con los equipos asignados.</p>
            </div>
          </article>

          <article className="premium-feature-card premium-feature-small">
            <div className="premium-feature-top"><span className="premium-feature-icon"><Bell size={20} /></span></div>
            <div className="premium-feature-content">
              <span className="premium-feature-label">Seguimiento</span>
              <h3>Alertas</h3>
              <p>Identifica eventos que requieren atención y lleva seguimiento hasta su resolución.</p>
            </div>
          </article>

          <article className="premium-feature-card premium-feature-small">
            <div className="premium-feature-top"><span className="premium-feature-icon"><Wrench size={20} /></span></div>
            <div className="premium-feature-content">
              <span className="premium-feature-label">Operación</span>
              <h3>Mantenimiento</h3>
              <p>Conserva el historial de mantenimientos y reparaciones de cada activo.</p>
            </div>
          </article>

          <article className="premium-feature-card premium-feature-small">
            <div className="premium-feature-top"><span className="premium-feature-icon"><ShieldCheck size={20} /></span></div>
            <div className="premium-feature-content">
              <span className="premium-feature-label">Administración</span>
              <h3>Seguridad y reportes</h3>
              <p>Administra usuarios, roles, permisos y consulta información consolidada de tu operación.</p>
            </div>
            <div className="premium-feature-footer-icon"><FileBarChart size={18} /></div>
          </article>
        </div>

        <div className="premium-features-bottom">
          <span>Diseñado para mantener cada parte de tu operación conectada.</span>
          <Link href="/funcionalidades">Ver todas las funcionalidades →</Link>
        </div>
      </div>
    </section>
  );
}
