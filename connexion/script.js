const form = document.querySelector('form');

form.addEventListener('submit', async e => {
	e.preventDefault();
	const identifier = document.getElementById('identifiant').value;
	const password = document.getElementById('psw').value;

	const body = JSON.stringify({ identifier, password });
	const { jwt } = await (
		await fetch(`http://localhost:1337/api/auth/local`, { method: 'POST', body, headers: { 'Content-Type': 'application/json' } })
	).json();
	localStorage.setItem('token', jwt);
});
