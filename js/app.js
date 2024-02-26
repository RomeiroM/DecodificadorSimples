let semCodigo = ["e", "i","a","o","u"];
let codigoSecreto = ["enter","imes","ai","ober","ufat"];
let texto = document.querySelector('textarea').value;
document.getElementsByClassName("botao")[2].style.display = "none";

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    document.getElementsByClassName("dec_img")[0].style.display = "none";
    document.getElementsByClassName("dec_area_primeiro")[0].style.display = "none";
    document.getElementsByClassName("dec_area_segundo")[0].style.display = "none";
    document.getElementsByClassName("botao")[2].style.display = "";
    campo.innerHTML = texto;
    
}

function criptografar() {
    let texto = document.querySelector('textarea').value;
    let newString = texto;

    for (let i = 0; i < codigoSecreto.length; i++) {
        newString =  substitui(semCodigo[i], codigoSecreto[i],newString);
     }
     exibirTextoNaTela('.traducao', newString);
}

function descriptografar() {
    let texto = document.querySelector('textarea').value;
    let newString = texto;

    for (let i = 0; i < codigoSecreto.length; i++) {
       newString =  substitui(codigoSecreto[i],semCodigo[i],newString);
    }
    exibirTextoNaTela('.traducao', newString);
}

function copiar() {
    var copyText = document.getElementById("copiar").innerHTML;
    navigator.clipboard.writeText(copyText);
    console.log(copyText);
    alert("Texto copiaddo: " + copyText);
  }

function substitui(substituir,substituto,texto){
    let saida = texto.replaceAll(substituir, substituto);
    return saida;
}

// "pairaibenterns poberr enterncairair enterssenter 
// dentersaifimesober enter tenterr
// fimesnailimeszaidober enterlenter coberm sufatcenterssober!"