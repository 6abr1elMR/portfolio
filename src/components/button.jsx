import { PropTypes } from 'prop-types';

const Button = ({ icon }) => {
	return <button>{icon}Download CV</button>;
};

Button.propTypes = {
	icon: PropTypes.node,
};

export default Button;
