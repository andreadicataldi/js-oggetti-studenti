// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
var student = {
  name: "Andrea",
  surname: "Di Cataldi",
  age: 34
}
for(var key in student) {
  console.log(student[key]);
}
//Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
var students = [
  {
    name: "Andrea",
    surname: "Di Cataldi",
    age: 34,
  },
  {
    name: "Raffaele",
    surname: "Baldassarre",
    age: 30,
  },
  {
    name: "Federico",
    surname: "Scarpati",
    age: 25,
  },
];

/* //Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
for (let i = 0; i < 3; i++) {
  var userStudent = {
    name = prompt("Inserisci il nome dello studente."),
    surname = prompt("Inserisci il cognome dello studente."),
    age = Number(prompt("Inserisci l'età dello studente."))
  }
  students.push(userStudent);
}
console.log(students);
 */