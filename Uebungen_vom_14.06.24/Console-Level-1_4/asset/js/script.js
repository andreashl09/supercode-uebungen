// Verschiedene Pop-Up Fenster nacheinander geöffnet
window.alert("Hallo Welt");
window.prompt("Bitte geben Sie einen Namen ein.");
window.prompt("Bitte geben Sie einen Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner zu?");

// Abfrage wird einer Variablen gespeichert
let alter = window.prompt("Gib mir bitte dein Alter: ");
console.log(alter);

// Variablen berechnen und mit window.alert im Pop-Up Fenster ausgeben
let b = 5;
let a = b;
a = a - 3;
window.alert(a);

// 
let mann = "Robert Wadlow ist der größte Mann der Welt: ";
let groesse = "2,72m";
window.confirm(mann + groesse);