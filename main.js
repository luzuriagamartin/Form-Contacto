
/* Seleccionar plan */
const preciosSeguros = () => {
  if (document.getElementById('select').value === 'basico') {
    document.getElementById('precio').innerHTML = 'El precio del plan básico es de 500 pesos.';

  } else if (document.getElementById('select').value === 'intermedio') {
    document.getElementById('precio').innerHTML = 'El precio del plan intermedio es de 1000 pesos.';

  } else if (document.getElementById('select').value === 'premium') {
    document.getElementById('precio').innerHTML = 'El precio del plan premium es de 1500 pesos.';

  } else if (document.getElementById('select').value === '') {
    document.getElementById('precio').innerHTML = ' ';
  }
}