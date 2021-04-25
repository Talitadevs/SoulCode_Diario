function mega(){
    let numeros = new Array();
    while(numeros.length <6){//gera numero enquanto o comp for menor que 7 posições.
        let aleatorio=Math.round(Math.random()*(60 - 1) +1);//numero aleatorio 
                    
        if(numeros.indexOf(aleatorio)==-1){//sera add no array somente se não for encontrado.
            numeros.push(aleatorio);//inserir no array
        }
    }
        alert(numeros);
}
        

    
