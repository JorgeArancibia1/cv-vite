import { Experience } from './components/Experience';
import Header from './components/Header';
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

const certificate: Item[] = info[6].items;

function App() {
	return (
		<div className='generalContainer'>
			<Header className='header' />
			<ModuleTemplate className='dp' title='Datos personales' hidden={false}>
				<PersonalData />
			</ModuleTemplate>

			<ModuleTemplate
				className='presentation'
				title='Presentación'
				hidden={false}
			>
				<Presentation />
			</ModuleTemplate>

			<ModuleTemplate className='experience' title='Experience' hidden={false}>
				<Experience items={[]} i={false} a={false} />
			</ModuleTemplate>

			<ModuleTemplate className='studies' title='Studies' hidden={false}>
				<Studies />
			</ModuleTemplate>

			<ModuleTemplate className='skills' title='Skills' hidden={true}>
				<Skills />
			</ModuleTemplate>

			<ModuleTemplate
				className='certificates'
				title='Certificates'
				hidden={true}
			>
				<Certifications items={certificate} />
			</ModuleTemplate>

			<ModuleTemplate className='philosophy' title='Philosophy' hidden={false}>
				<Philosophy />
			</ModuleTemplate>
		</div>
	);
}

export default App;
