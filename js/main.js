import { loadQuestions, getFallbackQuestions } from './questions.js';
import { shuffleArray, showMessageBox } from './helpers.js';
import {
    updatePrizeLadder,
    generatePrizeLadder,
    loadQuestion,
    markAnswer,
    askPlayerName
} from './ui.js';

const QUESTIONS_PER_GAME = 12;
const MAX_GAMES = 5;
const difficultyMap = {
    1: 'easy',
    2: 'medium',
    3: 'hard',
    4: 'very-hard',
    5: 'expert'
};

// Variables globales
let allAvailableQuestions = [];
let playerName = "Jugador";
let hasPlayerNameBeenSet = false;
let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let gamesPlayedCount = 0;
let playedIndices = new Set();
let gameStarted = false;
let used5050 = false;
let usedCall = false;
let usedAudience = false;
let questionsLoaded = false;

// Referencias a elementos del DOM
const questionText = document.getElementById('questionText');
const optionsGrid = document.getElementById('optionsGrid');
const nextButton = document.getElementById('nextQuestionButton');
const restartButton = document.getElementById('restartGameButton');
const startButton = document.getElementById('startGameButton');
const prizeLadderElement = document.getElementById('prizeLadder');
const gameLogoImage = document.getElementById('gameLogoImage');

/**
 * Inicializa el juego cargando las preguntas
 */
async function initializeGame() {
    // Mostrar mensaje de carga
    questionText.textContent = "Cargando preguntas...";
    startButton.disabled = true;
    startButton.textContent = "Cargando...";
    
    try {
        // Intentar cargar preguntas desde JSON
        allAvailableQuestions = await loadQuestions();
        
        // Si no se pudieron cargar, usar preguntas de fallback
        if (allAvailableQuestions.length === 0) {
            console.warn('⚠️ Usando preguntas de fallback debido a error en la carga');
            allAvailableQuestions = getFallbackQuestions();
            
            showMessageBox(
                "Advertencia",
                "No se pudieron cargar todas las preguntas. El juego funcionará con un conjunto limitado de preguntas de emergencia.",
                [{ text: "Continuar", className: "confirm" }]
            );
        }
        
        questionsLoaded = true;
        questionText.textContent = "Haz clic en 'Empezar Juego' para comenzar.";
        startButton.disabled = false;
        startButton.textContent = "Empezar Juego";
        
        console.log(`🎮 Juego inicializado con ${allAvailableQuestions.length} preguntas`);
        
    } catch (error) {
        console.error('💥 Error crítico inicializando el juego:', error);
        
        // En caso de error crítico, usar preguntas de fallback
        allAvailableQuestions = getFallbackQuestions();
        questionsLoaded = true;
        
        showMessageBox(
            "Error de Carga",
            "Hubo un problema cargando las preguntas. El juego funcionará con preguntas básicas. Verifica tu conexión e intenta recargar la página.",
            [
                { text: "Continuar", className: "confirm" },
                { text: "Recargar", className: "cancel", onClick: () => window.location.reload() }
            ]
        );
        
        questionText.textContent = "Haz clic en 'Empezar Juego' para comenzar (modo limitado).";
        startButton.disabled = false;
        startButton.textContent = "Empezar Juego";
    }
}

// Event listeners para las líneas de ayuda
document.getElementById('lifeline5050').onclick = () => {
    if (!gameStarted || used5050) return;
    showMessageBox("¿Usar 50:50?", "Eliminará dos opciones incorrectas.", [
        { text: "Sí", className: "confirm", onClick: apply5050 },
        { text: "No", className: "cancel" }
    ]);
};

document.getElementById('lifelineCall').onclick = () => {
    if (!gameStarted || usedCall) return;
    showMessageBox("¿Usar Llamada?", "Recibirás una pista de un amigo.", [
        { text: "Sí", className: "confirm", onClick: applyCall },
        { text: "No", className: "cancel" }
    ]);
};

document.getElementById('lifelineAudience').onclick = () => {
    if (!gameStarted || usedAudience) return;
    showMessageBox("¿Usar Público?", "Verás qué opción prefiere el público.", [
        { text: "Sí", className: "confirm", onClick: applyAudience },
        { text: "No", className: "cancel" }
    ]);
};

function apply5050() {
    used5050 = true;
    document.getElementById('lifeline5050').disabled = true;

    const q = questions[currentQuestionIndex];
    const correct = q.correct;
    const incorrect = Object.keys(q.options).filter(k => k !== correct);
    shuffleArray(incorrect);
    const toHide = incorrect.slice(0, 2);

    optionsGrid.querySelectorAll('.option-button').forEach(btn => {
        if (toHide.includes(btn.dataset.option)) {
            btn.disabled = true;
            btn.style.display = 'none';
        }
    });
}

function applyCall() {
    usedCall = true;
    document.getElementById('lifelineCall').disabled = true;

    const q = questions[currentQuestionIndex];
    const correctText = q.options[q.correct];
    showMessageBox("Llamada", `Tu amigo dice: "Creo que es ${q.correct}) ${correctText}."`, [
        { text: "Gracias", className: "confirm" }
    ]);
}

