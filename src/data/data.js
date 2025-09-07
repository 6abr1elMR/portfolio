import { NodejsIcon } from '../components/icons/nodejs';
import { PythonIcon } from '../components/icons/python';
import { ReactIcon } from '../components/icons/react';
import { SpringbootIcon } from '../components/icons/springboot';
import { NetIcon } from '../components/icons/net';
import { AngularIcon } from '../components/icons/angular';
import { FlutterIcon } from '../components/icons/flutter';
import { AwsIcon } from '../components/icons/aws';
import { GolangIcon } from '../components/icons/golang';
import { GcpIcon } from '../components/icons/gcp';
import { AzureIcon } from '../components/icons/azure';
import RocketIcon from '../assets/rocket.png';

const DATA_STACK = [
	{
		title: 'JavaScript',
		content:
			'Lenguaje de programación dinámico y versátil, utilizado principalmente para desarrollo web frontend y backend',
	},
	{
		title: 'TypeScript',
		content:
			'Superset de JavaScript que agrega tipado estático y mejoras para el desarrollo escalable.',
	},
	{
		title: 'PHP',
		content:
			'Lenguaje de programación orientado a la web, ampliamente usado para desarrollo backend y gestión de servidores.',
	},
	{
		title: 'Python',
		content:
			'Lenguaje multipropósito, fácil de aprender y usado en desarrollo web, ciencia de datos, IA y automatización.',
	},
	{
		title: 'SQL',
		content:
			'Lenguaje estándar para la gestión y manipulación de bases de datos relacionales',
	},
	{
		title: 'PSQL',
		content:
			'Dialecto de SQL optimizado para PostgreSQL, un potente sistema de bases de datos relacionales.',
	},
	{
		title: 'C#',
		content:
			'Lenguaje de Microsoft orientado a objetos, usado en desarrollo de aplicaciones de escritorio, juegos y backend con .NET',
	},
	{
		title: 'Java',
		content:
			'Lenguaje orientado a objetos, popular en desarrollo empresarial, aplicaciones móviles y sistemas de gran escala.',
	},
	{
		title: 'Dart',
		content:
			'Lenguaje optimizado para el desarrollo frontend y de aplicaciones móviles con Flutter.',
	},
	{
		title: 'Golang',
		content:
			'Lenguaje eficiente y concurrente, ideal para backend, servicios en la nube y microservicios.',
	},
];

const DATA_EXPERIENCES = [
	{
		title: 'CTO - Arquitecto de Infraestructura y Soluciones Cloud',
		startDate: '2023',
		endDate: '2024',
		content:
			'Como CTO, desarrollé y mantuve plataformas y microservicios, automatizando procesos y gestionando despliegues con diversas tecnologías. También lideré la planificación y gestión del equipo con Scrum.',
		technologies: [
			{
				techname: 'React',
				icon: ReactIcon,
			},
			{
				techname: 'Node.js',
				icon: NodejsIcon,
			},
			{
				techname: 'SpringBoot',
				icon: SpringbootIcon,
			},
			{
				techname: 'Python',
				icon: PythonIcon,
			},
			{
				techname: '.NET',
				icon: NetIcon,
			},
			{
				techname: 'Angular',
				icon: AngularIcon,
			},
			{
				techname: 'Flutter',
				icon: FlutterIcon,
			},
			{
				techname: 'AWS',
				icon: AwsIcon,
			},
		],
	},
	{
		title: 'Líder Técnico - Arquitecto de Infraestructura y Soluciones Cloud',
		startDate: '2023',
		endDate: '2024',
		content:
			'Como Líder Técnico Full Stack, dirigí el desarrollo y mantenimiento de plataformas SaaS con microservicios y microfrontends, gestionando tecnologías en frontend, backend y bases de datos.',
		technologies: [
			{
				techname: 'React',
				icon: ReactIcon,
			},
			{
				techname: 'Node.js',
				icon: NodejsIcon,
			},
			{
				techname: 'Python',
				icon: PythonIcon,
			},
			{
				techname: '.NET',
				icon: NetIcon,
			},
			{
				techname: 'Angular',
				icon: AngularIcon,
			},
			{
				techname: 'Golang',
				icon: GolangIcon,
			},
			{
				techname: 'AWS',
				icon: AwsIcon,
			},
			{
				techname: 'Azure',
				icon: AzureIcon,
			},
		],
	},
	{
		title: 'Líder Técnico - Arquitecto de Infraestructura y Soluciones Cloud',
		startDate: '2022',
		endDate: '2023',
		content:
			'Como Líder Técnico Full Stack y DevOps, lideré el desarrollo y mantenimiento de plataformas con microservicios, automatizando procesos y despliegues en la nube. Gestioné equipos con Scrum y trabajé en frontend, backend y cloud con diversas tecnologías.',
		technologies: [
			{
				techname: 'React',
				icon: ReactIcon,
			},
			{
				techname: 'Node.js',
				icon: NodejsIcon,
			},
			{
				techname: 'SpringBoot',
				icon: SpringbootIcon,
			},
			{
				techname: 'Python',
				icon: PythonIcon,
			},
			{
				techname: '.NET',
				icon: NetIcon,
			},
			{
				techname: 'Angular',
				icon: AngularIcon,
			},
			{
				techname: 'Flutter',
				icon: FlutterIcon,
			},
			{
				techname: 'AWS',
				icon: AwsIcon,
			},
			{
				techname: 'GCP',
				icon: GcpIcon,
			},
		],
	},
	{
		title: 'Desarrollador FullStack y Arquitecto Cloud',
		startDate: '2022',
		endDate: '2022',
		content:
			'Como Desarrollador Full Stack, trabajé en el desarrollo y mantenimiento de una plataforma de seguros con microservicios, utilizando diversas tecnologías en frontend, backend y bases de datos. También gestioné despliegues en DigitalOcean.',
		technologies: [
			{
				techname: 'React',
				icon: ReactIcon,
			},
			{
				techname: 'Node.js',
				icon: NodejsIcon,
			},
			{
				techname: 'SpringBoot',
				icon: SpringbootIcon,
			},
			{
				techname: 'Python',
				icon: PythonIcon,
			},
			{
				techname: '.NET',
				icon: NetIcon,
			},
			{
				techname: 'Angular',
				icon: AngularIcon,
			},
			{
				techname: 'Flutter',
				icon: FlutterIcon,
			},
			{
				techname: 'AWS',
				icon: AwsIcon,
			},
			{
				techname: 'Azure',
				icon: AzureIcon,
			},
		],
	},
];

const DATA_PROJECTS = [
	{
		title: 'Locky Web',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'frontend',
	},
	{
		title: 'My Drive API',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'backend',
	},
	{
		title: 'Locky App',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'mobile',
	},
	{
		title: 'My Drive Webapp',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'application',
	},
	{
		title: 'Animations JavaScript',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'frontend',
	},
	{
		title: 'Design System Locky App',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'mobile',
	},
	{
		title: 'Design System Locky Web',
		progress: 100,
		icon: RocketIcon,
		status: 'Completed',
		tag: 'frontend',
	},
	{
		title: 'CRM Automation Web',
		progress: 20,
		icon: RocketIcon,
		status: 'In Progress',
		tag: 'frontend',
	},
	{
		title: 'CRM Automation Server Integration',
		progress: 40,
		icon: RocketIcon,
		status: 'In Progress',
		tag: 'backend',
	},
];

export { DATA_STACK, DATA_EXPERIENCES, DATA_PROJECTS };
