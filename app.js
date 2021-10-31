const boton = document.querySelector('#cal');
const modal_container = document.querySelector('#modal_contenedor');
const cerrar = document.querySelector('#close');
const mostrar = document.querySelector('#resul');

boton.onclick = function () {
	var tarea = document.querySelector('#tarea').value;
	var expo = document.querySelector('#expo').value;
	var aporte = document.querySelector('#aporte').value;
	var examen = document.querySelector('#examen').value;

	var total = calcular(tarea, expo, aporte, examen);

	mostrar.innerText = 'Nota Primer Hemisemestre ' + total;

	modal_container.classList.add('show');

};

cerrar.addEventListener('click', () => {
	modal_container.classList.remove('show');
});

function calcular(tarea, expo, aporte, examen) {

	var nota1 = aporte * 0.30 + tarea * 0.15 + expo * 0.15 + examen * 0.40;

	return nota1;
}
