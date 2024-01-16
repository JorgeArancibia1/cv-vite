import { FC } from 'react';
import { standardPropsItems } from '../../interfaces';
import './index.css';

export const Certifications: FC<standardPropsItems> = ( { items } ) => (
	<section className='certifications'>
		{
			items.map( ( item, index ) => (
				<div className='' key={index}>
					<p>
						<b>{item.item}</b>
					</p>
					<span>{item.content}</span>
				</div>
			) )
		}
	</section>
);