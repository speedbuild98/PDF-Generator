  
//Imprimir PDF =============================================================

function generatePDF() {
var cliente = document.getElementById('cliente-input');
var inicio = document.getElementById('fecha-inicio-input');
var marca = document.getElementById('marca-input');
const usuarios = ["41095530", "41095531", "41095532" ,"41095533"];
var $firma = document.getElementById('firma');
var $select = prompt("Escribe tu DNI");

if (usuarios.includes($select)){
      $firma.setAttribute('src', `/assets/firmas/${$select}.png`);
} else {
      return alert("USUARIO INCORRECTO");
}

var nombrePdf = cliente.value + " " + "[" + marca.value + "]" + " " + inicio.value;

var opt = {
margin:       0,
filename:     nombrePdf,
image:        { type: 'jpeg', quality: 1 },
jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
      };
	// Choose the element that our invoice is rendered in.
	const element = document.getElementById('invoice');
      // New Promise-based usage:
      html2pdf().set(opt).from(element).save();
};

//Menú ===========================================================


// set the target element that will be collapsed or expanded (eg. navbar menu)
const targetEl = document.getElementById('mobile-menu-4');

// optionally set a trigger element (eg. a button, hamburger icon)
const triggerEl = document.getElementById('button-menu');

function mostrarMenu(){
      targetEl.classList.toggle("hidden");
}

//Botón Test ===========================================================