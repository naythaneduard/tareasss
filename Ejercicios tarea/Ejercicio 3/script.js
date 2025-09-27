function calcular() {
      let desc = parseFloat(document.getElementById("descuento").value);
    let precio = desc * 0.15; 
        let total = desc - precio;
      
        if (isNaN(desc) || desc <= 0) {
            document.getElementById("resultado").innerText = "Por favor ingrese una cantidad válida";
            return;
        } 
        
        else {
   document.getElementById("resultado").innerText ="Precio anterior: " + desc.toFixed(2) + " Descuento (15%): " + precio + " | Total final: " + total.toFixed(2)
            return;
        }
     
            }