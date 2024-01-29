const form = document.getElementById('form');
const contatos = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    AdicionarLinha();
    AtualizarTabela();
});

function AdicionarLinha(){
    const NomeContato = document.getElementById('nome-contato');
    const Numtelefone = document.getElementById('numero-contato').value;

    if (!validarNumeroTelefone(Numtelefone)) {
        alert('Formato de telefone inválido. Use o formato (xx) xxxxx-xxxx');
        return;
    }

    if (contatos.includes(NomeContato.value)) {
        alert(`O Contato: ${NomeContato.value} já foi inserido`);
        return;
    }

    contatos.push(NomeContato.value);
    
    let linha = '<tr>';
    linha += `<td>${NomeContato.value}</td>`;
    linha += `<td>${Numtelefone}</td>`;

    linhas += linha;

    NomeContato.value = '';
    document.getElementById('numero-contato').value = '';
}

function AtualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function validarNumeroTelefone(numero) {
    const formatoTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return formatoTelefone.test(numero);
}