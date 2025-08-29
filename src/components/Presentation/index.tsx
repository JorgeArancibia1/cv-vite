import { FC } from 'react';
import './index.css';
import { presentationProps } from '../../interfaces';

export const Presentation: FC<presentationProps> = ( { description } ) => (
	<article className="presentation-container">
		<p className='presentation-text'>{description[0].content}</p>
	</article>
);