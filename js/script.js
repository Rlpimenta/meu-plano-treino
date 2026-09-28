// DADOS DOS TREINOS
// ==========================================

const treinos = [

    // ==========================================
    // D1 — PULL + BÍCEPS + ANTEBRAÇO
    // ==========================================

    {
        dia: "D1",
        nome: "Pull + Bíceps + Antebraço",

        exercicios: [
            {
                id: 1,
                nome: "Chin Up",
                grupo: "Costas",
                series: 3,
                repeticoes: "6-10",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 2,
                nome: "Lat Pulldown Wide Grip",
                grupo: "Costas",
                series: 3,
                repeticoes: "8-12",
                falha: false,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 3,
                nome: "Chest-Supported Low Row",
                grupo: "Costas",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 4,
                nome: "Single-Arm Cable Row",
                grupo: "Costas",
                series: 2,
                repeticoes: "10-15",
                falha: false,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 5,
                nome: "Reverse Fly Machine",
                grupo: "Ombros",
                series: 3,
                repeticoes: "12-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 6,
                nome: "Preacher Curl",
                grupo: "Bíceps",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 7,
                nome: "Incline Dumbbell Curl",
                grupo: "Bíceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 8,
                nome: "Reverse Wrist Curl",
                grupo: "Antebraço",
                series: 2,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 9,
                nome: "Wrist Curl",
                grupo: "Antebraço",
                series: 2,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            }
        ]
    },

    // ==========================================
    // D2 — LOWER A — PESADO
    // ==========================================

    {
        dia: "D2",
        nome: "Lower A — Pesado",

        exercicios: [
            {
                id: 10,
                nome: "Smith Machine Squat",
                grupo: "Pernas",
                series: 3,
                repeticoes: "6-10",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 11,
                nome: "Romanian Deadlift / Stiff",
                grupo: "Pernas",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 12,
                nome: "Barbell Hip Thrust",
                grupo: "Glúteos",
                series: 3,
                repeticoes: "6-10",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 13,
                nome: "Leg Press 45°",
                grupo: "Pernas",
                series: 3,
                repeticoes: "10-15",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 14,
                nome: "Lying Leg Curl",
                grupo: "Posterior da coxa",
                series: 3,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 15,
                nome: "Leg Extension",
                grupo: "Quadríceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 16,
                nome: "Standing Calf Raise",
                grupo: "Gémeos",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 17,
                nome: "Seated Calf Raise",
                grupo: "Gémeos",
                series: 3,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            }
        ]
    },

    // ==========================================
    // D3 — PUSH + OMBROS + TRÍCEPS
    // ==========================================

    {
        dia: "D3",
        nome: "Push + Ombros + Tríceps",

        exercicios: [
            {
                id: 18,
                nome: "Barbell Bench Press",
                grupo: "Peito",
                series: 3,
                repeticoes: "6-10",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 19,
                nome: "Incline Dumbbell Bench Press",
                grupo: "Peito",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 20,
                nome: "Pec Fly",
                grupo: "Peito",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 21,
                nome: "Cable Crossover — High Pulley",
                grupo: "Peito",
                series: 2,
                repeticoes: "12-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 22,
                nome: "Dumbbell Shoulder Press",
                grupo: "Ombros",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 23,
                nome: "Cable Lateral Raise",
                grupo: "Ombros",
                series: 3,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 24,
                nome: "Cable Rear Delt Fly",
                grupo: "Ombros",
                series: 2,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 25,
                nome: "Lying Triceps Extension / Skullcrusher",
                grupo: "Tríceps",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 26,
                nome: "Cable Triceps Extension",
                grupo: "Tríceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 27,
                nome: "Overhead Cable Triceps Extension",
                grupo: "Tríceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            }
        ]
    },

    // ==========================================
    // D4 — UPPER
    // ==========================================

    {
        dia: "D4",
        nome: "Upper",

        exercicios: [
            {
                id: 28,
                nome: "Lat Pulldown / Chin Up",
                grupo: "Costas",
                series: 3,
                repeticoes: "8-12",
                falha: false,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 29,
                nome: "Upper Back Machine",
                grupo: "Costas",
                series: 3,
                repeticoes: "8-12",
                falha: false,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 30,
                nome: "Machine Chest Press",
                grupo: "Peito",
                series: 3,
                repeticoes: "8-12",
                falha: false,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 31,
                nome: "Low-to-High Cable Fly",
                grupo: "Peito",
                series: 2,
                repeticoes: "12-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 32,
                nome: "Cable Lateral Raise",
                grupo: "Ombros",
                series: 3,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 33,
                nome: "Cable Rear Delt Fly",
                grupo: "Ombros",
                series: 2,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 34,
                nome: "Hammer Curl",
                grupo: "Bíceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 35,
                nome: "Rope Pushdown",
                grupo: "Tríceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
        ]
    },

    // ==========================================
    // D5 — LOWER B
    // ==========================================

    {
        dia: "D5",
        nome: "Lower B",

        exercicios: [
            {
                id: 37,
                nome: "Bulgarian Split Squat",
                grupo: "Pernas",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 38,
                nome: "Hip Thrust / Glute Bridge",
                grupo: "Glúteos",
                series: 3,
                repeticoes: "8-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 39,
                nome: "Single-Leg Romanian Deadlift",
                grupo: "Posterior da coxa",
                series: 2,
                repeticoes: "10-12",
                falha: true,
                descanso: "2-3 min",
                peso: 0
            },
            {
                id: 40,
                nome: "Leg Extension Unilateral",
                grupo: "Quadríceps",
                series: 2,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 41,
                nome: "Lying Leg Curl",
                grupo: "Posterior da coxa",
                series: 3,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 42,
                nome: "Hip Abduction",
                grupo: "Glúteos",
                series: 3,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 43,
                nome: "Leg Press Calf Raise",
                grupo: "Gémeos",
                series: 3,
                repeticoes: "10-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 44,
                nome: "Seated Calf Raise",
                grupo: "Gémeos",
                series: 3,
                repeticoes: "12-20",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
        ]
    },

    // ==========================================
    // D6 — ABDÓMEN
    // ==========================================

    {
        dia: "D6",
        nome: "Abdómen",

        exercicios: [
            {
                id: 47,
                nome: "Cable Crunch",
                grupo: "Abdómen",
                series: 3,
                repeticoes: "10-15",
                falha: false,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 48,
                nome: "Ab Wheel Rollout",
                grupo: "Abdómen",
                series: 3,
                repeticoes: "6-12",
                falha: false,
                descanso: "90 seg",
                peso: 0
            },
            {
                id: 49,
                nome: "Leg Raise",
                grupo: "Abdómen",
                series: 3,
                repeticoes: "8-15",
                falha: false,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 50,
                nome: "Plank",
                grupo: "Abdómen",
                series: 2,
                repeticoes: "30-60 seg",
                falha: false,
                descanso: "60 seg",
                peso: 0
            }
        ]
    }

];


// Mobilidade inicial de cada dia.
const mobilidadeInicial = [
  { dia:"D1", nome:"Arm Circles", id:1001 },
  { dia:"D2", nome:"Ankle Circles", id:1002 },
  { dia:"D3", nome:"Shoulder Stretch", id:1003 },
  { dia:"D4", nome:"Cat Stretch", id:1004 },
  { dia:"D5", nome:"Kneeling Hip Flexor", id:1005 }
];

mobilidadeInicial.forEach(function(item){
  const treino=treinos.find(function(t){return t.dia===item.dia;});
  if(treino && !treino.exercicios.some(function(e){return e.id===item.id;})){
    treino.exercicios.push({id:item.id,nome:item.nome,grupo:"Mobilidade",series:2,repeticoes:"30–45 seg",falha:false,descanso:"30–60 seg",peso:0});
  }
});
// ==========================================
// CONFIGURAÇÕES DAS IMAGENS
// ==========================================

const imagensExercicios = {
    1: "Chin-Up",
    2: "Wide-Grip_Lat_Pulldown",
    3: "Leverage_Iso_Row",
    4: "Seated_One-Arm_Cable_Pulley_Rows",
    5: "Reverse_Machine_Flyes",
    6: "Preacher_Curl",
    7: "Alternate_Incline_Dumbbell_Curl",
    8: "Palms-Down_Wrist_Curl_Over_A_Bench",
    9: "Palms-Up_Barbell_Wrist_Curl_Over_A_Bench",
    10: "Smith_Machine_Squat",
    11: "Romanian_Deadlift",
    12: "Barbell_Hip_Thrust",
    13: "Leg_Press",
    14: "Lying_Leg_Curls",
    15: "Leg_Extensions",
    16: "Standing_Barbell_Calf_Raise",
    17: "Seated_Calf_Raise",
    18: "Barbell_Bench_Press_-_Medium_Grip",
    19: "Incline_Dumbbell_Press",
    20: "Butterfly",
    21: "Cable_Crossover",
    22: "Seated_Dumbbell_Press",
    23: "Bent_Over_Low-Pulley_Side_Lateral",
    24: "Cable_Rear_Delt_Fly",
    25: "EZ-Bar_Skullcrusher",
    26: "Cable_One_Arm_Tricep_Extension",
    27: "Cable_Rope_Overhead_Triceps_Extension",
    28: "Wide-Grip_Lat_Pulldown",
    29: "Leverage_High_Row",
    30: "Leverage_Chest_Press",
    31: "Low_Cable_Crossover",
    32: "Bent_Over_Low-Pulley_Side_Lateral",
    33: "Cable_Rear_Delt_Fly",
    34: "Hammer_Curls",
    35: "Triceps_Pushdown_-_Rope_Attachment",
    36: "Crunches",
    37: "Split_Squat_with_Dumbbells",
    38: "Barbell_Hip_Thrust",
    39: "Romanian_Deadlift",
    40: "Single-Leg_Leg_Extension",
    41: "Lying_Leg_Curls",
    42: "Thigh_Abductor",
    43: "Calf_Press",
    44: "Seated_Calf_Raise",
    45: "Oblique_Crunches",
    46: "Plank",
    1001: "Arm_Circles",
    1002: "Ankle_Circles",
    1003: "Shoulder_Stretch",
    1004: "Cat_Stretch",
    1005: "Kneeling_Hip_Flexor",
    47: "Cable_Crunch",
    48: "Ab_Roller",
    49: "Leg_Lift",
    50: "Plank"
};

function obterImagem(exercicio) {
    const pasta = imagensExercicios[exercicio.id];

    if (!pasta) {
        return "";
    }

    return `${BASE_IMAGENS}${pasta}/0.jpg`;
}



// =====================================================
// 1. CONFIGURAÇÕES
// =====================================================
const BASE_IMAGENS = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";
const CHAVE_PESOS = "meuPlanoPesosV4";
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

const descricoesTreinos = {
  D1:"Costas, deltoide posterior, bíceps e antebraço. Finaliza com 20 min. de cardio.",
  D2:"Quadríceps, posterior da coxa, glúteos e gémeos. Finaliza com 20 min. de cardio.",
  D3:"Peito, ombros e tríceps. Finaliza com 20 min. de cardio.",
  D4:"Costas, peito, ombros e braços. Finaliza com 20 min. de cardio.",
  D5:"Pernas, glúteos e gémeos. Finaliza com 20 min. de cardio.",
  D6:"Sessão complementar de abdómen para força e estabilidade do core."
};

const cardioTreinos = {
  D1:{tipo:"Esteira inclinada", detalhe:"20 min · moderado"},
  D2:{tipo:"Bicicleta", detalhe:"20 min · leve/moderado"},
  D3:{tipo:"Esteira inclinada", detalhe:"20 min · moderado"},
  D4:{tipo:"Elíptica", detalhe:"20 min · moderado"},
  D5:{tipo:"Bicicleta ou elíptica", detalhe:"20 min · leve/moderado"},
  D6:{tipo:"Caminhada leve", detalhe:"10–15 min · opcional"}
};

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
const imagensAlternativas = {
  4: "Seated_Cable_Rows"
};

function obterImagemUrls(exercicio){
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
function carregarPesos(){
  try{
    const dados=JSON.parse(localStorage.getItem(CHAVE_PESOS)) || {};
    treinos.forEach(function(t){t.exercicios.forEach(function(e){if(dados[e.id] !== undefined)e.peso=dados[e.id];});});
  }catch(erro){ console.log("Não foi possível carregar os pesos."); }
}
function guardarPeso(exercicio){
  try{
    const dados=JSON.parse(localStorage.getItem(CHAVE_PESOS)) || {};
    dados[exercicio.id]=exercicio.peso;
    localStorage.setItem(CHAVE_PESOS,JSON.stringify(dados));
  }catch(erro){ console.log("Não foi possível guardar o peso."); }
}
carregarPesos();

// =====================================================
// 3. ELEMENTOS E TREINO ATUAL
// =====================================================
const paginaAtual = document.body.dataset.dia || "D1";
const treinoAtual = treinos.find(function(t){return t.dia===paginaAtual;}) || treinos[0];
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

  const selecionado=sessionStorage.getItem("meuPlanoDiaSelecionado");
  document.querySelectorAll("#diasTreino a").forEach(function(link){
    const pagina=link.getAttribute("href");
    const diaLink=pagina.replace(".html","").toUpperCase();
    const ativo=selecionado === diaLink;
    link.classList.toggle("ativo",ativo);
    if(ativo)link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  });

  document.querySelectorAll("#diasTreino a").forEach(function(link){
    link.addEventListener("click",function(){
      const pagina=link.getAttribute("href");
      sessionStorage.setItem("meuPlanoDiaSelecionado",pagina.replace(".html","").toUpperCase());
    });
  });

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
function iniciarAnimacao(card,imgs){
  if(imgs.length<2)return;
  let indice=0;
  const frames=card.querySelectorAll(".frame-exercicio");
  function mudar(){frames.forEach(function(f,i){f.classList.toggle("visivel",i===indice);}); indice=(indice+1)%frames.length;}
  mudar();
  let velocidade=1000;
  let timer=setInterval(mudar,velocidade);
  intervalosImagens.set(card,timer);
  card.addEventListener("mouseenter",function(){clearInterval(timer); velocidade=500; timer=setInterval(mudar,velocidade);});
  card.addEventListener("mouseleave",function(){clearInterval(timer); velocidade=1000; timer=setInterval(mudar,velocidade);});
}
function mostrarExercicios(exercicios){
  intervalosImagens.forEach(function(timer){clearInterval(timer);});
  intervalosImagens.clear();
  listaExercicios.innerHTML="";
  atualizarContador(exercicios.length);
  if(exercicios.length===0){listaExercicios.innerHTML='<p class="estado-vazio">Nenhum exercício encontrado.</p>';return;}
  exercicios.forEach(function(exercicio,indice){
    const artigo=document.createElement("article");
    const urls=obterImagemUrls(exercicio);
    const fallbackUrls=obterImagemFallbackUrls(exercicio);
    const wiki=obterMuscleWiki(exercicio);
    const video=obterVideo(exercicio);
    const numero=String(indice+1).padStart(2,"0");
    const nomeExibicao=nomesExibicao[exercicio.nome] || exercicio.nome;
    const imagem0=urls[0] || "";
    const imagem1=urls[1] || imagem0;
    artigo.innerHTML=`
      <div class="cabecalho-cartao-final">
        <div>
          <h3>${exercicio.falha?"🔥 ":""}<a class="nome-exercicio-link" href="${wiki}" target="_blank" rel="noopener noreferrer" title="Abrir no MuscleWiki">${nomeExibicao} ↗</a></h3>
          <p class="grupo-cartao-final">${exercicio.grupo}</p>
        </div>
        <div class="numero-remover">
          <span class="numero-exercicio">${numero}</span>
          <button type="button" class="botao-remover" data-id="${exercicio.id}">🗑 Remover</button>
        </div>
      </div>
      <div class="imagem-exercicio-final" data-video="${video}">
        <a href="${video}" target="_blank" rel="noopener noreferrer" class="imagem-link" title="Abrir demonstração">
          <img class="frame-exercicio visivel" src="${imagem0}" data-fallback="${fallbackUrls[0] || ""}" alt="Demonstração de ${nomeExibicao}">
          <img class="frame-exercicio" src="${imagem1}" data-fallback="${fallbackUrls[1] || ""}" alt="Demonstração de ${nomeExibicao}" aria-hidden="true">
        </a>
        <a class="botao-ver" href="${video}" target="_blank" rel="noopener noreferrer">▶ Ver</a>
      </div>
      <div class="info-linha-final">
        <span class="series">🔢 ${exercicio.series} × ${exercicio.repeticoes}</span>
        <span class="resto">⏱ ${exercicio.descanso}</span>
        <span class="peso-final">⚖ <input type="number" class="pesoExercicio" data-id="${exercicio.id}" value="${exercicio.peso || 0}" min="0" step="0.5" aria-label="Peso em kg"> kg <span class="peso-ok">✓</span></span>
      </div>`;
    listaExercicios.appendChild(artigo);
    iniciarAnimacao(artigo,urls);
    artigo.querySelectorAll("img").forEach(function(img){
      img.addEventListener("error",function(){
        const fallback=this.dataset.fallback;
        if(fallback && this.src !== fallback){
          this.src=fallback;
          this.dataset.fallback="";
          return;
        }
        this.style.display="none";
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
// 8. PESO E REMOÇÃO
// =====================================================
function encontrarExercicio(id){return treinoAtual.exercicios.find(function(e){return e.id===id;}) || null;}
listaExercicios.addEventListener("change",function(evento){
  if(!evento.target.classList.contains("pesoExercicio"))return;
  const exercicio=encontrarExercicio(Number(evento.target.dataset.id));
  if(exercicio){exercicio.peso=Number(evento.target.value)||0;guardarPeso(exercicio);}
});
listaExercicios.addEventListener("click",function(evento){
  const botao=evento.target.closest(".botao-remover");
  if(!botao)return;
  const id=Number(botao.dataset.id);
  const indice=treinoAtual.exercicios.findIndex(function(e){return e.id===id;});
  if(indice!==-1){treinoAtual.exercicios.splice(indice,1);mostrarExercicios(obterExerciciosFiltrados());}
});

// =====================================================
// 9. ADICIONAR EXERCÍCIO
// =====================================================
if(formulario){
  formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    const nome=document.querySelector("#nomeExercicio").value.trim();
    const grupo=document.querySelector("#grupoMuscular").value;
    const series=Number(document.querySelector("#series").value);
    const repeticoes=document.querySelector("#repeticoes").value.trim();
    const descanso=document.querySelector("#descansoExercicio").value;
    const falha=document.querySelector("#ateFalha").checked;
    if(!nome || !grupo || !series || !repeticoes){return;}
    const duplicado=treinoAtual.exercicios.some(function(e){return normalizarTexto(e.nome)===normalizarTexto(nome);});
    if(duplicado){alert("Já existe um exercício com esse nome neste treino.");return;}
    const novo={id:Date.now(),nome:nome,grupo:grupo,series:series,repeticoes:repeticoes,descanso:descanso,falha:falha,peso:0,personalizado:true};
    treinoAtual.exercicios.push(novo);
    formulario.reset();
    document.querySelector("#series").value=3;
    mostrarExercicios(obterExerciciosFiltrados());
  });
}

// =====================================================
// 10. CALENDÁRIO
// =====================================================
(function criarCalendario(){
  const icone=document.querySelector(".icone-sidebar");
  if(!icone)return;

  icone.setAttribute("role","button");
  icone.setAttribute("tabindex","0");
  icone.setAttribute("aria-label","Abrir calendário");

  const dialog=document.createElement("dialog");
  dialog.id="calendarioDialog";
  dialog.innerHTML=`
    <div class="calendario-conteudo">
      <div class="calendario-topo">
        <div>
          <span class="calendario-kicker">CALENDÁRIO</span>
          <h2>📅 Os teus treinos</h2>
        </div>
        <button type="button" class="calendario-fechar" aria-label="Fechar">×</button>
      </div>

      <div class="calendario-navegacao">
        <button type="button" id="mesAnterior" aria-label="Mês anterior">‹</button>
        <strong id="mesAtual"></strong>
        <button type="button" id="mesSeguinte" aria-label="Mês seguinte">›</button>
      </div>

      <div class="calendario-semana">
        <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span>
        <span>SEX</span><span>SÁB</span><span>DOM</span>
      </div>

      <div id="diasCalendario" class="calendario-dias"></div>
      <p id="dataCalendarioSelecionada" class="calendario-selecionada">Seleciona um dia.</p>
    </div>
  `;
  document.body.appendChild(dialog);

  const hoje=new Date();
  let mes=hoje.getMonth();
  let ano=hoje.getFullYear();
  const nomesMeses=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  const dias=dialog.querySelector("#diasCalendario");
  const titulo=dialog.querySelector("#mesAtual");
  const selecionada=dialog.querySelector("#dataCalendarioSelecionada");

  function chaveData(d){
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
  }

  function desenharCalendario(){
    titulo.textContent=`${nomesMeses[mes]} ${ano}`;
    dias.innerHTML="";

    const primeiroDia=new Date(ano,mes,1);
    const ultimoDia=new Date(ano,mes+1,0);
    const offset=(primeiroDia.getDay()+6)%7;

    for(let i=0;i<offset;i++){
      const vazio=document.createElement("span");
      vazio.className="dia-vazio";
      dias.appendChild(vazio);
    }

    for(let numero=1;numero<=ultimoDia.getDate();numero++){
      const botao=document.createElement("button");
      const data=new Date(ano,mes,numero);
      botao.type="button";
      botao.className="dia-calendario";
      botao.textContent=numero;

      if(chaveData(data)===chaveData(hoje)){
        botao.classList.add("hoje");
      }

      botao.addEventListener("click",function(){
        document.querySelectorAll(".dia-calendario.selecionado").forEach(function(item){
          item.classList.remove("selecionado");
        });
        botao.classList.add("selecionado");

        const texto=`${String(numero).padStart(2,"0")}/${String(mes+1).padStart(2,"0")}/${ano}`;
        selecionada.textContent=`Treino selecionado: ${texto}`;
        localStorage.setItem("meuPlanoDataTreino",chaveData(data));
      });

      dias.appendChild(botao);
    }
  }

  function abrir(){
    desenharCalendario();
    dialog.showModal();
  }

  icone.addEventListener("click",abrir);
  icone.addEventListener("keydown",function(e){
    if(e.key==="Enter" || e.key===" "){
      e.preventDefault();
      abrir();
    }
  });

  dialog.querySelector(".calendario-fechar").addEventListener("click",function(){
    dialog.close();
  });

  dialog.querySelector("#mesAnterior").addEventListener("click",function(){
    mes--;
    if(mes<0){mes=11;ano--;}
    desenharCalendario();
  });

  dialog.querySelector("#mesSeguinte").addEventListener("click",function(){
    mes++;
    if(mes>11){mes=0;ano++;}
    desenharCalendario();
  });

  dialog.addEventListener("click",function(e){
    if(e.target===dialog)dialog.close();
  });
})();

// =====================================================
// 11. SPOTIFY FLUTUANTE
// =====================================================
(function criarSpotify(){
  const caixa=document.createElement("div");
  caixa.className="spotify-flutuante";
  caixa.innerHTML=`
    <button type="button" class="spotify-botao" aria-label="Abrir menu do Spotify">🎵</button>
    <div class="spotify-menu">
      <strong>Spotify</strong>
      <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">▶ Abrir Spotify</a>
      <a href="https://open.spotify.com/search/workout" target="_blank" rel="noopener noreferrer">🔎 Procurar música</a>
    </div>
  `;
  document.body.appendChild(caixa);

  caixa.querySelector(".spotify-botao").addEventListener("click",function(){
    caixa.classList.toggle("aberto");
  });
})();

// =====================================================
// 12. INICIALIZAÇÃO
// =====================================================

// =====================================================
if(tituloTreino)atualizarCabecalho();
mostrarExercicios(treinoAtual.exercicios);
