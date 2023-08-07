var mes_list = ["Janeiro", "Fevereiro", "Março","Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro" , "Outubro", "Novembro", "Dezembro"];

var n = 0;

const legendasContainer = document.getElementById('legendas_aparecendo');

function nome(){
    if(document.getElementById("name_user").value == ""){
        window.alert("Preencha com o seu nome");
    }

    else{
        n += 1;
        const name_user = document.getElementById("name_user").value;

        $('#name_user').css('display', 'none');

        $('#formulario .input p').text("Informe sua data de nascimento");

        $('.input-dropdown').css('display', 'flex');

        if($('.input-dia').attr('value') == "Dia" && n >= 2 || $('.input-mes').attr('value') == "Mês" && n >= 2 || $('.input-ano').attr('value') == "Ano" && n >= 2){
            window.alert("Por favor informe a sua data de aniversário para continuar");
        }
        else if($('.input-dia').attr('value') != "Dia" && n >= 2 || $('.input-mes').attr('value') != "Mês" && n >= 2 || $('.input-ano').attr('value') != "Ano" && n >= 2){
            var mes = "", output = [], soma = 0;

            for(i=0;i<mes_list.length;i++){
                if($('.input-mes').attr('value') == mes_list[i]){
                    mes = `${i + 1}`;
                }
            }

            var nasc = $('.input-dia').attr('value') + mes + $('.input-ano').attr('value')
            
            for (var i = 0, len = nasc.length; i < len; i += 1) {
                output.push(+nasc.charAt(i));
            }
            
            for (let i = 0; i < output.length; i++ ) {
                soma += output[i];
            }
            
            output = [];
            soma = soma.toString();
            for (var i = 0, len = soma.length; i < len; i += 1) {
                output.push(+soma.charAt(i));
            }

            soma = 0;
            if(output[0] == output[1]){
                soma = output[0];
            }
            else{
                for (let i = 0; i < output.length; i++ ) {
                    soma += output[i];
                }  
            }
            
            if(soma >= 10){
                output = [];
                soma = soma.toString();
                for (var i = 0, len = soma.length; i < len; i += 1) {
                    output.push(+soma.charAt(i));
                }

                soma = 0;
                if(output[0] == output[1]){
                    soma = output[0];
                }
                else{
                    for (let i = 0; i < output.length; i++ ) {
                        soma += output[i];
                    }  
                }

                soma = "0" + soma;
            }
            else{
                soma = "0" + soma;
            }
            
            $('#audio_principal').attr('src', `media/numeroDestino/${soma}.mp3`)
            // $('#audio_principal').attr('src', `media/numeroDestino/${soma}.mp3`)
            $('#audio_principal track').attr('src', `legendas/numeroDestino/${soma}.vtt`)

            $('#nome_do_cliente').text(name_user)
            $('#aniversário_do_cliente').text(`${$('.input-dia').attr('value')}/${$('.input-mes').attr('value')}/${$('.input-ano').attr('value')}`)

            $('#container1').css('display', 'none');
            $('#black_bg').css('display', 'block');
            $('#container2').css('display', 'block');

            $('#name_black_bg').text(name_user);

        }
        
    }
}

function add_dia(butao){
    $('.input-dia').attr('value', $(butao).text());
}

function add_mes(butao){
    $('.input-mes').attr('value', $(butao).text());
}

function add_ano(butao){
    $('.input-ano').attr('value', $(butao).text());
}

function playAudio(){
    $('#black_bg').css('display', 'none');

    document.getElementById("audio_fundo").loop = true;
    document.getElementById("audio_fundo").play();

    document.getElementById("audio_principal").play();

    $('#player .pausar span').text("pause")

    const audio = document.getElementById('audio_principal');

    var numero_legal = 0;
    audio.addEventListener('timeupdate', function exibirLegendas(){
    const tempoAtual = audio.currentTime;
    const faixasDeLegendas = audio.textTracks[0].cues;

    for (let i = 0; i < faixasDeLegendas.length; i++) {
        const legenda = faixasDeLegendas[i];
        if (tempoAtual >= legenda.startTime && tempoAtual < legenda.endTime) {
            if(document.getElementById('nome_legenda') !== null){
                $('#nome_legenda').text($('#nome_do_cliente').text())
                $('#data_legenda').text($('#aniversário_do_cliente').text())
                numero_legal++
            }

            console.log(numero_legal)
            
            if(legendasContainer.innerHTML !== legenda.text && numero_legal == 0 || legendasContainer.innerHTML !== legenda.text && numero_legal == 7){
                legendasContainer.innerHTML = legenda.text
            }            
        }
    }
});

}

function mute(){
    if(document.getElementById("audio_fundo").muted != true && document.getElementById("audio_principal").muted != true){
        document.getElementById("audio_fundo").muted = true;
        document.getElementById("audio_principal").muted = true;
        
        $('#player .mutar span').text("volume_off")
    }
    else{
        document.getElementById("audio_fundo").muted = false;

        document.getElementById("audio_principal").muted = false;  

        $('#player .mutar span').text("volume_up")
    }
}

var ta_pausado = false;

function pause(){
    if(ta_pausado == false){
        document.getElementById("audio_principal").pause();
        
        $('#player .pausar span').text("play_arrow")

        $('#black_bg').css('display', 'block');

        $('#black_bg .result').text('')

        $('#black_bg #name_black_bg').css('color', 'gold').css('font-size', '2.5rem')

        $('#black_bg img').attr('src','img/stop.png')
        $('#black_bg .paragrafo').text("Essa é a sua última chance de assistir até o final")

        ta_pausado = true
    }
    else if(ta_pausado == true){
        document.getElementById("audio_principal").play();  

        $('#player .pausar span').text("pause")

        ta_pausado = false
    }
    
}