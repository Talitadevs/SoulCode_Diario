// - Ao clicar no primeiro botão, as 5 divs devem aparecer com cores diferentes, largura e altura diferentes e com um efeito que você aprendeu em Jquery (Á sua escolha)
$(document).ready(function(){
$('#botaoOne').click(function(){
    $('div').css('background-image', 'none');
    $('div').css('background-color', 'yellow');
    $('div').width(50).height(50);
    $('div').hide(1000);
});

// - Ao clicar no segundo botão, todas as divs deverão ficar com a cor azul, largura de 300px e altura de 150px.
$('#botaoTwo').click(function(){
    $('div').css('background-image', 'none');
    $('div').css('background-color', 'blue');
    $('div').width(300).height(150);
});

// - Ao dar um duplo clique no terceiro botão, você deverá esconder duas divs à sua escolha, também utilizando um efeito do Jquery.
$('#botaoThree').dblclick(function(){
    $('#esconde2, #esconde4').hide();
    // $('div').width(300).height(150);
});

// - Coloque um foco nos campos do formulário com uma cor agradável ao usuário, e ao tirar o foco do campo de formulário remova esse efeito.
$("input").focus(function () {
        $(this).css('background-color', 'rgb(250, 249, 195)');
        $("input").blur(function(){
            $(this).css('background-color', 'rgb(255,255,255)');
        });
});
});

// - Pegue o valor do nome e do email do usuário e apresente na tela em uma tag de span os dados que foram digitados pelo usuário.

function dadosDig(){
    document.getElementById("dados").innerHTML = "O nome digitado foi:  " + nome.value +  ". O e-mail digitado foi: " + email.value + ".";            
}



