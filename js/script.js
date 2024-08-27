function btnCopiar(){
    const mensaje = document.getElementById('mensaje');
    const textarea = document.getElementById('input-text');
    textarea.value = mensaje.value;
    mensaje.value = "";
}

function btnEncriptar(){
    const textarea = document.getElementById('input-text');
    const mensaje = document.getElementById('mensaje');
    const textoEncriptado = encriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesEncriptar(){
    const textarea = document.getElementById('input-text');
    const mensaje = document.getElementById('mensaje');
    const textoEncriptado = desincriptar(textarea.value);
    mensaje.value = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringaEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]];
    let stringaEncriptada =  stringaEncriptar.toLowerCase();
    for(let i =0;i< matrizCodigo.length; i++){
         if(stringaEncriptada.includes(matrizCodigo[i][0])){
            stringaEncriptada = stringaEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
         }
    }
    return stringaEncriptada;
}

function desincriptar(stringaDesEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"], ["o","ober"],["u","ufat"]];
    let stringaDesEncriptada =  stringaDesEncriptar.toLowerCase();
    for(let i =0;i< matrizCodigo.length; i++){
         if(stringaDesEncriptada.includes(matrizCodigo[i][1])){
            stringaDesEncriptada = stringaDesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
         }
    }
    return stringaDesEncriptada;
}

