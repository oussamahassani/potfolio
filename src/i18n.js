import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import translationEN from './assets/locales/en/translations.json';
import translationFR from './assets/locales/fr/translations.json';

i18n
    .use(LanguageDetector)   // Détecte la langue depuis le navigateur
    .use(HttpBackend)         // Pour charger les traductions depuis un backend
    .use(initReactI18next)    // Initialiser react-i18next
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            fr: {
                translation: translationFR
            }
        },
        fallbackLng: 'fr',  // Langue de secours
        interpolation: {
            escapeValue: false // React échappe déjà les valeurs
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator'],
            caches: ['cookie'], // Sauvegarde la langue choisie dans un cookie
        },
        react: {
            useSuspense: false     // Désactive le suspense si vous ne l'utilisez pas
        }
    });

export default i18n;


