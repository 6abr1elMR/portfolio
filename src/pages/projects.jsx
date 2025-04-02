import Content from '../components/content';
import MenuProjectSection from '../sections/menuprojectsection';
import ListProjectsSection from '../sections/listprojectssection';
import { DATA_PROJECTS as projectsList } from '../data/data';
import { useState } from 'react';

const Projects = () => {
	const [projects, setProjects] = useState(projectsList);

	const handleFilterProjects = (filter) => {
		if (!filter) {
			setProjects(projectsList);
			return;
		}

		const filteredProjects = projectsList.filter((p) => p.tag === filter);
		setProjects(filteredProjects);
	};

	return (
		<Content>
			<MenuProjectSection handleFilterProjects={handleFilterProjects} />
			<ListProjectsSection projects={projects} />
		</Content>
	);
};

export default Projects;
