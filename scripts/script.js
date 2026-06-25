function EfetuarLogin(){

    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;


    if(usuario === "f" && senha === "123"){

        window.location.href = "fazenda.html";

    }else{

        alert("Usuário ou senha incorretos!");

    }

}
