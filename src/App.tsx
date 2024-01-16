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

const { matches } = window.matchMedia( '(min-width: 1024px)' );

const personalDataItems: Item[] = info[0].items;
const philosophyData: Item[] = info[1].items;
const skillsItems: Item[] = info[2].items;
const presentationData: Item[] = info[3].items;
const studiesItems: Item[] = info[4].items;
const experienceItems: Item[] = info[5].items;
const certificateItems: Item[] = info[6].items;

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
				<PersonalData items={personalDataItems} />
			</ModuleTemplate>

			<ModuleTemplate
				className='presentation'
				title='Presentación'
				hidden={false}
				childrenIcon={info[3].icon}
			>
				<Presentation description={presentationData} />
			</ModuleTemplate>

			<ModuleTemplate
				className='experience'
				title='Experiencia'
				hidden={false}
				childrenIcon={info[5].icon}
			>
				<Experience items={experienceItems} />
			</ModuleTemplate>

			<ModuleTemplate
				className='studies'
				title='Estudios Profesionales'
				hidden={false}
				childrenIcon={info[4].icon}
			>
				<Studies items={studiesItems} />
			</ModuleTemplate>

			<ModuleTemplate
				className='skills'
				title='Habilidades'
				hidden={false}
				childrenIcon={info[2].icon}
			>
				<Skills items={skillsItems} />
			</ModuleTemplate>

			<ModuleTemplate
				className='certificates'
				title='Certificados'
				hidden={true}
				childrenIcon={info[6].icon}
			>
				<Certifications items={certificateItems} />
			</ModuleTemplate>

			<ModuleTemplate
				className='philosophy'
				title='Filosofía de vida'
				hidden={matches}
				childrenIcon={info[1].icon}
			>
				<Philosophy item={philosophyData} />
			</ModuleTemplate>
		</div>
	);
}

export default App;