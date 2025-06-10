const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');
const btn = document.getElementById('btnDicas');
const dicas = document.getElementById('dicas');
const listaDicas = document.getElementById('listaDicas');
const dicasArray = [
  'Dica 1: .',
  'Dica 2: .',
  'Dica 3: .'
];

// Seletor Data de Nascimento
const seletorDia = document.getElementById('seletor-dia');
const seletorMes = document.getElementById('seletor-mes');
const seletorAno = document.getElementById('seletor-ano');
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let contadorDia = 1;
let contadorDiaFlag = 1;
let contadorDiaIntervalo;
let contadorDiaIntervaloTempo;
let contadorDiaDefinido = 1;
let contadorMes = 0;
let contadorMesDefinido = 1;
let contadorAno = 0;
let contadorAnoDefinido = 1;
let dataInformada;
const hoje = new Date();

//Função para mudar o dia
function mudarDia(){
  if(contadorDiaFlag == 1){
    contadorDia++;
    if(contadorDia >= 31){
      contadorDiaFlag = 0;
    }
  }
  else{
    contadorDia--;
    if(contadorDia == 1){
      contadorDiaFlag = 1;
    }
  }
  contadorDiaIntervaloTempo = Math.floor(Math.random() * 300) + 1;
  seletorDia.textContent = contadorDia;
};
//Função mudar o mês
function qualMes(){
  contadorMes = Math.floor(Math.random() * 12);
}
//Função limitar o Ano
function limitarAno(){
   if (contadorAno >= 2025){
    contadorAno = 2025
    contadorAnoDefinido=0;
  }
}
//Função resetar campos das datas
function resetarDatas(){
  contadorDiaDefinido = 1;
  contadorMesDefinido = 1;
  contadorAnoDefinido = 1;
  contadorAno = 0;
  clearInterval(contadorDiaIntervalo);
  seletorDia.textContent = 'Dia';
  seletorMes.textContent = 'Mês';
  seletorAno.textContent = 'Ano';
}

//Controle da data de nascimento
seletorDia.addEventListener('mouseenter', () =>{
  if (contadorDiaDefinido){
    clearInterval(contadorDiaIntervalo);
    contadorDiaIntervalo = setInterval(mudarDia,contadorDiaIntervaloTempo)
  }
});
seletorDia.addEventListener('mouseleave', () =>{
  if (contadorDiaDefinido){
    clearInterval(contadorDiaIntervalo);
    contadorDiaIntervalo = setInterval(mudarDia,contadorDiaIntervaloTempo)
  }
});
seletorDia.addEventListener('click', () =>{
   if (contadorDiaDefinido){
  contadorDia = Math.floor(Math.random() * 31) + 1;
  }
});
seletorMes.addEventListener('click', () =>{
  clearInterval(contadorDiaIntervalo);
  contadorDiaDefinido = 0;
});
seletorMes.addEventListener('dblclick', () =>{
  if(contadorMesDefinido){
  qualMes();
  seletorMes.textContent = meses[contadorMes];
  }
});
seletorAno.addEventListener('click',() =>{
  contadorMesDefinido = 0;
  if(contadorAnoDefinido){
  contadorAno++;
  }
  limitarAno;
  seletorAno.textContent = contadorAno;
});
seletorAno.addEventListener('contextmenu',() =>{
  contadorMesDefinido = 0;
  if(contadorAnoDefinido){
  contadorAno = contadorAno + 975;
  }
  limitarAno();
  seletorAno.textContent = contadorAno;
});

//Resetar Data
const botaoErrei = document.getElementById('editar');
botaoErrei.addEventListener('dblclick', () =>{
  resetarDatas();
});

//Enviar
const botaoAcertei = document.getElementById('salvar');
botaoAcertei.addEventListener('dblclick', () =>{
 if(
  contadorAno == hoje.getFullYear &&
  contadorMes == hoje.getMonth &&
  contadorDia == hoje.getDay
 ){
  mudarDia();
 }
 else{
  botaoAcertei.textContent = hoje.getFullYear;
 }
});

let contador = 0;

btn.addEventListener('click', () => {
  if (contador === 0) {
    dicas.classList.add('show'); 
  }
  if (contador < dicasArray.length) {
    const li = document.createElement('li');
    li.textContent = dicasArray[contador];
    listaDicas.appendChild(li);
    contador++;
  } else {
    dicas.classList.remove('show');
    listaDicas.innerHTML = '';
    contador = 0;
  }
});

inputs.forEach(input => {
  input.disabled = false;
  input.addEventListener('blur', () => {
    if (input.value.trim().length > 0) {
      input.disabled = true; 
    }
  });

});

    const btnVoltar = document.getElementById('btnVoltar');
    const btnProximo = document.getElementById('btnProximo');

    // Função para navegar para a página anterior (página 1)
    btnVoltar.addEventListener('click', () =>{
        window.location.href = 'index.html';
    });
    // Função para navegar para a próxima página (página 3)
    btnProximo.addEventListener('click', function() {
        window.location.href = 'page3.html';
    });

    // Opcional: desabilitar botões se não houver página anterior/próxima
    // Por exemplo, se esta for a primeira página:
    // btnVoltar.disabled = true;
    // Ou se for a última página:
    // btnProximo.disabled = true;

