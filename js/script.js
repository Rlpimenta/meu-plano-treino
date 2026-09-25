// ==========================================
// DADOS DOS TREINOS
// ==========================================

const treinos = [{"dia":"D1","nome":"Pull + Bíceps + Antebraço","exercicios":[{"id":1,"nome":"Chin Up","grupo":"Costas","series":3,"repeticoes":"6-10","falha":true,"descanso":"2-3 min","peso":0},{"id":2,"nome":"Lat Pulldown Wide Grip","grupo":"Costas","series":3,"repeticoes":"8-12","falha":false,"descanso":"2-3 min","peso":0},{"id":3,"nome":"Chest-Supported Low Row","grupo":"Costas","series":3,"repeticoes":"8-12","falha":true,"descanso":"2-3 min","peso":0},{"id":4,"nome":"Single-Arm Cable Row","grupo":"Costas","series":2,"repeticoes":"10-15","falha":false,"descanso":"60-90 seg","peso":0},{"id":5,"nome":"Reverse Fly Machine","grupo":"Ombros","series":3,"repeticoes":"12-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":6,"nome":"Preacher Curl","grupo":"Bíceps","series":3,"repeticoes":"8-12","falha":true,"descanso":"60-90 seg","peso":0},{"id":7,"nome":"Incline Dumbbell Curl","grupo":"Bíceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":8,"nome":"Reverse Wrist Curl","grupo":"Antebraço","series":2,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":9,"nome":"Wrist Curl","grupo":"Antebraço","series":2,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0}]},{"dia":"D2","nome":"Lower A — Pesado","exercicios":[{"id":10,"nome":"Smith Machine Squat","grupo":"Pernas","series":3,"repeticoes":"6-10","falha":true,"descanso":"2-3 min","peso":0},{"id":11,"nome":"Romanian Deadlift / Stiff","grupo":"Pernas","series":3,"repeticoes":"8-12","falha":true,"descanso":"2-3 min","peso":0},{"id":12,"nome":"Barbell Hip Thrust","grupo":"Glúteos","series":3,"repeticoes":"6-10","falha":true,"descanso":"2-3 min","peso":0},{"id":13,"nome":"Leg Press 45°","grupo":"Pernas","series":3,"repeticoes":"10-15","falha":true,"descanso":"2-3 min","peso":0},{"id":14,"nome":"Lying Leg Curl","grupo":"Posterior da coxa","series":3,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":15,"nome":"Leg Extension","grupo":"Quadríceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":16,"nome":"Standing Calf Raise","grupo":"Gémeos","series":3,"repeticoes":"8-12","falha":true,"descanso":"60-90 seg","peso":0},{"id":17,"nome":"Seated Calf Raise","grupo":"Gémeos","series":3,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0}]},{"dia":"D3","nome":"Push + Ombros + Tríceps","exercicios":[{"id":18,"nome":"Barbell Bench Press","grupo":"Peito","series":3,"repeticoes":"6-10","falha":true,"descanso":"2-3 min","peso":0},{"id":19,"nome":"Incline Dumbbell Bench Press","grupo":"Peito","series":3,"repeticoes":"8-12","falha":true,"descanso":"2-3 min","peso":0},{"id":20,"nome":"Pec Fly","grupo":"Peito","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":21,"nome":"Cable Crossover — High Pulley","grupo":"Peito","series":2,"repeticoes":"12-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":22,"nome":"Dumbbell Shoulder Press","grupo":"Ombros","series":3,"repeticoes":"8-12","falha":true,"descanso":"2-3 min","peso":0},{"id":23,"nome":"Cable Lateral Raise","grupo":"Ombros","series":3,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":24,"nome":"Cable Rear Delt Fly","grupo":"Ombros","series":2,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":25,"nome":"Lying Triceps Extension / Skullcrusher","grupo":"Tríceps","series":3,"repeticoes":"8-12","falha":true,"descanso":"60-90 seg","peso":0},{"id":26,"nome":"Cable Triceps Extension","grupo":"Tríceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":27,"nome":"Overhead Cable Triceps Extension","grupo":"Tríceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0}]},{"dia":"D4","nome":"Upper","exercicios":[{"id":28,"nome":"Lat Pulldown / Chin Up","grupo":"Costas","series":3,"repeticoes":"8-12","falha":false,"descanso":"2-3 min","peso":0},{"id":29,"nome":"Upper Back Machine","grupo":"Costas","series":3,"repeticoes":"8-12","falha":false,"descanso":"2-3 min","peso":0},{"id":30,"nome":"Machine Chest Press","grupo":"Peito","series":3,"repeticoes":"8-12","falha":false,"descanso":"2-3 min","peso":0},{"id":31,"nome":"Low-to-High Cable Fly","grupo":"Peito","series":2,"repeticoes":"12-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":32,"nome":"Cable Lateral Raise","grupo":"Ombros","series":3,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":33,"nome":"Cable Rear Delt Fly","grupo":"Ombros","series":2,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":34,"nome":"Hammer Curl","grupo":"Bíceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":35,"nome":"Rope Pushdown","grupo":"Tríceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":36,"nome":"Crunch","grupo":"Abdómen","series":3,"repeticoes":"12-15","falha":true,"descanso":"60-90 seg","peso":0}]},{"dia":"D5","nome":"Lower B","exercicios":[{"id":37,"nome":"Bulgarian Split Squat","grupo":"Pernas","series":3,"repeticoes":"8-12","falha":true,"descanso":"2-3 min","peso":0},{"id":38,"nome":"Hip Thrust / Glute Bridge","grupo":"Glúteos","series":3,"repeticoes":"8-12","falha":true,"descanso":"2-3 min","peso":0},{"id":39,"nome":"Single-Leg Romanian Deadlift","grupo":"Posterior da coxa","series":2,"repeticoes":"10-12","falha":true,"descanso":"2-3 min","peso":0},{"id":40,"nome":"Leg Extension Unilateral","grupo":"Quadríceps","series":2,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":41,"nome":"Lying Leg Curl","grupo":"Posterior da coxa","series":3,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":42,"nome":"Hip Abduction","grupo":"Glúteos","series":3,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":43,"nome":"Leg Press Calf Raise","grupo":"Gémeos","series":3,"repeticoes":"10-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":44,"nome":"Seated Calf Raise","grupo":"Gémeos","series":3,"repeticoes":"12-20","falha":true,"descanso":"60-90 seg","peso":0},{"id":45,"nome":"Oblique Crunch","grupo":"Abdómen","series":3,"repeticoes":"12-15","falha":true,"descanso":"60-90 seg","peso":0},{"id":46,"nome":"Plank","grupo":"Abdómen","series":2,"repeticoes":"30-60 seg","falha":true,"descanso":"60-90 seg","peso":0}]}];

