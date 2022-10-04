function adicionaItem(event) {
    // atribuindo a tag container na variável container.
    let container = document.getElementById("container");

    // atribuindo a funcionalidade de criar um elemento article na variável novoItem.
    let novoItem = document.createElement("article");

    // inserindo o texto "novo item" dentro do HTML da variável novoItem.
    novoItem.innerHTML = "novo item"

    // adicionando a classe item na variável novoItem.
    novoItem.classList.add("item");

    // adicionando o atributo onclick e a função de remover ao ser clicado à variável novoItem.
    novoItem.setAttribute("onclick", "removeItem(event)")

    // inserindo a variável novoItem, já com a classe e o atributo definido no container.
    container.appendChild(novoItem);
}

function removeItem(event) {
    event.target.remove();
}