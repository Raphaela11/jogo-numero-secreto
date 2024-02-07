let listaDeNumerosSorteados=[];
let numeroLimite =10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function textoNaTela(tag, Texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = Texto
    responsiveVoice.speak(Texto,'Brazilian Portuguese Female',{rate:1.1});
}

function textoInicio() {
    textoNaTela('h1' , 'Jogo do numero secreto');
    textoNaTela('p',`escolha um numero entre 1 e ${numeroLimite}`);
}

textoInicio();

function verificarChute() {
    let chute= document.querySelector('input').value;
    if (chute==numeroSecreto) {
        textoNaTela('h1','você acertou');
        let palavraTentativa = tentativas>1? ' tentativas' : ' tentativa'
        let mensagemTentativas = `Você descobriu o numero Secreto com ${tentativas} ${palavraTentativa}`;
        textoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute>numeroSecreto) {
            textoNaTela('p','O numero secreto é menor que '+chute);
        }  else {
            textoNaTela('p','O numero secreto é maior que '+chute);
        }
        tentativas++;
        limparCampo();
    }
    // let chute= document.querySelector('input').value;
    // if (chute==numeroSecreto) {
    //     let palavraTentativa = tentativas>1? ' tentativas' : ' tentativa'
    //     textoNaTela('h1','você acertou')
    //     textoNaTela('p','Você descobriu o numero Secreto com '+tentativas +palavraTentativa);
    //     document.getElementById('reiniciar').removeAttribute('disabled');
    // }else {
    //     if (chute>numeroSecreto) {
    //         textoNaTela('p','O numro secreto é menor que '+chute);
    //     } else {
    //         textoNaTela('p','O numro secreto é maior que '+chute);
    //     }
    //     tentativas++;
    //     limparCampo();
    // }
}   

function numeroAleatorio() {
    let numeroEscolhido=parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista= listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNalista== numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    tentativas = 1;
    limparCampo();
    textoInicio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}