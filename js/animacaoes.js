function animation1(){
    const numeroDestino = $('#numero_do_cliente').text()
    const audio = document.getElementById('audio_principal');

    audio.addEventListener('timeupdate', function exibirLegendas(){
    const tempoAtual = audio.currentTime;

    console.log(tempoAtual)
        if(tempoAtual >= 0.0 && tempoAtual <= 0.5){
            $('#primeira_anima').animate({
                opacity: '1'
            }, 500)
        }
        
        if(tempoAtual >= 5.0 && tempoAtual <= 5.5){
            $('#paragrafo1_animate_sep').text('Numerologia').animate({
                opacity: '1',
                top: '40px'
            }, 600)
        } 

        if(tempoAtual >= 9.0 && tempoAtual <= 9.5){
            $('#paragrafo2_animate_sep').text('Profundamente Reveladora!').animate({
                opacity: '1',
                top: '0px'
            }, 600)
        }

        if(tempoAtual >= 20.0 && tempoAtual <= 20.5){
            $('#paragrafo1_animate_sep').text('Numerologia').animate({
                opacity: '0',
                top: '0px'
            }, 600)

            $('#paragrafo2_animate_sep').text('Profundamente Reveladora!').animate({
                opacity: '0',
                top: '-34px'
            }, 600)
        }

        if(tempoAtual >= 23.0 && tempoAtual <= 23.5){
            $('#paragrafo1_animate_sep').text('Tomar Decisões').animate({
                opacity: '1',
                top: '40px'
            }, 600)
        }

        if(tempoAtual >= 27.0 && tempoAtual <= 27.5){
            $('#paragrafo2_animate_sep').text('Oportunidades Únicas').animate({
                opacity: '1',
                top: '0px'
            }, 600)
        }

        if(tempoAtual >= 40.0 && tempoAtual <= 40.5){
            $('#primeira_anima').animate({
                opacity: '0'
            }, 600)

            $('#paragrafo1_animate_sep').text('Tomar Decisões').animate({
                opacity: '0',
                top: '0px'
            }, 600)

            $('#paragrafo2_animate_sep').text('Oportunidades Únicas').animate({
                opacity: '0',
                top: '-34px'
            }, 600)
        }

        if(tempoAtual >= 47.0 && tempoAtual <= 47.5){
            $('#num_destino_card_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 48.0 && tempoAtual <= 48.5){
            $('#num_nasc_card_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 49.0 && tempoAtual <= 49.5){
            $('#num_alma_card_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 50.0 && tempoAtual <= 50.5){
            $('#num_exprecao_card_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 52.0 && tempoAtual <= 52.5){
            $('#num_personalidade_card_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 55.0 && tempoAtual <= 55.5){
            $('#num_destino_card_anima').animate({
                opacity: '0'
            }, 600)

            $('#num_nasc_card_anima').animate({
                opacity: '0'
            }, 600)

            $('#num_alma_card_anima').animate({
                opacity: '0'
            }, 600)

            $('#num_exprecao_card_anima').animate({
                opacity: '0'
            }, 600)

            $('#num_personalidade_card_anima').animate({
                opacity: '0'
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