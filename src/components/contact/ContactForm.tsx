"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Building2,
  Mail,
  MessageSquareText,
  Phone,
  UserRound,
} from "lucide-react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const update = (
    key: keyof FormState,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "No fue posible enviar la solicitud."
        );
      }

      setStatus("success");
      setMessage(
        "Recibimos tu solicitud. Nos pondremos en contacto contigo."
      );
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No fue posible enviar la solicitud."
      );
    }
  };

  return (
    <form
      className="premium-contact-form"
      onSubmit={submit}
    >
      <div className="premium-contact-form-grid">
        <label>
          <span>Nombre</span>

          <div className="premium-contact-field">
            <UserRound size={16} />

            <input
              required
              value={form.name}
              onChange={(event) =>
                update("name", event.target.value)
              }
              placeholder="Tu nombre"
            />
          </div>
        </label>

        <label>
          <span>Empresa</span>

          <div className="premium-contact-field">
            <Building2 size={16} />

            <input
              required
              value={form.company}
              onChange={(event) =>
                update("company", event.target.value)
              }
              placeholder="Nombre de la organización"
            />
          </div>
        </label>

        <label>
          <span>Correo</span>

          <div className="premium-contact-field">
            <Mail size={16} />

            <input
              required
              type="email"
              value={form.email}
              onChange={(event) =>
                update("email", event.target.value)
              }
              placeholder="nombre@empresa.com"
            />
          </div>
        </label>

        <label>
          <span>Teléfono</span>

          <div className="premium-contact-field">
            <Phone size={16} />

            <input
              value={form.phone}
              onChange={(event) =>
                update("phone", event.target.value)
              }
              placeholder="Opcional"
            />
          </div>
        </label>

        <label className="premium-contact-message">
          <span>¿Qué necesitas resolver?</span>

          <div className="premium-contact-field textarea">
            <MessageSquareText size={16} />

            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(event) =>
                update("message", event.target.value)
              }
              placeholder="Cuéntanos brevemente sobre tu operación."
            />
          </div>
        </label>
      </div>

      <div className="premium-contact-form-footer">
        <button
          type="submit"
          className="premium-primary-button"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? "Enviando..."
            : "Enviar solicitud"}

          <ArrowRight size={15} />
        </button>

        {message && (
          <p
            className={`premium-contact-status ${status}`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
