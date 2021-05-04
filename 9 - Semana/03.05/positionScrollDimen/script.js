// 1- Deve existir um menu horizontal que ao redimensionar a janela do navegador o menu irá sumir.
window.addEventListener("resize", function(){
    var tam = $(window).width();
    if (tam >=1024){
        $(".menu").show();
        }else{
            $(".menu").hide();
    }
})

// 2- Crie um elemento html(paragrafo, imagem, div...) posicione-o e retorno em um alert a posição deste elemento com a função position e com o offset;
$(document).ready(function(){
    $(".posTexto").click(function (){
        var x = $(".resumo").position();
        alert("Top position: " + x.top+ " Left position: " + x.left);
    });


// 3- Você deve criar uma box com um texto que contenha scroll e um ao clicar no botão irá retornar a posição em que o scroll está. Você escolhe se vai usar o scrollTop ou scrollLeft.
    $(".posScrool").click(function () {
        alert($(".resumo").scrollTop() + " px");
    });

// 4- Use os métodos jQuery para definir a altura e a largura de <div> em 500 pixels.
    $(".posScrool").click(function () {    
    $(".resumo").width(500).height(500);
    });

// 5 - Use o método jQuery para obter a altura de um elemento <div>, excluindo preenchimento,  borda e margem.
    alert(("Altura do texto kiwi EXCLUINDO preenchimento, borda e margem: ")+($(".resumo").height()));


// 6 - Use um método jQuery para obter altura de um elemento <div>, incluindo preenchimento (borda e margem)
    alert(("Altura do texto kiwi INCLUINDO preenchimento, borda e margem: ")+$(".resumo").outerHeight());

});