import cipher from './cipher.js';
//convertir las leras en mayusculas//
document.getElementById("message").addEventListener("keyup", function name() {
    this.value = this.value.toUpperCase();
}, true);
//recoger datos para cifrar//

document.getElementById("encode").addEventListener("click", function valores() {
    const string = document.getElementById("message").value;
    const offset = document.getElementById("offset").value;
    document.getElementById("message2").value = cipher.encode(string,offset);
}, true);  

//recoger datos para descifrar//
document.getElementById("decode").addEventListener("click",function valores2() {
    const string = document.getElementById("message2").value;
    const offset = document.getElementById("offset").value;
    document.getElementById("message2").value = cipher.decode(string,offset);
}, true);



