import Tag from './tag';
import PropTypes from 'prop-types';

import './experienceitem.css';

const ExperienceItem = ({
	title,
	starDate,
	endDate,
	content,
	technologies,
}) => {
	return (
		<div className='experienceitem'>
			<h3>{title}</h3>
			<div className='edates'>
				<span>{starDate}</span>
				<span>-</span>
				<span>{endDate}</span>
			</div>
			<p>{content}</p>
			<div className='technologies'>
				{technologies.map((tech, index) => (
					<Tag
						key={`${tech.techname}-${index}`}
						icon={tech.icon}
						tagname={tech.techname}
					/>
				))}
			</div>
		</div>
	);
};

ExperienceItem.propTypes = {
	title: PropTypes.string.isRequired,
	starDate: PropTypes.string.isRequired,
	endDate: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	technologies: PropTypes.array.isRequired,
};

export default ExperienceItem;
