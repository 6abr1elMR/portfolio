import CardProject from '../components/cardproject';
import PropTypes from 'prop-types';

import './listprojectssection.css';

const ListProjectsSection = ({ projects }) => {
	return (
		<div className='listprojectssection'>
			<div className='maincontent'>
				<div className='itemStatistics'>
					<p>Total Proyectos</p>
					<h1>{projects.length}</h1>
				</div>
				<div className='separator'></div>
				<div className='itemStatistics'>
					<p>Completados</p>
					<h1>{projects.filter(p => p.status === 'Completed').length}</h1>
				</div>
				<div className='separator'></div>
				<div className='itemStatistics'>
					<p>En Proceso</p>
					<h1>{projects.filter(p => p.status === 'In Progress').length}</h1>
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
