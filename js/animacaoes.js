function animation1(){
    const audio_cour_um = document.getElementById('audio_principal');

    audio_cour_um.addEventListener('timeupdate', function exibirLegendas(){
        const tempoAtual_cour_um = audio_cour_um.currentTime;
        if($('#numeroExp_do_cliente').text() == ""){
            if(tempoAtual_cour_um >= 0.0 && tempoAtual_cour_um <= 0.5){
                $('#primeira_anima').animate({
                    opacity: '1'
                }, 500)
            }
            
            if(tempoAtual_cour_um >= 5.0 && tempoAtual_cour_um <= 5.5){
                $('#paragrafo1_animate_sep').text('Numerologia').animate({
                    opacity: '1',
                    top: '40px'
                }, 600)
            } 

            if(tempoAtual_cour_um >= 9.0 && tempoAtual_cour_um <= 9.5){
                $('#paragrafo2_animate_sep').text('Profundamente Reveladora!').animate({
                    opacity: '1',
                    top: '0px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 20.0 && tempoAtual_cour_um <= 20.5){
                $('#paragrafo1_animate_sep').text('Numerologia').animate({
                    opacity: '0',
                    top: '0px'
                }, 600)

                $('#paragrafo2_animate_sep').text('Profundamente Reveladora!').animate({
                    opacity: '0',
                    top: '-34px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 23.0 && tempoAtual_cour_um <= 23.5){
                $('#paragrafo1_animate_sep').text('Tomar Decisões').animate({
                    opacity: '1',
                    top: '40px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 27.0 && tempoAtual_cour_um <= 27.5){
                $('#paragrafo2_animate_sep').text('Oportunidades Únicas').animate({
                    opacity: '1',
                    top: '0px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 40.0 && tempoAtual_cour_um <= 40.5){
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

            if(tempoAtual_cour_um >= 47.0 && tempoAtual_cour_um <= 47.5){
                $('#num_destino_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 48.0 && tempoAtual_cour_um <= 48.5){
                $('#num_nasc_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 49.0 && tempoAtual_cour_um <= 49.5){
                $('#num_alma_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 50.0 && tempoAtual_cour_um <= 50.5){
                $('#num_exprecao_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 52.0 && tempoAtual_cour_um <= 52.5){
                $('#num_personalidade_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 55.0 && tempoAtual_cour_um <= 55.5){
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

            if(tempoAtual_cour_um >= 61.0 && tempoAtual_cour_um <= 61.5){
                $('#paragrafo1_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 62.0 && tempoAtual_cour_um <= 62.5){
                $('#paragrafo2_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 64.0 && tempoAtual_cour_um <= 64.5){
                $('#paragrafo3_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 67.0 && tempoAtual_cour_um <= 67.5){
                $('#paragrafo4_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 70.0 && tempoAtual_cour_um <= 70.5){
                $('#paragrafo5_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 75.0 && tempoAtual_cour_um <= 75.5){
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

            if(tempoAtual_cour_um >= 81.0 && tempoAtual_cour_um <= 81.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 84.0 && tempoAtual_cour_um <= 84.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 85.0 && tempoAtual_cour_um <= 85.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 115.0 && tempoAtual_cour_um <= 115.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 117.0 && tempoAtual_cour_um <= 117.5){
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

            if(tempoAtual_cour_um >= 178.0 && tempoAtual_cour_um <= 178.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 179.0 && tempoAtual_cour_um <= 179.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)

                $('#num_dest_anima h3').text("Numero de Expresão")
                $('#num_dest_anima img').attr('src', 'img/card-numero-expressao.png')
            }

            if(tempoAtual_cour_um >= 207.0 && tempoAtual_cour_um <= 207.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 209.0 && tempoAtual_cour_um <= 209.5){
                $('#primeira_anima img').attr('src', 'img/tabela.png')
                $('#primeira_anima h3').css('color', 'rgba(255, 217, 0, 0)')
                
                $('#primeira_anima').animate({
                    opacity: '1'
                }, 500)
                
            }

            if(tempoAtual_cour_um >= 247.0 && tempoAtual_cour_um <= 247.5){
                $('#primeira_anima').animate({
                    opacity: '0'
                }, 500)
            }

            if(tempoAtual_cour_um >= 249.0 && tempoAtual_cour_um <= 249.5){
                $('#container1').css('display', 'block');
                $('#container2').css('display', 'none');

                $('.title-form').text('Preencha o formulário abaixo para continuar');

                $('.input-dropdown').css('display', 'none');
                $('.cour_dois_gender').css('display', 'block');
                $('.cour_dois_full_name').css('display', 'block');

                $('.cour_dois_gender p').text('Informe o seu genero');
                $('.cour_dois_full_name p').text('Informe o seu primeiro nome');

                $('.input-p').text('');

                $('.butao button').attr('onclick', 'cour_dois()')
            }
        }
        
    })
}

function animation2(){
    const audio_cour_dois = document.getElementById('audio_principal');

    audio_cour_dois.addEventListener('timeupdate', function exibirLegendas(){
        const tempoAtual_cour_dois = audio_cour_dois.currentTime;
        if($('#numeroAlma_do_cliente').text() == ""){
            if(tempoAtual_cour_dois >= 8.0 && tempoAtual_cour_dois <= 8.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text("Numero de Expresão")
                $('#num_dest_anima img').attr('src', 'img/card-numero-expressao.png')
            }
    
            if(tempoAtual_cour_dois >= 36.0 && tempoAtual_cour_dois <= 36.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 38.0 && tempoAtual_cour_dois <= 38.5){
                $('#nome_completo_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '1'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 56.0 && tempoAtual_cour_dois <= 56.5){
                $('#nome_completo_anima').animate({
                    opacity: '0'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 58.0 && tempoAtual_cour_dois <= 58.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#calcula_num_dest_anima h3').text("Seu numero de Expressão é:")
    
                $('#dia_calcula_card').css('opacity', '0');
                $('#ano1_calcula_card').css('opacity', '0');
                $('#ano2_calcula_card').css('opacity', '0');
    
                $('#mes_calcula_card').css('margin-right', '-134px');
                $('#mes_calcula_card .mes1').text('');
                $('#mes_calcula_card .mes2').text($('#numeroExp_do_cliente').text());
                $('#mes_calcula_card .mes2').css('margin-left', '8px');
                $('#mes_calcula_card .mes2').css('margin-top', '51px');
            }
    
            if(tempoAtual_cour_dois >= 132.0 && tempoAtual_cour_dois <= 132.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 147.0 && tempoAtual_cour_dois <= 147.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text("Numero da alma")
    
                $('#num_dest_anima img').attr('src', 'img/card-numero-alma.png')
            }
    
            if(tempoAtual_cour_dois >= 184.0 && tempoAtual_cour_dois <= 184.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 187.0 && tempoAtual_cour_dois <= 187.5){
                $('#container1').css('display', 'block');
                $('#container2').css('display', 'none');

                $('.cour_dois_gender').css('display', 'none');
                $('.cour_dois_full_name').css('display', 'none');
                $('.cour_tres_estadoCivil').css('display', 'block');
                $('.cour_tres_email').css('display', 'block');

                $('.cour_tres_estadoCivil p').text('Informe o seu estado civil');
                $('.cour_tres_email p').text('Informe o seu email');

                // cour_tres_estadoCivil
                // cour_tres_email
    
                $('.title-form').text('Preencha o formulário abaixo para continuar');

                $('.butao button').attr('onclick', 'cour_tres()')
            }
        }
    })
}

function animation3(){
    const audio_cour_tres = document.getElementById('audio_principal');

    audio_cour_tres.addEventListener('timeupdate', function exibirLegendas(){
        const tempoAtual_cour_tres = audio_cour_tres.currentTime;

        if($('#numeroAlma_do_cliente').text() != ""){
            if(tempoAtual_cour_tres >= 0.0 && tempoAtual_cour_tres <= 0.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text(`Numero da alma de ${$('#nome_do_cliente').text()}`)
                $('#num_dest_anima img').css('opacity', '0')
            }

            if(tempoAtual_cour_tres >= 79.0 && tempoAtual_cour_tres <= 79.5){
                $('#nome_completo_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 105.0 && tempoAtual_cour_tres <= 105.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)

                $('#nome_completo_anima').animate({
                    opacity: '0'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 107.0 && tempoAtual_cour_tres <= 107.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#calcula_num_dest_anima h3').text("Seu numero da Alma é:")
    
                $('#dia_calcula_card').css('opacity', '0');
                $('#ano1_calcula_card').css('opacity', '0');
                $('#ano2_calcula_card').css('opacity', '0');
    
                $('#mes_calcula_card').css('margin-right', '-134px');
                $('#mes_calcula_card .mes1').text('');
                $('#mes_calcula_card .mes2').text($('#numeroAlma_do_cliente').text());
                $('#mes_calcula_card .mes2').css('margin-left', '8px');
                $('#mes_calcula_card .mes2').css('margin-top', '51px');
            }

            if(tempoAtual_cour_tres >= 412.0 && tempoAtual_cour_tres <= 412.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 414.0 && tempoAtual_cour_tres <= 414.5){
                $('#primeira_anima img').attr('src', 'img/mandala.gif')

                $('#primeira_anima').animate({
                    opacity: '1'
                }, 500)
            }

            if(tempoAtual_cour_tres >= 459.0 && tempoAtual_cour_tres <= 459.5){
                $('#primeira_anima').animate({
                    opacity: '0'
                }, 500)
            }

            if(tempoAtual_cour_tres >= 460.0 && tempoAtual_cour_tres <= 460.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text(`Seu MAPA DA VIDA`)
                $('#num_dest_anima img').css('opacity', '1')
                $('#num_dest_anima img').css('display', 'block')

                $('#num_dest_anima img').attr('src', 'img/mapa-da-vida-grande.png')
            }

            if(tempoAtual_cour_tres >= 792.0 && tempoAtual_cour_tres <= 792.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 792.0 && tempoAtual_cour_tres <= 792.5){
                $('#container2').css('display', 'none');
                $('#pagamento').css('display', 'block');

            }
        }
    })
}