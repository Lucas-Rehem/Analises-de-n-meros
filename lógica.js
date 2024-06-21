const lista = []
let analises = ''

// A função (adicionar) está pegando o valor digitado do usuário.

function adicionar(){
    
    let div_d = document.querySelector('#d')// Estas 3 linhas limpam a tela ao cadastrar um novo número após a análise.
    analises = ''
    div_d.innerHTML = analises
    
    let n1 = Number(document.querySelector('#n1').value)
    if(n1 <= 0 || n1 >100){ // Verificando se o número digitado é válido.
        window.alert('Valor inválido ou já encontrado na lista!')
    }else if(lista.length == 0){ // Se for válido e for o primeiro número digitado ele insere no array lista.
        lista.push(n1)
        
        let item = document.createElement('option')
        item.text = `Valor ${n1} adicionado.`
        let div_b = document.querySelector('#numeros')
        div_b.appendChild(item)

        console.log(lista) // apagar linha
    }else{ // Se não for o primeiro número digitado, ele verifica se já não está no array lista.
        let n = 0
        for(let c = 0; c < lista.length; c++){
            if(n1 == lista[c]){
                n = 1
            }
        }
        if(n == 1){ // Se o número ja tiver sido inserido, ele avisa o usuário e não insere novamente.
            window.alert('Valor inválido ou já encontrado na lista!')
        }else{ // Se o número for válido e ainda não tiver sido inserido, ele o insere no array lista.
            lista.push(n1)
            console.log(lista) // apagar linha.

            let item = document.createElement('option')
            item.text = (`Valor ${n1} adicionado.`)
            let div_b = document.querySelector('#numeros')
            div_b.appendChild(item)
        }
    }
}

// A função (finalizar) irá trabalhar os itens do array lista e retornará as analises propostas.
function finalizar(){
    if(lista.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let div_d = document.querySelector('#d')
        let maior = 0
        let menor = 0
        let soma = 0
        let media = 0

        for(let c = 0;c < lista.length;c++){
            soma = soma + lista[c]
            if(c == 0){
                menor = lista[c]
                maior = lista[c]
            }else if(lista[c] > maior){
                maior = lista[c]
            }else if(lista[c] < menor){
                menor = lista[c]
            }
        }
        media = soma / lista.length
        
        analises = ''
        analises = analises + `Ao todo, temos ${lista.length} números cadastrados.<br><hr>`
        analises = analises + `O maior valor informado foi: ${maior}<br><hr>`
        analises = analises + `O menor valor informado foi: ${menor}<br><hr>`
        analises = analises + `Somando todos os valores, temos: ${soma}<br><hr>`
        analises = analises + `A média dos valores digitádos é: ${media}<br><hr>`

        div_d.innerHTML = analises
        
    }
}