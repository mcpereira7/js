$(document).ready(function() {

    // função que limpa o formulário
    function limparForm(){
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#uf").val("");
    }

    // Quando o campo cep perde o foco
    $("#cep").blur(function(){
        var cep = $(this).val().replace(/\D/g, '');

        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/", function(endereco) {
        if(!("erro" in endereco)){
            $("#rua").val(endereco.logradouro);
            $("#bairro").val(endereco.bairro);
            $("#cidade").val(endereco.localidade);
            $("#uf").val(endereco.uf);
        }
        });
    });
});