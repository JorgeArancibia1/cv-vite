import { Experience } from './components/Experience';
import { Header } from './components/Header';
import { PersonalData } from './components/PersonalData';
import { Philosophy } from './components/Philosophy';
import { Presentation } from './components/Presentation';
import './index.css';
import { Studies } from './components/Studies';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import ModuleTemplate from './components/ModuleTemplate';

import { info } from './data';
import { Item } from './interfaces';

var { matches } = window.matchMedia('(min-width: 1024px)');

const certificate: Item[] = info[6].items;

function App() {
	return (
		<div className='generalContainer'>
			<Header className='header' />
			<ModuleTemplate
				className='dp'
				title='Datos personales'
				hidden={false}
				childrenIcon={info[0].icon}
			>
				<PersonalData />
			</ModuleTemplate>

			<ModuleTemplate
				className='presentation'
				title='Presentación'
				hidden={false}
				childrenIcon={info[3].icon}
			>
				<Presentation />
			</ModuleTemplate>

			<ModuleTemplate
				className='experience'
				title='Experiencia'
				hidden={false}
				childrenIcon={info[5].icon}
			>
				<Experience items={[]} i={false} a={false} />
			</ModuleTemplate>

			<ModuleTemplate
				className='studies'
				title='Estudios Profesionales'
				hidden={false}
				childrenIcon={info[4].icon}
			>
				<Studies />
			</ModuleTemplate>

			<ModuleTemplate
				className='skills'
				title='Habilidades'
				hidden={false}
				childrenIcon={info[2].icon}
			>
				<Skills />
			</ModuleTemplate>

			<ModuleTemplate
				className='certificates'
				title='Certificados'
				hidden={true}
				childrenIcon={info[6].icon}
			>
				<Certifications items={certificate} />
			</ModuleTemplate>

			<ModuleTemplate
				className='philosophy'
				title='Filosofía de vida'
				hidden={matches}
				childrenIcon={info[1].icon}
			>
				<Philosophy />
			</ModuleTemplate>
		</div>
	);
}

export default App;
