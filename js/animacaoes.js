function animation1(){
    const numeroDestino = $('#numero_do_cliente').text()
    const audio = document.getElementById('audio_principal');

    audio.addEventListener('timeupdate', function exibirLegendas(){
    const tempoAtual = audio.currentTime;

    console.log(tempoAtual)

        $('#primeira_anima').animate({
            opacity: '1'
        }, 500)

        if(tempoAtual >= 5.0 && tempoAtual <= 5.5){
            $('#paragrafo1_animate').text('Numerologia').animate({
                opacity: '1',
                top: '40px'
            }, 600)
        } 

        if(tempoAtual >= 9.0 && tempoAtual <= 9.5){
            $('#paragrafo2_animate').text('Profundamente Reveladora!').animate({
                opacity: '1',
                top: '0px'
            }, 600)
        }

        if(tempoAtual >= 20.0 && tempoAtual <= 20.5){
            $('#paragrafo1_animate').text('Numerologia').animate({
                opacity: '0',
                top: '0px'
            }, 600)

            $('#paragrafo2_animate').text('Profundamente Reveladora!').animate({
                opacity: '0',
                top: '-34px'
            }, 600)
        }

        if(tempoAtual >= 23.0 && tempoAtual <= 23.5){
            $('#paragrafo1_animate').text('Tomar Decisões').animate({
                opacity: '1',
                top: '40px'
            }, 600)
        }

        if(tempoAtual >= 27.0 && tempoAtual <= 27.5){
            $('#paragrafo2_animate').text('Oportunidades Únicas').animate({
                opacity: '1',
                top: '0px'
            }, 600)
        }

    })

    switch(numeroDestino){
        case '09':
            console.log("O numero é o 09")
        break;

        case '01':
            console.log("O numero é o 01");
        break;
    }
}