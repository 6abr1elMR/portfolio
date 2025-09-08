const SUPABASE_TO = import.meta.env.VITE_SUPABASE_TO;
const SUPABASE_SUBJECT = import.meta.env.VITE_SUPABASE_SUBJECT;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const sendEmail = async (name, senderEmail, message) => {
	const email = {
		to: SUPABASE_TO,
		subject: SUPABASE_SUBJECT,
		html: `<h1>Nuevo mensaje del portafolio</h1><br><p><b>Nombre:</b> ${name}</p><br><p><b>Email:</b> ${senderEmail}</p><br><p><b>Mensaje:</b> ${message}</p>`,
	};

	await fetch(
		`${SUPABASE_URL}/send-email-portfolio`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${SUPABASE_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(email),
		}
	);
};

export { sendEmail };
