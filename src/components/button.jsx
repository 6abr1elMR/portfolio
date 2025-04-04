import { PropTypes } from 'prop-types';

const Button = ({ icon }) => {
	const handleDownload = async () => {
		const urlCv =
			'https://portfolio-docs-pbl.s3.us-east-1.amazonaws.com/VE-GabrielMontes-ES.pdf';
		const link = document.createElement('a');
		link.href = urlCv;
		link.download = 'GabrielRodriguez-CV.pdf';
		link.target = '_blank';
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return <button onClick={handleDownload}>{icon}Descargar CV</button>;
};

Button.propTypes = {
	icon: PropTypes.node,
};

export default Button;
