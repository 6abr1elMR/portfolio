import Card from '../components/card';
import { DATA_STACK as stacks } from '../data/data';
import './mystacksection.css';

const MyStackSection = () => {
	return (
		<div className='mystack'>
            <h1>My Stack</h1>
            <div className='technologies'>
                {
                    stacks.map((s) => {
                        return <Card title={s.title} content={s.content} />
                    })
                }
            </div>
		</div>
	);
};

export default MyStackSection;
