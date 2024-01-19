import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './public/locales/en/translation.json';
import translationES from './public/locales/es/translation.json';

export const defaultNS = 'translation';
export const fallbackNS = 'fallback';

i18next.use( initReactI18next ).init( {
	debug:true,
	fallbackLng:'en',
	defaultNS,
	fallbackNS,
	lng:'en',
	resources:{
		en:{
			translation:translationEN,
		},
		es:{
			translation:translationES,
		}
	},
} );