import Card from '../components/card';
import ExperienceItem from '../components/experienceitem';
import { DATA_EXPERIENCES as experiences } from '../data/data';
import './experiencesection.css';

const ExperienceSection = () => {
	return (
		<div className='experience'>
			<h1>Experience</h1>
			<div className='experiences'>
				{experiences.map((e) => {
					return <ExperienceItem title={e.title} starDate={e.startDate} endDate={e.endDate} content={e.content} />;
				})}
			</div>
		</div>
	);
};

export default ExperienceSection;
