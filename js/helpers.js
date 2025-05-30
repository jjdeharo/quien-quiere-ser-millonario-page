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
 * Muestra una caja de mensaje personalizada.
 * @param {string} title - Título de la caja.
 * @param {string} content - Mensaje o contenido a mostrar (puede contener HTML/LaTeX).
 * @param {Array} buttons - Arreglo de botones: { text, className, onClick }
 * @param {boolean} enableHTML - Si debe renderizar HTML/LaTeX en el contenido (por defecto: true)
 */
export async function showMessageBox(title, content, buttons, enableHTML = true) {
    const overlay = document.getElementById('messageBoxOverlay');
    const boxTitle = document.getElementById('messageBoxTitle');
    const boxContent = document.getElementById('messageBoxContent');
    const boxButtons = document.getElementById('messageBoxButtons');

    boxTitle.textContent = title;
    
    // Usar innerHTML o textContent según el parámetro enableHTML
    if (enableHTML) {
        boxContent.innerHTML = content;
    } else {
        boxContent.textContent = content;
    }
    
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
    
    // Renderizar LaTeX si el contenido lo contiene y enableHTML está activado
    if (enableHTML) {
        // Dar tiempo para que el modal se muestre antes de renderizar
        setTimeout(async () => {
            await renderMathInElement(boxContent);
        }, 50);
    }
}

/**
 * Oculta la caja de mensaje personalizada.
 */
export function hideMessageBox() {
    const overlay = document.getElementById('messageBoxOverlay');
    overlay.classList.remove('show');
}
