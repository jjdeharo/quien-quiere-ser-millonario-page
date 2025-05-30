# ¿Quién Quiere Ser Millonario? - ¡Tu App Educativa Personalizable con Soporte LaTeX!

Este repositorio contiene una versión modular del famoso juego **¿Quién Quiere Ser Millonario?**, diseñada específicamente para fines educativos. Lo mejor de todo es que puedes adaptar fácilmente el contenido del juego a **cualquier tema** que desees, ¡simplemente actualizando el banco de preguntas!

## ✨ **¡NUEVO!** Soporte Completo para Fórmulas LaTeX

La aplicación ahora incluye soporte completo para renderizar **fórmulas matemáticas LaTeX**, perfecto para preguntas de matemáticas, física, química y otras ciencias. Las fórmulas se renderizan automáticamente tanto en las preguntas como en las opciones de respuesta y en los mensajes de ayuda.

### Cómo usar LaTeX en tus preguntas:

- **Fórmulas en línea**: `$f(x) = x^2 + 3x - 1$`
- **Fórmulas en bloque**: `$$\int_0^1 x^2 dx = \frac{1}{3}$$`
- **Fracciones**: `$\frac{a}{b}$`
- **Exponentes y subíndices**: `$x^2$`, `$H_2O$`
- **Funciones trigonométricas**: `$\sin(x)$`, `$\cos(x)$`
- **Integrales y derivadas**: `$\int f(x)dx$`, `$\frac{dy}{dx}$`

---

## 🚀 Pruébala y Conoce la Versión Original

* **Aplicación Original (en vivo):** 🌐 <https://eboixader.github.io/magnitunid/>

* **Código Fuente Original:** 🔗 <https://github.com/eboixader/magnitunid>

* **Comunidad:** Este proyecto fue compartido por @Ernesto Boixader en el grupo de Vibe Coding Educativo. ¡Únete a la conversación! 📣 <https://t.me/vceduca>

---

## 🛠️ ¿Cómo funciona?

La aplicación utiliza un sistema modular que permite reutilizar la lógica del juego con diferentes conjuntos de preguntas. Las preguntas se cargan automáticamente desde un archivo JSON externo, lo que hace extremadamente fácil personalizar el contenido para cualquier tema: historia, geografía, matemáticas, ¡o lo que se te ocurra!

### 🔬 Características técnicas del soporte LaTeX:

- **MathJax 3.0**: Renderizado de alta calidad usando la librería más avanzada
- **Renderizado automático**: Las fórmulas se procesan automáticamente al cargar preguntas
- **Soporte completo**: Funciona en preguntas, opciones, y mensajes de ayuda
- **Responsive**: Las fórmulas se adaptan correctamente a dispositivos móviles
- **Sin configuración**: Solo escribe las fórmulas en formato LaTeX estándar

---

## 📂 Estructura del Proyecto

Para entender cómo funciona la app, aquí tienes un desglose de los archivos clave:

* `index.html`: La base de la aplicación. **Ahora incluye MathJax para renderizado LaTeX**.

* `styles.css`: Define la apariencia visual de la app. **Incluye estilos optimizados para fórmulas matemáticas**.

* **`questions.json`**: **¡El archivo más importante para personalizar!** Aquí es donde se almacenan todas las preguntas en formato JSON. **Ahora soporta fórmulas LaTeX**.

* `js/questions.js`: Maneja la carga de preguntas desde el archivo JSON e incluye preguntas de respaldo de emergencia.

* `js/helpers.js`, `js/ui.js`, `js/lifelines.js`, `js/main.js`: Contienen la lógica interna del juego. **Actualizados para soportar renderizado LaTeX**.

---

## ✍️ Actualiza tu Banco de Preguntas en 2 Pasos

¡Cambiar el tema del juego es muy sencillo!

1. **Abre el archivo:** `questions.json`

2. **Modifica el contenido** siguiendo el formato JSON que se muestra a continuación.

### Formato de Pregunta Requerido

El archivo `questions.json` debe contener un array de objetos, donde cada pregunta tiene las siguientes propiedades:

* `question`: El texto de la pregunta (puede incluir LaTeX).

* `options`: Un objeto con las 4 opciones de respuesta, etiquetadas como "A", "B", "C" y "D" (pueden incluir LaTeX).

* `correct`: La letra que corresponde a la opción correcta (por ejemplo, `"C"`).

* `difficulty`: El nivel de dificultad de la pregunta. Puede ser `"easy"`, `"medium"`, `"hard"`, `"very-hard"` o `"expert"`.

**Ejemplo con fórmulas LaTeX:**

```json
[
  {
    "question": "¿Cuál es la derivada de $f(x) = 3x^2$?",
    "options": { 
      "A": "$6x$", 
      "B": "$3x$", 
      "C": "$6x^2$", 
      "D": "$9x$" 
    },
    "correct": "A",
    "difficulty": "easy"
  },
  {
    "question": "Si $\\int_0^1 x^2 dx = \\frac{1}{3}$, ¿cuál es $\\int_0^2 x^2 dx$?",
    "options": { 
      "A": "$\\frac{2}{3}$", 
      "B": "$\\frac{4}{3}$", 
      "C": "$\\frac{8}{3}$", 
      "D": "$\\frac{16}{3}$" 
    },
    "correct": "C",
    "difficulty": "medium"
  }
]
```

