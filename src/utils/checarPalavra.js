/*
    Autor: Nicolas Lopes

    A lógica do programa se baseia em para cada palavra do banco de palavras, eu primeiramente
    removo os acentos e coloco todas as letras da palavra em minúsculo para poder manipulá-las
    mais facilmente. Após isso crio um array contendo os caracteres da palavra e percorro as
    letras que foram passadas no input, verificando se na palavra possui essas letras, e se
    possui, eu armazeno ela em uma variavel auxiliar (que no final do laço formará ou nao
    uma palavra do banco de palavras) e removo essa letra do meu array de input, porem armazeno
    ela em outro array que formará o array de letras que nao foram usadas para formar a palavra.

    Depois desse laço eu verifico se a o tamanho da minha variável auxiliar é do mesmo tamanho
    da palvra que esta sendo percorrida. Se eles possuem o mesmo tamanho quer dizer que é possivel
    formar aquela palavra, então armazeno ela em um array de resultado.

    Depois que todas as palavras do banco forem percorridas eu percorro meu novo array de resultados
    para que eu possa calcular qual delas vale mais pontos atraves da funcao calcularPontuacao, que
    recebe uma palavra e para cada caractere da palavra ele soma a poontuação atribuída aquela
    letra e retorna a pontuação total.

    Após isso eu apenas retorno um array contendo a palvra, sua pontuação e as letras que não foram
    utilizadas para formar ela ou eu retorno que nao foi possível formar uma palavra.

*/

const bancoDePalavras = ["Abacaxi", "Manada", "mandar", "porta", "mesa", "Dado", "Mangas", "Já", "coisas", "radiografia",
    "matemática", "Drogas", "prédios", "implementação", "computador", "balão", "Xícara", "Tédio",
    "faixa", "Livro", "deixar", "superior", "Profissão", "Reunião", "Prédios", "Montanha", "Botânica",
    "Banheiro", "Caixas", "Xingamento", "Infestação", "Cupim", "Premiada", "empanada", "Ratos",
    "Ruído", "Antecedente", "Empresa", "Emissário", "Folga", "Fratura", "Goiaba", "Gratuito",
    "Hídrico", "Homem", "Jantar", "Jogos", "Montagem", "Manual", "Nuvem", "Neve", "Operação",
    "Ontem", "Pato", "Pé", "viagem", "Queijo", "Quarto", "Quintal", "Solto", "rota", "Selva",
    "Tatuagem", "Tigre", "Uva", "Último", "Vitupério", "Voltagem", "Zangado", "Zombaria", "Dor"];

function calcularPontuacao(palavra) {

    let valor = 0;
    const grupo1 = ['a', 'e', 'i', 'o', 'n', 'r', 't', 'l', 's', 'u'];
    const grupo2 = ['w', 'd', 'g'];
    const grupo3 = ['b', 'c', 'm', 'p'];
    const grupo4 = ['f', 'h', 'v'];
    const grupo8 = ['j', 'x'];

    palavra = palavra.split('');

    palavra.forEach(letra => {
        if (grupo1.includes(letra)) {
            valor += 1;
        } else if (grupo2.includes(letra)) {
            valor += 2;
        } else if (grupo3.includes(letra)) {
            valor += 3;
        } else if (grupo4.includes(letra)) {
            valor += 4;
        } else if (grupo8.includes(letra)) {
            valor += 8;
        } else {
            valor += 10;
        }
    })

    return valor;
}

function filtrarPalavras(letras) {
    let arrayResultado = [];
    let arrayResultadoAux = [];
    let pontuacao = 0;
    let palavraResultado;
    letras = letras.split('');

    if(letras == '') {
        return "input vazio.";
    }

    bancoDePalavras.forEach(palavra => {

        palavra = palavra.toLowerCase().normalize("NFD").replace(/[^a-zA-Zs]/g, "");
        let arrayPalavra = palavra.split('');
        let caracteresAux = [...letras];
        let palavraAux = '';

        for (let i = 0; i < arrayPalavra.length; i++) {
            if (caracteresAux.includes(arrayPalavra[i])) {
                palavraAux += arrayPalavra[i];
                caracteresAux.splice(caracteresAux.indexOf(arrayPalavra[i]), 1);
            } else {
                break;
            }
        }

        if (palavraAux.length == arrayPalavra.length) {
            arrayResultadoAux.push((palavraAux));
            let arrayPalavraSobras = [palavraAux, caracteresAux.join('')];
            arrayResultado.push(arrayPalavraSobras);
        }

    })


    if (typeof (arrayResultadoAux) !== 'undefined' && arrayResultadoAux.length > 0) {
        arrayResultadoAux.forEach(resultado => {

            if (calcularPontuacao(resultado) > pontuacao) {
                pontuacao = calcularPontuacao(resultado);
                palavraResultado = resultado;
            } else if (calcularPontuacao(resultado) == pontuacao) {
                if (resultado.length < palavraResultado.length) {
                    palavraResultado = resultado;
                } else {
                    resultado = resultado;
                }
            }

        })

        let letrasSobraram;
        for (let i = 0; i < arrayResultado.length; i++) {
            if (arrayResultado[i][0] == palavraResultado) {
                letrasSobraram = arrayResultado[i][1];
            }
        }

        let arrayFinal = [palavraResultado, pontuacao, letrasSobraram];

        return arrayFinal;

    } else {

        return "Nao foi possivel formar uma palavra.";

    }

}

export { calcularPontuacao, filtrarPalavras };

