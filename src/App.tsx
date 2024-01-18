import { Certifications } from './components/Certifications';
import { Experience } from './components/Experience';
import { Header } from './components/Header';
import ModuleTemplate from './components/ModuleTemplate';
import { PersonalData } from './components/PersonalData';
import { Philosophy } from './components/Philosophy';
import { Presentation } from './components/Presentation';
import { Skills } from './components/Skills';
import { Studies } from './components/Studies';
import './index.css';

import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { info } from './data';

const { matches } = window.matchMedia( '(min-width: 1024px)' );

const App = () => {
	const {
		t,
		i18n
	} = useTranslation( [ 'translation' ] );

	// PERSONAL DATA
	const personalDataItems = info[0].items;
	personalDataItems[5].content = t( 'info.items.5.content' );

	// PHILOSOPHY
	const philosophyData = info[1].items;
	philosophyData[0].content = t( 'philosophy.items.0.content' );
	// SKILLS
	const skillsItems = info[2].items;
	skillsItems[0].item = t( 'skills.items.0.item' );
	skillsItems[0].content = t( 'skills.items.0.content' );
	skillsItems[1].item = t( 'skills.items.1.item' );
	skillsItems[1].content = t( 'skills.items.1.content' );
	skillsItems[2].item = t( 'skills.items.2.item' );
	skillsItems[3].item = t( 'skills.items.3.item' );
	skillsItems[4].item = t( 'skills.items.4.item' );
	// PRESENTATION
	const presentationData = info[3].items;
	presentationData[0].content = t( 'presentation.items.0.content' );

	// STUDIES
	const studiesItems = info[4].items;
	console.log( t( 'studies.items.0.content' ) );
	const experienceItems = info[5].items;
	const certificateItems = info[6].items;

	const changeLanguage = (): void => {
		if (i18n.language === 'es') {
			i18n.changeLanguage( 'en' );
		} else if (i18n.language === 'en') {
			i18n.changeLanguage( 'es' );
		}
	};

	// const transformData = ( data: any ) => {
	// 	return data.map( ( item: any ) => {
	// 		return {
	// 			content:t( `info${[ item ]}` ),
	// 		};
	// 	} );
	// };
	console.log( 'Name => ', info[6]?.items);
	// console.log( 'Name => ', info[6].items[0].content );
	console.log(i18n.language);
	// console.log( transformData( personalDataItems ) );

	return (
		<Suspense fallback="Cargando">
			<div className='generalContainer'>
				<button className='buttonToggle' onClick={() => changeLanguage()}>Change</button>
				<Header className='header' />
				<ModuleTemplate
					className='dp'
					title={t( 'info.title' )}
					hidden={false}
					childrenIcon={info[0].icon}
				>
					<PersonalData items={personalDataItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='presentation'
					title={t( 'presentation.title' )}
					hidden={false}
					childrenIcon={info[3].icon}
				>
					<Presentation description={presentationData} />
				</ModuleTemplate>

				<ModuleTemplate
					className='experience'
					title={t( 'experience.title' )}
					hidden={false}
					childrenIcon={info[5].icon}
				>
					<Experience items={experienceItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='studies'
					title={t( 'studies.title' )}
					hidden={false}
					childrenIcon={info[4].icon}
				>
					<Studies items={studiesItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='skills'
					title={t( 'skills.title' )}
					hidden={false}
					childrenIcon={info[2].icon}
				>
					<Skills items={skillsItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='certificates'
					title={t( 'certifications.title' )}
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
		</Suspense>
	);
};

export default App;