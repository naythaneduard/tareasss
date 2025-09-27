 document.addEventListener('DOMContentLoaded', () => {
      const form = document.getElementById('formRegistro');
      const nombreInput = document.getElementById('nombre');
      const emailInput = document.getElementById('email');
      const comentariosInput = document.getElementById('comentarios');
      const passwordInput = document.getElementById('password');
      const condicionesInput = document.getElementById('condiciones');

      const errNombre = document.getElementById('errorNombre');
      const errEmail = document.getElementById('errorEmail');
      const errComentarios = document.getElementById('errorComentarios');
      const errPassword = document.getElementById('errorPassword');
      const errCond = document.getElementById('errorCondiciones');

      
      function setValidity(input, errorEl, mensaje) {
        if (mensaje) {
          errorEl.textContent = mensaje;
          input.classList.add('invalido');
          input.classList.remove('valido');
          return false;
        } else {
          errorEl.textContent = '';
          input.classList.remove('invalido');
          input.classList.add('valido');
          return true;
        }
      }

      
      function validarNombre() {
        const v = nombreInput.value.trim();
        
        const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ'´\- ]+$/;
        if (v === '') return setValidity(nombreInput, errNombre, 'El nombre es obligatorio.');
        if (!regex.test(v)) return setValidity(nombreInput, errNombre, 'El nombre solo puede contener letras, espacios, guiones o apóstrofes.');
        return setValidity(nombreInput, errNombre, '');
      }

      
      function validarEmail() {
        const v = emailInput.value.trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (v === '') return setValidity(emailInput, errEmail, 'El email es obligatorio.');
        if (!regex.test(v)) return setValidity(emailInput, errEmail, 'Introduce un email válido.');
        return setValidity(emailInput, errEmail, '');
      }

      
      function validarComentarios() {
        const v = comentariosInput.value.trim();
        if (v === '') return setValidity(comentariosInput, errComentarios, 'Los comentarios son obligatorios.');
        if (v.length > 50) return setValidity(comentariosInput, errComentarios, 'Máximo 50 caracteres.');
        return setValidity(comentariosInput, errComentarios, '');
      }

      
      function validarPassword() {
        const v = passwordInput.value;
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
        if (v === '') return setValidity(passwordInput, errPassword, 'La contraseña es obligatoria.');
        if (!regex.test(v)) return setValidity(passwordInput, errPassword, 'Mínimo 6 caracteres, una minúscula, una mayúscula y un número.');
        return setValidity(passwordInput, errPassword, '');
      }

      
      function validarCondiciones() {
        if (!condicionesInput.checked) {
          errCond.textContent = 'Debes aceptar las condiciones.';
          return false;
        } else {
          errCond.textContent = '';
          return true;
        }
      }

      
      nombreInput.addEventListener('blur', validarNombre);
      nombreInput.addEventListener('input', validarNombre);

      emailInput.addEventListener('blur', validarEmail);
      emailInput.addEventListener('input', validarEmail);

      comentariosInput.addEventListener('blur', validarComentarios);
      comentariosInput.addEventListener('input', validarComentarios);

      passwordInput.addEventListener('blur', validarPassword);
      passwordInput.addEventListener('input', validarPassword);

      condicionesInput.addEventListener('change', validarCondiciones);

      
      form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const ok = validarNombre() & validarEmail() & validarComentarios() & validarPassword() & validarCondiciones();
        
        if (!ok) {
          alert('Corrige los errores antes de enviar el formulario.');
          
          const firstInvalid = form.querySelector('.invalido');
          if (firstInvalid) firstInvalid.focus();
          return;
        }

        
        alert('Formulario válido.');
        
      });
    });