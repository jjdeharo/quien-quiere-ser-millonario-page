# ¿Quién Quiere Ser Millonario? - ¡Tu App Educativa Personalizable!

Este repositorio contiene una versión modular del famoso juego **¿Quién Quiere Ser Millonario?**, diseñada específicamente para fines educativos. Lo mejor de todo es que puedes adaptar fácilmente el contenido del juego a **cualquier tema** que desees, ¡simplemente actualizando el banco de preguntas!

---

## 🚀 Pruébala y Conoce la Versión Original

* **Aplicación Original (en vivo):** 🌐 <https://eboixader.github.io/magnitunid/>

* **Código Fuente Original:** 🔗 <https://github.com/eboixader/magnitunid>

* **Comunidad:** Este proyecto fue compartido por @Ernesto Boixader en el grupo de Vibe Coding Educativo. ¡Únete a la conversación! 📣 <https://t.me/vceduca>

---

## 🛠️ ¿Cómo funciona?

La aplicación está centrada en el tema de **magnitudes y unidades**, pero su estructura modular permite reutilizar la lógica del juego con diferentes conjuntos de preguntas. Esto significa que puedes transformarla en un juego de "¿Quién Quiere Ser Millonario?" sobre historia, geografía, matemáticas o ¡lo que se te ocurra!

---

## 📂 Estructura del Proyecto

Para entender cómo funciona la app, aquí tienes un desglose de los archivos clave:

* `index.html`: La base de la aplicación. Contiene la estructura principal del juego.

* `styles.css`: Define la apariencia visual de la app, desde los colores hasta la disposición de los elementos.

* `js/questions.js`: **¡Este es el archivo más importante para ti!** Aquí es donde se almacena el banco de preguntas. Es el único archivo que necesitas modificar para cambiar el contenido temático del juego.

* `js/helpers.js`, `js/ui.js`, `js/lifelines.js`, `js/main.js`: Estos archivos contienen la lógica interna del juego (cómo se manejan las opciones, las líneas de ayuda, la interfaz de usuario, etc.). **Generalmente no necesitarás modificarlos.**

---

## ✍️ Actualiza tu Banco de Preguntas en 3 Pasos

¡Cambiar el tema del juego es muy sencillo!

1. **Abre el archivo:** `js/questions.js`

2. **Borra el contenido existente** del arreglo `allAvailableQuestions`.

3. **Pega tus nuevas preguntas** dentro del arreglo, siguiendo el formato que se muestra a continuación.

### Formato de Pregunta Requerido

Cada pregunta debe ser un objeto con las siguientes propiedades:

* `question`: El texto de la pregunta.

* `options`: Un objeto con las 4 opciones de respuesta, etiquetadas como "A", "B", "C" y "D".

* `correct`: La letra que corresponde a la opción correcta (por ejemplo, `"C"`).

* `difficulty`: El nivel de dificultad de la pregunta. Puede ser `"easy"`, `"medium"`, `"hard"`, `"very-hard"` o `"expert"`.

**Ejemplo:**

```json
{
  "question": "¿Cuál es la unidad de medida estándar de la longitud en el Sistema Internacional (SI)?",
  "options": { "A": "Kilogramo", "B": "Segundo", "C": "Metro", "D": "Amperio" },
  "correct": "C",
  "difficulty": "easy"
}
```

---

## 🤖 Genera Preguntas con Inteligencia Artificial

¿Necesitas un banco de preguntas rápidamente? Puedes usar herramientas como **Gemini** o **ChatGPT** para generarlas automáticamente. Aquí te dejamos un **prompt sugerido**:

```
Quiero que generes un banco de preguntas y respuestas en formato JSON. Cada pregunta debe tener las siguientes propiedades: question (la pregunta en sí), options (un objeto con 4 opciones de respuesta etiquetadas A, B, C, D), correct (la letra de la opción correcta), y difficulty (la dificultad de la pregunta, que puede ser "easy", "medium", "hard", "very-hard" o "expert").

El tema de las preguntas debe ser "[REEMPLAZA ESTO CON TU TEMA]".

Necesito un total de 60 preguntas, distribuidas de la siguiente manera:

- 12 preguntas de dificultad "easy"
- 12 preguntas de dificultad "medium"
- 12 preguntas de dificultad "hard"
- 12 preguntas de dificultad "very-hard"
- 12 preguntas de dificultad "expert"

Asegúrate de que las preguntas sean variadas dentro del tema y que las opciones de respuesta sean plausibles para dificultar la elección sin que sean trampas evidentes.

Aquí tienes un ejemplo del formato que espero:

[
  {
    "question": "¿Cuál es la unidad de medida estándar de la longitud en el Sistema Internacional (SI)?",
    "options": { "A": "Kilogramo", "B": "Segundo", "C": "Metro", "D": "Amperio" },
    "correct": "C",
    "difficulty": "easy"
  }
]

Por favor, comienza a generar el banco de preguntas.
```

---

¡Esperamos que disfrutes adaptando esta app educativa a tus necesidades!