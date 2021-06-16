// Snack 1

// -------------------------------------------------------------
// Creare un oggetto palla che abbia le seguenti proprietà.
// Nome = palla
// Peso = 10

var palla = {
    nome: 'palla',
    peso: 10
}

console.log(palla);


// -------------------------------------------------------------
// Attraverso un prompt dare la possibilità all’utente di 
// modificare il peso della palla.

palla.peso = parseInt(prompt('inserisci il peso della palla'));

console.log(palla);


// -------------------------------------------------------------
// Inserire  l’oggetto palla in una array var giochi = [];

var giochi = [];
giochi.push(palla);

console.log(giochi);


// -------------------------------------------------------------
// Permettere all’utente di inserire un nuovo oggetto all’interno dell’array giochi

var newToy = prompt('Inserisci un nuovo gioco');
var newWeight = parseInt(prompt('Inserisci il peso del gioco'));
giochi.push({
    nome: newToy,
    peso: newWeight,
})

console.log(giochi);





