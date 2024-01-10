import { Description } from '../Description';
import './experience.css';

interface IItem {
	items: string;
	content: string;
	link?: string;
}

type ExperienceProps = {
	items?: IItem[] | [];
	i?: boolean;
	a?: boolean;
};

export const Experience = ({ items, i, a }: ExperienceProps) => {
	console.log('console => ', { items, i, a });
	return (
		<section>
			<Description
				dTitle={'Agosto 2023 - Actualidad'}
				dJob={'Desarrollador de front-end - Hostyweb spa'}
				description={
					'Dentro de mis deberes están el desarrollar junto con un equipo de trabajo, un aplicativo web para un cliente, utilizando React.js, Typescript y Redux toolkit. Para ello se crea cada una de las nuevas características con sus respectivos test usando Jest.js'
				}
			/>

			<Description
				dTitle={'Julio 2022 - Noviembre 2022'}
				dJob={'Frontend developer - RentApp'}
				description={
					'Dentro de mis funciones estaban: Trabajar en dos proyectos distintos, en uno se trabaja con React.js, con Apollo y material-ui, en donde mis labores están principalmente en modificar features ya existentes y corregir bugs de la aplicación web. En el segundo proyecto, lo realicé desde cero con la tecnología de Next.js, estaba a cargo de él, lo que significó trabajar en él desde cero, construir nuevas características según se requerían y el manejo y control de bugs de la aplicación.'
				}
			/>

			<Description
				dTitle={'Mayo 2022 - Julio 2022'}
				dJob={'Desarrollador de front-end - Multiplica Chile S.A.'}
				description={
					'Dentro de mis responsabilidades estaba el realizar diversos desarrollos front-end con HTML, CSS, Javascript y Bootstrap.'
				}
			/>

			<Description
				dTitle={'Diciembre 2020 - Septiembre 2021'}
				dJob={'Frontend developer junior - Waypoint Telecomunicaciones S.A.'}
				description={'Dentro de mis funciones estaban: Desarrollar productos nuevos con Vue.js, resolver diferentes features con Java o React Native, también trabajé con bases de datos PostgreSQL, además de ocupar AWS para el servicio en la nube.'}
			/>

			<Description
				dTitle={'Junio 2019 - Septiembre 2019'}
				dJob={'React Developer trainee - Saltala by HC Partners'}
				description={'Mis funciones estaban relacionadas al desarrollo web con React.js, este proyecto consistió en construir en equipo un sitio web estático con Gatsby.js.'}
			/>
		</section>
	);
};

// {items.map((dat, index) => (
//   <dl className='d-flex ml-3 ml-xl-5 pl-2 mt-3 row' key={index}>
//     {i ? <i className={dat.item}></i> : <dt>{dat.item}</dt>}
//     {a ? (
//       <a
//         className='text-justify col-11 col-lg-10 pl-2 pr-3'
//         href={dat.link}
//       >
//         {dat.content}
//       </a>
//     ) : (
//       <dd className='text-justify col-11 col-lg-10 pl-2 pr-3'>
//         {dat.content}
//       </dd>
//     )}
//   </dl>
// ))}
