import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import testEN from './public/locales/en/test.json';
import translationEN from './public/locales/en/translation.json';
import testES from './public/locales/es/test.json';
import translationES from './public/locales/es/translation.json';

export const defaultNS = 'test';
export const fallbackNS = 'fallback';

i18next.use( initReactI18next ).init( {
	debug:true,
	fallbackLng:'en',
	defaultNS,
	fallbackNS,
	lng:'en',
	resources:{
		en:{
			test:testEN,
			translation:translationEN,
		},
		es:{
			test:testES,
			translation:translationES,
		}
	},
} );