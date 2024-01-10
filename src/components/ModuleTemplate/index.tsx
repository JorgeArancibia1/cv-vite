import { FaUserAlt } from 'react-icons/fa';
import './index.css';

type ModuleTemplateProps = {
	children: React.ReactNode;
	title: string;
	hidden?: boolean;
	className?: string;
};

const ModuleTemplate = ({
	children,
	title,
	hidden,
	className,
}: ModuleTemplateProps) => {
	return (
		<section className={`section-template ${className}`}>
			<article className='template-row'>
				<FaUserAlt className='template-icon-title' size={'1.5em'} />
				<h5 className='template-title'>{title}</h5>
			</article>

			<div className='content-template'>
				<div className='space'></div>
				{children}
				<div className='space'></div>
			</div>

			{!hidden && (
				<div className='template-line-container'>
					<div className='template-line' />
				</div>
			)}
		</section>
	);
};

export default ModuleTemplate;
