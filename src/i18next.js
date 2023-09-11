import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';


import globalRu from './i18next/globalRu.json'
import globalEn from './i18next/globalEn.json'

const resources = {
    en: {
        translation: globalEn
    },
    ru: {
        translation: globalRu
    }
}

i18n.use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    resources,
    detection: {
        caches: ['cookie']
    }
})

export default i18n;