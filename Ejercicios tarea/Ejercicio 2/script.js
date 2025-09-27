 function ventas() {
                let venta = parseFloat(document.getElementById("ventas").value);
            let container = document.getElementById("Respuesta");
                container.innerHTML = " "

                if(isNaN(venta) || venta <= 0) {

                document.getElementById("Respuesta").innerText = "Por favor ingrese un valor válido.";
                        return;
                }
                else if (venta < 10){
                    container.innerHTML += '<input type="number" id="sueldoB" placeholder="Sueldo Base"><br>'
                    for (let i = 0; i < venta; i++) {

                    container.innerHTML += `
                    <input type="number" id="ventas${i}" placeholder="precio venta:  ${i + 1}" min= "0"><br> `;
                    
                    
                }
                
                container.innerHTML += '<button onclick="sueldo()">Dar ventas</button><br><br>'
                }   
                else {
                    container.innerHTML = 'No intente romper el codigo'
                }
            }
            function sueldo() {
                let venta = parseFloat(document.getElementById("ventas").value);
        let container = document.getElementById("Respuesta");   
        //soy gei
            let extra = 0;
            let suma = 0;
            let total = 0;
                for(let j = 0 ; j < venta ; j++) {
                let ven = parseFloat(document.getElementById(`ventas${j}`).value)
                    if ( ven < 0){
    
                        container.innerHTML += "no se pueden valores negativos"
                        return;
                    }
                    else {
                        extra = parseFloat(document.getElementById( `ventas${j}`).value);
                        suma += extra*0.1
                    }
                

                }
            total = parseFloat(document.getElementById( `sueldoB`).value) + suma;

            container.innerHTML +=  `<h2>La comision extra es: ${suma.toFixed(2)} | En total tu sueldo es ${total.toFixed(2)} </h2>`


            }