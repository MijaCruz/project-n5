tecs = prompt("Ingrese el Nombre del Alumno");

n1 = parseInt(prompt("Ingrese la primera nota"));
n2 = parseInt(prompt("Ingrese la segunda nota"));
n3 = parseInt(prompt("Ingrese la tercera nota"));
n4 = parseInt(prompt("Ingrese la cuarta nota"));

neim = tecs
average = (n1+n2+n3+n4)/4

document.write("El alumno " + neim + "</br>");
document.write(" tiene como promedio Final la nota de " + average + " pts.");
