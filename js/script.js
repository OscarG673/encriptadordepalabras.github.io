    var texto = document.getElementById("msgtext");
    var cifrar = document.getElementById("cifrar");
    var descifrar = document.getElementById("descifrar");
    var showMsg = document.getElementById("result");
    var noMsg = document.getElementById("no-msg");
    var copy = document.getElementById("copy-msg");

    var mensaje = "", newmsg = ""; 


    
    const EliminarTildes = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      } 
      
    function btnCopiar(){
        var copiado = document.getElementById("result");
        copiado.select();
        document.execCommand('copy');
        alert("Copiado");
        }

        copy.onclick = btnCopiar;

    function encriptar() {
    mensaje = EliminarTildes(texto.value).toLowerCase();

    newmsg = newmsg.replaceAll("e", "enter");
    newmsg = newmsg.replaceAll("i", "imes");
    newmsg = mensaje.replaceAll("a", "ai");
    newmsg = newmsg.replaceAll("o", "ober");
    newmsg = newmsg.replace("u", "ufat");
    
    noMsg.style.display= "none";

    copy.style.display = "block";
    showMsg.style.display = "block";
    showMsg.innerHTML =  newmsg;
    texto.value = "";
    }

    cifrar.onclick = encriptar;

    function desencriptar() {
    mensaje = EliminarTildes(texto.value);
    
    newmsg = mensaje.replaceAll("enter","e");
    newmsg = newmsg.replaceAll("imes", "i");
    newmsg = newmsg.replaceAll("ai", "a");
    newmsg = newmsg.replaceAll("ober", "o");
    newmsg = newmsg.replace("ufat", "u");
    showMsg.innerHTML =  newmsg;
    texto.value = "";
    }
    descifrar.onclick = desencriptar;
