function animation1(){
    const numeroDestino = $('#numero_do_cliente').text()
    const audio = document.getElementById('audio_principal');

    audio.addEventListener('timeupdate', function exibirLegendas(){
    const tempoAtual = audio.currentTime;

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

        if(tempoAtual >= 61.0 && tempoAtual <= 61.5){
            $('#paragrafo1_animate').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 62.0 && tempoAtual <= 62.5){
            $('#paragrafo2_animate').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 64.0 && tempoAtual <= 64.5){
            $('#paragrafo3_animate').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 67.0 && tempoAtual <= 67.5){
            $('#paragrafo4_animate').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 70.0 && tempoAtual <= 70.5){
            $('#paragrafo5_animate').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 75.0 && tempoAtual <= 75.5){
            $('#paragrafo1_animate').animate({
                opacity: '0'
            }, 600)

            $('#paragrafo2_animate').animate({
                opacity: '0'
            }, 600)

            $('#paragrafo3_animate').animate({
                opacity: '0'
            }, 600)

            $('#paragrafo4_animate').animate({
                opacity: '0'
            }, 600)

            $('#paragrafo5_animate').animate({
                opacity: '0'
            }, 600)
        }

        if(tempoAtual >= 81.0 && tempoAtual <= 81.5){
            $('#num_dest_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 84.0 && tempoAtual <= 84.5){
            $('#num_dest_anima').animate({
                opacity: '0'
            }, 600)
        }

        if(tempoAtual >= 85.0 && tempoAtual <= 85.5){
            $('#calcula_num_dest_anima').animate({
                opacity: '1'
            }, 600)
        }

        if(tempoAtual >= 115.0 && tempoAtual <= 115.5){
            $('#calcula_num_dest_anima').animate({
                opacity: '0'
            }, 600)
        }

        if(tempoAtual >= 117.0 && tempoAtual <= 117.5){
            $('#calcula_num_dest_anima').animate({
                opacity: '1'
            }, 600)

            $('#calcula_num_dest_anima h3').text("Seu numero do destino é:")

            $('#dia_calcula_card').css('opacity', '0');
            $('#ano1_calcula_card').css('opacity', '0');
            $('#ano2_calcula_card').css('opacity', '0');

            $('#mes_calcula_card').css('margin-right', '-134px');
            $('#mes_calcula_card .mes1').text('');
            $('#mes_calcula_card .mes2').text($('#numero_do_cliente').text());
            $('#mes_calcula_card .mes2').css('margin-left', '8px');
            $('#mes_calcula_card .mes2').css('margin-top', '51px');
        }

        if(tempoAtual >= 178.0 && tempoAtual <= 178.5){
            $('#calcula_num_dest_anima').animate({
                opacity: '0'
            }, 600)
        }

        if(tempoAtual >= 179.0 && tempoAtual <= 179.5){
            $('#num_dest_anima').animate({
                opacity: '1'
            }, 600)

            $('#num_dest_anima img').attr('src', 'img/card-numero-expressao.png')
        }

        if(tempoAtual >= 207.0 && tempoAtual <= 207.5){
            $('#num_dest_anima').animate({
                opacity: '0'
            }, 600)
        }

        if(tempoAtual >= 209.0 && tempoAtual <= 209.5){
            $('#primeira_anima img').attr('src', 'img/tabela.png')
            $('#primeira_anima h3').css('color', 'rgba(255, 217, 0, 0)')
            
            $('#primeira_anima').animate({
                opacity: '1'
            }, 500)

            
        }

        if(tempoAtual >= 247.0 && tempoAtual <= 247.5){
            $('#primeira_anima').animate({
                opacity: '0'
            }, 500)
        }

        if(tempoAtual >= 249.0 && tempoAtual <= 249.5){
            $('#container1').css('display', 'block');
            $('#container2').css('display', 'none');

            $('.title-form').text('Preencha o formulário abaixo para continuar');

            $('.input-dropdown').css('display', 'none');
            $('.2_cour_gender').css('display', 'block');
            $('.2_cour_full_name').css('display', 'block');

            $('.2_cour_gender p').text('Informe o seu genero');
            $('.2_cour_full_name p').text('Informe o seu primeiro nome');

            $('.input-p').text('');
        }

    })

    // switch(numeroDestino){
    //     case '09':
    //         console.log("O numero é o 09")
    //     break;

    //     case '01':
    //         console.log("O numero é o 01");
    //     break;
    // }
}