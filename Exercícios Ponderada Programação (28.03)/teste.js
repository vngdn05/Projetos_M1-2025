// tempmaximo< '60 segundos' ou desvio orbital

// desacelerar < '10 metros/segundo^2' ou instabilidade no pouso 

// velocidade de nível seguro = 50 metros/segundo

// velocidade = velocidadeInicial - desaceleracao * tempo

function calculoSonda(desaceleracao, velocidadeInicial, velocidadeSegura, tempoMaximo, desaceleracaoMinima){

    if (velocidadeInicial <= velocidadeSegura) {
        console.log("A velocidade inicial é segura para o pouso.");
        return;
    }

    let tempoNecessario = (velocidadeInicial - velocidadeSegura) / desaceleracao;

    if (desaceleracao >= desaceleracaoMinima && tempoNecessario <= tempoMaximo) {
        console.log(`Tempo necessário para pouso seguro: ${tempoNecessario} segundos`);
    } else {
        console.log("Não foi possível fazer o pouso dentro dos limites estabelecidos");
    }
}


