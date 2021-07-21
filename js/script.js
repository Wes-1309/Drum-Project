//Eventos

document.body.addEventListener('keyup', (event) => {// Função para saber qual tecla foi clicada
    playSound(event.code.toLowerCase()); //Code mostra a tecla e o toLowerCase, transforma em minúscula, pois as ID's no HTML ficaram em minuscula
});

//Para o campo input
document.querySelector('.composer button').addEventListener('click', () => { //Função para pegar o que foi digitado
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split(''); //Vai gerar um array com cada string clicada.
        playComposition(songArray);
    }
});


//Funções

//Para quando clicar no botão
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);//Variável para pegar o som referente a tecla clicada.
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);//Varivél para identificar qual o elemento tem a data-key com a tecla criada.

    if(audioElement){
        audioElement.currentTime = 0; // Função para não precisar esperar o som acabar para tocar novamente em segudia.
        audioElement.play(); // Função para tocar o som.
    }

    if(keyElement){
        keyElement.classList.add('active'); // vai adicionar uma classe ao elemento

        setTimeout(() => {
            keyElement.classList.remove('active') // vai removar a classe inserida ao elemento após 300s.
        }, 300)
    }

}

//Para quando digitar a composição no campo input
function playComposition(songArray){ //Função para pegar o array criado e jogar na função playSound
    let wait = 0;
    
    for(let songItem of songArray){ // Função criada para dar  um intervalo de tempo de 250ms estre os click efetuados no inout
        setTimeout(() =>{
            playSound(`key${songItem}`);
        }, wait);

        wait += 250     
    }
}