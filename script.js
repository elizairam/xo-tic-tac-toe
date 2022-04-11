const quadrado = {
  selecionado: false,
  esquemaDeCores: ["#77BFA3", "#861388", "#5adbff"],
  valoresId: [],
  detalhes: {
    cor: "#77BFA3",
    background: "",
    valor: "",
  },
};

const partida = {
  numeroDeJogadas: 0,
  numeroDeJogadasPar: 0,
  numeroDeJogadasImpar: 0,
  status: "",
};

const sequencia_ids_jogadas_impar = [];
const sequencia_ids_jogadas_par = [];

const vitoriasPossiveis = [
  ["1", "2", "3"],
  ["1", "4", "7"],
  ["1", "5", "9"],
  ["2", "5", "8"],
  ["3", "6", "9"],
  ["3", "5", "7"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

function SelecionarQuadrado(id) {
  const quadradoSelecionadoDOM = document.getElementById(id);
  const jogadorSelecionadoDOM = document.getElementById("jogador");
  quadrado.selecionado = true;
  quadrado.valoresId.push(id);
  partida.numeroDeJogadas += 1;
  partida.status = "iniciada";

  // jogador O
  if (partida.numeroDeJogadas % 2 == 0) {
    quadrado.detalhes.valor = "par";
    quadrado.detalhes.cor = quadradoSelecionadoDOM.style.color =
      quadrado.esquemaDeCores[1];
    quadrado.detalhes.background = quadradoSelecionadoDOM.style.background =
      quadrado.esquemaDeCores[1];
    jogadorSelecionadoDOM.innerHTML = "O";
    jogadorSelecionadoDOM.style.color = quadrado.esquemaDeCores[1];

    sequencia_ids_jogadas_par.length > 7
      ? (sequencia_ids_jogadas_par.length = 0)
      : sequencia_ids_jogadas_par.push(id);
    sequencia_ids_jogadas_par.sort();
    partida.numeroDeJogadasPar += 1;
    VerificaSeVence("par");
  }

  // jogador X
  if (partida.numeroDeJogadas % 2 != 0) {
    quadrado.detalhes.valor = "impar";
    quadrado.detalhes.cor = quadradoSelecionadoDOM.style.color =
      quadrado.esquemaDeCores[2];
    quadrado.detalhes.background = quadradoSelecionadoDOM.style.background =
      quadrado.esquemaDeCores[2];
    jogadorSelecionadoDOM.innerHTML = "X";
    jogadorSelecionadoDOM.style.color = quadrado.esquemaDeCores[2];

    sequencia_ids_jogadas_impar.length > 7
      ? (sequencia_ids_jogadas_impar.length = 0)
      : sequencia_ids_jogadas_impar.push(id);
    sequencia_ids_jogadas_impar.sort();
    partida.numeroDeJogadasImpar += 1;
    VerificaSeVence("impar");
  }
}

function PossibilidadesVitoriaImpar() {
  for (let i = 0; i < vitoriasPossiveis.length; i++) {
    for (let j = 0; j < vitoriasPossiveis[i].length; j++) {
      if (
        sequencia_ids_jogadas_impar[0] === vitoriasPossiveis[i][0] ||
        sequencia_ids_jogadas_impar[1] === vitoriasPossiveis[i][0] ||
        sequencia_ids_jogadas_impar[2] === vitoriasPossiveis[i][0]
      ) {
        if (
          sequencia_ids_jogadas_impar[1] === vitoriasPossiveis[i][1] ||
          sequencia_ids_jogadas_impar[2] === vitoriasPossiveis[i][1] ||
          sequencia_ids_jogadas_impar[3] === vitoriasPossiveis[i][1]
        ) {
          if (
            sequencia_ids_jogadas_impar[2] === vitoriasPossiveis[i][2] ||
            sequencia_ids_jogadas_impar[3] === vitoriasPossiveis[i][2] ||
            sequencia_ids_jogadas_impar[4] === vitoriasPossiveis[i][2]
          ) {
            return (partida.status = "finalizada impar");
          }
        }
      }
    }
  }
}

function PossibilidadesVitoriaPar() {
  for (let i = 0; i < vitoriasPossiveis.length; i++) {
    for (let j = 0; j < vitoriasPossiveis[i].length; j++) {
      if (
        sequencia_ids_jogadas_par[0] === vitoriasPossiveis[i][0] ||
        sequencia_ids_jogadas_par[1] === vitoriasPossiveis[i][0] ||
        sequencia_ids_jogadas_par[2] === vitoriasPossiveis[i][0]
      ) {
        if (
          sequencia_ids_jogadas_par[1] === vitoriasPossiveis[i][1] ||
          sequencia_ids_jogadas_par[2] === vitoriasPossiveis[i][1] ||
          sequencia_ids_jogadas_par[3] === vitoriasPossiveis[i][1]
        ) {
          if (
            sequencia_ids_jogadas_par[2] === vitoriasPossiveis[i][2] ||
            sequencia_ids_jogadas_par[3] === vitoriasPossiveis[i][2] ||
            sequencia_ids_jogadas_par[4] === vitoriasPossiveis[i][2]
          ) {
            return (partida.status = "finalizada par");
          }
        }
      }
    }
  }
}

function VerificaSeVence(jogador) {
  if (jogador === "impar") {
    PossibilidadesVitoriaImpar();
    partida.status === "finalizada impar"
      ? (document.getElementById("vencedor").innerHTML = "X")
      : null;
  }

  if (jogador === "par") {
    PossibilidadesVitoriaPar();
    partida.status === "finalizada par"
      ? (document.getElementById("vencedor").innerHTML = "O")
      : null;
  }
}

function Reset() {
  quadrado.valoresId = [];
  partida.numeroDeJogadas = 0;
  partida.numeroDeJogadasPar = 0;
  partida.numeroDeJogadasImpar = 0;
  sequencia_ids_jogadas_impar.length = 0;
  sequencia_ids_jogadas_par.length = 0;
  const colecaoQuadradosDOM = document.getElementsByClassName("quadrado");
  colecaoQuadradosDOM[0].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[0].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[1].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[1].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[2].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[2].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[3].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[3].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[4].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[4].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[5].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[5].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[6].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[6].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[7].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[7].style.color = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[8].style.background = quadrado.esquemaDeCores[0];
  colecaoQuadradosDOM[8].style.color = quadrado.esquemaDeCores[0];

  document.getElementById("jogador").innerHTML = "-";
  document.getElementById("jogador").style.color = "#000000";
  document.getElementById("vencedor").innerHTML = "-";
}
