import './contactsection.css';
import { useState } from 'react';

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form data:', formData);
		setFormData({
			name: '',
			email: '',
			message: '',
		});
	};

	return (
		<div className='contactsection'>
			<h1 className='h1colorfull'>Enviame un mensaje!</h1>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<input
						type='text'
						name='name'
						placeholder='Nombre'
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<input
						type='email'
						name='email'
						placeholder='Correo electrónico'
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className='form-group'>
					<textarea
						name='message'
						placeholder='Mensaje'
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</div>
				<button type='submit'>Enviar mensaje</button>
			</form>
		</div>
	);
};

export default ContactSection;
