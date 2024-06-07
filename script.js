const mail = document.getElementById('mail');

let pattern;

mail.addEventListener('click', () => {
	mail.style.outline = '2px solid var(--light-red)';
	mail.nextElementSibling.style.display = 'none';
});

document.querySelector('.btn').addEventListener('click', () => {
	pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	mail.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML = 'Check your mail'),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--gery-dark-blue)'),
		  (mail.style.outline = 'none'))
		: !mail.value
		? ((mail.nextElementSibling.innerHTML = `Can't be blank`),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--light-red)'),
		  (mail.style.outline = '2px solid var(--light-red)'))
		: !mail.value.match(pattern)
		? ((mail.nextElementSibling.innerHTML =
				'Please provide a valid  email address'),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--light-red)'),
		  (mail.style.border = '2px solid var(--red)'))
		: ((mail.nextElementSibling.innerHTML = 'Error'),
		  (mail.nextElementSibling.style.display = 'flex'),
		  (mail.nextElementSibling.style.color = 'var(--light-red)'),
		  (mail.style.border = '2px solid var(--red)'));

	mail.value = '';
});
