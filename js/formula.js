var tem_user_nome = false;

function nome(){
    const nome = document.getElementById("name_user").value;
    var tem_user_nome = true;

    document.getElementById("name_user").setAttribute('style', 'display: none');

    return Array(tem_user_nome, nome);
}
