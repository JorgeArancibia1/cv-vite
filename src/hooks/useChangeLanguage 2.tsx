import { i18n } from 'i18next';
import { useState } from 'react';

export const useChangeLanguage = (i18n: i18n) => {
	const [ isEnglish, setIsEnglish ] = useState(true);

	const changeLanguage = (): void => {
		if (i18n.language === 'es') {
			i18n.changeLanguage('en');
			setIsEnglish(true);
		} else if (i18n.language === 'en') {
			i18n.changeLanguage('es');
			setIsEnglish(false);

		}
	};

	return {
		isEnglish,
		changeLanguage
	};
};