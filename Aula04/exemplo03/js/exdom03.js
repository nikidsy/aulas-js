const botao = document.getElementById('alternar');
const divmsg = document.getElementById('mensagem');

botao.addEventListener('click', function(){
    if(divmsg.classList.contains('oculto')){
        divmsg.classList.remove('oculto')
    }else {
        divmsg.classList.add('oculto')
    }
})