const fatoElement = document.getElementById("fato");
const buscarElement = document.getElementById("buscar");

async function buscar(){
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const dados = await response.json();
        fatoElement.textContent = dados.fact;
    } catch (error) {
        fatoElement.textContent = 'Pero le falta sazon';
    }
}

buscarElement.addEventListener('click', buscar);
buscar();