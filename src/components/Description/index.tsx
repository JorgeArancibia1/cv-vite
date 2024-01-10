import './index';

type DescriptionProps = {
	className?: string;
	dTitle: string;
	dJob?: string;
	description: string;
};

export const Description = ({
	className,
	dTitle,
	dJob,
	description,
}: DescriptionProps) => {
	return (
		<section className={`${className}`}>
			<dl>
				<b>
					<dt className='description-title'>{dTitle}</dt>
				</b>
				<dd className='description-job'>{dJob}</dd>
				<dd className='description'>{description}</dd>
			</dl>
		</section>
	);
};
