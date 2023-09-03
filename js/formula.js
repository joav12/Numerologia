var mes_list = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre" , "Octubre", "Noviembre", "Diciembre"];

var n = 0;

const legendasContainer = document.getElementById('legendas_aparecendo');

function cour_um(){
    if(document.getElementById("name_user").value == ""){
        window.alert("Completa tu nombre");
    }
    else{
        n += 1;
        const name_user = document.getElementById("name_user").value;

        $('#name_user').css('display', 'none');

        $('#formulario .input p').text("Introduzca su fecha de nacimiento");

        $('.input-dropdown').css('display', 'flex');

        if($('.input-dia').attr('value') == "Dia" && n >= 2 || $('.input-mes').attr('value') == "Mês" && n >= 2 || $('.input-ano').attr('value') == "Año" && n >= 2){
            window.alert("Por favor ingrese su fecha de nacimiento para continuar");
        }
        else if($('.input-dia').attr('value') != "Dia" && n >= 2 || $('.input-mes').attr('value') != "Mês" && n >= 2 || $('.input-ano').attr('value') != "Ano" && n >= 2){
            var mes = "", output = [], soma = 0;

            for(i=0;i<mes_list.length;i++){
                if($('.input-mes').attr('value') == mes_list[i]){
                    if((i + 1) <  10){
                        mes = `0${i + 1}`;
                    }else{
                        mes = `${i + 1}`;
                    }
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
            
            if( $(window).width() <= 414){
                $('html').css('overflow', 'hidden')
                $('html').css('overflow-x', 'visible')
            }

            $('#audio_principal').attr('src', `media/numeroDestino/${soma}.mp3`)
            $('#audio_principal track').attr('src', `legendas/numeroDestino/${soma}.vtt`)

            $('#nome_do_cliente').text(name_user)
            $('#aniversário_do_cliente').text(`${$('.input-dia').attr('value')}/${$('.input-mes').attr('value')}/${$('.input-ano').attr('value')}`)
            $('#numero_do_cliente').text(soma);

            $('#container1').css('display', 'none');
            $('#black_bg').css('display', 'block');
            $('#container2').css('display', 'block');

            $('#name_black_bg').text(name_user);

            $('#nome_user_anima').text(name_user)
            $('#niver_user_anima').text($('#aniversário_do_cliente').text());

            output = []
            for (var i = 0, len = nasc.length; i < len; i += 1) {
                output.push(+nasc.charAt(i));
            }

            $('.dia1').text(output[0]);
            $('.dia2').text(output[1]);
            $('.mes1').text(output[2]);
            $('.mes2').text(output[3]);
            $('.ano1').text(output[4]);
            $('.ano2').text(output[5]);
            $('.ano3').text(output[6]);
            $('.ano4').text(output[7]);
        }
        
    }
}

function cour_dois(){
    if(document.getElementById("full_name_user").value == "" || $('.input-gender').attr('value') == "tu género"){
        window.alert("Complete todos los campos a continuación");
    }
    else{
        const full_name = document.getElementById("full_name_user").value.toLowerCase().split('');

        var full_name_number = [];
        for(i=0, nam=full_name.length; i<nam; i++){
            if(full_name[i] == "a" || full_name[i] == "j" || full_name[i] == "s" || full_name[i] == "ã"){
                full_name_number.push(1);
            }
            else if(full_name[i] == "b" || full_name[i] == "k" || full_name[i] == "t"){
                full_name_number.push(2);
            }
            else if(full_name[i] == "c" || full_name[i] == "l" || full_name[i] == "u" || full_name[i] == "ç"){
                full_name_number.push(3);
            }
            else if(full_name[i] == "d" || full_name[i] == "m" || full_name[i] == "v"){
                full_name_number.push(4);
            }
            else if(full_name[i] == "e" || full_name[i] == "n" || full_name[i] == "w"){
                full_name_number.push(5);
            }
            else if(full_name[i] == "f" || full_name[i] == "o" || full_name[i] == "x"){
                full_name_number.push(6);
            }
            else if(full_name[i] == "g" || full_name[i] == "p" || full_name[i] == "y"){
                full_name_number.push(7);
            }
            else if(full_name[i] == "h" || full_name[i] == "q" || full_name[i] == "z"){
                full_name_number.push(8);
            }
            else if(full_name[i] == "i" || full_name[i] == "r"){
                full_name_number.push(9);
            }
            else if(full_name[i] == " "){
                full_name_number.push(0)
            }
        }

        var soma = 0;

        for(i=0, nam=full_name_number.length; i<nam; i++){
            soma += full_name_number[i];
        }

        function sominha(soma){
            if(soma > 9){
                var myArr = String(soma).split("").map((soma)=>{
                    return Number(soma)
                  })
    
                var soma2 = 0
                for(i=0, nam=myArr.length; i<nam; i++){
                    soma2 += myArr[i];
                }
    
                soma = soma2
                if(soma > 9){
                    return sominha(soma);
                }
                else{
                    soma = `0${soma}`

                    return soma
                }
            }

        }

        for(i=0, nam=full_name.length; i<nam;i++){
            if(i == 0 || full_name[i - 1] !== 'undefined' && full_name[i - 1] == " "){
                document.getElementById('nome_completo_anima').innerHTML += `<h5>${full_name[i].toUpperCase()}</h5>`
            }
            else{
                if(full_name[i] == " "){
                    document.getElementById('nome_completo_anima').innerHTML += `<h5 style="background-color: transparent"> </h5>`
                }
                else{
                  document.getElementById('nome_completo_anima').innerHTML += `<h5>${full_name[i]}</h5>`   
                }
            }
        }

        for(i=0, nam=full_name_number.length; i<nam;i++){
            if(full_name_number[i] == 0){
                document.getElementById('nome_completo_number_anima').innerHTML += `<h5 style="background-color: transparent"> </h5>`
            }
            else{
                document.getElementById('nome_completo_number_anima').innerHTML += `<h5>${full_name_number[i]}</h5>`  
            }
            
        }

        $('#audio_principal').attr('src', `media/numeroExprecao/${sominha(soma)}.mp3`)
        $('#audio_principal track').attr('src', `legendas/numeroExprecao/${sominha(soma)}.vtt`)

        $('#nome_do_cliente').text(document.getElementById("full_name_user").value)
        $('#genero_do_cliente').text($('.input-gender').attr('value'))
        $('#numeroExp_do_cliente').text(sominha(soma));

        $('#container1').css('display', 'none');
        $('#black_bg').css('display', 'block');
        $('#container2').css('display', 'block');

        $('#name_black_bg').text(document.getElementById("full_name_user").value);

        $('#legendas_aparecendo').text('Olá, novamente')
    }
}

function cour_tres(){
    if(document.getElementById("email_user").value == "" || $('.input-estado-civil').attr('value') == "tu estado civil"){
        window.alert("Complete todos los campos a continuación");
    }
    else{
        if(document.getElementById("email_user").value.includes('@')){
            const full_name = $('#nome_do_cliente').text().toLowerCase().split('');

            var full_name_number = [];
            for(i=0,nam=full_name.length; i<nam;i++){
                if(full_name[i] == 'a' || full_name[i] == 'ã'){
                    full_name_number.push(1)
                }
                else if(full_name[i] == 'u'){
                    full_name_number.push(3)
                }
                else if(full_name[i] == 'e'){
                    full_name_number.push(5)
                }
                else if(full_name[i] == 'o'){
                    full_name_number.push(6)
                }
                else if(full_name[i] == 'i'){
                    full_name_number.push(9)
                }
                else if(full_name[i] == 'u'){
                    full_name_number.push(3)
                }
                else if(full_name[i] != 'a' || full_name[i] != 'ã' || full_name[i] != 'e' || full_name[i] != 'i' || full_name[i] != 'o' || full_name[i] != 'u'){
                    if(full_name[i] == " "){
                        full_name_number.push("espaço")
                    }
                    else{
                        full_name_number.push(0);
                    }
                    
                }
            }

            document.getElementById('nome_completo_anima').innerHTML = ""

            for(i=0, nam=full_name.length; i<nam;i++){
                if(i == 0 || full_name[i - 1] !== 'undefined' && full_name[i - 1] == " "){
                    document.getElementById('nome_completo_anima').innerHTML += `<h5 style="background-color: #0e1b2c; color: rgb(152 152 152);"">${full_name[i].toUpperCase()}</h5>`
                }
                else{
                    if(full_name[i] == " "){
                        document.getElementById('nome_completo_anima').innerHTML += `<h5 style="background-color: transparent"> </h5>`
                    }
                    else{
                        if(full_name[i] == 'a' || full_name[i] == 'ã' || full_name[i] == 'e' || full_name[i] == 'i' || full_name[i] == 'o' || full_name[i] == 'u'){
                            document.getElementById('nome_completo_anima').innerHTML += `<h5>${full_name[i]}</h5>`  
                        }
                        else{                    
                            document.getElementById('nome_completo_anima').innerHTML += `<h5 style="background-color: #0e1b2c; color: rgb(152 152 152);">${full_name[i]}</h5>`   
                        }
                      
                    }
                }
            }

            var soma = 0;

            for(i=0, nam=full_name_number.length; i<nam; i++){
                if(full_name_number[i] != 'espaço'){
                    soma += full_name_number[i];
                }
            }

            function sominha(soma){
                if(soma > 9){
                    var myArr = String(soma).split("").map((soma)=>{
                        return Number(soma)
                      })
        
                    var soma2 = 0
                    for(i=0, nam=myArr.length; i<nam; i++){
                        soma2 += myArr[i];
                    }
        
                    soma = soma2
                    if(soma > 9){
                        return sominha(soma);
                    }
                    else{
                        soma = `0${soma}`
    
                        return soma
                    }
                }
    
            }
            
            document.getElementById('nome_completo_number_anima').innerHTML = ""

            for(i=0, nam=full_name_number.length; i<nam;i++){
                if(full_name_number[i] == 'espaço'){
                    document.getElementById('nome_completo_number_anima').innerHTML += `<h5 style="background-color: transparent"> </h5>`
                }
                else{
                    if(full_name_number[i] == 0){
                        document.getElementById('nome_completo_number_anima').innerHTML += `<h5 style="background-color: rgb(141, 120, 0); color: rgb(152 152 152);">${full_name_number[i]}</h5>` 
                    }
                    else{
                        document.getElementById('nome_completo_number_anima').innerHTML += `<h5>${full_name_number[i]}</h5>` 
                    } 
                }
            }

            $('#numeroAlma_do_cliente').text(sominha(soma))
            $('#email_do_cliente').text(document.getElementById("email_user").value)
            $('#estadoCivil_do_cliente').text($('.input-estado-civil').attr('value'))

            const genero = $('#genero_do_cliente').text()
            const estadoCivil = $('#estadoCivil_do_cliente').text()

            $('#audio_principal').attr('src', `media/numeroAlma/${genero}/${estadoCivil}/${sominha(soma)}.mp3`)

            $('#audio_principal track').attr('src', `legendas/numeroAlma/${genero}/${estadoCivil}/${sominha(soma)}.vtt`)

            $('#container1').css('display', 'none');
            $('#black_bg').css('display', 'block');
            $('#container2').css('display', 'block');
        }
        else{
            window.alert("Coloque um email funcional");
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

function add_genero(butao){
    $('.input-gender').attr('value', $(butao).text());
}

function add_estado_civil(butao){
    $('.input-estado-civil').attr('value', $(butao).text());
}

var indica_cour_number = 0;
function playAudio(){
    $('#black_bg').css('display', 'none');

    document.getElementById("audio_fundo").loop = true;

    document.getElementById("audio_principal").loop = false;

    if( $(window).width() <= 450){
        document.getElementById("audio_fundo").volume = 0.01;
        document.getElementById("audio_principal").volume = 0.5;
    }else{
        document.getElementById("audio_fundo").volume = 0.07;
        document.getElementById("audio_principal").volume = 0.5;
    }

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
                
                if(legendasContainer.innerHTML !== legenda.text && numero_legal == 0 || legendasContainer.innerHTML !== legenda.text && numero_legal == 6){
                    legendasContainer.innerHTML = legenda.text
                }            
            }
        }
    });

    if(indica_cour_number == 0){
        indica_cour_number += 1;
        return animation1();
    }
    else if(indica_cour_number == 1){
        indica_cour_number += 1;
        return animation2();
    }
    else if(indica_cour_number == 2){
        return animation3();
    }
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
        $('#black_bg .paragrafo').text("Esta es tu última oportunidad de ver hasta el final.")
        $('#black_bg button').text("CONTINUAR")

        ta_pausado = true
    }
    else if(ta_pausado == true){
        document.getElementById("audio_principal").play();  

        $('#player .pausar span').text("pause")

        ta_pausado = false
    }
    
}