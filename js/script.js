// ==========================================
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
            {
                id: 36,
                nome: "Crunch",
                grupo: "Abdómen",
                series: 3,
                repeticoes: "12-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            }
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
            {
                id: 45,
                nome: "Oblique Crunch",
                grupo: "Abdómen",
                series: 3,
                repeticoes: "12-15",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            },
            {
                id: 46,
                nome: "Plank",
                grupo: "Abdómen",
                series: 2,
                repeticoes: "30-60 seg",
                falha: true,
                descanso: "60-90 seg",
                peso: 0
            }
        ]
    }

];


// ==========================================
// TREINO ATUAL
// ==========================================

let treinoAtual = treinos[0];


// ==========================================
// FUNÇÃO PARA MOSTRAR O TREINO
// ==========================================

function mostrarTreino(treino) {

    treinoAtual = treino;

    mostrarExercicios(treino.exercicios);
}


// ==========================================
// FUNÇÃO PARA MOSTRAR OS EXERCÍCIOS
// ==========================================

function mostrarExercicios(exercicios) {

    const lista = document.querySelector("#listaExercicios");

    lista.innerHTML = "";

    exercicios.forEach(function(exercicio) {

        const artigo = document.createElement("article");

        artigo.innerHTML = `
            <h3>${exercicio.nome}</h3>

            <p>Grupo muscular: ${exercicio.grupo}</p>

            <p>Séries: ${exercicio.series}</p>

            <p>Repetições: ${exercicio.repeticoes}</p>

            <p>Descanso: ${exercicio.descanso}</p>

            <p>
                ${exercicio.falha ? "🔥 Até à falha" : "Sem falha"}
            </p>

            <p>Peso: ${exercicio.peso} kg</p>
        `;

        lista.appendChild(artigo);
    });
}


// ==========================================
// AÇÕES DOS DIAS DE TREINO
// ==========================================

const linksDias = document.querySelectorAll("#diasTreino a");

linksDias.forEach(function(link) {

    link.addEventListener("click", function() {

        const indice = Array.from(linksDias).indexOf(link);

        mostrarTreino(treinos[indice]);

        campoPesquisa.value = "";
    });

});


// ==========================================
// TREINO INICIAL
// ==========================================

mostrarTreino(treinos[0]);


// ==========================================
// PESQUISA DE EXERCÍCIOS
// ==========================================

const campoPesquisa = document.querySelector("#pesquisaExercicio");

campoPesquisa.addEventListener("input", function() {

    const textoPesquisa = campoPesquisa.value.toLowerCase();

    const exerciciosEncontrados = treinoAtual.exercicios.filter(function(exercicio) {

        return exercicio.nome.toLowerCase().includes(textoPesquisa);

    });

    mostrarExercicios(exerciciosEncontrados);
});


// ==========================================
// FILTRO POR GRUPO MUSCULAR
// ==========================================

const filtroMusculo = document.querySelector("#filtroMusculo");

filtroMusculo.addEventListener("change", function() {

    const grupoSelecionado = filtroMusculo.value;

    const textoPesquisa = campoPesquisa.value.toLowerCase();

    const exerciciosFiltrados = treinoAtual.exercicios.filter(function(exercicio) {

        const correspondeAoGrupo =
            grupoSelecionado === "todos" ||
            exercicio.grupo.toLowerCase() === grupoSelecionado;

        const correspondeAPesquisa =
            exercicio.nome.toLowerCase().includes(textoPesquisa);

        return correspondeAoGrupo && correspondeAPesquisa;
    });

    mostrarExercicios(exerciciosFiltrados);
});


// ==========================================
// CONTADOR DE RESULTADOS
// ==========================================

function atualizarContador(numero) {

    const contador = document.querySelector("#contadorResultados");

    contador.textContent = `${numero} exercícios encontrados.`;
}


// ==========================================
// ESTADO VAZIO
// ==========================================

function mostrarExerciciosComContador(exercicios) {

    const lista = document.querySelector("#listaExercicios");

    lista.innerHTML = "";

    atualizarContador(exercicios.length);

    if (exercicios.length === 0) {

        lista.innerHTML = `
            <p>Nenhum exercício encontrado.</p>
        `;

        return;
    }

    exercicios.forEach(function(exercicio) {

        const artigo = document.createElement("article");

        artigo.innerHTML = `
            <h3>${exercicio.nome}</h3>

            <p>Grupo muscular: ${exercicio.grupo}</p>

            <p>Séries: ${exercicio.series}</p>

            <p>Repetições: ${exercicio.repeticoes}</p>

            <p>Descanso: ${exercicio.descanso}</p>

            <p>
                ${exercicio.falha ? "🔥 Até à falha" : "Sem falha"}
            </p>

            <p>Peso: ${exercicio.peso} kg</p>
        `;

        lista.appendChild(artigo);
    });
}