let password, confirm_password;
let titles = [];
titles["nombres"] = "Por favor tener encuenta : \n*El campo no puede estar vacio \n*longitud maxima de 15 caracteres \n*no se permiten numeros";
titles["apellidos"]="Por favor tener encuenta :&#10;*El campo no puede estar vacio&#10;*longitud maxima de 15 caracteres&#10;*no se permiten numeros";

window.onload = ()=>{
	password = document.getElementById("password");
	confirm_password = document.getElementById("confirm_password");

	password.onchange = validatePassword;
	confirm_password.onkeyup = validatePassword;

	setFormTitles();
}


function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("las contraseñas no son iguales");
  } else {
    confirm_password.setCustomValidity('');
  }
}

function setFormTitles(){
	nombres.title = titles["nombres"];
	apellidos.title = titles["apellidos"];
}
