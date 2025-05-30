# ¿Quién Quiere Ser Millonario? - ¡Tu App Educativa Personalizable!

Este repositorio contiene una versión modular del famoso juego **¿Quién Quiere Ser Millonario?**, diseñada específicamente para fines educativos. Lo mejor de todo es que puedes adaptar fácilmente el contenido del juego a **cualquier tema** que desees, ¡simplemente actualizando el banco de preguntas!

---

## 🚀 Pruébala y Conoce la Versión Original

* **Aplicación Original (en vivo):** 🌐 <https://eboixader.github.io/magnitunid/>

* **Código Fuente Original:** 🔗 <https://github.com/eboixader/magnitunid>

* **Comunidad:** Este proyecto fue compartido por @Ernesto Boixader en el grupo de Vibe Coding Educativo. ¡Únete a la conversación! 📣 <https://t.me/vceduca>

---

## 🛠️ ¿Cómo funciona?

La aplicación utiliza un sistema modular que permite reutilizar la lógica del juego con diferentes conjuntos de preguntas. Las preguntas se cargan automáticamente desde un archivo JSON externo, lo que hace extremadamente fácil personalizar el contenido para cualquier tema: historia, geografía, matemáticas, ¡o lo que se te ocurra!

---

## 📂 Estructura del Proyecto

Para entender cómo funciona la app, aquí tienes un desglose de los archivos clave:

* `index.html`: La base de la aplicación. Contiene la estructura principal del juego.

* `styles.css`: Define la apariencia visual de la app, desde los colores hasta la disposición de los elementos.

* **`questions.json`**: **¡El archivo más importante para personalizar!** Aquí es donde se almacenan todas las preguntas en formato JSON. Es el único archivo que necesitas modificar para cambiar el contenido temático del juego.

* `js/questions.js`: Maneja la carga de preguntas desde el archivo JSON e incluye preguntas de respaldo de emergencia.

* `js/helpers.js`, `js/ui.js`, `js/lifelines.js`, `js/main.js`: Estos archivos contienen la lógica interna del juego (cómo se manejan las opciones, las líneas de ayuda, la interfaz de usuario, etc.). **Generalmente no necesitarás modificarlos.**

---

## ✍️ Actualiza tu Banco de Preguntas en 2 Pasos

¡Cambiar el tema del juego es muy sencillo!

1. **Abre el archivo:** `questions.json`

2. **Modifica el contenido** siguiendo el formato JSON que se muestra a continuación.

### Formato de Pregunta Requerido

El archivo `questions.json` debe contener un array de objetos, donde cada pregunta tiene las siguientes propiedades:

* `question`: El texto de la pregunta.

* `options`: Un objeto con las 4 opciones de respuesta, etiquetadas como "A", "B", "C" y "D".

* `correct`: La letra que corresponde a la opción correcta (por ejemplo, `"C"`).

* `difficulty`: El nivel de dificultad de la pregunta. Puede ser `"easy"`, `"medium"`, `"hard"`, `"very-hard"` o `"expert"`.

**Ejemplo de estructura del archivo `questions.json`:**

```json
[
  {
    "question": "¿Cuál es la unidad de medida estándar de la longitud en el Sistema Internacional (SI)?",
    "options": { "A": "Kilogramo", "B": "Segundo", "C": "Metro", "D": "Amperio" },
    "correct": "C",
    "difficulty": "easy"
  },
  {
    "question": "¿Cuántos metros tiene un kilómetro?",
    "options": { "A": "100", "B": "1000", "C": "10000", "D": "100000" },
    "correct": "B",
    "difficulty": "easy"
  }
]
```

---

## 🔧 Características Técnicas

### Sistema de Carga Inteligente

- **Carga asíncrona**: Las preguntas se cargan desde `questions.json` al iniciar la aplicación.
- **Sistema de respaldo**: Si hay problemas cargando el archivo, la aplicación usa preguntas de emergencia para no fallar.
- **Validación automática**: El sistema verifica que las preguntas tengan la estructura correcta.
- **Manejo de errores**: Mensajes informativos si algo sale mal durante la carga.

### Niveles de Dificultad

El juego organiza las preguntas en 5 niveles:

- **easy**: Preguntas básicas (nivel 1)
- **medium**: Preguntas de dificultad media (nivel 2) 
- **hard**: Preguntas difíciles (nivel 3)
- **very-hard**: Preguntas muy difíciles (nivel 4)
- **expert**: Preguntas de experto (nivel 5)

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

Por favor, comienza a generar el banco de preguntas en formato JSON válido.
```

---

## ✏️ Modifica el archivo de preguntas manualmente
Puedes modificar el archivo manualmente con el [Editor JSON](https://labia.tiddlyhost.com/#Editor%20JSON)

Baja el archivo [questions.json](https://github.com/jjdeharo/millonario/blob/main/questions.json) a tu ordenador, ábrelo con el programa anterior y después vuélvelo a subir.

Puedes:
- Modificar preguntas.
- Eliminar preguntas.
- Añadir preguntas.

---

## 🐛 Solución de Problemas

### Las preguntas no se cargan

- **Verifica** que el archivo `questions.json` esté en la raíz del proyecto
- **Comprueba** que el JSON sea válido usando un validador online



### Preguntas mal formateadas

- **Verifica** que todas las preguntas tengan las propiedades requeridas
- **Revisa** que los niveles de dificultad sean exactamente: "easy", "medium", "hard", "very-hard", "expert"
- **Comprueba** que las opciones tengan las claves "A", "B", "C", "D"

---

¡Esperamos que disfrutes adaptando esta app educativa a tus necesidades!
