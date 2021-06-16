// Snack 3

// -------------------------------------------------------------
// Creare un array con tre numeri, calcolare la media di questi tre numeri.

var num = [20, 20, 20];
var total = 0;

for (var i = 0; i < num.length; i++ ){
    total += num[i];
}

console.log("Il totale è: " + total)
console.log("I numeri sono: " + num.length)
console.log("La media dei numeri è: " + total / num.length)



// -------------------------------------------------------------
/*
Costruiamo un array di tre giocatori di basket. 
Ogni giocatore avrà le seguenti proprietà:
 - nome
 - cognome
 - anno
 - punteggio
Calcolare il punteggio medio dei tre giocatori.
*/

var totalScore = 0; 

var players = [
    { 
        name: 'Michael', 
        lastName: 'Jordan', 
        year: 1963,  
        score: 32
    },
    { 
        name: 'James', 
        lastName: 'LeBron ', 
        year: 1984,  
        score: 35
    },
    { 
        name: 'Shaquille', 
        lastName: 'O\'Neal', 
        year: 1972,  
        score: 28
    }
]

for (var i = 0; i < players.length; i++ ){
    totalScore += players[i].score;
}

console.log('Somma dei punteggi dei giocatori: ' + totalScore);

var scoreAverage = totalScore / players.length;
console.log('La media del punteggio a partita dei ' + players.length + ' giocatori è ' + scoreAverage.toFixed(2));
