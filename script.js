var vetor = [];

var add = document.getElementById("adicionar");
add.addEventListener("click", adicionar);

function adicionar() {
    var valor = document.getElementById("value");
    var lista = document.getElementById("lista");

    if (valor.value.length == 0 || valor.value <= 0 || valor.value > 100) {
        window.alert("Número inválido!");
    }
    else {
        valor = Number(valor.value);
        if (lista.length == 0) {
            var item = document.createElement("option");
            item.innerText = `Valor ${valor} adicionado!`;
            vetor.push(valor);
            lista.style.display = "block";
            lista.appendChild(item);
        } else {
            if (vetor.indexOf(valor) == -1) {
                var item = document.createElement("option");
                item.innerText = `Valor ${valor} adicionado!`;
                vetor.push(valor);
                lista.appendChild(item);
            } else {
                window.alert("Valor já adicionado!");
            }
        }
    }
}

var botao = document.getElementById("action");
botao.addEventListener("click", clicar);

function clicar() {
    if (vetor.length == 0) {
        window.alert("Adicione um número primeiro!");
    }
    else {
        var res = document.querySelector("div.res");
        res.innerHTML = "";
        var tot = document.createElement("p");

        if (vetor.length == 1) {
            tot.innerHTML = `Ao todo, temos 1 número cadastrado.`;
        } else {
            tot.innerHTML = `Ao todo, temos ${vetor.length} números cadastrados.`;
        }
        res.appendChild(tot); //Quantidade de números

        var maior = document.createElement("p");
        var menor = document.createElement("p");

        var vet_org = vetor.sort(function(a, b){return a-b});

        maior.innerHTML = `O maior valor informado foi ${vet_org[vet_org.length - 1]}.`;
        res.appendChild(maior); //adiciona o maior valor

        menor.innerHTML = `O menor valor informado foi ${vet_org[0]}.`;
        res.appendChild(menor);

        var soma = document.createElement("p");
        var s = 0;

        for (let pos in vetor) {
            s += vetor[pos];
        }

        soma.innerHTML = `Somando todos os valores, temos ${s}.`;
        res.appendChild(soma);

        var media = document.createElement("p");
        var m = s / vetor.length;
        m.toFixed(2);

        media.innerHTML = `A média dos valores digitados é ${m}.`;
        res.appendChild(media);
    }
}

var clear = document.getElementById("clear");
clear.addEventListener("click", limpar);

function limpar(){

    window.alert("Tudo limpo!");

    var lista = document.getElementById("lista");
    lista.innerHTML = "";

    var res = document.querySelector("div.res");
    res.innerHTML = ""; //limpa o resultado

    vetor = [];

    
}