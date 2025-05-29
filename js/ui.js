// js/ui.js

import { showMessageBox } from './helpers.js';

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

export function loadQuestion(question, questionIndex, optionsGrid, questionText, onAnswerSelected) {
    questionText.textContent = question.question;

    optionsGrid.innerHTML = '';
    for (const key in question.options) {
        const button = document.createElement('button');
        button.classList.add('option-button');
        button.dataset.option = key;
        button.textContent = `${key}) ${question.options[key]}`;
        button.onclick = () => onAnswerSelected(key);
        optionsGrid.appendChild(button);
    }
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
