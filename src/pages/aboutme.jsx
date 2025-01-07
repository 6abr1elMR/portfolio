import Content from '../components/content';
import Aboutmesection from '../sections/aboutmesection';
import ExperienceSection from '../sections/experiencesection';
import MyStackSection from '../sections/mystacksection';

const Aboutme = () => {
	return (
		<Content>
			<Aboutmesection />
			<MyStackSection />
			<ExperienceSection />
		</Content>
	);
};

export default Aboutme;
