import { PropTypes } from 'prop-types';

const Button = ({ icon }) => {
	const handleDownload = () => {
		const urlCv = '/portfolio/cv.pdf';
		return window.open(urlCv, '_blank');
	};

	return <button onClick={handleDownload}>{icon}Descargar CV</button>;
};

Button.propTypes = {
	icon: PropTypes.node,
};

export default Button;
