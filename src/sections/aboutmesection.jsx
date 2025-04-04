import { FaDownload } from "react-icons/fa";
import Photoaboutme from '../components/photoaboutme';
import phperfil from '../assets/phperfil.jpg';
import Button from '../components/button';
import './aboutmesection.css';

const Aboutmesection = () => {
	return (
		<div className='aboutme'>
			<div>
				<h1 className='h1colorfull'>Acerca de mí</h1>
				<p>
					Soy un desarrollador de software con <span>mas de 6 años de experiencia</span> en el diseño y desarrollo de soluciones web, móviles y en la nube. Me especializo en la creación de <span>plataformas escalables y eficientes</span>, trabajando con tecnologías como Node.js, .NET, Golang, Python, Flutter, Angular y React entre otros, además de integrar microservicios y microfrontends. También tengo experiencia en la optimización de infraestructura cloud, administrando servicios en AWS, Azure y GCP. Me apasiona la <span>innovación y la excelencia</span>, y siempre busco construir <span>productos funcionales, atractivos y altamente eficientes</span>.
				</p>
				<Button icon={<FaDownload />} />
			</div>
			<div>
				<Photoaboutme imgperfil={phperfil} />
			</div>
		</div>
	);
};

export default Aboutmesection;
