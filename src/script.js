let nome = "Jhon";
let xp = 4300;


let vitoria = 30;
let derrota = 15;

let saldo = calculaSaldo(vitoria, derrota);
let nivel = level(saldo);

console.log(`O Herói tem saldo de ${saldo} está no nível ${nivel}`);

function level(saldo){
    if (saldo <= 10) {
        return "ferro";
    }
    else if (saldo >= 11 && saldo <= 20) {
        return "bronze";
    }
    else if (saldo >= 21 && saldo <= 50) {
        return "prata";
    }
    else if (saldo >= 51 && saldo <= 80) {
        return "ouro";
    }
    else if (saldo >= 81 && saldo <= 90) {
        return "diamante";
    }
    else if (saldo >= 91 && saldo <= 100) {
        return "lendário";
    }
    else if (saldo >= 101) {
        return "imortal";
    }
}

function calculaSaldo(vitoria, derrota)
{
    return vitoria - derrota;
}