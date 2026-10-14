"use client";

import { Moon, Sun } from "lucide-react";
import {
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "viewsyn-theme";
const THEME_CHANGE_EVENT = "viewsyn-theme-change";

const getThemeSnapshot = (): Theme => {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light"
    ? "light"
    : "dark";
};

const getServerThemeSnapshot = (): Theme => "dark";

const subscribeToTheme = (callback: () => void) => {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  window.addEventListener(
    THEME_CHANGE_EVENT,
    callback
  );

  return () => {
    window.removeEventListener(
      THEME_CHANGE_EVENT,
      callback
    );
  };
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );

  const [animating, setAnimating] =
    useState(false);

  const buttonRef =
    useRef<HTMLButtonElement>(null);

  const applyTheme = (newTheme: Theme) => {
    document.documentElement.dataset.theme =
      newTheme;

    document.documentElement.style.colorScheme =
      newTheme;

    localStorage.setItem(
      STORAGE_KEY,
      newTheme
    );

    window.dispatchEvent(
      new Event(THEME_CHANGE_EVENT)
    );
  };

  const changeTheme = async () => {
    if (animating) return;

    const newTheme: Theme =
      theme === "dark" ? "light" : "dark";

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      applyTheme(newTheme);
      return;
    }

    const button = buttonRef.current;

    if (!button) {
      applyTheme(newTheme);
      return;
    }

    setAnimating(true);

    const rect =
      button.getBoundingClientRect();

    const x =
      rect.left + rect.width / 2;

    const y =
      rect.top + rect.height / 2;

    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const circleSize = 48;

    const finalScale =
      (radius * 2) / circleSize + 1;

    applyTheme(newTheme);

    const overlay =
      document.createElement("div");

    overlay.className = `theme-ripple-overlay ${
      newTheme === "light"
        ? "theme-ripple-light"
        : "theme-ripple-dark"
    }`;

    overlay.style.setProperty(
      "--theme-ripple-x",
      `${x}px`
    );

    overlay.style.setProperty(
      "--theme-ripple-y",
      `${y}px`
    );

    document.body.appendChild(overlay);

    try {
      const animation = overlay.animate(
        [
          {
            transform:
              "translate3d(-50%, -50%, 0) scale(0)",
            opacity: 0.85,
          },
          {
            offset: 0.55,
            opacity: 0.45,
          },
          {
            transform:
              `translate3d(-50%, -50%, 0) scale(${finalScale})`,
            opacity: 0,
          },
        ],
        {
          duration: 360,
          easing:
            "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );

      await animation.finished;
    } finally {
      overlay.remove();
      setAnimating(false);
    }
  };

  return (
    <button
      ref={buttonRef}
      type="button"
      className="theme-toggle"
      onClick={changeTheme}
      disabled={animating}
      aria-label={
        theme === "dark"
          ? "Activar modo claro"
          : "Activar modo oscuro"
      }
      title={
        theme === "dark"
          ? "Modo claro"
          : "Modo oscuro"
      }
    >
      <span
        className={`theme-toggle-track ${
          theme === "light"
            ? "is-light"
            : ""
        }`}
      >
        <span className="theme-toggle-thumb" />

        <span className="theme-toggle-sun">
          <Sun size={14} />
        </span>

        <span className="theme-toggle-moon">
          <Moon size={13} />
        </span>
      </span>
    </button>
  );
}