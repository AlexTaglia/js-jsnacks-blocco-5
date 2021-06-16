// Snack 2

// -------------------------------------------------------------
// Creare un oggetto che rappresenti un triangolo rettangolo, 
// con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log

var triangolo = {
    base: 10,
    altezza: 10
}

var ipotenusa = Math.sqrt(Math.pow(triangolo.base, 2) + Math.pow(triangolo.altezza, 2));
console.log(ipotenusa);

var area = triangolo.base * triangolo.altezza / 2;
console.log('l\'area del triangolo è: ' + area);

var perimentro = triangolo.base + triangolo.altezza + ipotenusa;
console.log('il perimetro del triangolo è: ' + perimentro)
