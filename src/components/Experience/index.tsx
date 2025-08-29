import { FC } from 'react';
import { Description } from '../Description';
import './experience.css';
import { standardPropsItems } from '../../interfaces';

export const Experience: FC<standardPropsItems> = ( { items } ) => (
	<section>
		{
			items.map( ( { item, content }, index ) => (
				<Description
					key={index}
					dTitle={item ? String( item ) : ''}
					dJob={content}
				/>
			) )
		}
	</section>
);