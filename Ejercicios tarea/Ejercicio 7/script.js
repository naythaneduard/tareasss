 function calcularPago() {
      let horas = parseInt(document.getElementById("horas").value);
      let pagoHora = parseFloat(document.getElementById("pagoHora").value);
      let pagoTotal = 0;

      if (horas <= 40) {
        pagoTotal = horas * pagoHora;
      } else {
        let horasNormales = 40;
        let horasExtras = horas - 40;

        if (horasExtras <= 8) {
          pagoTotal = (horasNormales * pagoHora) + (horasExtras * pagoHora * 2);
        } else {
          let extrasDobles = 8;
          let extrasTriples = horasExtras - 8;
          pagoTotal = (horasNormales * pagoHora) + (extrasDobles * pagoHora * 2) + (extrasTriples * pagoHora * 3);
        }
      }

      document.getElementById("resultado").textContent = 
        "El pago total es: $" + pagoTotal.toFixed(2);
    }