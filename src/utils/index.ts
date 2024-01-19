import { TFunction, i18n } from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { Item } from '../interfaces';

export const transformMixData = ( data: Item[], t: TFunction<[string], undefined>, element: string) => {
	return data.map(
		(item, index: number) => {
			return {
				...item,
				item: t(`${element}.items.${index}.item`),
				content: t(`${element}.items.${index}.content`)
			};
		});
};

export const changeLanguage = (setIsEnglish: Dispatch<SetStateAction<boolean>>, i18n: i18n): void => {
	if (i18n.language === 'es') {
		i18n.changeLanguage('en');
		setIsEnglish(true);
	} else if (i18n.language === 'en') {
		i18n.changeLanguage('es');
		setIsEnglish(false);
	}
};