// ==========================================
// CONFIGURAÇÕES DAS IMAGENS
// ==========================================

const BASE_IMAGENS = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/";
const URL_BANCO_EXERCICIOS = "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json";

// Fallback caso o banco online não carregue algum exercício.
const imagensFallback = {
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
    46: "Plank"
};

let bancoImagens = [];
const animacoesImagens = [];

function normalizarTexto(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\\u0300-\\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

async function carregarBancoImagens() {
    try {
        const resposta = await fetch(URL_BANCO_EXERCICIOS);

        if (!resposta.ok) {
            throw new Error("Não foi possível carregar o banco de exercícios.");
        }

        const dados = await resposta.json();
        bancoImagens = Array.isArray(dados) ? dados : [];

        // Se o banco carregou, redesenhamos o treino atual para usar as imagens encontradas.
        atualizarLista();
    } catch (erro) {
        console.warn("Banco de imagens online indisponível. A usar imagens de fallback.");
    }
}

function encontrarDadosImagem(exercicio) {
    if (!bancoImagens.length) {
        return null;
    }

    const nome = normalizarTexto(exercicio.nome);

    // 1. Correspondência exata pelo nome.
    let encontrado = bancoImagens.find(function(item) {
        return normalizarTexto(item.name) === nome;
    });

    if (encontrado) {
        return encontrado;
    }

    // 2. Alguns nomes do nosso treino são descrições próprias.
    const aliases = {
        "chest supported low row": ["Leverage Iso Row", "Chest Supported Row"],
        "single arm cable row": ["Seated One Arm Cable Pulley Rows"],
        "reverse fly machine": ["Reverse Machine Flyes"],
        "reverse wrist curl": ["Palms Down Barbell Wrist Curl Over A Bench"],
        "wrist curl": ["Palms Up Barbell Wrist Curl Over A Bench"],
        "romanian deadlift stiff": ["Romanian Deadlift"],
        "leg press 45": ["Leg Press"],
        "pec fly": ["Butterfly"],
        "cable crossover high pulley": ["Cable Crossover"],
        "dumbbell shoulder press": ["Seated Dumbbell Press"],
        "cable lateral raise": ["Bent Over Low Pulley Side Lateral"],
        "lying triceps extension skullcrusher": ["EZ Bar Skullcrusher"],
        "cable triceps extension": ["Cable One Arm Tricep Extension"],
        "overhead cable triceps extension": ["Cable Rope Overhead Triceps Extension"],
        "lat pulldown chin up": ["Wide Grip Lat Pulldown", "Chin Up"],
        "upper back machine": ["Leverage High Row"],
        "machine chest press": ["Leverage Chest Press"],
        "low to high cable fly": ["Low Cable Crossover"],
        "hammer curl": ["Hammer Curls"],
        "rope pushdown": ["Triceps Pushdown Rope Attachment"],
        "crunch": ["Crunches"],
        "bulgarian split squat": ["Split Squat with Dumbbells"],
        "hip thrust glute bridge": ["Barbell Hip Thrust"],
        "single leg romanian deadlift": ["Romanian Deadlift"],
        "leg extension unilateral": ["Single Leg Leg Extension"],
        "hip abduction": ["Thigh Abductor"],
        "leg press calf raise": ["Calf Press"],
        "oblique crunch": ["Oblique Crunches"],
        "plank": ["Plank"]
    };

    const alternativas = aliases[nome] || [];

    for (const alternativa of alternativas) {
        encontrado = bancoImagens.find(function(item) {
            return normalizarTexto(item.name) === normalizarTexto(alternativa);
        });

        if (encontrado) {
            return encontrado;
        }
    }

    // 3. Último recurso: procura parcial pelo nome.
    encontrado = bancoImagens.find(function(item) {
        const nomeBanco = normalizarTexto(item.name);
        return nome.length > 8 && (nomeBanco.includes(nome) || nome.includes(nomeBanco));
    });

    return encontrado || null;
}

function obterUrlsImagem(exercicio) {
    const dados = encontrarDadosImagem(exercicio);

    if (dados && Array.isArray(dados.images) && dados.images.length > 0) {
        return dados.images.map(function(caminho) {
            return BASE_IMAGENS + caminho;
        });
    }

    const pasta = imagensFallback[exercicio.id];

    if (!pasta) {
        return [];
    }

    return [
        `${BASE_IMAGENS}${pasta}/0.jpg`,
        `${BASE_IMAGENS}${pasta}/1.jpg`
    ];
}

function adicionarEstiloAnimacaoImagens() {
    if (document.querySelector("#estiloAnimacaoImagens")) {
        return;
    }

    const estilo = document.createElement("style");
    estilo.id = "estiloAnimacaoImagens";
    estilo.textContent = `
        .imagem-exercicio {
            position: relative;
            overflow: hidden;
        }

        .imagem-exercicio a {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            min-height: 220px;
        }

        .imagem-exercicio .frame-exercicio {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: opacity 0.25s ease;
        }

        .imagem-exercicio .frame-1 {
            opacity: 1;
            z-index: 1;
        }

        .imagem-exercicio .frame-2 {
            opacity: 0;
            z-index: 2;
        }
    `;

    document.head.appendChild(estilo);
}

function pararAnimacoesImagens() {
    animacoesImagens.forEach(function(intervalo) {
        clearInterval(intervalo);
    });

    animacoesImagens.length = 0;
}

function iniciarAnimacaoImagem(frame1, frame2) {
    if (!frame1 || !frame2) {
        return;
    }

    let segundoFrameVisivel = false;
    let velocidade = 1000;
    let intervaloAtual = null;

    function trocarFrame() {
        segundoFrameVisivel = !segundoFrameVisivel;

        frame1.style.opacity = segundoFrameVisivel ? "0" : "1";
        frame2.style.opacity = segundoFrameVisivel ? "1" : "0";
    }

    function iniciar(tempo) {
        if (intervaloAtual) {
            clearInterval(intervaloAtual);
        }

        velocidade = tempo;

        intervaloAtual = setInterval(
            trocarFrame,
            velocidade
        );

        animacoesImagens.push(intervaloAtual);
    }

    // As duas imagens ficam carregadas ao mesmo tempo.
    // Depois alternamos apenas a opacidade entre elas.
    iniciar(velocidade);

    const area = frame1.closest(".imagem-exercicio");

    if (area) {
        area.addEventListener("mouseenter", function() {
            iniciar(500);
        });

        area.addEventListener("mouseleave", function() {
            iniciar(1000);
        });
    }
}


// ==========================================
// DESCRIÇÕES DOS TREINOS
// ==========================================

const descricoesTreinos = {
    D1: "Costas, deltoide posterior, bíceps e antebraço. Finaliza com 20 min. de cardio.",
    D2: "Quadríceps, posterior da coxa, glúteos e gémeos. Finaliza com 20 min. de cardio.",
    D3: "Peito, ombros e tríceps. Finaliza com 20 min. de cardio.",
    D4: "Costas, peito, ombros, braços e abdómen. Finaliza com 20 min. de cardio.",
    D5: "Pernas, glúteos, gémeos e abdómen. Finaliza com 20 min. de cardio."
};


// ==========================================
// PESOS GUARDADOS
// ==========================================

const CHAVE_PESOS = "meuPlanoPesosV2";

function guardarDados() {
    try {
        const pesos = {};

        treinos.forEach(function(treino) {
            treino.exercicios.forEach(function(exercicio) {
                pesos[exercicio.id] = exercicio.peso || 0;
            });
        });

        localStorage.setItem(CHAVE_PESOS, JSON.stringify(pesos));
    } catch (erro) {
        console.warn("Não foi possível guardar os pesos.");
    }
}

function carregarPesos() {
    try {
        const pesos = JSON.parse(localStorage.getItem(CHAVE_PESOS));

        if (!pesos) {
            return;
        }

        treinos.forEach(function(treino) {
            treino.exercicios.forEach(function(exercicio) {
                if (pesos[exercicio.id] !== undefined) {
                    exercicio.peso = Number(pesos[exercicio.id]) || 0;
                }
            });
        });
    } catch (erro) {
        console.warn("Não foi possível carregar os pesos.");
    }
}

carregarPesos();


// ==========================================
// ELEMENTOS DA PÁGINA
// ==========================================

const linksDias = document.querySelectorAll("#diasTreino a");
const campoPesquisa = document.querySelector("#pesquisaExercicio");
const filtroMusculo = document.querySelector("#filtroMusculo");
const formulario = document.querySelector("#formularioExercicio");
const listaExercicios = document.querySelector("#listaExercicios");
const contadorResultados = document.querySelector("#contadorResultados");
const tituloTreino = document.querySelector("#treinoAtual h2");
const descricaoTreino = document.querySelector("#treinoAtual .cabecalho-treino p:last-child");

let treinoAtual = treinos[0];


// ==========================================
// CABEÇALHO
// ==========================================

function atualizarCabecalhoTreino() {
    if (tituloTreino) {
        tituloTreino.textContent = `${treinoAtual.dia} — ${treinoAtual.nome}`;
    }

    if (descricaoTreino) {
        descricaoTreino.textContent = descricoesTreinos[treinoAtual.dia] || "Organiza o teu treino e acompanha a tua evolução.";
    }
}


// ==========================================
// CONTADOR
// ==========================================

function atualizarContador(numero) {
    if (contadorResultados) {
        contadorResultados.textContent = `${numero} exercícios encontrados.`;
    }
}


// ==========================================
// MOSTRAR TREINO
// ==========================================

function mostrarTreino(treino) {
    treinoAtual = treino;

    if (campoPesquisa) {
        campoPesquisa.value = "";
    }

    if (filtroMusculo) {
        filtroMusculo.value = "todos";
    }

    atualizarCabecalhoTreino();
    atualizarLinkAtivo();
    atualizarLista();
}


// ==========================================
// LINK ATIVO
// ==========================================

function atualizarLinkAtivo() {
    linksDias.forEach(function(link) {
        link.classList.remove("ativo");
    });

    const indice = treinos.indexOf(treinoAtual);

    if (linksDias[indice]) {
        linksDias[indice].classList.add("ativo");
    }
}


// ==========================================
// PESQUISA + FILTRO
// ==========================================

function obterExerciciosFiltrados() {
    const texto = campoPesquisa ? campoPesquisa.value.trim().toLowerCase() : "";
    const grupo = filtroMusculo ? filtroMusculo.value.toLowerCase() : "todos";

    return treinoAtual.exercicios.filter(function(exercicio) {
        const correspondeAoNome = exercicio.nome.toLowerCase().includes(texto);
        const correspondeAoGrupo =
            grupo === "todos" ||
            exercicio.grupo.toLowerCase() === grupo;

        return correspondeAoNome && correspondeAoGrupo;
    });
}

function atualizarLista() {
    mostrarExercicios(obterExerciciosFiltrados());
}


// ==========================================
// MOSTRAR EXERCÍCIOS
// ==========================================

function mostrarExercicios(exercicios) {
    if (!listaExercicios) {
        return;
    }

    pararAnimacoesImagens();
    listaExercicios.innerHTML = "";
    atualizarContador(exercicios.length);

    if (exercicios.length === 0) {
        listaExercicios.innerHTML = `
            <p class="estado-vazio">
                Nenhum exercício encontrado.
            </p>
        `;
        return;
    }

    exercicios.forEach(function(exercicio) {
        const artigo = document.createElement("article");
        const urlsImagem = obterUrlsImagem(exercicio);
        const linkVideo = `https://www.youtube.com/results?search_query=${encodeURIComponent(exercicio.nome + " exercise")}`;

        artigo.className = "card-exercicio";
        artigo.dataset.id = exercicio.id;

        artigo.innerHTML = `
            <div class="imagem-exercicio">
                <a href="${linkVideo}" target="_blank" rel="noopener noreferrer" title="Ver demonstração do exercício">
                    ${urlsImagem.length >= 2
                        ? `
                            <img
                                class="frame-exercicio frame-1"
                                src="${urlsImagem[0]}"
                                alt="Demonstração do exercício ${exercicio.nome} — posição 1"
                            >
                            <img
                                class="frame-exercicio frame-2"
                                src="${urlsImagem[1]}"
                                alt="Demonstração do exercício ${exercicio.nome} — posição 2"
                            >
                        `
                        : urlsImagem.length === 1
                            ? `
                                <img
                                    class="frame-exercicio frame-1"
                                    src="${urlsImagem[0]}"
                                    alt="Demonstração do exercício ${exercicio.nome}"
                                >
                            `
                            : `<span>🖼️</span>`
                    }
                </a>
            </div>

            <div class="cabecalho-cartao">
                <h3>${exercicio.nome}</h3>
                ${exercicio.falha ? `<span class="icone-falha" title="Até à falha">🔥</span>` : ""}
            </div>

            <p class="grupo-cartao">${exercicio.grupo}</p>

            <div class="info-exercicio">
                <span class="info-item">🔁 ${exercicio.series} × ${exercicio.repeticoes}</span>
                <span class="info-item">⏱️ ${exercicio.descanso}</span>
            </div>

            <div class="peso-cartao">
                <label for="peso-${exercicio.id}">⚖️ Peso</label>
                <div>
                    <input
                        id="peso-${exercicio.id}"
                        type="number"
                        class="pesoExercicio"
                        value="${exercicio.peso || 0}"
                        min="0"
                        step="0.5"
                    >
                    <span>kg</span>
                </div>
            </div>

            <div class="botoes-exercicio">
                <a
                    class="botao-video"
                    href="${linkVideo}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ▶ Ver vídeo
                </a>

                <button
                    type="button"
                    class="botao-registar"
                    data-id="${exercicio.id}"
                >
                    ＋ Registar
                </button>
            </div>

            <button
                type="button"
                class="botao-apagar"
                data-id="${exercicio.id}"
            >
                🗑️ Remover
            </button>
        `;

        listaExercicios.appendChild(artigo);

        const frame1 = artigo.querySelector(".frame-1");
        const frame2 = artigo.querySelector(".frame-2");

        if (frame1 && frame2 && urlsImagem.length >= 2) {
            frame1.addEventListener("error", function() {
                frame1.style.display = "none";
                frame2.style.position = "relative";
                frame2.style.opacity = "1";
            }, { once: true });

            frame2.addEventListener("error", function() {
                frame2.style.display = "none";
                frame1.style.position = "relative";
                frame1.style.opacity = "1";
            }, { once: true });

            iniciarAnimacaoImagem(frame1, frame2);
        }
    });
}


// ==========================================
// ENCONTRAR EXERCÍCIO
// ==========================================

function encontrarExercicio(id) {
    for (const treino of treinos) {
        const exercicio = treino.exercicios.find(function(item) {
            return Number(item.id) === Number(id);
        });

        if (exercicio) {
            return exercicio;
        }
    }

    return null;
}


// ==========================================
// PESO
// ==========================================

if (listaExercicios) {
    listaExercicios.addEventListener("change", function(evento) {
        if (!evento.target.classList.contains("pesoExercicio")) {
            return;
        }

        const id = evento.target.id.replace("peso-", "");
        const novoPeso = Number(evento.target.value) || 0;
        const exercicio = encontrarExercicio(id);

        if (exercicio) {
            exercicio.peso = novoPeso;
            guardarDados();
        }
    });


    // ==========================================
    // REGISTAR + REMOVER
    // ==========================================

    listaExercicios.addEventListener("click", function(evento) {
        const botaoRegistar = evento.target.closest(".botao-registar");
        const botaoApagar = evento.target.closest(".botao-apagar");

        if (botaoRegistar) {
            const id = botaoRegistar.dataset.id;
            const exercicio = encontrarExercicio(id);
            const campoPeso = document.querySelector(`#peso-${id}`);

            if (!exercicio) {
                return;
            }

            if (campoPeso) {
                exercicio.peso = Number(campoPeso.value) || 0;
            }

            guardarDados();
            botaoRegistar.textContent = "✓ Guardado";

            setTimeout(function() {
                botaoRegistar.textContent = "＋ Registar";
            }, 1200);

            return;
        }

        if (botaoApagar) {
            const id = botaoApagar.dataset.id;
            const exercicio = encontrarExercicio(id);

            if (!exercicio) {
                return;
            }

            const confirmar = window.confirm(
                `Remover "${exercicio.nome}" deste treino?\n\nEsta ação pode ser desfeita apenas recarregando a página.`
            );

            if (!confirmar) {
                return;
            }

            treinoAtual.exercicios = treinoAtual.exercicios.filter(function(item) {
                return Number(item.id) !== Number(id);
            });

            atualizarLista();
        }
    });
}


// ==========================================
// MUDAR DE DIA
// ==========================================

linksDias.forEach(function(link, indice) {
    link.addEventListener("click", function(evento) {
        evento.preventDefault();
        mostrarTreino(treinos[indice]);
    });
});


// ==========================================
// PESQUISA
// ==========================================

if (campoPesquisa) {
    campoPesquisa.addEventListener("input", function() {
        atualizarLista();
    });
}


// ==========================================
// FILTRO
// ==========================================

if (filtroMusculo) {
    filtroMusculo.addEventListener("change", function() {
        atualizarLista();
    });
}


// ==========================================
// ADICIONAR EXERCÍCIO
// ==========================================

if (formulario) {
    formulario.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const campoNome = document.querySelector("#nomeExercicio");
        const campoGrupo = document.querySelector("#grupoMuscular");
        const campoSeries = document.querySelector("#series");
        const campoRepeticoes = document.querySelector("#repeticoes");
        const ateFalha = document.querySelector("#ateFalha");

        const nome = campoNome ? campoNome.value.trim() : "";
        const grupo = campoGrupo ? campoGrupo.value.trim() : "";
        const series = campoSeries ? Number(campoSeries.value) : 0;
        const repeticoes = campoRepeticoes ? campoRepeticoes.value.trim() : "";

        if (!nome || !grupo || !series || !repeticoes) {
            alert("Preenche os campos obrigatórios antes de adicionar o exercício.");
            return;
        }

        const novoExercicio = {
            id: Date.now(),
            nome: nome,
            grupo: grupo,
            series: series,
            repeticoes: repeticoes,
            falha: ateFalha ? ateFalha.checked : false,
            descanso: "60-90 seg",
            peso: 0,
            personalizado: true
        };

        treinoAtual.exercicios.push(novoExercicio);
        formulario.reset();
        atualizarLista();
    });
}


