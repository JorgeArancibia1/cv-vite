import { Avatar } from '../Avatar';
import './index.css';

type HeaderProps = {
	className: string;
};

export const Header = ( { className }: HeaderProps ) => {
	return (
		<section className={` d-flex-center ${className}`}>
			<div className='avatar-container'>
				<Avatar />
			</div>
			<div className="principal-text-container">
				<h1 className='texto m-0 mb-1' >
					Jorge Eduardo <p className='m-0'> Arancibia Leiva</p>
				</h1>
			</div>
		</section>
	);
};