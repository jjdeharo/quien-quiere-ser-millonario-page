// js/questions.js

/**
 * Carga las preguntas desde el archivo JSON externo
 * @returns {Promise<Array>} Array de preguntas o array vacío en caso de error
 */
export async function loadQuestions() {
    try {
        const response = await fetch('./questions.json');
        
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const questions = await response.json();
        
        // Validar que el archivo contenga un array
        if (!Array.isArray(questions)) {
            throw new Error('El archivo questions.json debe contener un array de preguntas');
        }
        
        // Validar que tenga preguntas
        if (questions.length === 0) {
            throw new Error('El archivo questions.json está vacío');
        }
        
        // Validar estructura básica de las preguntas
        const isValidStructure = questions.every(q => 
            q.question && 
            q.options && 
            q.correct && 
            q.difficulty &&
            typeof q.question === 'string' &&
            typeof q.options === 'object' &&
            typeof q.correct === 'string' &&
            typeof q.difficulty === 'string'
        );
        
        if (!isValidStructure) {
            throw new Error('Algunas preguntas no tienen la estructura correcta');
        }
        
        console.log(`✅ Cargadas ${questions.length} preguntas exitosamente`);
        return questions;
        
    } catch (error) {
        console.error('❌ Error cargando preguntas:', error);
        
        // Mostrar mensaje más específico según el tipo de error
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            console.error('No se pudo acceder al archivo questions.json. Verifica que existe y está en la ruta correcta.');
        }
        
        return [];
    }
}

/**
 * Función de respaldo con preguntas básicas en caso de error crítico
 * Se mantiene como fallback de emergencia
 */
export function getFallbackQuestions() {
    return [
        {
            "question": "¿Quién escribió 'Cien años de soledad'?",
            "options": { "A": "Julio Cortázar", "B": "Gabriel García Márquez", "C": "Mario Vargas Llosa", "D": "Carlos Fuentes" },
            "correct": "B",
            "difficulty": "easy"
        },
        {
            "question": "¿De qué país era Gabriel García Márquez?",
            "options": { "A": "México", "B": "Argentina", "C": "Colombia", "D": "Perú" },
            "correct": "C",
            "difficulty": "easy"
        },
        {
            "question": "¿Quién es la autora de 'La casa de los espíritus'?",
            "options": { "A": "Laura Esquivel", "B": "Elena Poniatowska", "C": "Isabel Allende", "D": "Rosario Castellanos" },
            "correct": "C",
            "difficulty": "easy"
        },
        {
            "question": "¿Qué movimiento literario se asocia con el 'Boom Latinoamericano'?",
            "options": { "A": "Modernismo", "B": "Realismo Mágico", "C": "Naturalismo", "D": "Romanticismo" },
            "correct": "B",
            "difficulty": "medium"
        },
        {
            "question": "¿Cuál es la capital ficticia donde transcurre 'Cien años de soledad'?",
            "options": { "A": "Santa María", "B": "Comala", "C": "Macondo", "D": "Aureliano" },
            "correct": "C",
            "difficulty": "medium"
        },
        {
            "question": "¿Qué poeta chileno es el creador del antipoema?",
            "options": { "A": "Pablo Neruda", "B": "Vicente Huidobro", "C": "Nicanor Parra", "D": "Gonzalo Rojas" },
            "correct": "C",
            "difficulty": "hard"
        },
        {
            "question": "¿Qué novela de Elena Garro es precursora del realismo mágico?",
            "options": { "A": "Los recuerdos del porvenir", "B": "Andarse por las ramas", "C": "Un hogar sólido", "D": "Reencuentro de personajes" },
            "correct": "A",
            "difficulty": "very-hard"
        },
        {
            "question": "¿Qué concepto filosófico influyó significativamente en Jorge Luis Borges?",
            "options": { "A": "Existencialismo", "B": "Positivismo", "C": "Idealismo y platonismo", "D": "Materialismo histórico" },
            "correct": "C",
            "difficulty": "expert"
        }
    ];
}
