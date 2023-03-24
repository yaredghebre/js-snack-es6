// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// ARRAY SQUADRE
const teams = [
    {
        nome: "Roma",
        punti: 0,
        falli: 0
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli: 0
    },
    {
        nome: "Inter",
        punti: 0,
        falli: 0
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0
    },
    {
        nome: "Lazio",
        punti: 0,
        falli: 0
    },
    {
        nome: "Fiorentina",
        punti: 0,
        falli: 0
    },
]

// RICHIAMO LE FUNZIONI
generateRndPoints();
generateRndFouls();

console.log(teams);

// DESTRUCTURING E STAMPA
const teamsCopy = teams.map(function(team) {
    const {nome, punti} = team;
    return {nome, punti};
});

console.log(teamsCopy);

// FUNZIONI PER CREARE NUMERI RANDOM
function generateRndPoints() {
    for (let i = 0; i < teams.length; i++) {
        const generateRndPoints = Math.floor(Math.random() * 51);
        teams[i].punti = generateRndPoints;
    }
}

function generateRndFouls() {
    for (let i = 0; i < teams.length; i++) {
        const generateRndFouls = Math.floor(Math.random() * 21);
        teams[i].falli = generateRndFouls;
    }
}


