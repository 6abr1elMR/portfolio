import './card.css';

const Card = ({ title, content }) => {
	return (
		<div className='card'>
			<div className='cheader'>
				<div className='csymbol'><span>{'{'}</span><span>{'}'}</span></div>
				<h3>{title}</h3>
			</div>
			<div className='ccontent'>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default Card;
