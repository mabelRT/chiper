import cipher from './cipher.js';
//convertir las leras en mayusculas//
document.getElementById("message").addEventListener("keyup", function name() {
    this.value = this.value.toUpperCase();
}, true);

//recoger datos para cifrar//

document.getElementById("encode").addEventListener("click", function valores() {
  //datos del evento de  addEventListener//
    const string = document.getElementById("message").value;
    const offset = document.getElementById("offset").value;
    document.getElementById("message2").value = cipher.encode(offset,string);
}, true);  

//recoger datos para descifrar//
document.getElementById("decode").addEventListener("click",function valores2() {
    const string = document.getElementById("message2").value;
    const offset = document.getElementById("offset").value;
    document.getElementById("message2").value = cipher.decode(offset,string);
}, true);

let planetas = ["mercury", "venus", "earth"];
    for(let i = 0; i<3; i++){

        console.log("hola, soy",planetas[i])
    }
