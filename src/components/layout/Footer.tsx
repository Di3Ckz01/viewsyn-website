import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const platformUrl = process.env.NEXT_PUBLIC_PLATFORM_URL;

  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="premium-footer-grid">
          <div className="premium-footer-brand">
            <Link href="/" className="premium-brand">
              <span className="premium-brand-mark">N</span>
              <span className="premium-brand-name">Nox<span>Syn</span></span>
            </Link>
            <p>Control y visibilidad para la administración de activos, personal y operación tecnológica.</p>
          </div>

          <div className="premium-footer-column">
            <strong>Producto</strong>
            <Link href="/funcionalidades">Funcionalidades</Link>
            <Link href="/tableros">Tableros</Link>
            <Link href="/membresias">Membresías</Link>
          </div>

          <div className="premium-footer-column">
            <strong>Información</strong>
            <Link href="/contacto">Contacto</Link>
            <Link href="/privacidad">Aviso de privacidad</Link>
            <Link href="/terminos">Términos y condiciones</Link>
          </div>

          <div className="premium-footer-access">
            <strong>¿Ya utilizas ViewSyn?</strong>

            <p>
              Accede directamente a la plataforma de tu
              organización.
            </p>

            {platformUrl ? (
              <a href={platformUrl}>
                Ir a ViewSyn <ArrowUpRight size={14} />
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Configura NEXT_PUBLIC_PLATFORM_URL para habilitar el acceso"
              >
                Acceso a plataforma próximamente
              </span>
            )}
          </div>
        </div>

        <div className="premium-footer-bottom">
          <span>© 2026 ViewSyn. Todos los derechos reservados.</span>
          <span>Plataforma de gestión tecnológica.</span>
        </div>
      </div>
    </footer>
  );
}
