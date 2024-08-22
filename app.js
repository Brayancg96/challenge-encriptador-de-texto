let botonEncriptar = document.querySelector(".btn-encriptar");
let botonDesencriptar = document.querySelector(".btn-desencriptar");
let dibujo = document.querySelector(".contenedor-fondo");
let contenedorParrafo = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarFondo();
    let contenedorTexto = tomarTexto();
    resultado.textContent = encriptarTexto(contenedorTexto);
    document.getElementById("texto").value = "";
}

function desencriptar(){
    ocultarFondo();
    let contenedorTexto = tomarTexto();
    resultado.textContent = desencriptarTexto(contenedorTexto);
    document.getElementById("texto").value = "";
}

function tomarTexto(){
    let contenedorTexto = document.querySelector(".caja-texto");
    return contenedorTexto.value;
}

function ocultarFondo(){
    dibujo.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){

    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){

    let texto = mensaje;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
})