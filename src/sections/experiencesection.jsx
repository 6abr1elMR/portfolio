import ExperienceItem from '../components/experienceitem';
import { DATA_EXPERIENCES as experiences } from '../data/data';
import './experiencesection.css';

const ExperienceSection = () => {
	return (
		<div className='experience'>
			<h1>Experiencia</h1>
			<div className='experiences'>
				{experiences.map((e) => {
					return (
						<ExperienceItem
							key={e.title}
							title={e.title}
							starDate={e.startDate}
							endDate={e.endDate}
							content={e.content}
							technologies={e.technologies}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ExperienceSection;
