`use strict`;


/*Il programma dovrà chiedere all'utente:
- i km che deve percorrere
- qunati anni ha*/

const numeriKm = parseInt(prompt (`Inserisci i km`));
const etaPasseggero = parseInt(prompt (`Inserisci la tua età`));
console.log (`I tuoi km: `, numeriKm);
console.log (`Età: `, etaPasseggero);

/*Una volta ricevute queste informazioni, va calcolato il prezzo totale del biglietto sulle seguenti regole:
- prezzo del biglietto è definito in base ai km (0,21€ al km)
- sconto 20% per i minorenni
- sconto 40% per gli over 65
il totale andrà scritto con due posizioni decimali*/


const price = (numeriKm * 0.21);

if (!isNaN(numeriKm) && !isNaN(etaPasseggero)) {

    if (etaPasseggero < 18) {
        let total = (price - (20 * price / 100)).toFixed(2);
        console.log(`Prezzo totale: `, total);
    } else if (etaPasseggero >= 65) {
        let total = (price - (40 * price / 100)).toFixed(2);
        console.log(`Prezzo totale: `, total);
    } else {
        let total = price.toFixed(2);
        console.log(`Prezzo totale: `, total);
    }
}

