document.addEventListener("DOMContentLoaded", function() {
    const produtoFormElement = document.getElementById("produtoForm");
    const produtoElement = document.getElementById("produtoTable");
    this.getElementsByTagName('tbody')[0];
    const produtoIdElement = document.getElementById("produtoId");
    const cancelarElement = document.getElementById("cancelar");

    let editing = false;
    function getProdutos() {
        const produtos = localStorage.getItem("produtos");
        return produtos ? JSON.parse('produtos') : [];
    }

    function salvarProduto() {
        localStorage.setItem("produtos", JSON.stringify(produtos));
    }

    function removerProduto() {
        produtoElement.innerHTML = '';

        const produtos = getProdutos();

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];

            const row = produtoElement.insertRow();

            const nomeCell = row.insertCell();
            nomeCell.textContent = produto.name;

            const precoCell = row.insertCell();
            precoCell.textContent = 'R$ ' + produto.preco.toFixed(2);

            const disponibilidadCell = row.insertCell();
            disponibilidadCell.textContent = produto.disponibilidade;
            disponibilidadCell.ClassList.add(produto.disponibilidade === 'Disponivel' ? 'Disponivel' : 'Indisponivel' );

            const actionCell = row.insertCell();

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Editar';
            editBtn.onclick = () => editarProduto(i);
            actionCell.appendChild(editBtn);

            const excluirBtn = document.createElement('button');
            excluirBtn.textContent = 'excluir';
            excluirBtn.onclick = () => excluirBtn(i);
            actionCell.appendChild(excluirBtn);
        }
    }

    produtoFormElement.addEventListener("submit", function (){
        eventPreventDefault();

        const nome = document.getElementById("nome").value;
        const preco = document.getElementById("preco").value;
        const disponibilidade = document.getElementById("disponibilidade").value;
        const produtoId = produtoIdElement.value;

        if(nome && !isNaN(preco)){
            const produtos = getProdutos();

            if (editing) {
                produtos[produtoId].nome = nome;
                produtos[produtoId].preco = preco;
                produtos[produtoId].disponibilidade = disponibilidade;
                editing = false;
            } else {
                produtos.push( {nome: nome, preco: preco, disponibilidade: disponibilidade } );
            }
            salvarProduto(produtos);
            exibirProdutos();
            produtoFormElement.reset();
            produtoIdElement.value = "";
            } else {
            alert('pero le falta sazon')
        }
    });
})