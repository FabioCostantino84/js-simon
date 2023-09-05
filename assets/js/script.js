/* 
Traccia

Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/

// data ora minuti e secondi di quando ci sarà la correzione
let countDownDate = new Date("Sep 6, 2023 09:30:00").getTime();
console.log(countDownDate);

// data corrente al momento dell caricamento della pagina
let currentDate = new Date().getTime();
console.log(currentDate);

let remainingTime = countDownDate - currentDate;
console.log(remainingTime);