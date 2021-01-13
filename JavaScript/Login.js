function LoginClick(){

    var user = String(document.getElementById("usuario").value);

    var pass = String(document.getElementById("contraseña").value);

    if(user != "" && pass != ""){
        localStorage.setItem("Usuario", user);
        localStorage.setItem("Contraseña", pass);
        alert("Inicio Sesion correctamente");
    }else{
        alert("No se ha podido iniciar sesion correctamente, verifique su informacion e intente nuevamente");
    }
}