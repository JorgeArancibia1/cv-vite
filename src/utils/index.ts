// Compiler warns about unreachable code error
import { TFunction } from 'i18next';
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