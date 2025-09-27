const depuracionForm = document.getElementById('depuracion');
const codigoiTextarea = document.getElementById('codigoi');
const codigofPre = document.getElementById('codigof');

depuracionForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const codigoi = codigoiTextarea.value;
    const cambio = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;
    const codigof = codigoi.replace(cambio, '');
    codigofPre.textContent = codigof;
});