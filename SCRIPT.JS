let saldo = 0;

document.getElementById('fluxoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const tipo = document.getElementById('tipo').value;

    if (!descricao || isNaN(valor)) {
        alert("Por favor, insira uma descrição válida e um valor numérico.");
        return;
    }

    if (tipo === 'entrada') {
        saldo += valor;
    } else {
        saldo -= valor;
    }

    // Atualiza o saldo na interface
    document.getElementById('saldo').innerText = `R$ ${saldo.toFixed(2)}`;

    // Adiciona a transação na tabela
    const table = document.getElementById('fluxoTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    newRow.insertCell(0).innerText = descricao;
    newRow.insertCell(1).innerText = valor.toFixed(2);
    newRow.insertCell(2).innerText = tipo === 'entrada' ? 'Entrada' : 'Saída';

    // Limpa os campos do formulário
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
});
