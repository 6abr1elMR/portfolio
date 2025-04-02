import PropTypes from 'prop-types';

import './menuprojectsection.css';

const MenuProjectSection = ({ handleFilterProjects }) => {
	return (
		<div className='menuprojectsection'>
			<div className='maincontent'>
				<h1 className='h1colorfull'>Project&apos;s</h1>
				<div className='contentoptions'>
					<ul>
						<li onClick={() => handleFilterProjects('')}>All</li>
						<li onClick={() => handleFilterProjects('frontend')}>Frontend</li>
						<li onClick={() => handleFilterProjects('backend')}>Backend</li>
						<li onClick={() => handleFilterProjects('mobile')}>Mobile</li>
						<li onClick={() => handleFilterProjects('application')}>
							Applications
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

MenuProjectSection.propTypes = {
	handleFilterProjects: PropTypes.func.isRequired,
};

export default MenuProjectSection;
