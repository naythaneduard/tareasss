function fecha() {
        let fecha = document.getElementById('fechaNacimiento').value;
        let hoy = new Date();
    let nacimiento = new Date(fecha);

    let años =  hoy.getFullYear() -nacimiento.getFullYear() 

    document.getElementById("resultado").innerText = "Tu edad es " + años;


}