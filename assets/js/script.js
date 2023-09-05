/* 
Traccia

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/

// data ora minuti e secondi di quando ci sarà la correzione in millisecondi
let countDownDate = new Date("Sep 6, 2023 09:30:00").getTime();
console.log(countDownDate);

// data corrente al momento del caricamento della pagina in millisecondi
let currentDate = new Date().getTime();
console.log(currentDate);

// tempo rimasto alla lezione in millisecondi
let remainingTime = countDownDate - currentDate;
console.log(remainingTime);

// ore rimaste alla lezione
let remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
console.log(hours);

// minuti rimasti alla lezione
