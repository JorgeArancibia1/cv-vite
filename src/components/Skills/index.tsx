import { FC } from 'react';
import { standardPropsItems } from '../../interfaces';
import { Description } from '../Description';
import './index.css';

export const Skills: FC<standardPropsItems> = ( { items } ) => (
	<div className='Skills'>
		{
			items.map( ( { item, content }, index ) => (
				<Description
					key={index}
					dTitle={item ? String( item ) : ''}
					description={content}
				/>
			) )
		}
	</div>
);