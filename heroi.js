const meuHeroi = {
    nome: 'Lucalsa',
    nivel: 12500
};

function classificadorDeHeroi(){
    if (meuHeroi.nivel < 1000 ){
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Ferro`)
    } else if (meuHeroi.nivel >= 1001 && meuHeroi.nivel <= 2000){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Bronze`)
    } else if (meuHeroi.nivel >= 2001 && meuHeroi.nivel <= 5000){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Prata`)
    } else if (meuHeroi.nivel >= 5001 && meuHeroi.nivel <= 7000){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Ouro`)
    } else if (meuHeroi.nivel >= 7001 && meuHeroi.nivel <= 8000){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Platina`)
    } else if (meuHeroi.nivel >= 8001 && meuHeroi.nivel <= 9000){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Ascendente`)
    } else if (meuHeroi.nivel >= 9001 && meuHeroi.nivel <= 10000){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Imortal`)
    } else if (meuHeroi.nivel >= 10001){ 
        console.log(`O Herói de nome ${meuHeroi.nome} está no nível de Radiante`)
    } 
}

classificadorDeHeroi();

/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante*/