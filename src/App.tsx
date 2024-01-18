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
	studiesItems[0].content = t( 'studies.items.0.content' );
	studiesItems[1].content = t( 'studies.items.1.content' );

	const experienceItems = info[5].items;
	experienceItems[0].item = t( 'experience.items.0.item' );
	experienceItems[0].content = t( 'experience.items.0.content' );
	experienceItems[1].content = t( 'experience.items.1.content' );

	experienceItems[2].item = t( 'experience.items.2.item' );
	experienceItems[3].content = t( 'experience.items.2.content' );
	experienceItems[3].content = t( 'experience.items.3.content' );

	experienceItems[4].item = t( 'experience.items.4.item' );
	experienceItems[4].content = t( 'experience.items.4.content' );
	experienceItems[5].content = t( 'experience.items.5.content' );

	experienceItems[6].item = t( 'experience.items.6.item' );
	experienceItems[6].content = t( 'experience.items.6.content' );
	experienceItems[7].content = t( 'experience.items.7.content' );

	const certificateItems = info[6].items;
	certificateItems[0].content = t( 'certifications.items.0.content' );
	certificateItems[1].content = t( 'certifications.items.1.content' );
	certificateItems[2].content = t( 'certifications.items.2.content' );
	certificateItems[3].content = t( 'certifications.items.3.content' );
	certificateItems[4].content = t( 'certifications.items.4.content' );
	certificateItems[5].content = t( 'certifications.items.5.content' );
	certificateItems[6].content = t( 'certifications.items.6.content' );
	certificateItems[7].content = t( 'certifications.items.7.content' );
	certificateItems[8].content = t( 'certifications.items.8.content' );
	certificateItems[9].content = t( 'certifications.items.9.content' );
	certificateItems[10].content = t( 'certifications.items.10.content' );
	certificateItems[11].content = t( 'certifications.items.11.content' );
	certificateItems[12].content = t( 'certifications.items.12.content' );
	certificateItems[13].content = t( 'certifications.items.13.content' );
	certificateItems[14].content = t( 'certifications.items.14.content' );
	certificateItems[15].content = t( 'certifications.items.15.content' );
	certificateItems[16].content = t( 'certifications.items.16.content' );
	certificateItems[17].content = t( 'certifications.items.17.content' );
	certificateItems[18].content = t( 'certifications.items.18.content' );
	certificateItems[19].content = t( 'certifications.items.19.content' );
	certificateItems[20].content = t( 'certifications.items.20.content' );
	certificateItems[21].content = t( 'certifications.items.21.content' );
	certificateItems[22].content = t( 'certifications.items.22.content' );
	certificateItems[23].content = t( 'certifications.items.23.content' );

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