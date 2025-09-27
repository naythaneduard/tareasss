const palabrasForm = document.getElementById('palabras');
const textoInput = document.getElementById('texto');
const numerosSpan = document.getElementById('numeros');

const diccionario = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];

palabrasForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const palabras = textoInput.value.split(',');

  const transformacion = palabras.map(palabra => {
    return diccionario.indexOf(palabra.trim());
  });

  numerosSpan.textContent = transformacion.join(', ');
});