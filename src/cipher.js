const cipher = {

//cifrar//
    encode (string,offset) {
          
      let resultado = "";
      const cadena =  string.split("");
      const letras=" ABCDEFGHIJKLMNOPQRSTUVWXYZ";   //cadena para las letras//
      offset = (offset % 26 + 26) % 26; //doble modulo para el desplazamiento//
     
      if(string){ //para asegurarnos que lo que se ingrese sean solo letras//
          for(let i =0; i<cadena.length; i++){
               
            if (letras.indexOf(cadena[i])!== -1){
                let posicion = ((letras.indexOf(cadena[i])+offset)%26);
                resultado += letras[posicion]; 
            }
            else {
                resultado += string[i];
            }
          }
          return resultado;
      }
  },
//descifrar//
    decode (string, offset) {
              if (!string)
              return"";
               const letras= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
               offset= (offset % 26 - 26) % 26;
               return string.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-offset) %26]);
            }
};

export default cipher;
