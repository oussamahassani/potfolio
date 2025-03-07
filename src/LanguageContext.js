// src/LanguageContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n'; // Assurez-vous que votre fichier i18n est bien configuré

// Créer le contexte
const LanguageContext = createContext();

// Fournisseur pour partager la langue dans toute l'application
export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language); // Langue actuelle

    // Mettre à jour la langue chaque fois que i18n.changeLanguage est appelé
    const changeLanguage = (newLang) => {
        i18n.changeLanguage(newLang); // Appeler i18n pour changer la langue
        setLang(newLang); // Mettre à jour l'état local
    };

    useEffect(() => {
        // Garder la langue dans l'état global et dans i18n
        i18n.on('languageChanged', (lng) => {
            setLang(lng);
        });

        return () => {
            i18n.off('languageChanged'); // Nettoyer l'événement
        };
    }, [i18n]);

    return (
        <LanguageContext.Provider value={{ lang, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Utilitaire pour consommer le contexte dans les composants
export const useLanguage = () => {
    const context = React.useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
