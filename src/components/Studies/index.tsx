import { Description } from '../Description';
import './index.css';
// type Props = {}

export const Studies = () => {
	return (
		<div className='studies'>
			<Description
				dTitle={'2019 - 2021'}
				description={
					'Centro de formación técnica INACAP - Analista programador.'
				}
			/>
			<Description
				dTitle={'2014-2017'}
				description={
					'Instituto profesional DUOC UC - Ingeniero en mecánica automotriz.'
				}
			/>
		</div>
	);
};
