import { Avatar } from "../Avatar";
import "./index.css";

type HeaderProps = {
	className: string;
};

const Header = ({className}: HeaderProps) => {
	return (
		<section className={`${className}`}>
			<div className='avatar-container'>
				<Avatar />
			</div>
			<div className="principal-text-container">
				<h1 className='texto'>
					Jorge Eduardo <p> Arancibia Leiva</p>
				</h1>
			</div>
		</section>
	);
};

export default Header;