**Ejemplo sin fórmulas:**

```json
[
  {
    "question": "¿Cuál es la capital de Francia?",
    "options": { "A": "Madrid", "B": "París", "C": "Roma", "D": "Londres" },
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

### Renderizado LaTeX Avanzado

- **MathJax 3.0**: Utiliza la versión más moderna y eficiente de MathJax
- **Renderizado asíncrono**: Las fórmulas se procesan sin bloquear la interfaz
- **Soporte completo**: 
  - Fórmulas en línea: `$...$`
  - Fórmulas en bloque: `$$...$$`
  - Todos los símbolos matemáticos estándar
  - Matrices, fracciones, integrales, derivadas, etc.
- **Optimización móvil**: Las fórmulas se adaptan automáticamente a pantallas pequeñas

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

El tema de las preguntas debe ser "[REEMPLAZA ESTO CON TU TEMA]". Si hay fórmulas, estas deben seguir el formato LaTeX.

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
    "question": "¿Cuál es la derivada de $f(x) = x^2$?",
    "options": { "A": "$2x$", "B": "$x$", "C": "$x^2$", "D": "$2x^2$" },
    "correct": "A",
    "difficulty": "easy"
  }
]

Por favor, comienza a generar el banco de preguntas en formato JSON válido.
```

---

## 📚 Guía de LaTeX para Educadores

### Símbolos matemáticos comunes:

```latex
Exponentes: x^2, x^{10}
Subíndices: H_2O, x_{n+1}
Fracciones: \frac{a}{b}, \frac{x^2 + 1}{x - 1}
Raíces: \sqrt{x}, \sqrt[3]{x}
Funciones: \sin(x), \cos(x), \tan(x), \log(x), \ln(x)
Derivadas: \frac{dy}{dx}, f'(x)
Integrales: \int f(x)dx, \int_0^1 x^2 dx
Límites: \lim_{x \to 0} f(x)
Sumatorias: \sum_{i=1}^n a_i
Letras griegas: \alpha, \beta, \gamma, \pi, \theta
```

### Ejemplos por materia:

**Matemáticas:**
```latex
$f(x) = ax^2 + bx + c$
$\int_0^{\pi} \sin(x) dx = 2$
$\lim_{n \to \infty} \frac{1}{n} = 0$
```

**Física:**
```latex
$F = ma$
$E = mc^2$
$v = v_0 + at$
```

**Química:**
```latex
$2H_2 + O_2 \rightarrow 2H_2O$
$pH = -\log[H^+]$
```

---

## ✏️ Modifica el archivo de preguntas manualmente

Puedes modificar el archivo manualmente con el [Editor JSON](https://labia.tiddlyhost.com/#Editor%20JSON)

Baja el archivo [questions.json](https://github.com/jjdeharo/millonario/blob/main/questions.json) a tu ordenador, ábrelo con el programa anterior y después vuélvelo a subir.

Puedes:
- Modificar preguntas.
- Eliminar preguntas.
- Añadir preguntas.
- **¡Usar fórmulas LaTeX en cualquier pregunta u opción!**

---

## 🐛 Solución de Problemas

### Las preguntas no se cargan

- **Verifica** que el archivo `questions.json` esté en la raíz del proyecto
- **Comprueba** que el JSON sea válido usando un validador online

### Las fórmulas LaTeX no se muestran

- **Verifica** que tienes conexión a internet (MathJax se carga desde CDN)
- **Comprueba** que las fórmulas estén entre `$...$` para fórmulas en línea
- **Asegúrate** de que la sintaxis LaTeX sea correcta
- **Revisa** la consola del navegador para errores de MathJax

### Preguntas mal formateadas

- **Verifica** que todas las preguntas tengan las propiedades requeridas
- **Revisa** que los niveles de dificultad sean exactamente: "easy", "medium", "hard", "very-hard", "expert"
- **Comprueba** que las opciones tengan las claves "A", "B", "C", "D"
- **Escapa** caracteres especiales en LaTeX cuando sea necesario (ej: `\\` para `\`)

### Problemas de renderizado en móviles

- **Las fórmulas se adaptan automáticamente**, pero fórmulas muy largas pueden necesitar scroll horizontal
- **Usa fórmulas más simples** en opciones para mejor visualización en pantallas pequeñas

---

## 🎯 Casos de Uso Ideales

### Para Matemáticas:
- Álgebra: ecuaciones, factorización, sistemas
- Cálculo: derivadas, integrales, límites
- Geometría: fórmulas de área, volumen
- Estadística: probabilidad, distribuciones

### Para Ciencias:
- Física: mecánica, termodinámica, electromagnetismo
- Química: estequiometría, cinética, equilibrio
- Ingeniería: análisis de circuitos, mecánica de materiales

### Para Otros Temas:
- Historia (sin fórmulas)
- Literatura (sin fórmulas)
- Geografía (sin fórmulas)
- Cualquier materia que combine texto y fórmulas

---

¡Esperamos que disfrutes adaptando esta app educativa a tus necesidades y creando preguntas increíbles con soporte LaTeX!
