window.onload = function (){
/*EDADES Y ETAPAS
Crea una web que pida, por medio de un prompt(), la edad de una persona, en años. Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: toddler, preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.
Si la persona ingresa un dato que no es un número entero (por ejemplo: un string, un número decimal, un cero, o un campo vacío), la web debe dar un mensaje de error. Revisa este link que tiene un par de tips interesantes relacionados a este proyecto.*/
/* baby:0-12 meses / Toddler: 1-3 yrs / Preschool: 3-5 yrs /Gradeschooler: 5-12 yrs / Teen: 12-18 yrs/ Young Adult: 18-21 yrs /  */
const age= prompt ("¿Qué edad tienes?")

if (age === "" || age % 1 !== 0 || age === 0 || age === NaN || age === null)
alert("El ingreso no es válido, Debes ingresar un número entero");

/* baby:0-12 meses */

}