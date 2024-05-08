/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const x=30
const y=100

if(x>y){
  console.log("Il numero più grande è: " + x)
}else{
  console.log("Il numero più grande è: " + y)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const x2=10
if(x2!=5){
  console.log("Not Equal")
}else{
  console.log("Il numero è esattamente 5")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero = prompt("Inserisci un numero:");

if (numero % 5 === 0) {
    console.log(numero + " è divisibile per 5");
} else {
    console.log(numero + " non è divisibile per 5");
}

//Chiediamo all'utente di inserire un numero utilizzando la funzione prompt().
//Poi controlliamo se il numero è divisibile per 5 utilizzando l'operatore modulo (%).
//Se il resto della divisione del numero per 5 è zero, allora il numero è divisibile per 5 e stampiamo "divisibile per 5" in console. Altrimenti, stampiamo "non è divisibile per 5".

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero1=18
const numero2=10

if(numero1===8||numero2===8){
  console.log("Almeno uno dei due numeri è 8")
} else if(numero1+numero2===8||numero1-numero2===8||numero2-numero1===8){
  console.log("La loro somma/sottrazione è 8")
}else{
  console.log("Non è possibile proseguire perché ne uno dei due numeri è 8 e ne la loro somma/sottrazione è 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let carrello=30

if(carrello<50){
  const carrellobf=carrello-(carrello/100)*20
  carrello=carrellobf+10
  console.log("Il suo ordine è inferiore a 50€ pertanto verranno aggiunti 10€ per costi di spedizione per un totale di ",carrello,"€")
}else if(carrello>=50){
  carrello=carrello-(carrello/100)*20
  console.log("Il suo ordine è superiore a 50€ pertanto il totale sarà ",carrello,"€")
}

/* ESERCIZIO  6 --- VEDI ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const var1=110
const var2=12
const var3=36

const numberlist[var1,var2,var3]


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
