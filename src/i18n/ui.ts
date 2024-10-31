export const languages = {
  en: "🇺🇸 English",
  es: "🇪🇸 Español",
  fr: "🇫🇷 Français",
};

export const defaultLang = "en";

interface Translations {
  [key: string]: string;
}

export const ui: { en: Translations; es: Translations; fr: Translations } = {
  en: {
    "index.title": "Create sleek geometric patterns.",
    "canva.tryonapp": "Try App on Canva",
    "last-updated": "Last updated:"
  },
  es: {
    "index.title": "Crea patrones geométricos elegantes.",
    "canva.tryonapp": "Probar app en Canva",
    "last-updated": "Última actualización:"
  },
  fr: {
    "index.title": "Créer des motifs géométriques élégants.",
    "canva.tryonapp": "Essayer l'App sur Canva",
    "last-updated": "Dernière mise à jour:"
  },
};
