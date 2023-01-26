const nombreHamPropia = () => {
    let nombreHam = document.getElementById("nombreHam").value;
    let nombreHamError = document.getElementById("nombreHamError");
    if (nombreHam === ""){
        nombreHamError.innerHTML = "POR FAVOR COLOCALE NOMBRE A TU HAMBURGUESA!";
    }else{
        nombreHamError.innerHTML = "";
    }

}

document.getElementById("btnEnviarNombreHam").addEventListener("click",nombreHamPropia);