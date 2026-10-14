"use client";

import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";

import ThemeScreenshot from "@/components/ui/ThemeScreenshot";

type ExpandableThemeScreenshotProps = {
  lightSrc: string;
  darkSrc: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
};

export default function ExpandableThemeScreenshot({
  lightSrc,
  darkSrc,
  alt,
  label = "Vista real de ViewSyn",
  className = "",
  priority = false,
}: ExpandableThemeScreenshotProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <div className={`nox-product-shot ${className}`.trim()}>
        <div className="nox-product-shot-toolbar">
          <span>{label}</span>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Ampliar ${alt}`}
          >
            <Maximize2 size={14} />
            Ampliar
          </button>
        </div>

        <ThemeScreenshot
          lightSrc={lightSrc}
          darkSrc={darkSrc}
          alt={alt}
          priority={priority}
        />
      </div>

      {open && (
        <div
          className="nox-shot-modal"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setOpen(false);
            }
          }}
        >
          <button
            type="button"
            className="nox-shot-modal-close"
            onClick={() => setOpen(false)}
            aria-label="Cerrar vista ampliada"
          >
            <X size={18} />
          </button>

          <div className="nox-shot-modal-content">
            <ThemeScreenshot
              lightSrc={lightSrc}
              darkSrc={darkSrc}
              alt={alt}
            />
          </div>
        </div>
      )}
    </>
  );
}
