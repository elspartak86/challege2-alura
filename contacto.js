
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const numberValue = number.value.trim();
	const messageValue = message.value.trim();
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(numberValue === '') {
		setErrorFor(phone, 'Number phone no debe dejarlo en blanco.');
	} else {
		setSuccessFor(number);
	}
	
	if(messageValue === '') {
		setErrorFor(message, 'Message no debe ingresar en blanco');
	} else{
		setSuccessFor(message);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//Afiliar el formulario con formspree.io
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
	event.preventDefault()
	const form = new FormData(this)
	const response = await fetch(this.action,{
		method: this.method,
		body: form,
		headers: {
			'Accept': 'application/json'
		}
	})
	if (response.ok){
		this.reset()
		alert('Mil gracias por tu mensaje')
	}
}