// ==========================================
// CALENDÁRIO — MÊS COMPLETO
// ==========================================

function criarCalendario() {
    const icone = document.querySelector(".icone-sidebar");

    if (!icone) {
        return;
    }

    icone.setAttribute("role", "button");
    icone.setAttribute("tabindex", "0");
    icone.setAttribute("title", "Abrir calendário");
    icone.setAttribute("aria-label", "Abrir calendário");

    const dialog = document.createElement("dialog");
    dialog.id = "calendarioDialog";

    dialog.innerHTML = `
        <div class="calendario-conteudo">
            <div class="calendario-topo">
                <button type="button" id="mesAnterior" aria-label="Mês anterior">‹</button>
                <h2 id="tituloMes"></h2>
                <button type="button" id="mesSeguinte" aria-label="Mês seguinte">›</button>
            </div>

            <div class="calendario-semana">
                <span>Dom</span>
                <span>Seg</span>
                <span>Ter</span>
                <span>Qua</span>
                <span>Qui</span>
                <span>Sex</span>
                <span>Sáb</span>
            </div>

            <div id="diasCalendario" class="calendario-dias"></div>

            <p id="dataCalendarioSelecionada">Seleciona um dia.</p>

            <button type="button" id="fecharCalendario">Fechar</button>
        </div>
    `;

    document.body.appendChild(dialog);

    const estilo = document.createElement("style");
    estilo.textContent = `
        #calendarioDialog {
            border: 0;
            border-radius: 14px;
            padding: 0;
            width: min(420px, 92vw);
            background: #111820;
            color: #fff;
            box-shadow: 0 20px 60px rgba(0,0,0,.55);
        }

        #calendarioDialog::backdrop {
            background: rgba(0,0,0,.72);
        }

        .calendario-conteudo {
            padding: 22px;
        }

        .calendario-topo {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .calendario-topo h2 {
            margin: 0;
            font-size: 20px;
            text-align: center;
        }

        .calendario-topo button,
        #fecharCalendario {
            border: 0;
            border-radius: 8px;
            background: #e11d2e;
            color: white;
            cursor: pointer;
            padding: 8px 12px;
        }

        .calendario-semana,
        .calendario-dias {
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 6px;
        }

        .calendario-semana {
            margin-top: 20px;
            margin-bottom: 8px;
            color: #aaa;
            font-size: 12px;
            text-align: center;
        }

        .calendario-dias button {
            min-height: 38px;
            border: 1px solid #303944;
            border-radius: 8px;
            background: #1a222c;
            color: #fff;
            cursor: pointer;
        }

        .calendario-dias button:hover,
        .calendario-dias button.selecionado {
            background: #e11d2e;
            border-color: #e11d2e;
        }

        .calendario-dias .hoje {
            outline: 2px solid #e11d2e;
        }

        #dataCalendarioSelecionada {
            margin: 18px 0 14px;
            color: #ccc;
            text-align: center;
        }

        #fecharCalendario {
            width: 100%;
        }
    `;

    document.head.appendChild(estilo);

    const tituloMes = dialog.querySelector("#tituloMes");
    const diasCalendario = dialog.querySelector("#diasCalendario");
    const textoSelecionado = dialog.querySelector("#dataCalendarioSelecionada");

    let mesAtual = new Date();
    let dataSelecionada = null;

    function desenharMes() {
        diasCalendario.innerHTML = "";

        const ano = mesAtual.getFullYear();
        const mes = mesAtual.getMonth();
        const primeiroDia = new Date(ano, mes, 1).getDay();
        const ultimoDia = new Date(ano, mes + 1, 0).getDate();

        tituloMes.textContent = new Intl.DateTimeFormat("pt-PT", {
            month: "long",
            year: "numeric"
        }).format(mesAtual);

        for (let i = 0; i < primeiroDia; i += 1) {
            const vazio = document.createElement("span");
            diasCalendario.appendChild(vazio);
        }

        const hoje = new Date();

        for (let dia = 1; dia <= ultimoDia; dia += 1) {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.textContent = dia;

            const eHoje =
                dia === hoje.getDate() &&
                mes === hoje.getMonth() &&
                ano === hoje.getFullYear();

            if (eHoje) {
                botao.classList.add("hoje");
            }

            if (
                dataSelecionada &&
                dataSelecionada.getDate() === dia &&
                dataSelecionada.getMonth() === mes &&
                dataSelecionada.getFullYear() === ano
            ) {
                botao.classList.add("selecionado");
            }

            botao.addEventListener("click", function() {
                dataSelecionada = new Date(ano, mes, dia);
                textoSelecionado.textContent = `Treino marcado para ${dia.toString().padStart(2, "0")}/${(mes + 1).toString().padStart(2, "0")}/${ano}.`;
                desenharMes();
            });

            diasCalendario.appendChild(botao);
        }
    }

    function abrirCalendario() {
        mesAtual = dataSelecionada ? new Date(dataSelecionada) : new Date();
        desenharMes();

        if (typeof dialog.showModal === "function") {
            dialog.showModal();
        } else {
            dialog.setAttribute("open", "");
        }
    }

    icone.addEventListener("click", abrirCalendario);

    icone.addEventListener("keydown", function(evento) {
        if (evento.key === "Enter" || evento.key === " ") {
            evento.preventDefault();
            abrirCalendario();
        }
    });

    dialog.querySelector("#mesAnterior").addEventListener("click", function() {
        mesAtual.setMonth(mesAtual.getMonth() - 1);
        desenharMes();
    });

    dialog.querySelector("#mesSeguinte").addEventListener("click", function() {
        mesAtual.setMonth(mesAtual.getMonth() + 1);
        desenharMes();
    });

    dialog.querySelector("#fecharCalendario").addEventListener("click", function() {
        dialog.close();
    });
}


// ==========================================
// FRASES MOTIVACIONAIS DO HERO
// ==========================================

function iniciarFrasesMotivacionais() {

    const elemento = document.querySelector("#fraseMotivacional");

    if (!elemento) {
        return;
    }

    const frases = [
        "\"Disciplina hoje,\nresultado amanhã.\"",
        "\"Pequenos progressos,\ngrandes resultados.\"",
        "\"Treina. Regista.\nEvolui.\"",
        "\"Consistência todos os dias.\nResultados ao longo do tempo.\""
    ];

    let indice = 0;

    setInterval(function() {

        elemento.classList.add("trocando");

        setTimeout(function() {
            indice = (indice + 1) % frases.length;
            elemento.textContent = frases[indice];
            elemento.classList.remove("trocando");
        }, 350);

    }, 4500);
}


// ==========================================
// INÍCIO DA APLICAÇÃO
// ==========================================

adicionarEstiloAnimacaoImagens();
mostrarTreino(treinos[0]);
criarCalendario();
iniciarFrasesMotivacionais();
carregarBancoImagens();

