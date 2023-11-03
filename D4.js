/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* 
function area(base,altezza){
    let vol = base*altezza;
    return vol;
}
let l1 = parseFloat(prompt("inserisci la lunghezza della base (cm)"))
let l2 = parseFloat(prompt("inserisci la lunghezza dell'altezza (cm)"))
const bxh = area(l1,l2)
window.alert(`l'area del rettangolo e' ${bxh} cm^2`)
*/

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* 
function crazySum(n1,n2){
    let somma = 0
    let ris
        if (n1===n2)
        {
                somma =  (n1+n2)*3
                ris = `i due numeri sono uguali quindi la loro somma moltiplicata per 3 e' ${somma}`
        }else
        {
            somma = (n1+n2)
            ris = `i due numeri sono diversi, la loro somma e' ${somma}`
        }
    return ris
}
let num1 = parseInt(prompt("inserisci un numero"))
let num2 = parseInt(prompt("inserisci un secondo numero"))
const tot = crazySum(num1,num2)
window.alert(tot) */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/


/* 
function crazyDiff(n1,n2){
    let differenza = 0
    let risultati

if(n1>n2)
{
    differenza= (n1-n2) * 3
    differenza= Math.abs(differenza)
    ris = `il numero e' maggiore di ${n2} quindi la loro differenza moltiplicata per 3 e' ${differenza}`
}else {
    differenza= n1-n2
    differenza= Math.abs(differenza)
    ris = `il numero e' mimore di ${n2} quindi la loro differenza e' ${differenza}`
}
return ris
}
const num19 = 19
let num1 = parseInt(prompt("inserisci un numero"))
const diff = crazyDiff(num1,num19)
window.alert(diff) */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/


/* 
function boundary(n1){
    const num400 = 400
    const num19 = 19
    const num101 = 101
    let bool
    if(n1 > num19 && n1 < num101){
        bool = "true"
    }else if (n1 === num400){
        bool = "true"
    }else{
        bool = "false"
    }
    return bool
}

let num1 = parseInt(prompt("inserisci un numero"))
const confronto = boundary(num1)
window.alert(confronto)
*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* 
function epify(stringa1){
    let frase = "EPICODE"
    let ris
    frase = frase.toLowerCase()
    console.log(frase)
    if(stringa1 !== frase){
        ris = `${frase} ${stringa1}`
    }else
    {
    ris = stringa1
    }
    return ris
}
let frase = prompt("inserisci una stringa")
const out = epify(frase)
window.alert(out)
 */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* 
function check3and7(num1){
const num7 = 7
const num3 = 3
let mod = num1%num3
let mod2 = num1%num7
let ris, ris2
    if(mod != 0){
        ris = `il tuo numero non e' divisibile per ${num3} `
    } else{
        ris = `il tuo numero e' divisibile per ${num3} `
    }

    if(mod2 != 0){
        ris2 = `il tuo numero non e' divisibile per ${num7} `
    } else{
        ris2 = `il tuo numero e' divisibile per ${num7} `
    }
ris = `${ris} e ${ris2}`    
return ris
}

let num1 = parseInt(prompt("inserisci un numero che secondo te e' multiplo di 3 o di 7"))
const mult = check3and7(num1)
window.alert(mult)
 */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* 
function reverseString(f1){
    return f1.split("").reverse().join("")
}
let frase = prompt("inserisci una stringa")
const out = reverseString(frase)
window.alert(out)
 */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* 
function upperFirst(f1){
    const arr = f1.split(" ")
    for (let i=0; i<arr.length ; i++) {
        arr[i]= arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const arrtostr = arr.join(" ")
return arrtostr
}
let frase = prompt("inserisci una stringa")
const out = upperFirst(frase)
window.alert(out)
 */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* 
function cutString(f1){
return f1.slice(1,-1)
}
let frase = prompt("inserisci una stringa")
const out = cutString(frase)
window.alert(out)
 */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* 
function giveMeRandom(n1){
let arr = [n1]
for (let i=0; i < n1 ; i++)
{
 arr[i]= Math.floor(Math.random()*11)
}
return arr  
}
let num1 = parseInt(prompt("inserisci un numero tra 1 e 10"))
const mult = giveMeRandom(num1)
window.alert(mult)
 */
