import { ReactNode } from 'react';
export interface Item {
	item: string | ReactNode;
	content?: string;
	link?: string;
}

export interface Info {
	id: number;
	icon: ReactNode;
	title: string;
	items: Item[];
}

export interface Items {
	info: Info[];
}

export type standardPropsItem = {
	item: Item[] | [];
};

export type standardPropsItems = {
	items: Item[] | [];
};

export type presentationProps = {
	description: Item[] | [];
};