//Seleccón de firma =============================================================
const $select = document.getElementById('selectFirma');
const $firma = document.getElementById('firma');

$select.addEventListener('change', () => {
$firma.setAttribute('src', `/assets/firmas/firma-${$select.value}.png`);
});

//Imprimir PDF =============================================================
var cliente = document.getElementById('cliente-input');
var inicio = document.getElementById('fecha-inicio-input');
var equipo = document.getElementById('equipo-input');

function generatePDF() {
var opt = {
margin:       0,
filename:     cliente.value+" "+"["+equipo.value+"]"+" "+inicio.value,
image:        { type: 'jpeg', quality: 1 },
jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' }
      };
	// Choose the element that our invoice is rendered in.
	const element = document.getElementById('invoice');
      // New Promise-based usage:
      html2pdf().set(opt).from(element).save();
};

//Bóton toggle =============================================================

function mostrarForm() {
      var invoce = document.getElementById("invoce");
      invoce.className -= " block";
      invoce.className += " block";
    }