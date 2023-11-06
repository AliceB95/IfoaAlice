/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = function (l1,l2)
{
    return= l1*l2
}
 const result= area(3 , 4)
 console.log (result)
 
 /* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
const crazySum= function (numero1 , numero2) {
    if (numero1===numero2){
        return (numero1+numero2)*3
        }
    else {
        return numero1+numero2
    }
}
console.log (crazySum(3,3))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const crazyDiff=function (numGen)
{
    if (numGen>19)
    {return (numGen-19)*3}
    else { return numGen-19
    }
}
console.log (crazyDiff(3))

ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.

 const boundary= function (n)
 {
    if (n>20 && n<=100 || n===400)
    {return: true}
    else {return false}
 }

 /* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify= function (str)
{
    if (str.startsWith('EPICODE'))
    return 

    
}