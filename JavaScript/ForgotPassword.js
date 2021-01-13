function ForgotButton(){
    var correo = String (document.getElementById("Email").value);

    if(correo != ""){
        localStorage.setItem("Correo", correo);
        alert("Le hemos enviado indicaciones a su correo, cheque su correo");
    }else{
        alert("No se ha podido realizar tu solicitud");
        alert("Por favor verifica tus datos y vuelve a intentar nuevamente")
    }
}