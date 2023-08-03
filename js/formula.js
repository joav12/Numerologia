var n = 0;

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
            // window.alert("a");
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