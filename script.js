const greenButton = document.getElementById("greenButton");
greenButton.addEventListener("click", function() {
  document.getElementById("mapInfo").innerHTML = "<h1>Luskan</h1> <p>Cidade de Luskan.<p>";
});

const redButton = document.getElementById("redButton");
redButton.addEventListener("click", function() {
  document.getElementById("mapInfo").innerHTML = "<h1>Nome da Cidade</h1> <p>Descrição da cidade.</p>";
});