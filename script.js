let times = [
  {
    modalidade: "Basquete",
    nome: "Lakers",
    jogadores: 6,
    cor: "dourado",
    imagem: new Image(),
  },
  {
    modalidade: "Futebol",
    nome: "Corinthians",
    jogadores: 12,
    cor: "preto",
    imagem: new Image(),
  },
  {
    modalidade: "Vôlei",
    nome: "Nestlé",
    jogadores: 6,
    cor: "azul",
    imagem: new Image(),
  },
  {
    modalidade: "Futsal",
    nome: "Atlântico",
    jogadores: 5,
    imagem: new Image(),
  },
  {
    modalidade: "Polo Aquático",
    nome: "Pinheiros",
    jogadores: 7,
    imagem: new Image(),
  },
  { modalidade: "Hóquei", nome: "Toronto", jogadores: 6, imagem: new Image() },
  {
    modalidade: "Beisebol",
    nome: "Nova York",
    jogadores: 9,
    imagem: new Image(),
  },
  {
    modalidade: "Críquete",
    nome: "Nova Delhi",
    jogadores: 11,
    imagem: new Image(),
  },
];

times[0].imagem.src = "src/lakers.jpeg";
times[1].imagem.src = "src/corinthians.jpeg";
times[2].imagem.src = "src/nestle.jpeg";
times[3].imagem.src = "src/atlantico.jpeg";
times[4].imagem.src = "src/pinheiros.jpeg";
times[5].imagem.src = "src/toronto.jpeg";
times[6].imagem.src = "src/Nova York.jpeg";
times[7].imagem.src = "src/novadelhi.jpeg";

function sortearTime() {
  var timeSorteado = times[Math.floor(Math.random() * times.length)];
  return timeSorteado;
}

function mostrarTime() {
  var time = sortearTime();
  var resultado = document.getElementById("resultado");
  resultado.innerHTML =
    "Time: " +
    time.nome +
    "<br>" +
    "Modalidade: " +
    time.modalidade +
    "<br>" +
    "Jogadores: " +
    time.jogadores +
    "<br>";
  resultado.innerHTML += "<br>";
  resultado.appendChild(time.imagem);
}
