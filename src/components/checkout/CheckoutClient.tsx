"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { useMemo, useState } from "react";

const labels: Record<string, string> = {
  esencial: "Esencial",
  profesional: "Profesional",
  corporativa: "Corporativa",
};

type Step = 1 | 2 | 3;

type CheckoutData = {
  organizationName: string;
  commercialName: string;
  adminName: string;
  adminEmail: string;
};

const initialData: CheckoutData = {
  organizationName: "",
  commercialName: "",
  adminName: "",
  adminEmail: "",
};

export default function CheckoutClient() {
  const searchParams = useSearchParams();

  const initialPlan = useMemo(() => {
    const requested =
      searchParams.get("plan")?.toLowerCase() || "profesional";

    return labels[requested] ? requested : "profesional";
  }, [searchParams]);

  const [plan, setPlan] = useState(initialPlan);
  const [step, setStep] = useState<Step>(1);
  const [highestStep, setHighestStep] = useState<Step>(1);
  const [data, setData] = useState<CheckoutData>(initialData);
  const [attempted, setAttempted] = useState(false);

  const emailIsValid =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.adminEmail.trim());

  const organizationValid =
    data.organizationName.trim().length >= 2;

  const administratorValid =
    data.adminName.trim().length >= 2 && emailIsValid;

  const update = (
    field: keyof CheckoutData,
    value: string
  ) => {
    setData((current) => ({
      ...current,
      [field]: value,
    }));

    setAttempted(false);
  };

  const goToStep = (target: Step) => {
    if (target <= highestStep) {
      setStep(target);
      setAttempted(false);
    }
  };

  const continueFromOrganization = () => {
    setAttempted(true);

    if (!organizationValid) return;

    setStep(2);
    setHighestStep((current) =>
      current < 2 ? 2 : current
    );
    setAttempted(false);
  };

  const continueFromAdministrator = () => {
    setAttempted(true);

    if (!administratorValid) return;

    setStep(3);
    setHighestStep(3);
    setAttempted(false);
  };

  return (
    <>
      <section className="premium-route-hero compact checkout">
        <div className="container">
          <Link
            href="/membresias"
            className="premium-back-link"
          >
            <ArrowLeft size={14} />
            Volver a membresías
          </Link>

          <span className="section-kicker">
            Contratación
          </span>

          <h1>
            Prepara tu organización
            <span> para ViewSyn.</span>
          </h1>

          <p>
            Completa los datos esenciales para continuar con
            la contratación y preparar el acceso de tu organización.
          </p>
        </div>
      </section>

      <section className="premium-checkout-section">
        <div className="container premium-checkout-layout">
          <div className="premium-checkout-form">
            <div className="premium-checkout-steps">
              <button
                type="button"
                className={step === 1 ? "active" : ""}
                onClick={() => goToStep(1)}
              >
                <span>1</span>
                <div>
                  <strong>Organización</strong>
                  <small>Datos de empresa</small>
                </div>
                {highestStep > 1 && (
                  <CheckCircle2
                    size={15}
                    className="premium-step-check"
                  />
                )}
              </button>

              <button
                type="button"
                className={step === 2 ? "active" : ""}
                disabled={highestStep < 2}
                onClick={() => goToStep(2)}
              >
                <span>2</span>
                <div>
                  <strong>Administrador</strong>
                  <small>Cuenta principal</small>
                </div>
                {highestStep > 2 && (
                  <CheckCircle2
                    size={15}
                    className="premium-step-check"
                  />
                )}
              </button>

              <button
                type="button"
                className={step === 3 ? "active" : ""}
                disabled={highestStep < 3}
                onClick={() => goToStep(3)}
              >
                <span>3</span>
                <div>
                  <strong>Confirmación</strong>
                  <small>Revisa tus datos</small>
                </div>
              </button>
            </div>

            {step === 1 && (
              <div className="premium-checkout-block">
                <div className="premium-checkout-block-title">
                  <Building2 size={18} />

                  <div>
                    <strong>Datos de la organización</strong>
                    <span>
                      Información básica para identificar tu espacio de trabajo.
                    </span>
                  </div>
                </div>

                <div className="premium-checkout-fields">
                  <label>
                    <span>Nombre de la organización *</span>

                    <input
                      value={data.organizationName}
                      onChange={(event) =>
                        update(
                          "organizationName",
                          event.target.value
                        )
                      }
                      placeholder="Empresa S.A. de C.V."
                      className={
                        attempted && !organizationValid
                          ? "has-error"
                          : ""
                      }
                    />

                    {attempted && !organizationValid && (
                      <small className="premium-field-error">
                        Ingresa el nombre de la organización.
                      </small>
                    )}
                  </label>

                  <label>
                    <span>Nombre comercial</span>

                    <input
                      value={data.commercialName}
                      onChange={(event) =>
                        update(
                          "commercialName",
                          event.target.value
                        )
                      }
                      placeholder="Nombre visible en ViewSyn"
                    />
                  </label>
                </div>

                <div className="premium-checkout-actions">
                  <span />

                  <button
                    type="button"
                    className="premium-primary-button"
                    onClick={continueFromOrganization}
                  >
                    Continuar
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="premium-checkout-block">
                <div className="premium-checkout-block-title">
                  <UserRound size={18} />

                  <div>
                    <strong>Administrador principal</strong>
                    <span>
                      Datos de la persona que administrará inicialmente ViewSyn.
                    </span>
                  </div>
                </div>

                <div className="premium-checkout-fields">
                  <label>
                    <span>Nombre *</span>

                    <input
                      value={data.adminName}
                      onChange={(event) =>
                        update("adminName", event.target.value)
                      }
                      placeholder="Nombre del administrador"
                      className={
                        attempted &&
                        data.adminName.trim().length < 2
                          ? "has-error"
                          : ""
                      }
                    />

                    {attempted &&
                      data.adminName.trim().length < 2 && (
                        <small className="premium-field-error">
                          Ingresa el nombre del administrador.
                        </small>
                      )}
                  </label>

                  <label>
                    <span>Correo *</span>

                    <input
                      type="email"
                      value={data.adminEmail}
                      onChange={(event) =>
                        update("adminEmail", event.target.value)
                      }
                      placeholder="admin@empresa.com"
                      className={
                        attempted && !emailIsValid
                          ? "has-error"
                          : ""
                      }
                    />

                    {attempted && !emailIsValid && (
                      <small className="premium-field-error">
                        Ingresa un correo válido.
                      </small>
                    )}
                  </label>
                </div>

                <div className="premium-checkout-actions">
                  <button
                    type="button"
                    className="premium-secondary-button"
                    onClick={() => goToStep(1)}
                  >
                    <ArrowLeft size={15} />
                    Atrás
                  </button>

                  <button
                    type="button"
                    className="premium-primary-button"
                    onClick={continueFromAdministrator}
                  >
                    Continuar
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="premium-checkout-block">
                <div className="premium-checkout-block-title">
                  <CheckCircle2 size={18} />

                  <div>
                    <strong>Confirma tu información</strong>
                    <span>
                      Revisa los datos antes de continuar al pago.
                    </span>
                  </div>
                </div>

                <div className="premium-checkout-review">
                  <article>
                    <span>Organización</span>
                    <strong>{data.organizationName}</strong>

                    {data.commercialName && (
                      <small>{data.commercialName}</small>
                    )}
                  </article>

                  <article>
                    <span>Administrador</span>
                    <strong>{data.adminName}</strong>
                    <small>{data.adminEmail}</small>
                  </article>

                  <article>
                    <span>Membresía</span>
                    <strong>{labels[plan]}</strong>
                    <small>Precio por definir</small>
                  </article>
                </div>

                <div className="premium-checkout-actions">
                  <button
                    type="button"
                    className="premium-secondary-button"
                    onClick={() => goToStep(2)}
                  >
                    <ArrowLeft size={15} />
                    Atrás
                  </button>

                  <button
                    type="button"
                    className="premium-primary-button premium-checkout-pay"
                    disabled
                  >
                    <CreditCard size={15} />
                    Continuar al pago
                    <ArrowRight size={15} />
                  </button>
                </div>

                <div className="premium-checkout-disabled-action">
                  <LockKeyhole size={15} />

                  <span>
                    El pago se habilitará cuando la contratación
                    comercial quede disponible.
                  </span>
                </div>
              </div>
            )}
          </div>

          <aside className="premium-checkout-summary">
            <span className="section-kicker">
              Tu selección
            </span>

            <h2>
              Membresía {labels[plan]}
            </h2>

            <p>
              Puedes cambiar tu selección antes de continuar
              con la contratación.
            </p>

            <div className="premium-checkout-plan-options">
              {Object.entries(labels).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={
                    plan === value ? "active" : ""
                  }
                  onClick={() => setPlan(value)}
                >
                  <span>
                    {plan === value && <Check size={12} />}
                  </span>

                  {label}
                </button>
              ))}
            </div>

            <div className="premium-checkout-price">
              <span>Precio</span>
              <strong>Por definir</strong>
            </div>

            <div className="premium-checkout-summary-status">
              <Mail size={15} />

              <span>
                {administratorValid
                  ? data.adminEmail
                  : "Completa los datos para continuar"}
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
