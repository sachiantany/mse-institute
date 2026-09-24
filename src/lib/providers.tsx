"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "./translations";

type Theme = "light" | "dark";

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: "light", toggle: () => {} });

const LanguageContext = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: Record<string, string>;
}>({ lang: "en", setLang: () => {}, t: translations.en });

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [lang, setLangState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("mse-theme") as Theme | null;
      if (stored === "light" || stored === "dark") setTheme(stored);
    } catch {}
    try {
      const stored = localStorage.getItem("mse-lang") as Language | null;
      if (stored === "en" || stored === "si" || stored === "ta")
        setLangState(stored);
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("mse-theme", theme);
    } catch {}
  }, [theme, mounted]);

  const toggle = useCallback(
    () => setTheme((t) => (t === "light" ? "dark" : "light")),
    []
  );

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    try {
      localStorage.setItem("mse-lang", l);
    } catch {}
  }, []);

  return (
    <ThemeContext value={{ theme, toggle }}>
      <LanguageContext value={{ lang, setLang, t: translations[lang] }}>
        {children}
      </LanguageContext>
    </ThemeContext>
  );
}

export const useTheme = () => useContext(ThemeContext);
export const useLanguage = () => useContext(LanguageContext);
