import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { tw } from "./tw/tw";

const resources = {
    tw: {
        translation: tw
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'tw',
    fallbackLng: 'tw',
    interpolation: {
        escapeValue: true
    }
})