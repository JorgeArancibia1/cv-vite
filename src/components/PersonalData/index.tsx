import './index.css';
import { FC, Fragment } from 'react';
import { standardPropsItems } from '../../interfaces';

export const PersonalData: FC<standardPropsItems> = ( { items } ) => (
	<>
		{
			<div className='pd-container' > {
				items.map( ( { item, content }, index ) => (
					<Fragment key={index}>
						{item}
						<span>{content}</span>
					</Fragment>
				) )
			}
			</div>
		}
	</>
);