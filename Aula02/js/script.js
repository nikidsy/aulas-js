const exemploArrayLiteralDiv = document.getElementById('exemplo-array-literal');
const frutas = ['maçã', 'uva', 'banana'];

exemploArrayLiteralDiv.innerHTML = `
   <h2>Exemplo de array com literal</h2>
   <p>Array: [ ${frutas} ]</p>

`;

const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso');
const nums = [1, 2, 3, 4, 5];
const primeiroElemento = nums[0];
const segundoElemento = nums[1];
const terceiroElemento = nums[2];
const quartoElemento = nums[3];
const quintoElemento = nums[4];

exemploArrayAcessoDiv.innerHTML = `
    <h2>Exemplo de acesso aos elementos do array</h2>
    <p>Primeiro elemento: ${ primeiroElemento }</p>
    <p>Segundo elemento: ${ segundoElemento }</p>
    <p>Terceiro elemento: ${ terceiroElemento }</p>
    <p>Quarto elemento: ${ quartoElemento }</p>
    <p>Quinto elemento: ${ quintoElemento }</p>
`;

const exemploArrayModificadoDiv = document.getElementById('exemplo-array-modificado');
const cores = ['azul', 'amarelo', 'verde'];
cores[0] = 'rosa';

exemploArrayModificadoDiv.innerHTML = `
    <h2>Exemplo de array modificado</h2>
    <p>Array: [ ${ cores } ]</p>
`