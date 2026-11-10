(async function iniciarAplicacao() {
  try {
    const respostaPlano = await fetch("js/treino-atual.json", { cache: "no-cache" });
    if (!respostaPlano.ok) throw new Error("Não foi possível carregar js/treino-atual.json");
    const plano = await respostaPlano.json();
    if (!plano || !plano.id || !Array.isArray(plano.treinos) || plano.treinos.length === 0) {
      throw new Error("O ficheiro do plano não contém dados válidos.");
    }
    const ID_PLANO_TREINO = plano.id;
    const treinos = plano.treinos;
    const imagensExercicios = plano.imagens || {};
    const descricoesTreinos = plano.descricoes || {};
    const cardioTreinos = plano.cardio || {};
    const imagensAlternativas = plano.imagensAlternativas || {};

const BASE_IMAGENS = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";
const imagemDB = pasta => [0,1].map(i => BASE_IMAGENS + pasta + "/" + i + ".jpg");
const imagemRepDB = (slug, fases = ["main", "main"]) => fases.map(f => "https://exercise-dataset.com/images/flat/" + slug + "-" + f + ".webp");
const alternativasPorNome = {
  "Arm Circles": [
    {nome:"Shoulder Rolls",grupo:"Mobilidade",series:1,repeticoes:"10 por direção",descanso:"30–60 seg",imageUrls:imagemDB("Arm_Circles")},
    {nome:"Band Shoulder Dislocations",grupo:"Mobilidade",series:1,repeticoes:"10–12",descanso:"30–60 seg",imageUrls:imagemDB("Round_The_World_Shoulder_Stretch")}
  ],
  "Shoulder Stretch": [
    {nome:"Cross-Body Shoulder Stretch",grupo:"Mobilidade",series:1,repeticoes:"20–30 seg por lado",descanso:"30–60 seg",imageUrls:imagemDB("Shoulder_Stretch")},
    {nome:"Doorway Chest Stretch",grupo:"Mobilidade",series:1,repeticoes:"20–30 seg",descanso:"30–60 seg",imageUrls:imagemRepDB("doorway-chest-stretch")}
  ],
  "Cat Stretch": [
    {nome:"Cat-Cow Stretch",grupo:"Mobilidade",series:1,repeticoes:"8–10",descanso:"30–60 seg",imageUrls:["https://cdn.jsdelivr.net/npm/@bryllim/workout-guide@1.0.0/assets/cat-cow-stretch/frame-1.svg","https://cdn.jsdelivr.net/npm/@bryllim/workout-guide@1.0.0/assets/cat-cow-stretch/frame-3.svg"]}
  ],
  "Hip Abduction": [
    {nome:"Standing Hip Abduction",grupo:"Glúteos",series:3,repeticoes:"12–15",descanso:"60–90 seg",imageUrls:imagemRepDB("standing-hip-abduction",["start","peak"])},
    {nome:"Side-Lying Hip Abduction",grupo:"Glúteos",series:3,repeticoes:"12–15",descanso:"60–90 seg",imageUrls:imagemRepDB("side-lying-hip-abduction",["start","peak"])}
  ],
  "Hip Adduction": [
    {nome:"Cable Hip Adduction",grupo:"Adutores",series:3,repeticoes:"12–15",descanso:"60–90 seg",imageUrls:imagemDB("Cable_Hip_Adduction")}
  ],
  "Kneeling Hip Flexor": [
    {nome:"Standing Hip Flexor Stretch",grupo:"Mobilidade",series:1,repeticoes:"20–30 seg por lado",descanso:"30–60 seg",imageUrls:imagemDB("Standing_Hip_Flexors")},
    {nome:"World’s Greatest Stretch",grupo:"Mobilidade",series:1,repeticoes:"5 por lado",descanso:"30–60 seg",imageUrls:imagemDB("Worlds_Greatest_Stretch")}
  ]
};
function alternativasDo(exercicio){return alternativasPorNome[exercicio.nomeOriginal||exercicio.nome]||[];}
function abrirModalAlternativas(exercicio){
  const opcoes=alternativasDo(exercicio); if(!opcoes.length)return;
  document.querySelector(".modal-alternativas")?.remove();
  const modal=document.createElement("div"); modal.className="modal-alternativas"; modal.setAttribute("role","dialog"); modal.setAttribute("aria-modal","true");
  const painel=document.createElement("section"); painel.className="modal-alternativas-painel";
  const fechar=document.createElement("button"); fechar.className="fechar-alternativas"; fechar.type="button"; fechar.setAttribute("aria-label","Fechar"); fechar.textContent="×";
  const titulo=document.createElement("h2"); titulo.textContent="Alternativas para "+(exercicio.nomeOriginal||exercicio.nome);
  const texto=document.createElement("p"); texto.textContent="Escolhe uma opção para esta sessão. O plano guardado não é alterado.";
  const lista=document.createElement("div"); lista.className="lista-alternativas";
  opcoes.forEach(opcao=>{const botao=document.createElement("button");botao.type="button";botao.className="opcao-alternativa";const img=document.createElement("img");img.src=opcao.imageUrls[0];img.alt="Demonstração de "+opcao.nome;const info=document.createElement("span");const nome=document.createElement("b");nome.textContent=opcao.nome;const prescricao=document.createElement("small");prescricao.textContent=opcao.series+" série(s) · "+opcao.repeticoes;const usar=document.createElement("em");usar.textContent="Usar nesta sessão";info.append(nome,prescricao,usar);botao.append(img,info);botao.addEventListener("click",()=>{if(!exercicio.alternativaOriginal)exercicio.alternativaOriginal={nome:exercicio.nome,grupo:exercicio.grupo,series:exercicio.series,repeticoes:exercicio.repeticoes,falha:exercicio.falha,descanso:exercicio.descanso};exercicio.nomeOriginal=exercicio.alternativaOriginal.nome;Object.assign(exercicio,opcao);modal.remove();mostrarExercicios(obterExerciciosFiltrados());});lista.appendChild(botao);});
  const fecharModal=()=>modal.remove(); fechar.addEventListener("click",fecharModal); modal.addEventListener("click",e=>{if(e.target===modal)fecharModal();}); painel.append(fechar,titulo,texto,lista);
  if(exercicio.alternativaOriginal){const restaurar=document.createElement("button");restaurar.type="button";restaurar.className="restaurar-alternativa";restaurar.textContent="Restaurar exercício original";restaurar.addEventListener("click",()=>{Object.assign(exercicio,exercicio.alternativaOriginal);delete exercicio.alternativaOriginal;delete exercicio.nomeOriginal;delete exercicio.imageUrls;modal.remove();mostrarExercicios(obterExerciciosFiltrados());});painel.appendChild(restaurar);}
  const credito=document.createElement("small");credito.className="credito-alternativas";credito.textContent="Imagens: Free Exercise DB e RepDB.";painel.appendChild(credito);modal.appendChild(painel);document.body.appendChild(modal);fechar.focus();
}
const CHAVE_PESOS_LEGADA = "meuPlanoPesosV4";
const CHAVE_PESOS = `meuPlanoPesosV4:${ID_PLANO_TREINO}`;
const CHAVE_PERSONALIZADOS_LEGADA = "meuPlanoExerciciosPersonalizados";
const CHAVE_PERSONALIZADOS = `meuPlanoExerciciosPersonalizados:${ID_PLANO_TREINO}`;

function migrarChaveLegada(chaveAtual, chaveLegada) {
  try {
    const marcador = `meuPlanoMigradoV1:${chaveLegada}`;
    if (localStorage.getItem(marcador) === "1") return;
    if (localStorage.getItem(chaveAtual) === null) {
      const legado = localStorage.getItem(chaveLegada);
      if (legado !== null) localStorage.setItem(chaveAtual, legado);
    }
    localStorage.setItem(marcador, "1");
  } catch (erro) {
    console.warn("Não foi possível migrar os dados do plano anterior.");
  }
}

migrarChaveLegada(CHAVE_PESOS, CHAVE_PESOS_LEGADA);
const FRASES = [
  "Disciplina hoje, resultado amanhã.",
  "Pequenos progressos, grandes resultados.",
  "Treina. Regista. Evolui.",
  "Consistência todos os dias. Resultados ao longo do tempo.",
  "O resultado começa com a consistência.",
  "Não precisas ser perfeito. Precisas continuar.",
  "Cada treino conta.",
  "Faz hoje o que te aproxima do teu objetivo.",
  "A evolução acontece treino após treino.",
  "Mais consistência. Menos desculpas.",
  "Regista o progresso. Continua a avançar.",
  "Força constrói-se com tempo e dedicação.",
  "O treino de hoje é parte do resultado de amanhã.",
  "Mantém o foco. Confia no processo."
];

const muscleWiki = {
  "Costas":"lats", "Peito":"chest", "Ombros":"shoulders", "Bíceps":"biceps",
  "Tríceps":"triceps", "Pernas":"quads", "Quadríceps":"quads",
  "Posterior da coxa":"hamstrings", "Glúteos":"glutes", "Gémeos":"calves",
  "Antebraço":"forearms", "Abdómen":"abs", "Mobilidade":"shoulders"
};

const nomesExibicao = {
  "Lying Triceps Extension / Skullcrusher":"Lying Triceps Extension"
};

function normalizarTexto(texto){
  return String(texto).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function obterImagemUrls(exercicio){
  if(Array.isArray(exercicio.imageUrls)&&exercicio.imageUrls.length)return [exercicio.imageUrls[0],exercicio.imageUrls[1]||exercicio.imageUrls[0]];
  const pasta = imagensExercicios[exercicio.id];
  if(!pasta)return [];
  return [0,1].map(function(i){
    return BASE_IMAGENS + pasta + "/" + i + ".jpg";
  });
}

function obterImagemFallbackUrls(exercicio){
  const pasta = imagensAlternativas[exercicio.id];
  if(!pasta)return ["",""];
  return [0,1].map(function(i){
    return BASE_IMAGENS + pasta + "/" + i + ".jpg";
  });
}
function obterMuscleWiki(exercicio){
  const grupo = muscleWiki[exercicio.grupo] || "exercises";
  return `https://musclewiki.com/pt-br/exercises/${grupo}`;
}
function obterVideo(exercicio){
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(exercicio.nome+" exercise")}`;
}

// =====================================================
// 2. DADOS GUARDADOS
// =====================================================
function carregarExerciciosPersonalizados() {
  migrarChaveLegada(CHAVE_PERSONALIZADOS, CHAVE_PERSONALIZADOS_LEGADA);
  let guardados = {};
  try { guardados = JSON.parse(localStorage.getItem(CHAVE_PERSONALIZADOS)) || {}; } catch (erro) {}
  treinos.forEach(function(treino) {
    (guardados[treino.dia] || []).forEach(function(exercicio) {
      if (!treino.exercicios.some(function(atual) { return String(atual.id) === String(exercicio.id); })) {
        treino.exercicios.push(exercicio);
      }
    });
  });
}

carregarExerciciosPersonalizados();

function carregarPesos(){
  try{
    const dados=JSON.parse(localStorage.getItem(CHAVE_PESOS)) || {};

    treinos.forEach(function(t){
      t.exercicios.forEach(function(e){

        if(dados[e.id] === undefined)return;

        if(Array.isArray(dados[e.id])){
          e.historicoPesos=dados[e.id].slice(0,2);
          e.peso=e.historicoPesos[0] ?? 0;
        }else{
          e.historicoPesos=[Number(dados[e.id]) || 0];
          e.peso=Number(dados[e.id]) || 0;
        }

      });
    });

  }catch(erro){
    console.log("Não foi possível carregar os pesos.");
  }
}

function guardarPeso(exercicio){
  if(exercicio.alternativaOriginal)return;
  try{
    const dados=JSON.parse(localStorage.getItem(CHAVE_PESOS)) || {};

    dados[exercicio.id]=exercicio.historicoPesos || [exercicio.peso || 0];

    localStorage.setItem(
      CHAVE_PESOS,
      JSON.stringify(dados)
    );

  }catch(erro){
    console.log("Não foi possível guardar o peso.");
  }
}

carregarPesos();


// =====================================================
// ORDEM PERSONALIZADA DOS EXERCÍCIOS
// A ordem permanece guardada até ser alterada novamente.
// =====================================================

const CHAVE_ORDEM_EXERCICIOS_LEGADA = "meuPlanoOrdemExercicios";
const CHAVE_ORDEM_EXERCICIOS = `meuPlanoOrdemExercicios:${ID_PLANO_TREINO}`;

function carregarOrdemExercicios(){

  try{

    const dados = JSON.parse(
      localStorage.getItem(CHAVE_ORDEM_EXERCICIOS)
    ) || {};

    treinos.forEach(function(treino){

      const ordemGuardada = dados[treino.dia];

      if(!Array.isArray(ordemGuardada))return;

      const mapa = new Map(
        treino.exercicios.map(function(exercicio){
          return [String(exercicio.id), exercicio];
        })
      );

      const ordenados = [];

      ordemGuardada.forEach(function(id){

        const exercicio = mapa.get(String(id));

        if(exercicio){
          ordenados.push(exercicio);
          mapa.delete(String(id));
        }

      });

      // Exercícios novos ficam no final.
      mapa.forEach(function(exercicio){
        ordenados.push(exercicio);
      });

      treino.exercicios = ordenados;

    });

  }catch(erro){

    console.log(
      "Não foi possível carregar a ordem dos exercícios."
    );

  }
}

function guardarOrdemExercicios(){

  try{

    const dados = {};

    treinos.forEach(function(treino){

      dados[treino.dia] = treino.exercicios.map(function(exercicio){
        return exercicio.id;
      });

    });

    localStorage.setItem(
      CHAVE_ORDEM_EXERCICIOS,
      JSON.stringify(dados)
    );

  }catch(erro){

    console.log(
      "Não foi possível guardar a ordem dos exercícios."
    );

  }
}

migrarChaveLegada(CHAVE_ORDEM_EXERCICIOS, CHAVE_ORDEM_EXERCICIOS_LEGADA);
carregarOrdemExercicios();

// =====================================================
// 3. ELEMENTOS E TREINO ATUAL
// =====================================================
function obterProximoDiaDoPlano() {
  const rotacao = (plano.rotacaoTreinos || treinos.map(function(t) { return t.dia; }))
    .filter(function(dia) { return treinos.some(function(t) { return t.dia === dia; }); });
  if (!rotacao.length) return treinos[0].dia;
  try {
    const registos = JSON.parse(localStorage.getItem("meuPlanoSessoesV1")) || [];
    const ultimos = registos.filter(function(registo) { return rotacao.includes(registo.dia); });
    ultimos.sort(function(a, b) {
      const ordemA = Number(a.timestamp) || Date.parse((a.data || "") + "T23:59:59") || 0;
      const ordemB = Number(b.timestamp) || Date.parse((b.data || "") + "T23:59:59") || 0;
      return ordemB - ordemA;
    });
    if (!ultimos.length) return rotacao[0];
    const indice = rotacao.indexOf(ultimos[0].dia);
    return rotacao[(indice + 1) % rotacao.length];
  } catch (erro) {
    return rotacao[0];
  }
}

const diaNaUrl = new URLSearchParams(window.location.search).get("dia");
const diaSolicitado = (diaNaUrl || obterProximoDiaDoPlano() || document.body.dataset.dia || "D1").toUpperCase();
const treinoAtual = treinos.find(function(t){return t.dia===diaSolicitado;}) || treinos[0];
const paginaAtual = treinoAtual.dia;
document.body.dataset.dia = paginaAtual;
document.title = `Meu Plano — ${treinoAtual.dia} · ${treinoAtual.nome}`;

// Histórico explícito dos exercícios por data e dia de treino.
const CHAVE_ESTADOS_EXERCICIOS = "meuPlanoEstadosExerciciosV1";
function dataLocalISO(){const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;}
function lerEstadosExercicios(){try{return JSON.parse(localStorage.getItem(CHAVE_ESTADOS_EXERCICIOS))||[];}catch(e){return [];}}
(function migrarEstadosDeTreino(){
  try {
    const registos = lerEstadosExercicios();
    let alterado = false;
    registos.forEach(function(registo) { if (!registo.planoId) { registo.planoId = ID_PLANO_TREINO; alterado = true; } });
    if (alterado) localStorage.setItem(CHAVE_ESTADOS_EXERCICIOS, JSON.stringify(registos));
  } catch (erro) {}
})();
function guardarEstadoExercicio(exercicio, estado){
  if(exercicio.alternativaOriginal)return;
  const data=dataLocalISO(), dia=treinoAtual.dia;
  let registos=lerEstadosExercicios().filter(r=>!(r.data===data&&r.dia===dia&&Number(r.exercicioId)===Number(exercicio.id)));
  if(estado!=="pendente") registos.push({data,dia,exercicioId:exercicio.id,nome:exercicio.nome,grupo:exercicio.grupo,estado,atualizadoEm:Date.now(),planoId:ID_PLANO_TREINO});
  try{localStorage.setItem(CHAVE_ESTADOS_EXERCICIOS,JSON.stringify(registos));}catch(e){}
}
function estadoExercicioHoje(exercicio){return lerEstadosExercicios().find(r=>r.data===dataLocalISO()&&r.dia===treinoAtual.dia&&Number(r.exercicioId)===Number(exercicio.id))?.estado||"pendente";}

let ultimoExercicioRemovido = null;
const campoPesquisa=document.querySelector("#pesquisaExercicio");
const filtroMusculo=document.querySelector("#filtroMusculo");
const listaExercicios=document.querySelector("#listaExercicios");
const contadorResultados=document.querySelector("#contadorResultados");
const formulario=document.querySelector("#formularioExercicio");
const tituloTreino=document.querySelector("#treinoAtual h2");
const descricaoTreino=document.querySelector("#descricaoTreino");
const cardioDescricao=document.querySelector(".cardio p");
const cardioDetalhe=document.querySelector(".cardio-detalhe");

// =====================================================
// 4. HERO
// =====================================================
(function iniciarFrases(){
  const elemento=document.querySelector("#fraseMotivacional");
  if(!elemento)return;
  let indice=0;
  elemento.textContent='"'+FRASES[indice]+'"';
  setInterval(function(){
    elemento.style.opacity="0";
    elemento.style.transform="translateY(5px)";
    setTimeout(function(){
      indice=(indice+1)%FRASES.length;
      elemento.textContent='"'+FRASES[indice]+'"';
      elemento.style.transform="translateY(0)";
      elemento.style.opacity="1";
    },450);
  },5000);
})();

// =====================================================
// 5. CABEÇALHO / FILTROS
// =====================================================
function atualizarCabecalho(){
  if(tituloTreino)tituloTreino.textContent=`${treinoAtual.dia} — ${treinoAtual.nome}`;
  if(descricaoTreino)descricaoTreino.textContent=descricoesTreinos[treinoAtual.dia] || "Organiza o teu treino e acompanha a tua evolução.";

  const diaAtual = paginaAtual;

document.querySelectorAll("#diasTreino a").forEach(function(link) {
  const pagina = link.getAttribute("href");
  const diaLink = (new URL(link.href)).searchParams.get("dia")?.toUpperCase() || "";
  const ativo = diaAtual === diaLink;

  link.classList.toggle("ativo", ativo);

  if (ativo) {
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

  document.querySelectorAll("#diasTreino a").forEach(function(link){
    link.addEventListener("click",function(){
      const pagina=link.getAttribute("href");
      sessionStorage.setItem("meuPlanoDiaSelecionado",(new URL(link.href)).searchParams.get("dia")?.toUpperCase() || paginaAtual);
      sessionStorage.setItem("meuPlanoDeveRolar","1");
    });
  });

  if(window.innerWidth <= 650 && sessionStorage.getItem("meuPlanoDeveRolar") === "1" && sessionStorage.getItem("meuPlanoDiaSelecionado") === paginaAtual){
    sessionStorage.removeItem("meuPlanoDeveRolar");
    setTimeout(function(){
      if(tituloTreino){
        tituloTreino.scrollIntoView({behavior:"smooth",block:"start"});
      }
    },150);
  }

  const cardio=cardioTreinos[treinoAtual.dia];
  if(cardioDescricao && cardio){
    cardioDescricao.textContent=`${cardio.tipo} · ${cardio.detalhe}`;
  }
  if(cardioDetalhe && cardio){
    cardioDetalhe.textContent=cardio.tipo;
  }
}
function obterExerciciosFiltrados(){
  const texto=normalizarTexto(campoPesquisa ? campoPesquisa.value : "");
  const grupo=normalizarTexto(filtroMusculo ? filtroMusculo.value : "todos");
  return treinoAtual.exercicios.filter(function(e){
    return normalizarTexto(e.nome).includes(texto) && (grupo==="todos" || normalizarTexto(e.grupo)===grupo);
  });
}
function atualizarContador(n){contadorResultados.textContent=`${n} exercícios encontrados.`;}

// =====================================================
// 6. CARTÕES
// =====================================================

const intervalosImagens=new Map();


function iniciarAnimacao(card, imgs) {
  if (imgs.length < 2) return;

  let indice = 0;
  const frames = card.querySelectorAll(".frame-exercicio");

  // Link clicável da imagem, se existir
  const linkImagem = card.querySelector(".imagem-link");

  function mudar() {
    frames.forEach(function(f, i) {
      f.classList.toggle("visivel", i === indice);
    });

    // Abre a imagem correspondente ao frame visível
    if (linkImagem && imgs[indice]) {
      linkImagem.href = imgs[indice];
    }

    indice = (indice + 1) % frames.length;
  }

  mudar();

  let velocidade = 1000;
  let timer = setInterval(mudar, velocidade);

  intervalosImagens.set(card, timer);

  card.addEventListener("mouseenter", function() {
    clearInterval(timer);
    velocidade = 500;
    timer = setInterval(mudar, velocidade);
    intervalosImagens.set(card, timer);
  });

  card.addEventListener("mouseleave", function() {
    clearInterval(timer);
    velocidade = 1000;
    timer = setInterval(mudar, velocidade);
    intervalosImagens.set(card, timer);
  });
}


function mostrarExercicios(exercicios) {

  // Limpa as animações anteriores
  intervalosImagens.forEach(function(timer) {
    clearInterval(timer);
  });

  intervalosImagens.clear();
  listaExercicios.innerHTML = "";

  // Mantém os exercícios concluídos no final
  const exerciciosOrdenados = [...exercicios].sort(function(a, b) {
    const prioridade = e => estadoExercicioHoje(e)==="nao-realizado" ? 2 : (e.concluido ? 1 : 0);
    return prioridade(a) - prioridade(b);
  });

  atualizarContador(exerciciosOrdenados.length);

  // Botão para repor o último exercício removido
  if (ultimoExercicioRemovido) {
    const areaRepor = document.createElement("div");
    areaRepor.className = "area-repor";
    areaRepor.innerHTML =
      '<button type="button" class="botao-repor">↩ Repor último apagado</button>';

    listaExercicios.appendChild(areaRepor);
  }

  if (exerciciosOrdenados.length === 0) {
    listaExercicios.insertAdjacentHTML(
      "beforeend",
      '<p class="estado-vazio">Nenhum exercício encontrado.</p>'
    );
    return;
  }

  exerciciosOrdenados.forEach(function(exercicio, indice) {

    const artigo = document.createElement("article");

    artigo.classList.toggle("concluido", Boolean(exercicio.concluido));
    artigo.classList.toggle("nao-realizado", estadoExercicioHoje(exercicio)==="nao-realizado");
    artigo.draggable = true;
    artigo.dataset.id = exercicio.id;

    const urls = obterImagemUrls(exercicio);
    const fallbackUrls = obterImagemFallbackUrls(exercicio);

    const wiki = obterMuscleWiki(exercicio);
    const video = obterVideo(exercicio);

    const numero = String(indice + 1).padStart(2, "0");
    const nomeExibicao =
      nomesExibicao[exercicio.nome] || exercicio.nome;

    const imagem0 = urls[0] || "";
    const imagem1 = urls[1] || imagem0;
    const temImagem = Boolean(imagem0);

    // Link direto para a primeira imagem do exercício
    const imagemPrincipal = obterImagemUrls(exercicio)[0];
    const paginaImagem = imagemPrincipal || "";

    // Histórico de pesos
    const historico = Array.isArray(exercicio.historicoPesos)
      ? exercicio.historicoPesos
      : [exercicio.peso || 0];

    const pesoAtual = historico[0] ?? 0;
    const pesoAnterior = historico[1];

    // Imagem: abre o GitHub, não o YouTube
    const temAlternativas = alternativasDo(exercicio).length > 0;
    const imagemMarkup = temImagem
      ? `
        <a
          href="${paginaImagem || "#"}"
          ${paginaImagem ? 'target="_blank" rel="noopener noreferrer"' : ""}
          class="imagem-link${temAlternativas ? ' abrir-alternativas' : ''}"
          data-id="${exercicio.id}"
          title="${temAlternativas ? "Toque na imagem para ver alternativas" : (paginaImagem ? "Ver imagens no Free Exercise DB" : "Imagem do exercício")}"
          ${paginaImagem ? "" : 'aria-disabled="true"'}
        >
          <img
            class="frame-exercicio visivel"
            src="${imagem0}"
            data-fallback="${fallbackUrls[0] || ""}"
            alt="Demonstração de ${nomeExibicao}"
          >

          <img
            class="frame-exercicio"
            src="${imagem1}"
            data-fallback="${fallbackUrls[1] || ""}"
            alt=""
            aria-hidden="true"
          >
        </a>
      `
      : `
        <div class="imagem-sem-foto" aria-label="Imagem não disponível">
          <span>💪</span>
          <p>Imagem não disponível</p>
        </div>
      `;

    artigo.innerHTML = `
      <div class="cabecalho-cartao-final">
        <div>
          <h3>
            ${exercicio.falha ? "🔥 " : ""}
            <a
              class="nome-exercicio-link"
              href="${wiki}"
              target="_blank"
              rel="noopener noreferrer"
              title="Abrir no MuscleWiki"
            >${nomeExibicao} ↗</a>
          </h3>

          <p class="grupo-cartao-final">${exercicio.grupo}</p>
        </div>

        <div class="numero-remover">
          <button
            type="button"
            class="botao-concluir"
            data-id="${exercicio.id}"
            aria-label="${estadoExercicioHoje(exercicio)==="nao-realizado" ? "Retirar marcação Não fiz" : (exercicio.concluido ? "Marcar exercício como não concluído" : "Marcar exercício como concluído")}"
            title="${estadoExercicioHoje(exercicio)==="nao-realizado" ? "Retirar marcação Não fiz" : (exercicio.concluido ? "Desmarcar" : "Concluir")}"
          >${estadoExercicioHoje(exercicio)==="nao-realizado" ? "↶" : (exercicio.concluido ? "×" : numero)}</button>
        </div>
      </div>

      <div class="imagem-exercicio-final" data-video="${video}">

        <button
          type="button"
          class="botao-remover"
          data-id="${exercicio.id}"
          aria-label="Remover exercício ${nomeExibicao}"
          title="Remover exercício"
        >🗑</button>

        <button type="button" class="botao-nao-fiz" data-id="${exercicio.id}" aria-label="Opções para ${nomeExibicao}" title="Marcar como não realizado">×</button>
        <div class="menu-nao-fiz" data-menu-nao-fiz="${exercicio.id}" hidden>
          <button type="button" class="confirmar-nao-fiz" data-id="${exercicio.id}">Não fiz</button>
        </div>
        ${estadoExercicioHoje(exercicio)==="nao-realizado" ? '<span class="etiqueta-nao-realizado">Não fiz</span>' : ''}

        ${imagemMarkup}

        <div class="controles-imagem-exercicio">
          <button type="button" class="botao-cronometro" data-id="${exercicio.id}" aria-label="Iniciar cronómetro de descanso" title="Cronómetro: 1 minuto de contagem decrescente e depois crescente">◷</button>
          <a
          class="botao-ver"
          href="${video}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver vídeos de ${nomeExibicao} no YouTube"
          >▶ Ver</a>
        </div>
        <div class="cronometro-painel" data-cronometro="${exercicio.id}" hidden>
          <div class="cronometro-tempo" aria-live="polite">01:00</div>
          <div class="cronometro-acoes">
            <button type="button" class="cronometro-pausar" data-id="${exercicio.id}">Pausar</button>
            <button type="button" class="cronometro-reiniciar" data-id="${exercicio.id}">Reiniciar</button>
            <button type="button" class="cronometro-fechar" data-id="${exercicio.id}" aria-label="Fechar cronómetro">×</button>
          </div>
        </div>
      </div>

      <div class="info-linha-final">
        <span class="series">
          🔢 ${exercicio.series} × ${exercicio.repeticoes}
        </span>

        <span class="resto">
          ⏱ ${exercicio.descanso}
        </span>

        <span class="peso-final">
          ⚖
          <input
            type="number"
            class="pesoExercicio"
            data-id="${exercicio.id}"
            value="${pesoAtual}"
            min="0"
            step="0.5"
            aria-label="Peso em kg"
          >
          kg

          ${
            pesoAnterior !== undefined
              ? `<span class="peso-anterior" title="Peso anterior">← ${pesoAnterior} kg</span>`
              : ""
          }

          <span class="peso-ok">✓</span>
        </span>
      </div>
    `;

    listaExercicios.appendChild(artigo);

    // Mantém a animação das duas imagens
    if (temImagem) {
      iniciarAnimacao(artigo, urls);
    }

    // Tenta a imagem alternativa se a principal falhar
    artigo.querySelectorAll("img").forEach(function(img) {
      img.addEventListener("error", function() {
        const fallback = this.dataset.fallback;

        if (fallback && this.src !== fallback) {
          this.src = fallback;
          this.dataset.fallback = "";
          return;
        }

        this.style.display = "none";
      });
    });

  });
}

// =====================================================
// 7. PESQUISA / FILTRO
// =====================================================
if(campoPesquisa)campoPesquisa.addEventListener("input",function(){mostrarExercicios(obterExerciciosFiltrados());});
if(filtroMusculo)filtroMusculo.addEventListener("change",function(){mostrarExercicios(obterExerciciosFiltrados());});

// =====================================================
// 8. PESO, CONCLUSÃO E REMOÇÃO
// =====================================================

function encontrarExercicio(id){
  return treinoAtual.exercicios.find(function(e){
    return e.id===id;
  }) || null;
}


// =====================================================
// ALTERAÇÃO DO PESO
// =====================================================

listaExercicios.addEventListener("change",function(evento){

  if(!evento.target.classList.contains("pesoExercicio"))return;

  const exercicio=encontrarExercicio(
    Number(evento.target.dataset.id)
  );

  if(!exercicio)return;

  const novoPeso=Number(evento.target.value)||0;

  const historico=
    Array.isArray(exercicio.historicoPesos)
      ? exercicio.historicoPesos
      : [exercicio.peso || 0];


  exercicio.peso=novoPeso;


  /*
    Se o peso for igual ao atual,
    não criamos uma nova entrada no histórico.

    Caso seja diferente:
    novo peso → primeiro
    peso anterior → segundo
    pesos mais antigos são descartados.
  */

  exercicio.historicoPesos=
    historico[0]===novoPeso
      ? historico.slice(0,2)
      : [novoPeso].concat(historico).slice(0,2);


  guardarPeso(exercicio);

  mostrarExercicios(
    obterExerciciosFiltrados()
  );

});


// =====================================================
// CLIQUES NOS CARTÕES
// =====================================================

listaExercicios.addEventListener("click",function(evento){

  const abrirAlternativasBotao=evento.target.closest(".abrir-alternativas");
  if(abrirAlternativasBotao){evento.preventDefault();const exercicio=encontrarExercicio(Number(abrirAlternativasBotao.dataset.id));if(exercicio)abrirModalAlternativas(exercicio);return;}


  // ---------------------------------------------------
  // CONCLUIR / DESMARCAR EXERCÍCIO
  // ---------------------------------------------------

  const botaoConcluir=
    evento.target.closest(".botao-concluir");


  if(botaoConcluir){

    const exercicio=
      encontrarExercicio(
        Number(botaoConcluir.dataset.id)
      );


    if(exercicio){

      // Se está marcado como "Não fiz", o botão retira essa marcação
      // em vez de concluir acidentalmente o exercício.
      if (estadoExercicioHoje(exercicio)==="nao-realizado") {
        guardarEstadoExercicio(exercicio,"pendente");
        exercicio.naoRealizado=false;
        mostrarExercicios(obterExerciciosFiltrados());
        mostrarAvisoNaoFiz("Marcação removida. O exercício voltou à lista.");
        return;
      }

      /*
        A conclusão é TEMPORÁRIA.

        Não usamos localStorage aqui.

        Ao atualizar a página:
        - todos voltam a ficar não concluídos;
        - a ordem manual continua preservada.
      */

      exercicio.concluido=!Boolean(
        exercicio.concluido
      );


      /*
        Se o exercício foi concluído,
        guardamos a posição que ele tinha
        antes de ir para o final da lista.
      */

      if(exercicio.concluido){

        const indice=
          treinoAtual.exercicios.findIndex(
            function(e){
              return e.id===exercicio.id;
            }
          );


        exercicio.indiceAntesConclusao=indice;


        if(indice!==-1){

          treinoAtual.exercicios.splice(indice,1);

          treinoAtual.exercicios.push(exercicio);

        }

      }else{

        /*
          Ao clicar novamente no ×,
          tentamos devolver o exercício
          para a posição que ele ocupava antes.
        */

        const indiceAtual=
          treinoAtual.exercicios.findIndex(
            function(e){
              return e.id===exercicio.id;
            }
          );


        if(indiceAtual!==-1){

          treinoAtual.exercicios.splice(
            indiceAtual,
            1
          );


          let novaPosicao=
            Number.isInteger(
              exercicio.indiceAntesConclusao
            )
              ? exercicio.indiceAntesConclusao
              : treinoAtual.exercicios.length;


          /*
            Evita uma posição inválida caso
            a lista tenha mudado enquanto isso.
          */

          novaPosicao=Math.max(
            0,
            Math.min(
              novaPosicao,
              treinoAtual.exercicios.length
            )
          );


          treinoAtual.exercicios.splice(
            novaPosicao,
            0,
            exercicio
          );

        }


        delete exercicio.indiceAntesConclusao;

      }


      guardarEstadoExercicio(exercicio, exercicio.concluido ? "concluido" : "pendente");
      mostrarExercicios(
        obterExerciciosFiltrados()
      );

    }

    return;
  }

  // Opções compactas para marcar um exercício como não realizado.
  const botaoNaoFiz = evento.target.closest(".botao-nao-fiz");
  if (botaoNaoFiz) {
    const menu = listaExercicios.querySelector(`[data-menu-nao-fiz="${botaoNaoFiz.dataset.id}"]`);
    if (menu) {
      const abrir = menu.hidden;
      listaExercicios.querySelectorAll(".menu-nao-fiz").forEach(m => m.hidden = true);
      menu.hidden = !abrir;
    }
    return;
  }

  const confirmarNaoFiz = evento.target.closest(".confirmar-nao-fiz");
  if (confirmarNaoFiz) {
    const exercicio = encontrarExercicio(Number(confirmarNaoFiz.dataset.id));
    if (exercicio) {
      exercicio.concluido = false;
      exercicio.naoRealizado = true;
      const idx = treinoAtual.exercicios.findIndex(e => e.id === exercicio.id);
      if (idx !== -1) { treinoAtual.exercicios.splice(idx, 1); treinoAtual.exercicios.push(exercicio); }
      guardarEstadoExercicio(exercicio, "nao-realizado");
      mostrarExercicios(obterExerciciosFiltrados());
      mostrarAvisoNaoFiz("Exercício registado como não realizado e movido para o final.");
    }
    return;
  }

  // Controlos do cronómetro sobre a imagem do exercício.
  const timerButton = evento.target.closest(".botao-cronometro");
  if (timerButton) { controlarCronometro(Number(timerButton.dataset.id), "toggle"); return; }
  const pauseButton = evento.target.closest(".cronometro-pausar");
  if (pauseButton) { controlarCronometro(Number(pauseButton.dataset.id), "pause"); return; }
  const resetButton = evento.target.closest(".cronometro-reiniciar");
  if (resetButton) { controlarCronometro(Number(resetButton.dataset.id), "reset"); return; }
  const closeButton = evento.target.closest(".cronometro-fechar");
  if (closeButton) { controlarCronometro(Number(closeButton.dataset.id), "close"); return; }

  // ---------------------------------------------------
  // REPOR ÚLTIMO EXERCÍCIO APAGADO
  // ---------------------------------------------------

  const botaoRepor=
    evento.target.closest(".botao-repor");


  if(botaoRepor){

    if(ultimoExercicioRemovido){

      treinoAtual.exercicios.splice(
        ultimoExercicioRemovido.indice,
        0,
        ultimoExercicioRemovido.exercicio
      );


      ultimoExercicioRemovido=null;


      /*
        A reposição altera novamente a ordem
        dos exercícios, portanto guardamos
        a nova ordem manual.
      */

      guardarOrdemExercicios();


      mostrarExercicios(
        obterExerciciosFiltrados()
      );

    }

    return;
  }


  // ---------------------------------------------------
  // REMOVER EXERCÍCIO
  // ---------------------------------------------------

  const botaoRemover=
    evento.target.closest(".botao-remover");


  if(!botaoRemover)return;


  const id=
    Number(botaoRemover.dataset.id);


  const indice=
    treinoAtual.exercicios.findIndex(
      function(e){
        return e.id===id;
      }
    );


  if(indice!==-1){

    /*
      Apenas o último exercício removido
      pode ser recuperado.

      Se outro exercício for apagado,
      este substitui o anterior.
    */

    ultimoExercicioRemovido={
      exercicio:treinoAtual.exercicios[indice],
      indice:indice
    };


    treinoAtual.exercicios.splice(
      indice,
      1
    );


    /*
      A remoção altera a ordem da lista,
      então atualizamos a ordem guardada.
    */

    guardarOrdemExercicios();


    mostrarExercicios(
      obterExerciciosFiltrados()
    );

  }

});


// =====================================================
// 9. ADICIONAR EXERCÍCIO
// =====================================================

if (formulario) {

  formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nome = document.querySelector("#nomeExercicio").value.trim();

    const grupo = document.querySelector("#grupoMuscular").value;

    const series = Number(document.querySelector("#series").value);

    const repeticoes = document.querySelector("#repeticoes").value.trim();

    const descanso = document.querySelector("#descansoExercicio").value;

    const falha = document.querySelector("#ateFalha").checked;

    // Link de referência opcional
    const campoLink = document.querySelector("#linkReferencia");
    const linkReferencia = campoLink ? campoLink.value.trim() : "";

    if (!nome || !grupo || !series || !repeticoes) {
      return;
    }

    const duplicado = treinoAtual.exercicios.some(function(e) {
      return normalizarTexto(e.nome) === normalizarTexto(nome);
    });

    if (duplicado) {
      alert("Já existe um exercício com esse nome neste treino.");
      return;
    }

    const novo = {
      id: Date.now(),
      nome: nome,
      grupo: grupo,
      series: series,
      repeticoes: repeticoes,
      descanso: descanso,
      falha: falha,
      peso: 0,
      historicoPesos: [],
      concluido: false,
      personalizado: true,
      linkReferencia: linkReferencia
    };

    // Adiciona o exercício ao treino atual
    treinoAtual.exercicios.push(novo);

    // Guarda a ordem dos exercícios
    guardarOrdemExercicios();

    // Guarda os exercícios personalizados
    const chave = CHAVE_PERSONALIZADOS;

    let personalizados = {};

    try {
      personalizados = JSON.parse(localStorage.getItem(chave)) || {};
    } catch (erro) {
      personalizados = {};
    }

    if (!Array.isArray(personalizados[treinoAtual.dia])) {
      personalizados[treinoAtual.dia] = [];
    }

    personalizados[treinoAtual.dia].push(novo);

    localStorage.setItem(chave, JSON.stringify(personalizados));

    // Limpa o formulário
    formulario.reset();

    document.querySelector("#series").value = 3;

    // Atualiza os cartões
    mostrarExercicios(obterExerciciosFiltrados());

  });

}

// =====================================================
// 10. ARRASTAR E REORDENAR EXERCÍCIOS
// =====================================================

let exercicioArrastadoId=null;


listaExercicios.addEventListener("dragstart",function(evento){

  const artigo=evento.target.closest("article");

  if(!artigo)return;

  exercicioArrastadoId=Number(artigo.dataset.id);

  artigo.classList.add("arrastando");

  evento.dataTransfer.effectAllowed="move";

  evento.dataTransfer.setData(
    "text/plain",
    String(exercicioArrastadoId)
  );

});


listaExercicios.addEventListener("dragend",function(evento){

  const artigo=evento.target.closest("article");

  if(artigo){
    artigo.classList.remove("arrastando");
  }

  document
    .querySelectorAll("#listaExercicios article")
    .forEach(function(item){
      item.classList.remove("alvo-arrastar");
    });

  exercicioArrastadoId=null;

});


listaExercicios.addEventListener("dragover",function(evento){

  const artigo=evento.target.closest("article");

  if(!artigo)return;

  /*
    É necessário impedir o comportamento padrão
    para permitir o drop.
  */

  evento.preventDefault();

  evento.dataTransfer.dropEffect="move";


  document
    .querySelectorAll("#listaExercicios article")
    .forEach(function(item){

      item.classList.remove("alvo-arrastar");

    });


  /*
    Não colocamos o destaque no próprio
    exercício que está sendo arrastado.
  */

  if(
    Number(artigo.dataset.id)!==
    exercicioArrastadoId
  ){

    artigo.classList.add("alvo-arrastar");

  }

});


listaExercicios.addEventListener("drop",function(evento){

  evento.preventDefault();


  const alvo=evento.target.closest("article");

  if(!alvo)return;


  const idArrastado=
    exercicioArrastadoId ||
    Number(
      evento.dataTransfer.getData("text/plain")
    );


  const idAlvo=
    Number(alvo.dataset.id);


  if(
    !idArrastado ||
    !idAlvo ||
    idArrastado===idAlvo
  ){

    exercicioArrastadoId=null;

    return;
  }


  const indiceArrastado=
    treinoAtual.exercicios.findIndex(
      function(exercicio){
        return exercicio.id===idArrastado;
      }
    );


  const indiceAlvo=
    treinoAtual.exercicios.findIndex(
      function(exercicio){
        return exercicio.id===idAlvo;
      }
    );


  if(
    indiceArrastado===-1 ||
    indiceAlvo===-1
  ){

    exercicioArrastadoId=null;

    return;
  }


  /*
    Retiramos o exercício da posição antiga.
  */

  const exercicio=
    treinoAtual.exercicios.splice(
      indiceArrastado,
      1
    )[0];


  /*
    Depois de retirar o exercício,
    precisamos recalcular a posição do alvo.
  */

  let novaPosicao=
    treinoAtual.exercicios.findIndex(
      function(item){
        return item.id===idAlvo;
      }
    );


  if(novaPosicao===-1){

    treinoAtual.exercicios.push(exercicio);

  }else{

    /*
      Descobrimos se o mouse estava na metade
      superior ou inferior do card.

      Superior:
      coloca antes.

      Inferior:
      coloca depois.
    */

    const rect=alvo.getBoundingClientRect();

    const metade=
      rect.top + rect.height / 2;


    if(evento.clientY>metade){

      novaPosicao++;

    }


    treinoAtual.exercicios.splice(
      novaPosicao,
      0,
      exercicio
    );

  }


  /*
    A ordem foi alterada manualmente.

    Portanto, esta ordem deve ser salva.
  */

  guardarOrdemExercicios();


  exercicioArrastadoId=null;


  mostrarExercicios(
    obterExerciciosFiltrados()
  );

});


// =====================================================
// 11. CALENDÁRIO
// =====================================================

(function criarCalendario(){

  const icone=document.querySelector(".icone-sidebar");

  if(!icone)return;


  icone.setAttribute("role","button");

  icone.setAttribute("tabindex","0");

  icone.setAttribute(
    "aria-label",
    "Abrir calendário"
  );


  const dialog=document.createElement("dialog");

  dialog.id="calendarioDialog";


  dialog.innerHTML=`

    <div class="calendario-conteudo">

      <div class="calendario-topo">

        <div>

          <span class="calendario-kicker">
            CALENDÁRIO
          </span>

          <h2>📅 Os teus treinos</h2>

        </div>

        <button
          type="button"
          class="calendario-fechar"
          aria-label="Fechar"
        >×</button>

      </div>


      <div class="calendario-navegacao">

        <button
          type="button"
          id="mesAnterior"
          aria-label="Mês anterior"
        >‹</button>

        <strong id="mesAtual"></strong>

        <button
          type="button"
          id="mesSeguinte"
          aria-label="Mês seguinte"
        >›</button>

      </div>


      <div class="calendario-semana">

        <span>SEG</span>
        <span>TER</span>
        <span>QUA</span>
        <span>QUI</span>
        <span>SEX</span>
        <span>SÁB</span>
        <span>DOM</span>

      </div>


      <div
        id="diasCalendario"
        class="calendario-dias"
      ></div>


      <p
        id="dataCalendarioSelecionada"
        class="calendario-selecionada"
      >Seleciona um dia.</p>

    </div>

  `;


  document.body.appendChild(dialog);


  const hoje=new Date();

  let mes=hoje.getMonth();

  let ano=hoje.getFullYear();


  const nomesMeses=[
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];


  const dias=
    dialog.querySelector(
      "#diasCalendario"
    );


  const titulo=
    dialog.querySelector(
      "#mesAtual"
    );


  const selecionada=
    dialog.querySelector(
      "#dataCalendarioSelecionada"
    );


  function chaveData(d){

    return `${d.getFullYear()}-${String(
      d.getMonth()+1
    ).padStart(2,"0")}-${String(
      d.getDate()
    ).padStart(2,"0")}`;

  }


  function desenharCalendario(){

    titulo.textContent=
      `${nomesMeses[mes]} ${ano}`;


    dias.innerHTML="";


    const primeiroDia=
      new Date(ano,mes,1);


    const ultimoDia=
      new Date(ano,mes+1,0);


    const offset=
      (primeiroDia.getDay()+6)%7;


    for(let i=0;i<offset;i++){

      const vazio=
        document.createElement("span");

      vazio.className="dia-vazio";

      dias.appendChild(vazio);

    }


    for(
      let numero=1;
      numero<=ultimoDia.getDate();
      numero++
    ){

      const botao=
        document.createElement("button");


      const data=
        new Date(
          ano,
          mes,
          numero
        );


      botao.type="button";

      botao.className="dia-calendario";

      botao.textContent=numero;


      if(
        chaveData(data)===
        chaveData(hoje)
      ){

        botao.classList.add("hoje");

      }


      botao.addEventListener(
        "click",
        function(){

          document
            .querySelectorAll(
              ".dia-calendario.selecionado"
            )
            .forEach(function(item){

              item.classList.remove(
                "selecionado"
              );

            });


          botao.classList.add(
            "selecionado"
          );


          const texto=
            `${String(numero).padStart(2,"0")}/`+
            `${String(mes+1).padStart(2,"0")}/`+
            `${ano}`;


          selecionada.textContent=
            `Treino selecionado: ${texto}`;


          localStorage.setItem(
            "meuPlanoDataTreino",
            chaveData(data)
          );

        }
      );


      dias.appendChild(botao);

    }

  }


  function abrir(){

    desenharCalendario();

    dialog.showModal();

  }


  icone.addEventListener(
    "click",
    abrir
  );


  icone.addEventListener(
    "keydown",
    function(e){

      if(
        e.key==="Enter" ||
        e.key===" "
      ){

        e.preventDefault();

        abrir();

      }

    }
  );


  dialog
    .querySelector(
      ".calendario-fechar"
    )
    .addEventListener(
      "click",
      function(){

        dialog.close();

      }
    );


  dialog
    .querySelector(
      "#mesAnterior"
    )
    .addEventListener(
      "click",
      function(){

        mes--;

        if(mes<0){

          mes=11;

          ano--;

        }

        desenharCalendario();

      }
    );


  dialog
    .querySelector(
      "#mesSeguinte"
    )
    .addEventListener(
      "click",
      function(){

        mes++;

        if(mes>11){

          mes=0;

          ano++;

        }

        desenharCalendario();

      }
    );


  dialog.addEventListener(
    "click",
    function(e){

      if(e.target===dialog){

        dialog.close();

      }

    }
  );

})();


// =====================================================
// CRONÓMETRO DE DESCANSO: 60 s decrescentes e, depois,
// contagem crescente até 02:00. Um cronómetro por card.
// =====================================================
const cronometrosAtivos = new Map();
function formatarTempo(total){const t=Math.max(0,Math.floor(total));return `${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`;}
function controlarCronometro(id,acao){
  const card=listaExercicios.querySelector(`article[data-id="${id}"]`);if(!card)return;
  const painel=card.querySelector(`[data-cronometro="${id}"]`);if(!painel)return;
  let st=cronometrosAtivos.get(id);
  if(acao==="close"){if(st&&st.interval)clearInterval(st.interval);cronometrosAtivos.delete(id);painel.hidden=true;return;}
  if(acao==="reset"){if(st&&st.interval)clearInterval(st.interval);st={restante:60,decrescente:true,pausado:false,interval:null};cronometrosAtivos.set(id,st);painel.querySelector(".cronometro-tempo").textContent="01:00";painel.querySelector(".cronometro-pausar").textContent="Pausar";if(!painel.hidden)iniciarTick(id,painel,st);return;}
  if(acao==="pause"){if(!st)return;if(st.interval){clearInterval(st.interval);st.interval=null;st.pausado=true;painel.querySelector(".cronometro-pausar").textContent="Continuar";}else{st.pausado=false;painel.querySelector(".cronometro-pausar").textContent="Pausar";iniciarTick(id,painel,st);}return;}
  if(!st){st={restante:60,decrescente:true,pausado:false,interval:null};cronometrosAtivos.set(id,st);}painel.hidden=false;if(!st.interval&&!st.pausado)iniciarTick(id,painel,st);
}
function iniciarTick(id,painel,st){
  if(st.interval)clearInterval(st.interval);
  st.interval=setInterval(()=>{
    if(st.decrescente){st.restante--;if(st.restante<=0){st.restante=0;st.decrescente=false;}}
    else {st.restante++;if(st.restante>=120){st.restante=120;clearInterval(st.interval);st.interval=null;const b=painel.querySelector(".cronometro-pausar");if(b)b.textContent="Terminado";}}
    const el=painel.querySelector(".cronometro-tempo");if(el)el.textContent=formatarTempo(st.restante);
  },1000);
}
function mostrarAvisoNaoFiz(mensagem){
  let aviso=document.getElementById("avisoNaoFiz");if(!aviso){aviso=document.createElement("div");aviso.id="avisoNaoFiz";aviso.className="aviso-nao-fiz";aviso.setAttribute("role","status");aviso.setAttribute("aria-live","polite");document.body.appendChild(aviso);}
  aviso.textContent=mensagem;aviso.classList.add("visivel");clearTimeout(aviso._timer);aviso._timer=setTimeout(()=>aviso.classList.remove("visivel"),2600);
}

// =====================================================
// 12. SPOTIFY FLUTUANTE
//
// Apenas o ícone é mantido porque os controlos de
// música anteriores não controlavam a reprodução real.
// =====================================================

(function criarSpotify(){

  const caixa=document.createElement("div");
  caixa.className="spotify-flutuante";

  caixa.innerHTML=`
    <a
      class="spotify-botao"
      href="https://open.spotify.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Spotify"
      title="Abrir Spotify"
    >
      <svg viewBox="0 0 24 24" role="img" aria-label="Spotify" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="11" fill="#1DB954"/>
        <path d="M5.2 9.1c4.5-1.35 9.6-.9 13.4 1.35" fill="none" stroke="#101410" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M6.1 12.1c3.9-1.1 8.1-.65 11.3 1.2" fill="none" stroke="#101410" stroke-width="1.55" stroke-linecap="round"/>
        <path d="M7 14.8c3.1-.85 6.4-.45 9.1 1.05" fill="none" stroke="#101410" stroke-width="1.35" stroke-linecap="round"/>
      </svg>
    </a>
  `;

  document.body.appendChild(caixa);

})();


// =====================================================
// 13. INICIALIZAÇÃO
// =====================================================

if(tituloTreino){

  atualizarCabecalho();

}


mostrarExercicios(
  treinoAtual.exercicios
);

// =====================================================
// REGISTO DE SESSÕES — usado pela página Progresso
// Regista uma sessão completa uma única vez por dia.
// =====================================================
(function iniciarRegistoSessao(){
  const botao = document.getElementById("registarSessao");
  const estado = document.getElementById("estadoSessao");
  if (!botao) return;
  const chave = "meuPlanoSessoesV1";
  const dia = (document.body.dataset.dia || "D1").toUpperCase();
  // D6 é uma biblioteca de consulta, não uma sessão obrigatória de treino.
  if (dia === "D6") {
    const bloco = botao.closest(".registar-sessao");
    if (bloco) bloco.style.display = "none";
    const cardio = document.querySelector(".cardio");
    if (cardio) cardio.style.display = "none";
    return;
  }
  const hoje = new Date();
  const dataHoje = `${hoje.getFullYear()}-${String(hoje.getMonth()+1).padStart(2,"0")}-${String(hoje.getDate()).padStart(2,"0")}`;
  function ler(){ try { return JSON.parse(localStorage.getItem(chave)) || []; } catch(e) { return []; } }
  function atualizar(){
    const existente = ler().find(x => x.data === dataHoje && x.dia === dia);
    if (existente) { botao.textContent = "Treino registado hoje ✓"; if (estado) estado.textContent = `Sessão ${dia} registada em ${dataHoje.split("-").reverse().join("/")}.`; }
  }
  botao.addEventListener("click", function(){
    let registos = ler();
    if (registos.some(x => x.data === dataHoje && x.dia === dia)) {
      if (estado) estado.textContent = "Esta sessão já está registada para hoje.";
      return;
    }
    registos.push({data:dataHoje, dia:dia, nome: dia === "D6" ? "D.O Abdominais" : dia, timestamp:Date.now()});
    registos.sort((a,b) => a.data.localeCompare(b.data));
    try {
      localStorage.setItem(chave, JSON.stringify(registos));
      botao.textContent = "Treino registado hoje ✓";
      if (estado) estado.textContent = "Treino guardado no calendário. Podes consultar a tua frequência em Progresso.";
    } catch(e) { if (estado) estado.textContent = "Não foi possível guardar. Exporta os teus dados ou verifica o armazenamento do navegador."; }
  });
  atualizar();
})();



  } catch (erro) {
    console.error("Erro ao carregar o plano de treino:", erro);
    const aviso = document.getElementById("erroPlano");
    if (aviso) {
      aviso.hidden = false;
      aviso.textContent = "Não foi possível carregar a rotina. Abre esta aplicação através do Live Server ou da versão publicada.";
    }
  }
})();
