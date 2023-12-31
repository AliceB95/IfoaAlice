/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
Number: sono i numeri che puoi usare per fare dei calcoli
String: sono le parole o le frasi
Boolean: sono i valori che puoi usare per dire se qualcosa è vero o falso
Null: è un valore speciale che vuol dire che non c'è nessun valore. Puoi usare null per indicare che una variabile non ha un valore definito
Undefined: è un valore che vuol dire che una variabile non è stata inizializzata, cioè non le è stato assegnato nessun valore
Object: sono dei valori complessi che possono contenere più valori al loro interno, come delle scatole che hanno delle etichette con dei dati.
*/
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName ="Alice";
console.log (myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero12 =12;
let numero20 =20;
let somma = numero12+numero20;
console.log (somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName= "Bernardi";
console.log ("myName");

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero4 = 4;
let sottrazione= x -numero4;
console.log (sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John"
let verifica = name1===name2;
console.log(verifica);

let altraVerifica = name1.toLowerCase()===name2.toLowerCase();

