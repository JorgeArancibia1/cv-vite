import { FC, Fragment } from 'react';
import { standardPropsItems } from '../../interfaces';
import './index.css';

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