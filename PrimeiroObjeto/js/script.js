const produtos = {
    produto1:{
        nome: "Camiseta Louis Vuitton",
        preco: 150.99,
        disponivel: true
    },

    produto2: {
        nome: "Calcinha Calvin Klein",
        preco: 299.99,
        disponivel: false
    },

    produto3: {
        nome: "Tenis Nike",
        preco: 400.00,
        disponivel: true,
    }

};

const listaDeProdutosDiv = document.getElementById('Lista-de-produtos');
for(const key in produtos){
    if(produtos.hasOwnProperty(key)){
        const produto = produtos[key];

        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const nomeH3 = document.createElement('h3')
        nomeH3.textContent = produto.nome;

        const precop = document.createElement('p');
        precop.textContent = `Preço: R$ ${produto.preco.toFixed(2)}`;

        const disponibilidadep = document.createElement('p');
        disponibilidadep.textContent = `Disponibilidade: `

        const spanDisponibilidade = document.createElement('span');
        spanDisponibilidade.textContent = produto.disponivel ? 'Disponivel' : 'Indisponível';
        spanDisponibilidade.classList.add(produto.disponivel ? 'disponivel' : 'indisponivel');

        disponibilidadep.appendChild(spanDisponibilidade);

        produtoDiv.appendChild(nomeH3);
        produtoDiv.append(precop);
        produtoDiv.appendChild(disponibilidadep);

        listaDeProdutosDiv.appendChild(produtoDiv);
    }
}