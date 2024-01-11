import './index.css';
import { FC } from 'react';


type ModuleTemplateProps = {
	children: React.ReactNode;
  childrenIcon: React.ReactNode;
	title: string;
	hidden?: boolean;
	className?: string;
};

const ModuleTemplate: FC<ModuleTemplateProps> = ({
	children,
  childrenIcon,
	title,
	hidden,
	className,
}) => {
	return (
		<section className={`section-template ${className}`}>
			<article className='template-row'>
        {childrenIcon}
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
