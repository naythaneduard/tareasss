function calcularUtilidad() {
      let salario = parseFloat(document.getElementById("salario").value);
      let antiguedad = parseFloat(document.getElementById("antiguedad").value);
      let porcentaje = 0;

      if (antiguedad < 1) {
        porcentaje = 0.05; 
      } else if (antiguedad < 2) {
        porcentaje = 0.07; 
      } else if (antiguedad < 5) {
        porcentaje = 0.10; 
      } else if (antiguedad < 10) {
        porcentaje = 0.15; 
      } else {
        porcentaje = 0.20; 
      }

      let utilidad = salario * porcentaje;

      document.getElementById("resultado").textContent = 
        "La utilidad anual es: $" + utilidad.toFixed(2)
    }