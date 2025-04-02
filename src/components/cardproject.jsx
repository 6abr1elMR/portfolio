import PropTypes from 'prop-types';

import './cardproject.css';

const CardProject = ({ title, progress, icon, status }) => {
	return (
		<div className='cardproject'>
			<div className='headercard'>
				<p>{title}</p>
				<img src={icon} alt='icon' />
			</div>
			<div className='statuscard'>
				<div
					className={`statuscarddot ${
						status === 'Completed' ? 'dotcomplete' : 'dotinprogress'
					}`}
				></div>
				<p className={status === 'Completed' ? 'completed' : 'inprogress'}>
					{status}
				</p>
			</div>
			<div className='progress'>
				<div
					className={`progress-bar ${
						status === 'Completed' ? 'dotcomplete' : 'dotinprogress'
					}`}
					style={{ width: `${progress}%` }}
				></div>
			</div>
			<div className='progresspercentage'>{progress}%</div>
		</div>
	);
};

CardProject.propTypes = {
	title: PropTypes.string.isRequired,
	progress: PropTypes.number.isRequired,
	icon: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
};

export default CardProject;
