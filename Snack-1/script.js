// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bikes = [
    {
        nome: "Garelli",
        peso: 9
    },
    {
        nome: "Cipollini",
        peso: 7
    },
    {
        nome: "Lombardo",
        peso: 11
    },
    {
        nome: "Cinelli",
        peso: 6
    },
    {
        nome: "Bianchi",
        peso: 5
    }
]
console.log(bikes);

let lightBike = bikes[0];

for (let i = 0; i < bikes.length; i++) {
    if(bikes[i].peso < lightBike.peso) {
        lightBike = bikes[i];
    }
};

// DESTRUCTURING e TEMPLATE LITERAL
const {nome, peso} = lightBike;
console.log(`La bici più leggera è la ${nome} e il suo peso è ${peso}kg`);

console.log(lightBike);
   