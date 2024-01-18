// eslint-disable-file
import i18next from 'i18next';
import { BsPersonRaisedHand, BsPersonWalking } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';
import {
	FaCertificate,
	FaFlag,
	FaLinkedin,
	FaStar,
	FaUserAlt,
} from 'react-icons/fa';
import { FaBriefcase, FaLocationDot } from 'react-icons/fa6';
import { FcPhone } from 'react-icons/fc';
import { PiCertificateFill, PiStudentFill } from 'react-icons/pi';
import { TfiGithub } from 'react-icons/tfi';
import { Info } from './interfaces';

export const info: Info[] = [
	{
		id: 1,
		icon: <FaUserAlt size={'1.4em'} color={'#07304a'} />,
		title: 'DATOS PERSONALES',
		items: [
			{
				item: <FcPhone />,
				content: '(+56)9 356 439 91',
			},
			{
				item: <CgMail color='darkred' />,
				content: 'jorge.arancibia.jeal@gmail.com',
			},
			{
				item: <FaLinkedin />,
				content: 'linkedin.com/in/jaranci',
				link: 'https://www.linkedin.com/in/jaranci/',
			},
			{
				item: <TfiGithub color='purple' />,
				content: 'github.com/JorgeArancibia1',
				link: 'https://www.github.com/JorgeArancibia1',
			},
			{
				item: <FaLocationDot color='#007CF9' />,
				content: 'Santiago - Chile',
			},
			{
				item: <FaFlag color='#D30026' />,
				content: i18next.t('info.items.5.content'),
			},
		],
	},
	{
		id: 2,
		icon: <BsPersonWalking size={'1.6em'} color='#f47067' />,
		title: 'FILOSOFÍA DE VIDA',
		items: [
			{
				item: <FaStar color='#FFCC02' />,
				content: i18next.t('pylosophy.items.0.content'),
			},
		],
	},
	{
		id: 3,
		icon: <FaCertificate size={'1.4em'} color='#0a4b70' />,
		title: 'HABILIDADES',
		items: [
			{
				item: i18next.t('skills.items.0.item'),
				content: i18next.t('skills.items.0.content'),
			},
			{
				item: i18next.t('skills.items.1.item'),
				content: i18next.t('skills.items.1.content'),
			},
			{
				item: i18next.t('skills.items.2.item'),
				content: 'GIT, HTML, CSS, Bootstrap, JavaScript, React.js.',
			},
			{
				item: i18next.t('skills.items.3.item'),
				content:
					'Vue.js, Next.js, Mongo DB, PostgrSQL, Sass, Node.js, Java SE, MySQL.',
			},
			{
				item: i18next.t('skills.items.4.item'),
				content: 'Windows, Mac y Linux(Debian, Ubuntu).',
			},
		],
	},
	{
		id: 4,
		icon: <BsPersonRaisedHand size={'1.8em'} color='#006649' />,
		title: 'PRESENTACIÓN',
		items: [
			{
				item: '',
				content: i18next.t('presentation.items.0.content'),
			},
		],
	},
	{
		id: 5,
		icon: <PiStudentFill size={'1.7em'} color='#0087cb' />,
		title: 'ESTUDIOS PROFESIONALES',
		items: [
			{
				item: '2019 - 2021',
				content: i18next.t('studies.items.0.content'),
			},
			{
				item: '2014-2017',
				content: i18next.t('studies.items.1.content'),
			},
		],
	},
	{
		id: 6,
		icon: <FaBriefcase size={'1.4em'} color='#3c0011' />,
		title: 'EXPERIENCIA LABORAL',
		items: [
			{
				item: i18next.t('experience.items.0.item'),
				content: i18next.t('experience.items.0.content'),
			},
			{
				item: '',
				content: i18next.t('experience.items.1.content'),
			},
			{
				item: i18next.t('experience.items.2.item'),
				content: i18next.t('experience.items.2.content'),
			},
			{
				item: '',
				content: i18next.t('experience.items.3.content'),
			},
			{
				item: i18next.t('experience.items.4.item'),
				content: i18next.t('experience.items.4.content'),
			},
			{
				item: '',
				content: i18next.t('experience.items.5.content'),
			},
			{
				item: i18next.t('experience.items.6.item'),
				content: i18next.t('experience.items.6.content'),
			},
			{
				item: '',
				content: i18next.t('experience.items.7.content'),
			},
		],
	},
	{
		id: 7,
		icon: <PiCertificateFill size={'2em'} color='#44bd32' />,
		title: i18next.t('certifications.title'),
		items: [
			{
				item: '2020',
				content: i18next.t('certifications.items.0.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.1.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.2.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.3.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.4.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.5.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.6.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.7.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.8.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.8.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.9.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.10.content'),
			},
			{
				item: '2019',
				content: i18next.t('certifications.items.11.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.12.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.13.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.14.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.15.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.16.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.17.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.18.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.19.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.20.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.21.content'),
			},
			{
				item: '2018',
				content: i18next.t('certifications.items.22.content'),
			},
		],
	},
	// eslint-disable-next-line eol-last
];
