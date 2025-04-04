import Card from '../components/card';
import { DATA_STACK as stacks } from '../data/data';
import './mystacksection.css';

const MyStackSection = () => {
	return (
		<div className='mystack'>
			<h1>Mi Stack</h1>
			<div className='technologies'>
				{stacks.map((s, index) => {
					return (
						<Card
							key={`${s.title}-${index}`}
							title={s.title}
							content={s.content}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default MyStackSection;
