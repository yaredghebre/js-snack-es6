// Snack Bonus
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.
// es: 
// const numbersArray = [23, 14, 6, 8, 10];
// const newArray = getSubArray(numbersArray, 1, 3) ---> [14, 6, 8]

const numbers = [23, 14, 6, 8, 10];

const newNumbers = selectNumbers(numbers);
console.log(newNumbers);

// FUNZIONE
function selectNumbers (numbersArray) {
    return numbersArray.filter((item, index) => index >= 1 && index <= 3);
}

