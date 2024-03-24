/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

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
import { useChangeLanguage } from './hooks/useChangeLanguage';
import { transformMixData } from './utils';

const { matches } = window.matchMedia('(min-width: 1024px)');

const App = () => {
	const { t, i18n } = useTranslation([ 'translation' ]);

	// PERSONAL DATA
	const personalDataItems = info[0].items;
	personalDataItems[5].content = t`info.items.5.content`;

	// PHILOSOPHY
	const philosophyData = info[1].items;
	philosophyData[0].content = t('philosophy.items.0.content');
	// SKILLS
	const skillsItems = transformMixData( info[2].items, t, 'skills');

	// PRESENTATION
	const presentationData = transformMixData( info[3].items, t, 'presentation');

	// STUDIES
	const studiesItems = transformMixData( info[4].items, t, 'studies');

	// EXPERIENCE
	const experienceItems = transformMixData( info[5].items, t, 'experience' );

	const certificateItems = transformMixData( info[6].items, t, 'certifications' );

	const { isEnglish, changeLanguage } = useChangeLanguage(i18n);

	return (
		<Suspense fallback='Cargando'>
			<div className='generalContainer'>
				<div className={isEnglish ? 'languageButton buttonToggleES' : ' languageButton buttonToggleEN'} onClick={() => changeLanguage()}></div>
				<Header className='header' />
				<ModuleTemplate
					className='dp'
					title={t('info.title')}
					hidden={false}
					childrenIcon={info[0].icon}
				>
					<PersonalData items={personalDataItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='presentation'
					title={t('presentation.title')}
					hidden={false}
					childrenIcon={info[3].icon}
				>
					<Presentation description={presentationData} />
				</ModuleTemplate>

				<ModuleTemplate
					className='experience'
					title={t('experience.title')}
					hidden={false}
					childrenIcon={info[5].icon}
				>
					<Experience items={experienceItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='studies'
					title={t('studies.title')}
					hidden={false}
					childrenIcon={info[4].icon}
				>
					<Studies items={studiesItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='skills'
					title={t('skills.title')}
					hidden={false}
					childrenIcon={info[2].icon}
				>
					<Skills items={skillsItems} />
				</ModuleTemplate>

				<ModuleTemplate
					className='certificates'
					title={t('certifications.title')}
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