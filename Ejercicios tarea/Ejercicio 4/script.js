function calificacion() {
      let cali1 = parseFloat(document.getElementById("calificacion1").value);
let cali2 = parseFloat(document.getElementById("calificacion2").value);
let cali3 = parseFloat(document.getElementById("calificacion3").value);
let exa = parseFloat(document.getElementById("examen").value);
let fina = parseFloat(document.getElementById("final").value);

let calpar = ((cali1 + cali2 + cali3)*55)/30

let calexa = (exa*30)/10

let calfina = (fina*15)/10

let total = calpar + calexa + calfina;

 if (isNaN(cali1) || isNaN(cali2) || isNaN(cali3) || isNaN(exa) || isNaN(fina) || cali1 < 0 || cali2 < 0 || cali3 < 0 || exa < 0 || fina < 0) {
            document.getElementById("resultado").innerText = "Por favor ingrese un valor valido";
            return;
        }
        else if (cali1 > 10 || cali2 >10 || cali3 > 10 || exa > 10 || fina > 10) {

document.getElementById("resultado").innerText = "El valor solo puede esta entre 1 y 10";
            return;

        }
        else {
              document.getElementById("resultado").innerText = "La calificacion final es = " + total.toFixed(2    );
        }


}