"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { uz } from "../locales/uz";
import { ru } from "../locales/ru";
import { en } from "../locales/en";
import { tr } from "../locales/tr";

export type Language = "uz" | "ru" | "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, any> = { uz, ru, en, tr };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("uz");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("app_lang") as Language;
    if (saved && ["uz", "ru", "en", "tr"].includes(saved)) {
      setLanguageState(saved);
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
  };

  const t = (key: string): string => {
    if (!mounted) {
      // Return uz translation to prevent hydration errors (matches server initial render)
      const keys = key.split(".");
      let value: any = translations["uz"];
      for (const k of keys) {
        if (value && value[k] !== undefined) value = value[k];
        else return key;
      }
      return value as string;
    }

    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      if (value && value[k] !== undefined) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key}`);
        return key;
      }
    }
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
