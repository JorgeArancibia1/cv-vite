import './index.css';
import { FC } from 'react';
import { standardPropsItems } from '../../interfaces';

export const PersonalData: FC<standardPropsItems> = ( { items } ) => (
	<>
		{
			<div className='pd-container' > {
				items.map( ( { item, content }, index ) => (
					<>
						{item}
						<span key={index}>{content}</span>
					</>
				) )
			}
			</div>
		}
	</>
);