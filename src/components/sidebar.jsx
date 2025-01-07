import Photoperfil from './photoperfil';
import phperfil from '../assets/phperfil.jpg';
import Navbar from './navbar';
import Divider from './divider';
import './sidebar.css';

const Sidebar = () => {
	return (
		<div className='ctn sidebar'>
			<Photoperfil imgperfil={phperfil} />
			<h2>Gabriel Montes</h2>
			<h2>Full-stack developer</h2>
			<h2>Mobile developer</h2>
			<h2>Devops</h2>
			<Navbar />
			<Divider />
			<div className='footer'></div>
		</div>
	);
};

export default Sidebar;
