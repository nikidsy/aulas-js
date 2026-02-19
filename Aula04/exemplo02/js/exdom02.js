const elementolista = document.getElementById('lista');
const elementoinput = document.getElementById('novoItem');
const elementobotao = document.getElementById('Adicionar');

elementobotao.addEventListener('click', function(){
    const novoProduto = elementoinput.value;
    
    if(novoProduto !== ""){
        const novoItemElemento = document.createElement('li')
        novoItemElemento.textContent = novoProduto;
        elementolista.appendChild(novoItemElemento);
        elementoinput.value = '';
    }
})