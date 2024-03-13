const textArea = document.querySelector('#texto-entrada');
const mensaje = document.querySelector('#textoSalida');

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    document.querySelector(".sin-texto").style.display = "none";
    document.querySelector(".con-texto").style.display = "flex";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto(textoSalida, btnCopiar) {
  const areaTexto = document.getElementById(textoSalida);// Obtener el elemento del área de texto
  const texto = areaTexto.value;// Obtener el texto del área de texto
  areaTexto.select(); // Seleccionar el texto

  navigator.clipboard.writeText(texto).then(() => {// Copiar el texto al portapapeles
    // Mostrar mensaje de éxito
    const boton = document.getElementById(btnCopiar);
    boton.textContent = "Copiado!";
    setTimeout(() => {
      boton.textContent = "Copiar";
    }, 2000);
  });
}

function validarTexto() {
    // Expresión regular para permitir solo letras minúsculas
    textArea.value = textArea.value.replace(/[^a-z\s]/g, '');
}