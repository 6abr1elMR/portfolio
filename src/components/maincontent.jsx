import './maincontent.css';
import Sidebar from './sidebar';

const Maincontent = ({ children }) => {
	return (
		<div className='maincontent'>
			<Sidebar />
			{children}
		</div>
	);
};

export default Maincontent;
