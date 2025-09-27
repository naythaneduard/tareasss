function calcular() {
        let capital = parseFloat(document.getElementById("capital").value);
        if (isNaN(capital) || capital <= 0) {
            document.getElementById("resultado").innerText = "Por favor ingrese un capital válido.";
            return;
        } 
        let ganancia = capital * 0.02; 
        let total = ganancia + capital

        document.getElementById("resultado").innerText =
                "Ganancia en un mes: " + ganancia.toFixed(2) + " | Total Final: " + total.toFixed(2)
            }