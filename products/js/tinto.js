let itens = 0;
let value, tinto, branco, rose;
let show, total, cupom;


qtdcupom = 1;
tinto = 1200;
rose = 1600;
espumante = 2000;

function Adicionar () {

    if (itens >= 0) {
        itens++ ;
        show = itens
        alert("Item Adicionado com sucesso!!")
        value = itens * tinto
    }

    if (value <= 0) {
        
        total = "O valor total dos itens é: " + value
        document.getElementById("value").innerHTML = total
    }
    else {
        qtdcupom = 1
        total = "O valor total dos itens é: " + value
        document.getElementById("value").innerHTML = total
        document.getElementById("amount").innerHTML = show
    }

}

function Subtrair () {

    value = itens * tinto
    if (itens <= 0) {
        alert("Você não tem itens em seu carrinho")
    }
    else {
        qtdcupom = 1
        itens--;
        show = itens
        alert("Item removido do carrinho")
    
        document.getElementById("amount").innerHTML = show
    }

    if (value <= 0) {
        total = "O valor total dos itens é: " + value
        value = 0
        document.getElementById("value").innerHTML = total
    } else {
        
  
        value = value - tinto
        if (value < 0) {
            value = 0
            total = "O valor total dos itens é: " + value
            document.getElementById("value").innerHTML = total
        }
        total = "O valor total dos itens é: " + value
        document.getElementById("value").innerHTML = total
    }
}

function Enviar (){

    cupom = document.getElementById("cupom").value

    console.log(cupom)

    if (cupom == "FIAP2024") {  
        while (qtdcupom == 1) {
            
            if (qtdcupom == 1) {
                console.log(qtdcupom)
                qtdcupom = 2
                if (value > 0) {
                    value = tinto * itens
                    value = value - ((value / 100) * 10)
                    total = "O valor total dos itens é: " + value
                    document.getElementById("value").innerHTML = total
                }
                else {
                    alert("Adicione mais itens ao seu carrinho para conseguir utilizar esse cupom!!")
                }
            } 
            else {
                alert("Você pode utilizar esse cupom apenas uma vez")
            }
            qtdcupom = 2
    
         }

    }
    else  {

        alert("Digite um cupom válido")
    }
}