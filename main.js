//Seleccón de firma =============================================================
const $select = document.getElementById('selectFirma');
const $firma = document.getElementById('firma');

$select.addEventListener('change', () => {
$firma.setAttribute('src', `/assets/firmas/firma-${$select.value}.png`);
});

//Imprimir PDF =============================================================
function generatePDF() {
const cliente = document.getElementById('cliente-input');
const inicio = document.getElementById('fecha-inicio-input');
const marca = document.getElementById('marca-input');
const nombrePdf = cliente.value + " " + "[" + marca.value + "]" + " " + inicio.value;

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

//Bóton toggle =============================================================
