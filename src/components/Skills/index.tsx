import { Description } from '../Description';
import './index.css';
// type Props = {}

export const Skills = () => {
	return (
		<div className='Skills'>
			<Description
				dTitle={'Dominio de Inglés escrito:'}
				description={'Intermedio.'}
			/>
			<Description
				dTitle={'Dominio de Inglés hablado:'}
				description={'Básico.'}
			/>
			<Description
				dTitle={'Fortalezas:'}
				description={'GIT, HTML, CSS, Bootstrap, JavaScript, React.js.'}
			/>
			<Description
				dTitle={'Otras:'}
				description={
					'Vue.js, Next.js, Mongo DB, PostgrSQL, Sass, Node.js, Java SE, MySQL.'
				}
			/>
			<Description
				dTitle={'Sistemas Operativos:'}
				description={'Windows, Mac y Linux(Debian, Ubuntu).'}
			/>
		</div>
	);
};
