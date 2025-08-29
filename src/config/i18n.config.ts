import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import translationEN from '../../public/locales/en/translation.json';
import translationES from '../../public/locales/es/translation.json';

i18next
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: 'en',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
		backend: {
			loadPath: 'public/locales/{{lng}}/translation.json',
		},
		resources:{
			en:{
				translation:translationEN,
			},
			es:{
				translation:translationES,
			}
		},
	});