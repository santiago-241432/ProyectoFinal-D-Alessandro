const validarFormulario = () => {
    let nombre = document.getElementById("nombre").value;
    let nombreError = document.getElementById("nombreError");

    let apellido = document.getElementById("apellido").value;
    let apellidoError = document.getElementById("apellidoError");

    let contraseña = document.getElementById("contraseña").value;
    let contraseñaError = document.getElementById("contraseñaError");

    let repetircontraseña = document.getElementById("repetirContraseña").value;
    let repetirContraseñaError = document.getElementById("repetirContraseñaError");

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");

    if (nombre === ""){
        nombreError.innerHTML = "Ingrese su nombre";
    }else{
        nombreError.innerHTML = "";
    }

    if (apellido === ""){
        apellidoError.innerHTML = "Ingrese su apellido";
    }else{
        apellidoError.innerHTML = "";
    }

    if (contraseña === ""){
        contraseñaError.innerHTML = "Ingrese su contraseña";
    }else{
        contraseñaError.innerHTML = "";
    }

    if (repetircontraseña === ""){
        repetirContraseñaError.innerHTML = "Repita su contraseña";
    }else if(repetircontraseña != contraseña){
        repetirContraseñaError.innerHTML = "Sus contraseñas no coinciden";
    }else{
        repetirContraseñaError.innerHTML = "";
    }

    if (email === ""){
        emailError.innerHTML = "Ingrese su Correo Electronico";
    }else{
        emailError.innerHTML = "";
    }
    

}

const validarFormulario2 = () => {
    let mail = document.getElementById("mail").value;
    let mailError = document.getElementById("mailError");

    let pw = document.getElementById("pw").value;
    let pwError = document.getElementById("pwError");

    if (mail === ""){
        mailError.innerHTML = "Ingrese su Correo Electronico";
    }else{
        mailError.innerHTML = "";
    }
    
    if (pw === ""){
        pwError.innerHTML = "Ingrese su Contraseña";
    }else{
        pwError.innerHTML = "";
    }
    
}

document.getElementById("btnEnviar").addEventListener("click",validarFormulario);

document.getElementById("btnEnviar2").addEventListener("click",validarFormulario2);