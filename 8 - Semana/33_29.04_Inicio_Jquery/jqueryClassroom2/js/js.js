// 1) Selecionar todas as tags h2 e colocar um background verde nos elementos selecionados.

$(document).ready(function() {
    $('h2').css('background-color', 'green');
    });
    
// 2) Selecionar o pai da classe buttons e colocar um background vermelho no elemento selecionado.
$(document).ready(function() {
    $('.buttons').parent().css('background-color', 'red');
    });

// 3) Selecionar os elementos filhos da classe module e colocar como background a cor azul.
$(document).ready(function() {
    $('.module').filter("*").css('background-color', 'blue');
    });

// 4) Selecionar o item da lista de índice 2 da classe module utilizando a função eq() e colocar como background a cor verde. NÃOOOOOOOO FUNCIONOUN
$(document).ready(function() {
    $('.module').eq(2).css('background-color', 'green');
    });

// 5) Selecionar o primeiro elemento da lista myList e colocar como background a cor Amarelo.NÃOOOOOOOO FUNCIONOUN
$(document).ready(function() {
    $('#myList').eq(1).css('background-color', 'yellow');
    });

// 6) Selecionar o último elemento da lista slideshow e colocar como background a cor preta.
$(document).ready(function() {
    $('#slideshow li').last().css('background-color', 'black');
    });

// 7) Verifique se o primeiro elemento filho de Search é um form. Se for, exiba um alert na tela com a mensagem “O elemento form é filho de Search. Caso não seja, exiba um alert na tela com a mensagem “O elemento form não é filho de Search.

    $('#search').ready(function(){
        if($('#search:first').is('form')){
            alert('O elemento form é filho de Search.');
        }else{
            alert('O elemento form não é filho de Search');
        }
    });

// 8) Selecionar todas as listas não ordenadas, exceto a de id slideshow e colocar como background a cor azul.
$(document).ready(function() {
    $('ul').not('#slideshow').css('background-color', 'blue');
    });

// 9) Selecionar todos os itens de lista que possuam um parágrafo nele e colocar como background a cor rosa.
$(document).ready(function() {
    $('li').has('p').css('background-color', 'pink');
    });

// 10) Alterar o conteúdo da tag que possui a classe myListItem para “Este é um novo item de lista”
$(document).ready(function() {
    $('#myListItem').text('Este é um novo item de lista');
    });

// 11) Selecionar o próximo elemento após o elemento de classe selected e colocar um background cinza nele.
$(document).ready(function() {
    $('.selected').next().css('background-color', 'gray');
    });

// 12) Selecionar o elemento anterior ao elemento de classe input_text e colocar um background cinza nele.
$(document).ready(function() {
    $('.input_text').prev().css('background-color', 'gray');
    });

// 13) Selecionar todos os irmãos do elemento que possui o id listItem_2 e colocar um background verde nele.
$(document).ready(function() {
    $('#listItem_2').siblings().css('background-color', 'green');
    });

// 14) Selecionar todos os elementos que possuam um atributo src e colocar um background amarelo nele.
$(document).ready(function() {
    $('*[src]').css('background-color', 'yellow');
    });

// 15) Selecionar dentro do elemento de id header e dentro do id nav, o elemento que contenha a classe selected. VERIFICAR ESSSSSSSSSSSSSSSSSSSSE
$(document).ready(function() {
    $('header').parents('.selected').css('color', 'yellow');
    });

// 16) Selecionar todos os elementos que possui o atributo type=”text”.
$(document).ready(function() {
    $('*[type="text"]').css('border', 'solid 3px red');
    });

// 17) Selecionar todos os elementos que possuam o atributo value.
$(document).ready(function() {
    $('*[value]').css('border', 'solid 3px purple');
    });

// 19) Selecionar todos os elementos que possuam o atributo href que inicia com a palavra blog e colocar um background verde nele. VERIFICAR ESSSSSSSSSSSSSSSSSSSSSSSSSSSE
$(document).ready(function() {
    $('*[href]').has('blog').css('background-color', 'yellow');
    });

// 20) Selecionar todos os elementos que possuam o atributo value que terminam com a letra a e colocar um background vermelho nele. MESMA COISA DA LINHA 19, VERIFICARRRRRRRRRRRRRRRRRRRRRRR
$(document).ready(function() {
    $('*[value]').css('background-color', 'red');
    });

// 21) Selecionar todos os elementos que possuam o atributo href que contenham a palavra html e colocar um background cinza nele.
$(document).ready(function() {
    $('*[value]').css('background-color', 'gray');
    });
