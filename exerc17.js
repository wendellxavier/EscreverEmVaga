const  vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVagas(){
    const nome = prompt ("Informe um nome para vaga:")
    const descricao = prompt("Informe uma descrição para vaga:")
    const dataLimite = prompt("Informe uma data limite para vaga (dd/mm/aaaa) para a vaga:")

    const confimacao = confirm (
        "Deseja criar uma nova vaga com essas informção?\n" +
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if(confimacao){
        const novaVaga = { nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("vaga criada.")

    }
}

function exibirVaga(){
    const indice = prompt ("Informe o indice da vaga que deseja exibir:")
    if (indice >= vagas.length || indice < 0){
        alert("indice Inválido")
        return
    }
    const vaga = vagas[indice]

    const candidaosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "vaga n° " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidaosEmTexto
    )
}

function inscreverCandidatos(){
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o indice da vaga para qual o(a) deseja se escrever:")
    const vaga = vagas[indice]

    const confimacao = confirm(
        "Deseja escrever o candidato" + candidato + " na vaga " + indice + "?\n"+
        "Nome: " + vaga.nome + "\nDescrição" + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if(confimacao){
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}

function exluirVaga(){
    const indice = prompt("Informe o indice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confimacao = confirm(
        "Tem certeza que deseja excluir a vaga? " + indice + "?\n" +
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite
    )

    if (confimacao){
        vagas.splice(indice, 1)
        alert("Vaga excluida.")
    }
}

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de vagas de Emprego" +
        "\n\nEscolha uma das opções:" +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar nova vaga" +
        "\n3. Exibir vaga" +
        "\n4. Inscrever um candidato" +
        "\n5. Excluir uma vaga" +
        "\n6. Sair."
    )

    return opcao
}

function executar(){
    let opcao = ""

    do{
        opcao = exibirMenu()

      switch(opcao){
        case "1":
            listarVagas()
            break
        case "2":
            novaVagas()
            break
        case "3":
            exibirVaga()
        case "4":
            inscreverCandidatos()
            break
        case "5":
            exluirVaga()
            break
        case "6":
            alert("saindo...")
            break
        default:
            alert("Opção Inválida.")    
      }
    } while (opcao !== "6")
}

executar()