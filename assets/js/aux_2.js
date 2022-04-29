
function obtenerPromedio(){
	n1 = document.getElementById('nota1').value;
	n2 = document.getElementById('nota2').value;
	n3 = document.getElementById('nota3').value;
	n4 = document.getElementById('nota4').value;


	average = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4))/4;

	console.log(average);
	document.getElementById('promedio').innerHTML = "PROMEDIO: " + average;
}