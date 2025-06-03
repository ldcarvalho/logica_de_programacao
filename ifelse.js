let respostaCorreta = 0
let respostaIncorreta = 0 

//Pergunta1
console.log("Qual o meu nome?")
console.log("A - Lívia")
console.log("B - Bruna")
console.log("C - Maria")
console.log("D - João")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "A" || pergunta1 =="Lívia"){
    console.log("Alternativa correta")
    respostaCorreta ++
}

//Pergunta2
console.log("Quanto é 20+20?")
console.log("A - 20")
console.log("B - 15")
console.log("C - 40")
console.log("D - 50")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "C" || pergunta1 =="40"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta3
console.log("Quanto é 20+20?")
console.log("A - 20")
console.log("B - 15")
console.log("C - 40")
console.log("D - 50")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "C" || pergunta1 =="40"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta4
console.log("Qual a cor do vestido da rapunzel?")
console.log("A - amarelo")
console.log("B - azul")
console.log("C - lilás")
console.log("D - vermelho")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "C" || pergunta1 =="lilás"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta5
console.log("Quantos anos eu tenho?")
console.log("A - 23")
console.log("B - 17")
console.log("C - 44")
console.log("D - 16")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "D" || pergunta1 =="16"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta6
console.log("Qual a melhor série?")
console.log("A - Vis a Vis")
console.log("B - Briedgerton")
console.log("C - Grey´s anatomy")
console.log("D - Ayrton Senna")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "B" || pergunta1 =="Briedgerton"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//Pergunta7
console.log("Quanto é 50 + 50")
console.log("A - 100")
console.log("B - 70")
console.log("C - 40")
console.log("D - 0")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "A" || pergunta1 =="100"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta8
console.log("Qual a cor do cabelo da Fiona")
console.log("A - Castanho")
console.log("B - Ruivo")
console.log("C - Loiro")
console.log("D - Preto")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "B" || pergunta1 =="Ruivo"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta9
console.log("Quantos filmes o diário da princesa tem?")
console.log("A - 1")
console.log("B - 2")
console.log("C - 3")
console.log("D - 4")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "B" || pergunta1 =="2"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}

//Pergunta10
console.log("Quem pintou o quadro a noite estrelada?")
console.log("A - Leonardo da Vinci")
console.log("B - Beethoven")
console.log("C - Picasso")
console.log("D - Vicent Van Gogh")
let pergunta1 = prompt("Digite a alternativa correta: ")
if(pergunta1 == "D" || pergunta1 =="Vicent Van Gogh"){
    console.log("Alternativa correta")
    respostaCorreta ++
}
else{
    console.log("Alternativa Errada!")
    respostaIncorreta ++
}
//Exibir resultado
console.log("\n Resumo Final")
console.log("Respostas corretas: "+ respostaCorreta)
console.log("Reapostas incorretas: "+ respostaIncorreta)
