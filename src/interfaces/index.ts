import { ReactNode } from 'react';

export interface Items {
	info: Info[];
}

export interface Info {
	id: number;
	icon: ReactNode;
	title: string;
	items: Item[];
}

export interface Item {
	item?: string;
	content?: string;
	link?: string;
}
