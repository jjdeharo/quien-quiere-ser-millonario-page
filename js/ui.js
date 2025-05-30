// js/ui.js

import { showMessageBox } from './helpers.js';

/**
 * Renderiza las fórmulas LaTeX en un elemento específico usando MathJax
 * @param {HTMLElement} element - El elemento que contiene fórmulas LaTeX
 */
async function renderMathInElement(element) {
    if (window.MathJax && window.MathJax.typesetPromise) {
        try {
            await window.MathJax.typesetPromise([element]);
        } catch (error) {
            console.warn('⚠️ Error renderizando LaTeX:', error);
        }
    }
}

/**
 * Renderiza las fórmulas LaTeX en múltiples elementos
 * @param {NodeList|Array} elements - Lista de elementos que contienen fórmulas LaTeX
 */
async function renderMathInElements(elements) {
    if (window.MathJax && window.MathJax.typesetPromise) {
        try {
            await window.MathJax.typesetPromise(Array.from(elements));
        } catch (error) {
            console.warn('⚠️ Error renderizando LaTeX:', error);
        }
    }
}

export function updatePrizeLadder(score, total, prizeLadderElement) {
    const items = prizeLadderElement.querySelectorAll('.prize-level-item');
    items.forEach(item => item.classList.remove('current-level'));

    if (score > 0 && score <= total) {
        const highlightIndex = total - score;
        if (items[highlightIndex]) {
            items[highlightIndex].classList.add('current-level');
        }
    }
}

export function generatePrizeLadder(prizeLadderElement) {
    const levels = [
        "1 MILLÓN", "500.000", "250.000", "125.000", "75.000",
        "50.000", "25.000", "10.000", "5.000", "2.000", "1.000", "500"
    ];

    prizeLadderElement.innerHTML = '';
    levels.forEach(level => {
        const item = document.createElement('div');
        item.classList.add('prize-level-item');
        item.textContent = level;
        prizeLadderElement.appendChild(item);
    });
}

export async function loadQuestion(question, questionIndex, optionsGrid, questionText, onAnswerSelected) {
    // Cargar el texto de la pregunta
    questionText.innerHTML = question.question;
    
    // Renderizar LaTeX en la pregunta
    await renderMathInElement(questionText);

    // Limpiar y crear las opciones
    optionsGrid.innerHTML = '';
    const optionButtons = [];
    
    for (const key in question.options) {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.dataset.option = key;
        button.innerHTML = `${key}) ${question.options[key]}`;
        button.onclick = () => onAnswerSelected(key);
        optionsGrid.appendChild(button);
        optionButtons.push(button);
    }
    
    // Renderizar LaTeX en todas las opciones
    await renderMathInElements(optionButtons);
}

export function markAnswer(optionButtons, correct, selected) {
    optionButtons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.option === correct) {
            btn.classList.add('correct');
        } else if (btn.dataset.option === selected) {
            btn.classList.add('incorrect');
        }
    });
}

export function askPlayerName(callback) {
    const modal = document.getElementById('playerNameModalOverlay');
    const input = document.getElementById('playerNameInput');
    const button = document.getElementById('submitPlayerNameButton');

    modal.classList.add('show');
    input.value = '';
    input.focus();

    button.onclick = () => {
        const name = input.value.trim() || "Jugador";
        modal.classList.remove('show');
        callback(name);
    };
}

/**
 * Función auxiliar para mostrar mensajes con soporte LaTeX
 * @param {string} title - Título del mensaje
 * @param {string} content - Contenido del mensaje (puede incluir LaTeX)
 * @param {Array} buttons - Botones del mensaje
 */
export async function showMessageBoxWithLaTeX(title, content, buttons) {
    showMessageBox(title, content, buttons);
    
    // Renderizar LaTeX en el contenido del mensaje después de mostrarlo
    const messageContent = document.getElementById('messageBoxContent');
    if (messageContent) {
        messageContent.innerHTML = content;
        await renderMathInElement(messageContent);
    }
}
