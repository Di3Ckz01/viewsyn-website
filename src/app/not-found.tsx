import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="premium-not-found">
      <div>
        <span className="section-kicker">404</span>

        <h1>
          Esta página
          <span> no existe.</span>
        </h1>

        <p>
          Regresa al inicio y continúa explorando ViewSyn.
        </p>

        <Link
          href="/"
          className="premium-primary-button"
        >
          <ArrowLeft size={15} />
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
