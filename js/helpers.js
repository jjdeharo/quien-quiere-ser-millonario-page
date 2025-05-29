// js/helpers.js

/**
 * Mezcla un arreglo en su lugar usando el algoritmo de Fisher-Yates.
 * @param {Array} array - El arreglo a mezclar.
 */
export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Muestra una caja de mensaje personalizada.
 * @param {string} title - Título de la caja.
 * @param {string} content - Mensaje o contenido a mostrar.
 * @param {Array} buttons - Arreglo de botones: { text, className, onClick }
 */
export function showMessageBox(title, content, buttons) {
    const overlay = document.getElementById('messageBoxOverlay');
    const boxTitle = document.getElementById('messageBoxTitle');
    const boxContent = document.getElementById('messageBoxContent');
    const boxButtons = document.getElementById('messageBoxButtons');

    boxTitle.textContent = title;
    boxContent.textContent = content;
    boxButtons.innerHTML = '';

    buttons.forEach(({ text, className, onClick }) => {
        const button = document.createElement('button');
        button.textContent = text;
        button.className = `message-box-button ${className || ''}`;
        button.onclick = () => {
            hideMessageBox();
            if (onClick) onClick();
        };
        boxButtons.appendChild(button);
    });

    overlay.classList.add('show');
}

/**
 * Oculta la caja de mensaje personalizada.
 */
export function hideMessageBox() {
    const overlay = document.getElementById('messageBoxOverlay');
    overlay.classList.remove('show');
}
