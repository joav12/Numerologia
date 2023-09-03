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
            
            if(tempoAtual_cour_um >= 3.0 && tempoAtual_cour_um <= 3.5){
                $('#paragrafo1_animate_sep').text('Numerologia').animate({
                    opacity: '1',
                    top: '40px'
                }, 600)
            } 

            if(tempoAtual_cour_um >= 5.0 && tempoAtual_cour_um <= 5.5){
                $('#paragrafo2_animate_sep').text('¡Profundamente revelador!').animate({
                    opacity: '1',
                    top: '0px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 14.0 && tempoAtual_cour_um <= 14.5){
                $('#paragrafo1_animate_sep').animate({
                    opacity: '0',
                    top: '0px'
                }, 600)

                $('#paragrafo2_animate_sep').animate({
                    opacity: '0',
                    top: '-34px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 16.0 && tempoAtual_cour_um <= 16.5){
                $('#paragrafo1_animate_sep').text('Tomar decisiones').animate({
                    opacity: '1',
                    top: '40px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 18.0 && tempoAtual_cour_um <= 18.5){
                $('#paragrafo2_animate_sep').text('Oportunidades Únicas').animate({
                    opacity: '1',
                    top: '0px'
                }, 600)
            }

            if(tempoAtual_cour_um >= 24.0 && tempoAtual_cour_um <= 24.5){
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

            if(tempoAtual_cour_um >= 32.0 && tempoAtual_cour_um <= 32.5){
                $('#num_destino_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 33.0 && tempoAtual_cour_um <= 33.5){
                $('#num_nasc_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 34.0 && tempoAtual_cour_um <= 34.5){
                $('#num_alma_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 35.0 && tempoAtual_cour_um <= 35.5){
                $('#num_exprecao_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 37.0 && tempoAtual_cour_um <= 37.5){
                $('#num_personalidade_card_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 39.0 && tempoAtual_cour_um <= 39.5){
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

            if(tempoAtual_cour_um >= 42.0 && tempoAtual_cour_um <= 42.5){
                $('#paragrafo1_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 43.0 && tempoAtual_cour_um <= 43.5){
                $('#paragrafo2_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 44.0 && tempoAtual_cour_um <= 44.5){
                $('#paragrafo3_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 46.0 && tempoAtual_cour_um <= 46.5){
                $('#paragrafo4_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 49.0 && tempoAtual_cour_um <= 49.5){
                $('#paragrafo5_animate').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 53.0 && tempoAtual_cour_um <= 53.5){
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

            if(tempoAtual_cour_um >= 56.0 && tempoAtual_cour_um <= 56.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 58.0 && tempoAtual_cour_um <= 58.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 59.0 && tempoAtual_cour_um <= 59.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_um >= 77.0 && tempoAtual_cour_um <= 77.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 80.0 && tempoAtual_cour_um <= 80.5){
                $('#calcula_num_dest_anima').css('margin-bottom', '150px').animate({
                    opacity: '1'
                }, 600)

                $('#calcula_num_dest_anima h3').text("Su número de destino es:")

                $('#dia_calcula_card').css('display', 'none');
                $('#ano1_calcula_card').css('display', 'none');
                $('#ano2_calcula_card').css('display', 'none');

              
                $('#mes_calcula_card .mes1').text('');
                $('#mes_calcula_card .mes2').text($('#numero_do_cliente').text());
                $('#mes_calcula_card .mes2').css('margin-left', '8px');
                $('#mes_calcula_card .mes2').css('margin-top', '51px');
            }

            if(tempoAtual_cour_um >= 120.0 && tempoAtual_cour_um <= 120.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 122.0 && tempoAtual_cour_um <= 122.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)

                $('#num_dest_anima h3').text("Número de expresión")
                $('#num_dest_anima img').attr('src', 'img/card-numero-expressao.png')
            }

            if(tempoAtual_cour_um >= 147.0 && tempoAtual_cour_um <= 147.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_um >= 150.0 && tempoAtual_cour_um <= 150.5){
                $('#primeira_anima img').attr('src', 'img/tabela.png').css('width', '302px').css('height', '210px')
                $('#primeira_anima h3').css('color', 'rgba(255, 217, 0, 0)')
                
                if( $(window).width() <= 390){
                    $('#primeira_anima img').css('width', '317px').css('height', '221px')
                }

                $('#primeira_anima').animate({
                    opacity: '1'
                }, 500)
                
            }

            if(tempoAtual_cour_um >= 173.0 && tempoAtual_cour_um <= 173.5){
                $('#primeira_anima').animate({
                    opacity: '0'
                }, 500)
            }

            if(tempoAtual_cour_um >= 174.0 && tempoAtual_cour_um <= 174.5){
                $('#container1').css('display', 'block');
                $('#container2').css('display', 'none');

                $('.title-form').text('Complete el siguiente formulario para continuar.');

                $('.input-dropdown').css('display', 'none');
                $('.cour_dois_gender').css('display', 'block');
                $('.cour_dois_full_name').css('display', 'block');

                $('.cour_dois_gender p').text('Dinos tu género');
                $('.cour_dois_full_name p').text('Ingresa tu nombre completo');

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
        if($('#numeroAlma_do_cliente').text() == "" && document.getElementById("full_name_user").value != ""){
            if( $(window).width() <= 450){
                $('#player').css('top', '-1234px')
            }else{
              $('#player').css('top', '-1084px')  
            }
        

            if(tempoAtual_cour_dois >= 6.0 && tempoAtual_cour_dois <= 6.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text("Número de expresión")
                $('#num_dest_anima img').attr('src', 'img/card-numero-expressao.png')
            }
    
            if(tempoAtual_cour_dois >= 34.0 && tempoAtual_cour_dois <= 34.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 36.0 && tempoAtual_cour_dois <= 36.5){
                $('#nome_completo_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '1'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 48.0 && tempoAtual_cour_dois <= 48.5){
                $('#nome_completo_anima').animate({
                    opacity: '0'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 52.0 && tempoAtual_cour_dois <= 52.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#calcula_num_dest_anima h3').text("Su número de expresión es:")
    
                $('#dia_calcula_card').css('display', 'none');
                $('#ano1_calcula_card').css('display', 'none');
                $('#ano2_calcula_card').css('display', 'none');
    
                $('#mes_calcula_card .mes1').text('');
                $('#mes_calcula_card .mes2').text($('#numeroExp_do_cliente').text());
            }
    
            if(tempoAtual_cour_dois >= 118.0 && tempoAtual_cour_dois <= 118.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 124.0 && tempoAtual_cour_dois <= 124.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text("numero del alma")
    
                $('#num_dest_anima img').attr('src', 'img/card-numero-alma.png')
            }
    
            if(tempoAtual_cour_dois >= 155.0 && tempoAtual_cour_dois <= 155.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }
    
            if(tempoAtual_cour_dois >= 159.0 && tempoAtual_cour_dois <= 159.5){
                $('#container1').css('display', 'block');
                $('#container2').css('display', 'none');

                $('.cour_dois_gender').css('display', 'none');
                $('.cour_dois_full_name').css('display', 'none');
                $('.cour_tres_estadoCivil').css('display', 'block');
                $('.cour_tres_email').css('display', 'block');

                $('.cour_tres_estadoCivil p').text('Informa tu estado civil');
                $('.cour_tres_email p').text('Informa a tu correo electrónico');

                // cour_tres_estadoCivil
                // cour_tres_email
    
                $('.title-form').text('Complete el siguiente formulario para continuar.');

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
            if( $(window).width() <= 450){
                $('#player').css('top', '-1271px')
            }else{
              $('#player').css('top', '-1084px')  
            }

            if(tempoAtual_cour_tres >= 0.0 && tempoAtual_cour_tres <= 0.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text(`Numero del alma de ${$('#nome_do_cliente').text()}`)
                $('#num_dest_anima img').css('opacity', '0')
            }

            if(tempoAtual_cour_tres >= 65.0 && tempoAtual_cour_tres <= 65.5){
                $('#nome_completo_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#nome_completo_number_anima').animate({
                    opacity: '1'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 86.0 && tempoAtual_cour_tres <= 86.5){
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

            if(tempoAtual_cour_tres >= 89.0 && tempoAtual_cour_tres <= 89.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#calcula_num_dest_anima h3').text("Su numero de Alma es:")
    
                $('#dia_calcula_card').css('display', 'none');
                $('#ano1_calcula_card').css('display', 'none');
                $('#ano2_calcula_card').css('display', 'none');
    
                $('#mes_calcula_card .mes1').text('');
                $('#mes_calcula_card .mes2').text($('#numeroAlma_do_cliente').text());
            }

            if(tempoAtual_cour_tres >= 376.0 && tempoAtual_cour_tres <= 376.5){
                $('#calcula_num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 378.0 && tempoAtual_cour_tres <= 378.5){
                $('#primeira_anima img').attr('src', 'img/mandala.gif')

                if( $(window).width() <= 390){
                    $('#primeira_anima img').css('width', '227px').css('height', '210px')
                }

                $('#primeira_anima').animate({
                    opacity: '1'
                }, 500)
            }

            if(tempoAtual_cour_tres >= 466.0 && tempoAtual_cour_tres <= 466.5){
                $('#primeira_anima').animate({
                    opacity: '0'
                }, 500)
            }

            if(tempoAtual_cour_tres >= 468.0 && tempoAtual_cour_tres <= 468.5){
                $('#num_dest_anima').animate({
                    opacity: '1'
                }, 600)
    
                $('#num_dest_anima h3').text(`Su MAPA DE LA VIDA`)
                $('#num_dest_anima img').css('opacity', '1')
                $('#num_dest_anima img').css('display', 'block')

                $('#num_dest_anima img').attr('src', 'img/mapa-da-vida-grande.png')
            }

            if(tempoAtual_cour_tres >= 550.0 && tempoAtual_cour_tres <= 550.5){
                $('#num_dest_anima').animate({
                    opacity: '0'
                }, 600)
            }

            if(tempoAtual_cour_tres >= 552.0 && tempoAtual_cour_tres <= 552.5){
                $('#container2').css('display', 'none');
                $('#pagamento').css('display', 'block');

            }
        }
    })
}