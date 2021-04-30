        /*2.Pagina de Calculadora
        A.O usuário pode selecionar o modelo para utilizar, o outro modelo tem que ficar indisponível(Simples e Científica)
        B. ambas funcionais se habilitada (Escolher habilitar por botão)
        C. A científica deve ter as mesma funcionalidades da simples adicionando:
        Raiz quadrada , elevado a 2 , elevado a 3 e numero Pi. */

        //calculadora simples
        //1° fzr as funções de uma calculadora(soma,divisao,...)
        //2° fzr aparecer na tela o resultado chamando cada uma
        //3° arrumar o layout

        
        function habilita1(){
            var a = document.getElementById("primeira").style.display = "block";
            
            var b = document.getElementById("segunda").style.display = "none";
        }

        function habilita2(){
            var a = document.getElementById("primeira").style.display = "none";            ;

            var b = document.getElementById("segunda").style.display = "block";
        }
        function habilita3(){
            var a = document.getElementById("primeira").style.display = "block";            ;

            var b = document.getElementById("segunda").style.display = "block";
        }

//primeira calculadora

        function escolha1(num1) {
            var a =  document.calc1.visor1.value
            document.calc1.visor1.value = a + num1;
        }

        function reset() {
            return ""
        }

        //prossegue o resultado da conta
        
        function calcular1(a) {
            var a =  document.calc1.visor1.value;
            if(a){
                document.calc1.visor1.value = eval(a);
            }
        }
        
        



        //calculadora cientifica
        //1° fzr as funções de uma calculadora(soma,divisao,...) e acrescentar os requisitos
        //2° fzr aparecer na tela o resultado chamando cada uma
        //3° arrumar o layout

//segunda calc 
        
        function escolha2(num2) {
            var b =  document.calc2.visor2.value
            document.calc2.visor2.value = b + num2;
        }
        
        function calcular2(b) {
            var b =  document.calc2.visor2.value;
            if(b){
                document.calc2.visor2.value = eval(b);
            }
            
        }

        function numPi2(num2) {
            num2 = document.calc2.visor2.value
            document.calc2.visor2.value = num2 + 3.14;
            
        }

        function raiz(num2){
           var raiz = document.calc2.visor2.value; 
           raiz = (Math.sqrt(raiz));
           
           var resultado = raiz; 
           document.calc2.visor2.value = resultado;
        }

        function elevado2(num2) {
           var elevar2 = document.calc2.visor2.value; 
           elevar2 = (Math.pow(elevar2, 2)); 
           var result2 = elevar2;
           document.calc2.visor2.value = result2
        }

        function elevado3(num2) {
           var elevar3 = document.calc2.visor2.value; 
           elevar3 = (Math.pow(elevar3, 3));
           var result3 = elevar3;
           document.calc2.visor2.value = result3
        }    