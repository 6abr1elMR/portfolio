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
		</div>
	);
};

export default ExperienceItem;
