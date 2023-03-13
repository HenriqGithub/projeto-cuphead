/* 
    OBJETIVO: Quando clicarmos no botão, mostrar a imagem de fundo correspondente.
*/

//Passo 1: pegar o elemento HTML dos botôes e imagens
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//  Passo 2: identificar o clique do usuário  
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrosel(botao);

        esconderImagemAtiva();

        mostrarImagemFundo(indice);
    })
})

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function mostrarImagemFundo(indice) {
    imagens[indice].classList.add('ativa');
}




