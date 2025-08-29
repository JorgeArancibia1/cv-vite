import { FC } from 'react';
import './index.css';
import { standardPropsItem } from '../../interfaces';

export const Philosophy: FC<standardPropsItem> = ( { item } ) => (
	<div className='Philosophy'>
		{item[0].item}
		<span>{item[0].content}</span>
	</div>
);