 
const cipher = {
  /*cifrar */
  encode: (offset, string) => {
/*damos un error cuando el valor para el desplazamiento es 0 o no se ingreso nada*/
    if (offset === null || offset === 0){
      throw new TypeError();
    }

  
    let cifra = parseInt(offset); /* decimales*/

    for (let i = 0; i < string.length; i++) { /*iterando*/
      let codigoAscii = string.charCodeAt(i); /*devolvemos el valor segun el indice(i)*/ 
      let resultado = "";   
      if (codigoAscii >= 65 && codigoAscii <= 90) { /*definimos el alcance de let codigo ascii del 65 al 90 que representa el alfabeto de A-Z*/
        resultado += String.fromCharCode( /*devolve la cadena */
          ((codigoAscii - 65 + cifra) % 26) + 65
        );
      }

      else { 
        resultado += string[i] 
      }
    }
    return resultado;
  },

  /*descifrar */
  decode: (offset, string) => {
   
    if (offset === null || offset === 0){
      throw new TypeError();
    }

    let resultado = "";
    let cifra = parseInt(offset);

    for (let i = 0; i < string.length; i++) {
      let codigoAscii = string.charCodeAt(i);
      if (codigoAscii >= 65 && codigoAscii <= 90) {
        resultado += String.fromCharCode(
          ((codigoAscii - 90 - cifra) % 26) + 90
        );
      } 
      else { 
      resultado += string[i] 
    }
  }
    return resultado;
  },
};

export default cipher;
