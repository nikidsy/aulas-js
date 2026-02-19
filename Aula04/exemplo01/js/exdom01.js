const texto = document.getElementById('titulo');
const elementobotao = document.getElementById('botao');

elementobotao.addEventListener('click', function(){
 texto.textContent = 'Meu Botão';   
});