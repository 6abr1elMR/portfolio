import {
	FaRegAddressCard,
	FaRegFileAlt,
	FaRegFolder,
	FaRegComments,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	const navigate = useNavigate();

	const goToPage = (path) => {
		navigate(`/${path}`);
	};

	return (
		<div className='navbar'>
			<li onClick={() => goToPage('')}>
				<FaRegAddressCard />
				<span>About me</span>
			</li>
			<li onClick={() => goToPage('resume')}>
				<FaRegFileAlt />
				<span>Resume</span>
			</li>
			<li onClick={() => goToPage('projects')}>
				<FaRegFolder />
				<span>Projects</span>
			</li>
			<li onClick={() => goToPage('contact')}>
				<FaRegComments />
				<span>Contact</span>
			</li>
		</div>
	);
};

export default Navbar;
