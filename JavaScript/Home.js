function Suscribe(){

    var correo = String(document.getElementById("Email").value);

    if(correo != ""){
        localStorage.setItem("Correo", correo);
        alert("Se ha suscrito correctamente");
    }else{
        alert("Lo sentimos, la operacion no se realizo correctamente");
        alert("Verifique su informacion");
    }
}

function submit(){
    
    var name = String(document.getElementById("First").value);
    var lastname = String(document.getElementById("Last").value);
    var email = String(document.getElementById("mail").value);
    var msj = String(document.getElementById("Mensaje").value);

    if(name !="" || lastname !="" || email !="" || msj !=""){
        localStorage.setItem("Primer Nombre", name);
        localStorage.setItem("Segundo Nombre", lastname);
        localStorage.setItem("Correo", email);
        localStorage.setItem("Mensaje", msj);
        alert("Se han enviado los comentarios correctamente");
    }else{
        alert("No se han podido enviar sus comentarios");
        alert("Verifique su informacion e intente nuevamente");
    }
}