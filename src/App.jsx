import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/aboutme';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Maincontent from './components/maincontent';

function App() {
	return (
		<>
			<Router>
				<Maincontent>
					<Routes>
						<Route path='/' element={<Aboutme />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</Maincontent>
			</Router>
		</>
	);
}

export default App;
