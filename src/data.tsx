// eslint-disable-file
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
				content: 'Chileno',
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
				content: '"Sigue un solo camino hasta alcanzar el éxito".',
			},
		],
	},
	{
		id: 3,
		icon: <FaCertificate size={'1.4em'} color='#0a4b70' />,
		title: 'HABILIDADES',
		items: [
			{
				item: 'Dominio de Inglés escrito:',
				content: 'Intermedio.',
			},
			{
				item: 'Dominio de Inglés hablado:',
				content: 'Básico.',
			},
			{
				item: 'Fortalezas:',
				content: 'GIT, HTML, CSS, Bootstrap, JavaScript, React.js.',
			},
			{
				item: 'Otras:',
				content:
					'Vue.js, Next.js, Mongo DB, PostgrSQL, Sass, Node.js, Java SE, MySQL.',
			},
			{
				item: 'Sistemas Operativos:',
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
				content:
					'Frontend developer, Ingeniero en mecánica automotriz y titulado de la carrera Analista programador de INACAP. Capacitado para trabajar como desarrollador web, con aspiraciones de perfeccionar conocimientos principalmente en el área frontend. Apasionado por la programación y actualmente buscando oportunidades para seguir creciendo en el área. Me encanta Javascript ♡.',
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
				content: 'Centro de formación técnica INACAP - Analista programador.',
			},
			{
				item: '2014-2017',
				content:
					'Instituto profesional DUOC UC - Ingeniero en mecánica automotriz.',
			},
		],
	},
	{
		id: 6,
		icon: <FaBriefcase size={'1.4em'} color='#3c0011' />,
		title: 'EXPERIENCIA LABORAL',
		items: [
			{
				item: 'Agosto 2023 - Actualidad',
				content: 'Desarrollador de front-end - Hostyweb spa',
			},
			{
				item: '',
				content:
					'Dentro de mis deberes están el desarrollar junto con un equipo de trabajo, un aplicativo web para un cliente, utilizando React.js, Typescript y Redux toolkit. Para ello se crea cada una de las nuevas características con sus respectivos test usando Jest.js',
			},
			{
				item: 'Julio 2022 - Noviembre 2022',
				content: 'Frontend developer - RentApp',
			},
			{
				item: '',
				content:
					'Dentro de mis funciones estaban: Trabajar en dos proyectos distintos, en uno se trabaja con React.js, con Apollo y material-ui, en donde mis labores están principalmente en modificar features ya existentes y corregir bugs de la aplicación web. En el segundo proyecto, lo realicé desde cero con la tecnología de Next.js, estaba a cargo de él, lo que significó trabajar en él desde cero, construir nuevas características según se requerían y el manejo y control de bugs de la aplicación.',
			},
			{
				item: 'Diciembre 2020 - Septiembre 2021',
				content: 'Software developer - Waypoint Telecomunicaciones S.A.',
			},
			{
				item: '',
				content:
					'Dentro de mis funciones estaban: Desarrollar productos nuevos con Vue.js, resolver diferentes features con Java o React Native, también trabajé con bases de datos PostgreSQL, además de ocupar AWS para el servicio en la nube.',
			},
			{
				item: 'Julio – Septiembre 2019',
				content: 'Pasante - Sáltala by HC Partners.',
			},
			{
				item: '',
				content:
					'El trabajo consistía en el desarrollo de una página web con React.js para la empresa junto a un equipo de personas.',
			},
		],
	},
	{
		id: 7,
		icon: <PiCertificateFill size={'2em'} color='#44bd32' />,
		title: 'CERTIFICACIONES',
		items:[
			{
				item: '2020',
				content: 'Curso profesional de Backend'
			},
			{
				item: '2019',
				content: 'Curso de Webpack'
			},
			{
				item: '2019',
				content: 'Curso de React Router'
			},
			{
				item: '2019',
				content: 'Curso de React.JS'
			},
			{
				item: '2019',
				content: 'Curso de SQL y MySQL'
			},
			{
				item: '2019',
				content: 'Curso de animaciones para la web'
			},
			{
				item: '2019',
				content: 'Curso de Bootstrap'
			},
			{
				item: '2019',
				content: 'Curso de Responsive Design'
			},
			{
				item: '2019',
				content: 'Curso de CSS Grid Layout'
			},
			{
				item: '2019',
				content: 'Curso de JQuery a JavaScript'
			},
			{
				item: '2019',
				content: 'Curso de Programación funcional en JavaScript'
			},
			{
				item: '2019',
				content: 'Curso de HTML y CSS'
			},
			{
				item: '2019',
				content: 'Curso de Fundamentos de JavaScript'
			},
			{
				item: '2018',
				content: 'Curso profesional de Git y Github'
			},
			{
				item: '2018',
				content: 'Curso de desarrollo web online'
			},
			{
				item: '2018',
				content: 'Curso de Algoritmos con C'
			},
			{
				item: '2018',
				content: 'Curso de Fundamentos de Bases de Datos'
			},
			{
				item: '2018',
				content: 'Curso de Java Avanzado SE'
			},
			{
				'content': 'Curso Básico de Java SE'
			},
			{
				item: '2018',
				content: 'Fundamentos de Ingeniería de software'
			},
			{
				item: '2018',
				content: 'Curso de redes de internet'
			},
			{
				item: '2018',
				content: 'Introducción a Terminal y línea de comandos'
			},
			{
				item: '2018',
				content: 'Curso gratis de programación Básica'
			},
			{
				item: '2018',
				content: 'Curso de Fundamentos de Electricidad y Electrónica'
			}
		]
	},
	// eslint-disable-next-line eol-last
];
