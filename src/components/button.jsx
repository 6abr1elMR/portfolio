import { PropTypes } from 'prop-types';

const Button = ({ icon }) => {
	const handleDownload = () => {
		const urlCv =
			'https://portfolio-docs-pbl.s3.us-east-1.amazonaws.com/VE-GabrielMontes-ES.pdf';
		return window.open(urlCv, '_blank');
	};

	return <button onClick={handleDownload}>{icon}Descargar CV</button>;
};

Button.propTypes = {
	icon: PropTypes.node,
};

export default Button;
