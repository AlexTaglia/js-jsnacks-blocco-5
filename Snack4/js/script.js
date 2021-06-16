// Snack 4

// -------------------------------------------------------------

/*
Creare un array di 3 studenti (3 oggetti in un array, quindi) con queste proprietà:
 nome
 cognome
 age
 descrizione
Per nome, cognome ed age assegnate direttamente nel codice i valori che volete.
ATTENZIONE: la descrizione invece sarà l’unico valore vuoto, stringa vuota.
{
  nome: ‘Pippo’,
  cognome: ‘Baudo’,
  age: 80,
  descrizione: ‘’
} 
Successivamente, con dei prompt chiediamo di volta in volta all’utente la descrizione di ciascun studente, 
salviamola quindi all’interno della sua proprietà.
Nota bene: questo naturalmente, in un ciclo, per ciascun studente. ;)
Stampiamo con un console.log il risultato di questo array di studenti aggiornato.

Bonus
Visualizzare nell’html questi dati in una forma tabellare.

*/


// Creo un array di 3 studenti con descrizione vuota
var studenti = [
    {
        nome: 'Mario',
        cognome: 'Rossi',
        age: 18,
        descrizione: ''
    },
    {
        nome: 'Carlo',
        cognome: 'Bianchi',
        age: 19,
        descrizione: ''
    },
    {
        nome: 'Luigi',
        cognome: 'Verdi',
        age: 18,
        descrizione: ''
    }
]

var outputTable = document.querySelector('#studenti-table');
var htmlTable = ''

htmlTable += '<thead>' + '<tr>';

for (var i = 0; i < studenti.length; i++){ //Navighiamo all'interno dell'array
    
    for (var key in studenti[i]){  //Navighiamo le chiavi a nell'oggetto per visualizzare le singole proprietà
        i++
        htmlTable += '<th>' + key + '</th>';
        console.log(key)
    }
}

htmlTable += '</tr>' + '</thead>' + '<tbody>';

// ciclo ogni studente per inserire con un prompt la descrizione
for (var i = 0; i < studenti.length; i++) {
    var descrizioneInput = prompt('Inserisci la descrizione di ' + studenti[i].nome + ' ' + studenti[i].cognome)
    studenti[i].descrizione = descrizioneInput;
    htmlTable += '<tr>';
    htmlTable += '<td>' + studenti[i].nome + '</td>';
    htmlTable += '<td>' + studenti[i].cognome + '</td>';
    htmlTable += '<td>' + studenti[i].age + '</td>';
    htmlTable += '<td>' + studenti[i].descrizione + '</td>';
    htmlTable += '</tr>';
}

outputTable.innerHTML = htmlTable + '</tbody>';

console.log(studenti);