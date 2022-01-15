
const dataNascimento = document.querySelector('#nascimento')
dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
})

const validaDataNascimento = (input) => {

    const dataRecebida = new Date(input.value)
    let mensagem = ''

    if(!maiorDeIdade(dataRecebida)){
        mensagem = 'Você deve ser maior que 18 anos para se cadastrar.'
    }

    input.setCustomValidity(mensagem)
}

const maiorDeIdade = (data) => {
    const dataAtual = new Date()

    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataMais18 <= dataAtual
}
    