function applyAudience() {
    usedAudience = true;
    document.getElementById('lifelineAudience').disabled = true;

    const q = questions[currentQuestionIndex];
    const correct = q.correct;
    const options = Object.keys(q.options);
    const votes = {};
    let remaining = 100;

    const correctVotes = Math.floor(Math.random() * 31) + 40; // 40–70%
    votes[correct] = correctVotes;
    remaining -= correctVotes;

    const incorrect = options.filter(k => k !== correct);
    incorrect.forEach((opt, i) => {
        if (i === incorrect.length - 1) {
            votes[opt] = remaining;
        } else {
            const portion = Math.floor(Math.random() * (remaining + 1));
            votes[opt] = portion;
            remaining -= portion;
        }
    });

    const summary = options.map(opt => `${opt}: ${votes[opt]}%`).join('\n');
    showMessageBox("Voto del Público", summary, [{ text: "Ok", className: "confirm" }]);
}

function startGame() {
    // Verificar que las preguntas estén cargadas
    if (!questionsLoaded) {
        showMessageBox(
            "Error",
            "Las preguntas aún no se han cargado. Por favor, espera un momento e intenta de nuevo.",
            [{ text: "OK", className: "confirm" }]
        );
        return;
    }

    gameStarted = true;
    startButton.style.display = "none";

    if (!hasPlayerNameBeenSet) {
        setTimeout(() => {
            gameLogoImage.style.display = "none";
            askPlayerName(name => {
                playerName = name;
                hasPlayerNameBeenSet = true;
                updateLogo();
                startRound();
            });
        }, 1500);
    } else {
        startRound();
    }
}

function startRound() {
    gamesPlayedCount++;
    
    // CORRECCIÓN: Verificar límite ANTES de obtener dificultad
    if (gamesPlayedCount > MAX_GAMES) {
        showMessageBox("¡Juegos Completados!", "Has jugado 5 partidas únicas o hemos agotado todas las preguntas disponibles para esta dificultad. ¿Quieres empezar desde el principio con todas las preguntas disponibles de nuevo?", [
            { text: "Sí, reiniciar todo", className: "confirm", onClick: resetAll }
        ]);
        return;
    }
    
    const difficulty = difficultyMap[gamesPlayedCount];
    if (!difficulty) return;

    const available = allAvailableQuestions
        .map((q, i) => ({ q, i }))
        .filter(({ q, i }) => q.difficulty === difficulty && !playedIndices.has(i));

    if (available.length < QUESTIONS_PER_GAME) {
        showMessageBox("Juego finalizado", "Has completado todas las rondas disponibles.", [
            { text: "Reiniciar todo", className: "confirm", onClick: resetAll }
        ]);
        return;
    }

    shuffleArray(available);
    questions = available.slice(0, QUESTIONS_PER_GAME).map(({ q, i }) => {
        playedIndices.add(i);
        return q;
    });

    currentQuestionIndex = 0;
    score = 0;
    used5050 = usedCall = usedAudience = false;

    generatePrizeLadder(prizeLadderElement);
    updatePrizeLadder(score, QUESTIONS_PER_GAME, prizeLadderElement);

    document.getElementById('lifeline5050').disabled = false;
    document.getElementById('lifelineCall').disabled = false;
    document.getElementById('lifelineAudience').disabled = false;

    loadCurrentQuestion();
}

function loadCurrentQuestion() {
    const q = questions[currentQuestionIndex];
    loadQuestion(q, currentQuestionIndex, optionsGrid, questionText, checkAnswer);
    nextButton.style.display = "none";
}

function checkAnswer(selectedKey) {
    const q = questions[currentQuestionIndex];
    const isCorrect = selectedKey === q.correct;

    const buttons = optionsGrid.querySelectorAll('.option-button');
    markAnswer(buttons, q.correct, selectedKey);

    if (isCorrect) {
        score++;
        updatePrizeLadder(score, QUESTIONS_PER_GAME, prizeLadderElement);
        showMessageBox("¡Correcto!", `Bien hecho, ${playerName}.`, [
            { text: "Siguiente", className: "confirm", onClick: nextQuestion }
        ]);
    } else {
        showMessageBox("¡Incorrecto!", `La correcta era: ${q.correct}) ${q.options[q.correct]}`, [
            { text: "Terminar", className: "cancel", onClick: () => endGame(false) }
        ]);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_GAME) {
        loadCurrentQuestion();
    } else {
        endGame(true);
    }
}

function endGame(won) {
    const message = won
        ? `¡Felicidades, ${playerName}! Has ganado el juego con ${score} puntos.`
        : `¡Fin del juego! Tu puntuación fue: ${score}.`;

    showMessageBox(won ? "¡Ganaste!" : "Game Over", message, [
        { text: "Reiniciar", className: "confirm", onClick: startRound }
    ]);
}

function resetAll() {
    playedIndices.clear();
    gamesPlayedCount = 0;
    hasPlayerNameBeenSet = false;
    gameLogoImage.style.display = "block";
    startGame();
}

function updateLogo() {
    gameLogoImage.src = `https://placehold.co/300x100/000000/00FF00?text=${encodeURIComponent(playerName)}`;
    gameLogoImage.alt = `Nombre del jugador: ${playerName}`;
    gameLogoImage.style.display = 'block';
}

// Event listeners
startButton.onclick = startGame;
nextButton.onclick = nextQuestion;
restartButton.onclick = startRound;

// Inicialización cuando se carga la página
window.onload = () => {
    generatePrizeLadder(prizeLadderElement);
    initializeGame(); // Cargar preguntas al inicio
};
