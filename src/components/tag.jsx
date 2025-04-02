import PropTypes from 'prop-types';
import './tag.css';

const Tag = ({ icon: Icon, tagname }) => {
	return (
		<div className='tag'>
			<Icon />
			{tagname}
		</div>
	);
};

Tag.propTypes = {
	icon: PropTypes.elementType.isRequired,
	tagname: PropTypes.string.isRequired,
};

export default Tag;
