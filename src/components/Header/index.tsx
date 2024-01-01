import { Avatar } from "../Avatar";
import "./index.css";

const Header = () => {
	return (
		<section className='container-fluid m-auto p-0'>
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
