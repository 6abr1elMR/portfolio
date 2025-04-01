import { FaDownload } from "react-icons/fa";
import Photoaboutme from '../components/photoaboutme';
import phperfil from '../assets/phperfil.jpg';
import Button from '../components/button';
import './aboutmesection.css';

const Aboutmesection = () => {
	return (
		<div className='aboutme'>
			<div>
				<h1 className='h1colorfull'>About me</h1>
				<p>
					An experienced programmer with <span>more than 10 years</span> of
					experience specializing in web development and creating adaptive
					interfaces, he is proficient in modern technologies and strives for{' '}
					<span>excellence in every project.</span>
					<br />
					My job is to build <span>your website</span> so that it is functional
					and <span>user-friendly</span> but at the same time attractive.
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
