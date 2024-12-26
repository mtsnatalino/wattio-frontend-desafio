const ofertas = [
  {
    nome: "EnerFácil",
    valorMinimoMensal: 1000,
    valorMaximoMensal: 40000,
    desconto: 0.2,
  },
  {
    nome: "EnerLimpa",
    valorMinimoMensal: 10000,
    valorMaximoMensal: 80000,
    desconto: 0.25,
  },
  {
    nome: "EnerGrande",
    valorMinimoMensal: 1000,
    valorMaximoMensal: 40000,
    desconto: 0.2,
  },
];

const mostrarOfertasBtn = document.getElementById("mostrarOfertasBtn");
const opcoesOfertas = document.getElementById("opcoesOfertas");
const ofertasForm = document.getElementById("ofertasForm");
const contratarBtn = document.getElementById("contratarBtn");
const valorContaInput = document.getElementById("valorConta");

mostrarOfertasBtn.addEventListener("click", () => {
  const valorConta = parseFloat(valorContaInput.value);

  if (isNaN(valorConta) || valorConta <= 0) {
    alert("Por Favor, insira um valor válido!");
    return;
  }
});

const ofertasFiltradas = ofertas.filter(
  (oferta) =>
    valorConta >= oferta.valorMinimoMensal &&
    valorConta <= oferta.valorMaximoMensal
);

ofertasForm.innerHTML = "";

if (ofertasFiltradas.length === 0) {
  ofertasForm.innerHTML =
    "<p>Nenhuma oferta disponível para o valor informado.</p>";
  contratarBtn.style.display = "none";
} else {
  ofertasFiltradas.forEach((oferta, index) => {
    const economia = valorConta * oferta.desconto;

    const ofertaElement = `
        <label>
            <input type="radio" name="oferta" value="${index}" />
            <div classe="oferta">
                <h3>${oferta.nome}</h3>
                <p>Valor da conta: R$ ${valorConta.toFixed(2)}</p>
                <p>Desconto: R$ ${oferta.desconto * 100}%</p>
                <p>Valor da conta: R$ ${economia.toFixed(2)}</p>
            </div>
        </label>        
        `;
    ofertasForm.insertAdjacentHTML("beforeend", ofertaElement);
  });
}
