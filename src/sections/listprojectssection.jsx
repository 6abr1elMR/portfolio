import CardProject from '../components/cardproject';
import PropTypes from 'prop-types';

import './listprojectssection.css';

const ListProjectsSection = ({ projects }) => {
	return (
		<div className='listprojectssection'>
			<div className='maincontent'>
				<div className='itemStatistics'>
					<p>Total Project&apos;s</p>
					<h1>12</h1>
				</div>
				<div className='separator'></div>
				<div className='itemStatistics'>
					<p>Completed</p>
					<h1>7</h1>
				</div>
				<div className='separator'></div>
				<div className='itemStatistics'>
					<p>In Progress</p>
					<h1>3</h1>
				</div>
			</div>
			<div className='projects'>
				{projects.map((p, index) => {
					return (
						<CardProject
							key={`${p.title}-${index}`}
							title={p.title}
							progress={p.progress}
							icon={p.icon}
							status={p.status}
						/>
					);
				})}
			</div>
		</div>
	);
};

ListProjectsSection.propTypes = {
	projects: PropTypes.array.isRequired,
};

export default ListProjectsSection;
