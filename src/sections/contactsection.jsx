import { useState } from 'react';
import { sendEmail } from '../utils/email';
import './contactsection.css';

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, message } = formData;
		setFormData({
			name: '',
			email: '',
			message: '',
		});
		await sendEmail(name, email, message);
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
