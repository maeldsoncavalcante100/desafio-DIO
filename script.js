// minhas variáveis
let meuPirata = "Luffy do Chapéu de Palha"
let pontosXP = 900

// estrutura de decisão
let nivelPirataria;

if (pontosXP < 1000) {
    nivelPirataria = "Rei dos Piratas";
} else if (pontosXP >= 1001 && pontosXP <= 2000) {
    nivelPirataria = "Yonkou";
} else if (pontosXP >= 2001 && pontosXP <= 5000) {
    nivelPirataria = "Almirante";
} else if (pontosXP >= 5001 && pontosXP <= 7000) {
    nivelPirataria = "Gorosei";
} else if (pontosXP >= 7001 && pontosXP <= 8000) {
    nivelPirataria = "Deus do Sol";
} else if (pontosXP >= 8001 && pontosXP <= 9000) {
    nivelPirataria = "Pior Geração";
} else if (pontosXP >= 9001 && pontosXP <= 10000) {
    nivelPirataria = "Novato";
} else {
    nivelPirataria = "Começando";
}

// Saída
console.log(`O pirata de nome ${meuPirata} está no nível de ${nivelPirataria}!`)