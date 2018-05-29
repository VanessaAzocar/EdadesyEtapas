window.onload = function (){
/*EDADES Y ETAPAS
Crea una web que pida, por medio de un prompt(), la edad de una persona, en años. Dependiendo del número brindado, la web debe dar un mensaje que clasifica a la persona en: toddler, preschooler, gradeschooler, teenager, young adult and adult, según el criterio de esta página.
Si la persona ingresa un dato que no es un número entero (por ejemplo: un string, un número decimal, un cero, o un campo vacío), la web debe dar un mensaje de error. Revisa este link que tiene un par de tips interesantes relacionados a este proyecto.*/
/* baby:0-12 meses / Toddler: 1-3 yrs / Preschool: 3-5 yrs /Gradeschooler: 5-12 yrs / Teen: 12-18 yrs/ Young Adult: 18-21 yrs /  */
const age = prompt ("¿Qué edad tienes?");


if (age === "" || age === 0 || age === NaN || age === null) {
alert("El ingreso no es válido, Debes ingresar un número entero, en el caso de ser meses debes escribir, n° + la palabra meses");

/* baby:0-12 meses 
} else if (age === "0 mes" || "1 mes" ||"2 meses"|| "3 meses" || "4 meses"|| "5 meses" || "6 meses" || "7 meses" || "8 meses" || "9 meses" || "10 meses" || "11 meses" || "12 meses" ) {
alert ("You are Baby");*/

/* Toddler: 1-3 yrs */
} else if (age >= 1 && age < 3) {
alert ("You are Toddler");

/* Preschool: 3-5 yrs */
} else if (age >= 3 && age < 5) {
  alert ("You are Preschool");
  
/* Gradeschooler: 5-12 yrs */
} else if (age >= 5 && age < 12) {
  alert ("You are Gradeschooler");

/* Teen: 12-18 yrs */
} else if (age >= 12 && age < 18) {
  alert ("You are Teen");

/* Young Adult: 18-21 yrs */
} else if (age >= 18 && age <= 21){
  alert ("You are Adult");
}
}