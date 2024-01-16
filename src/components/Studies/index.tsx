import { FC } from 'react';
import { standardPropsItems } from '../../interfaces';
import { Description } from '../Description';
import './index.css';

export const Studies: FC<standardPropsItems> = ( { items } ) => (
	<div className='studies'>
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