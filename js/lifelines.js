// js/lifelines.js

import { showMessageBox } from './helpers.js';

/**
 * Aplica la ayuda 50:50: desactiva dos opciones incorrectas.
 * @param {NodeList} optionButtons - Lista de botones de opciones.
 * @param {string} correctOption - Clave de la respuesta correcta (A, B, C, D).
 */
export function apply5050(optionButtons, correctOption) {
    const incorrectOptions = Array.from(optionButtons)
        .filter(btn => btn.dataset.option !== correctOption);

    const optionsToHide = incorrectOptions
        .sort(() => Math.random() - 0.5)
        .slice(0, 2);

    optionsToHide.forEach(btn => {
        btn.disabled = true;
        btn.style.display = 'none';
    });
}

/**
 * Aplica la ayuda de llamada: muestra una pista textual.
 * @param {Object} question - Objeto de la pregunta actual.
 */
export function applyCall(question) {
    const correctOption = question.correct;
    const correctText = question.options[correctOption];
    showMessageBox(
        "Llamada a un Amigo",
        `Tu amigo dice: "Creo que la respuesta correcta es la opción ${correctOption}, ${correctText}."`,
        [{ text: "Gracias", className: "confirm" }]
    );
}

/**
 * Aplica la ayuda del público: simula porcentajes de votos.
 * @param {Object} question - Objeto de la pregunta actual.
 */
export function applyAudience(question) {
    const correct = question.correct;
    const options = Object.keys(question.options);
    const votes = {};
    let remaining = 100;

    // Asignar votos al correcto (50% a 80%)
    votes[correct] = Math.floor(Math.random() * 31) + 50;
    remaining -= votes[correct];

    // Repartir el resto entre las opciones incorrectas
    const incorrect = options.filter(o => o !== correct);
    incorrect.forEach((opt, i) => {
        if (i === incorrect.length - 1) {
            votes[opt] = remaining;
        } else {
            votes[opt] = Math.floor(Math.random() * (remaining + 1));
            remaining -= votes[opt];
        }
    });

    // Construir mensaje
    let message = "El público vota:\n";
    options.forEach(opt => {
        message += `${opt}) ${question.options[opt]}: ${votes[opt]}%\n`;
    });

    showMessageBox("Voto del Público", message, [{ text: "Entendido", className: "confirm" }]);
}