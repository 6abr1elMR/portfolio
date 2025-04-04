import { FaRegAddressCard, FaRegFolder, FaRegComments } from 'react-icons/fa';
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
				<span>Acerca de mí</span>
			</li>
			<li onClick={() => goToPage('projects')}>
				<FaRegFolder />
				<span>Proyectos</span>
			</li>
			<li onClick={() => goToPage('contact')}>
				<FaRegComments />
				<span>Contacto</span>
			</li>
		</div>
	);
};

export default Navbar;
