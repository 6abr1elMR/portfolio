import './listprojectssection.css';

const ListProjectsSection = () => {
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
		</div>
	);
};

export default ListProjectsSection;
