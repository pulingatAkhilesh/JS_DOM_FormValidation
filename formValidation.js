function validateName(){
	let name = document.getElementById('userName');
	let nameError = document.getElementById('userName-error');

	if(name.value.trim() == ''){
		nameError.innerHTML = 'Username cannot be blank.';
		return false;
	}else if(name.value.length < 5){
		nameError.innerHTML = 'Username must not be less than 5 characters.';
		return false;
	}else{
		nameError.innerHTML = '';
		return true;
	}
}

function validateEmail(){
	let email = document.getElementById('email');
	let emailError = document.getElementById('email-error');

	let regEx = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	if(email.value.trim() == ''){
		emailError.innerHTML = 'E-Mail cannot be blank!!';
		return false;
	}else if(!email.value.match(regEx)){
		emailError.innerHTML = 'E-Mail is not in global format.';
		return false;
	}else{
		emailError.innerHTML = '';
		return true;
	}
}

function validatePassword(){
	let password = document.getElementById('password');
	let passwordError = document.getElementById('password-error');

	if(password.value.trim() == ''){
		passwordError.innerHTML = 'Password cannot be blank!!';
		return false;
	}else if(password.value.length < 6 || password.value.length > 20){
		passwordError.innerHTML = 'Password length cannot be less than 6 characters or more than 20 characters.';
		return false;
	}else{
		passwordError.innerHTML = '';
		return true;
	}
}

function validateRepeatPassword(){
	let password = document.getElementById('password');
	let repeatPassword = document.getElementById('repeatPassword');
	let repeatPasswordError = document.getElementById('repeatPassword-error');

	if(password.value != repeatPassword.value){
		repeatPasswordError.innerHTML = 'Password mismatch.';
		return false;
	}else{
		repeatPasswordError.innerHTML = '';
		return true;
	}
}

function validateForm(){
	let submitError = document.getElementById('submit-error');
	if(!validateName() || !validateEmail() || !validatePassword() || !validateRepeatPassword()){
		submitError.innerHTML = 'Please resolve the errors...';
		return false;
	}else{
		submitError.innerHTML = 'Success!!';
		submitError.style.color = 'green'; // Set success message color to green
		return true;
	}
}