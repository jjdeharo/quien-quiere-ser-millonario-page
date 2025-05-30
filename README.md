# ¿Quién Quiere Ser Millonario? - ¡Tu App Educativa Personalizable con Soporte LaTeX y Temas!

Este repositorio contiene una versión modular del famoso juego **¿Quién Quiere Ser Millonario?**, diseñada específicamente para fines educativos. Lo mejor de todo es que puedes adaptar fácilmente el contenido del juego a **cualquier tema** que desees, ¡simplemente actualizando el banco de preguntas!

## ✨ **¡NUEVO!** Sistema de Temas Integrado

La aplicación ahora incluye un **sistema de temas** que permite mostrar información sobre el contenido del quiz directamente en la interfaz:

- **Título del tema**: Se muestra prominentemente en la aplicación
- **Descripción**: Información adicional sobre el contenido
- **Metadatos**: Autor, fecha de creación, total de preguntas
- **Información detallada**: Modal con todos los detalles del tema

## ✨ **¡NUEVO!** Soporte Completo para Fórmulas LaTeX

La aplicación también incluye soporte completo para renderizar **fórmulas matemáticas LaTeX**, perfecto para preguntas de matemáticas, física, química y otras ciencias. Las fórmulas se renderizan automáticamente tanto en las preguntas como en las opciones de respuesta y en los mensajes de ayuda.

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

### 🎯 Características del sistema de temas:

- **Información visible**: El tema se muestra claramente en la interfaz
- **Metadatos completos**: Autor, descripción, fecha de creación
- **Compatibilidad**: Funciona con formato nuevo y legacy
- **Diseño integrado**: Se adapta perfectamente al estilo del juego

---

## 📂 Estructura del Proyecto

Para entender cómo funciona la app, aquí tienes un desglose de los archivos clave:

* `index.html`: La base de la aplicación. **Ahora incluye MathJax y sección de temas**.

* `styles.css`: Define la apariencia visual de la app. **Incluye estilos para temas y fórmulas matemáticas**.

* **`questions.json`**: **¡El archivo más importante para personalizar!** Aquí es donde se almacenan todas las preguntas en formato JSON. **Ahora soporta temas y fórmulas LaTeX**.

* `js/questions.js`: Maneja la carga de preguntas desde el archivo JSON e incluye preguntas de respaldo de emergencia. **Actualizado para manejar temas**.

* `js/ui.js`: Maneja la interfaz de usuario. **Actualizado para mostrar información de temas y renderizar LaTeX**.

* `js/helpers.js`, `js/lifelines.js`, `js/main.js`: Contienen la lógica interna del juego. **Actualizados para soportar temas y renderizado LaTeX**.

---

## ✍️ Actualiza tu Banco de Preguntas en 2 Pasos

¡Cambiar el tema del juego es muy sencillo!

1. **Abre el archivo:** `questions.json`

2. **Modifica el contenido** siguiendo el nuevo formato JSON que se muestra a continuación.

### Nuevo Formato de Preguntas con Tema

El archivo `questions.json` ahora debe contener un objeto con información del tema y las preguntas:

**Estructura requerida:**

* `tema`: El nombre del tema del quiz (se muestra en la interfaz).
* `descripcion`: Descripción opcional del contenido.
* `autor`: Autor del banco de preguntas (opcional).
* `fecha_creacion`: Fecha de creación en formato YYYY-MM-DD (opcional).
* `total_preguntas`: Número total de preguntas (se calcula automáticamente si no se especifica).
* `preguntas`: Array con todas las preguntas del quiz.

Cada pregunta dentro del array `preguntas` debe tener las siguientes propiedades:

* `question`: El texto de la pregunta (puede incluir LaTeX).
* `options`: Un objeto con las 4 opciones de respuesta, etiquetadas como "A", "B", "C" y "D" (pueden incluir LaTeX).
* `correct`: La letra que corresponde a la opción correcta (por ejemplo, `"C"`).
* `difficulty`: El nivel de dificultad de la pregunta. Puede ser `"easy"`, `"medium"`, `"hard"`, `"very-hard"` o `"expert"`.

**Ejemplo completo del nuevo formato:**

```json
{
  "tema": "Derivadas de Funciones - Bachillerato",
  "descripcion": "Preguntas sobre cálculo diferencial y derivadas para estudiantes de bachillerato",
  "autor": "Generado con IA",
  "fecha_creacion": "2025-05-30",
  "total_preguntas": 60,
  "preguntas": [
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
}
```

**Ejemplo sin fórmulas:**

```json
{
  "tema": "Historia Universal",
  "descripcion": "Preguntas sobre eventos importantes de la historia mundial",
  "autor": "Profesor García",
  "fecha_creacion": "2025-05-30",
  "total_preguntas": 50,
  "preguntas": [
    {
      "question": "¿En qué año comenzó la Segunda Guerra Mundial?",
      "options": { "A": "1937", "B": "1938", "C": "1939", "D": "1940" },
      "correct": "C",
      "difficulty": "easy"
    }
  ]
}
```

### ⚡ Compatibilidad con Formato Legacy

La aplicación mantiene **compatibilidad completa** con el formato anterior (array directo de preguntas). Si tu archivo `questions.json` actual es un array, seguirá funcionando, pero recomendamos actualizar al nuevo formato para aprovechar las funciones de tema.

---

## 🔧 Características Técnicas

### Sistema de Carga Inteligente

- **Carga asíncrona**: Las preguntas se cargan desde `questions.json` al iniciar la aplicación.
- **Sistema de respaldo**: Si hay problemas cargando el archivo, la aplicación usa preguntas de emergencia para no fallar.
- **Validación automática**: El sistema verifica que las preguntas tengan la estructura correcta.
- **Compatibilidad**: Soporta tanto formato nuevo como legacy automáticamente.
- **Manejo de errores**: Mensajes informativos si algo sale mal durante la carga.

### Sistema de Temas

- **Información visible**: El tema se muestra prominentemente en la interfaz
- **Metadatos completos**: Autor, descripción, fecha de creación, total de preguntas
- **Modal informativo**: Botón para ver información detallada del tema
- **Diseño adaptativo**: Se integra perfectamente con el diseño existente
- **Responsive**: Se adapta correctamente a dispositivos móviles

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

¿Necesitas un banco de preguntas rápidamente? Puedes usar herramientas como **Gemini** o **ChatGPT** para generarlas automáticamente. Aquí te dejamos un **prompt actualizado**:

```
Quiero que generes un banco de preguntas y respuestas en el nuevo formato JSON con tema. La estructura debe incluir metadatos del tema y un array de preguntas.

El tema de las preguntas debe ser "[REEMPLAZA ESTO CON TU TEMA]". Si hay fórmulas, estas deben seguir el formato LaTeX.

Estructura requerida:
- tema: (nombre del tema)
- descripcion: (descripción del contenido)
- autor: "Generado con IA"
- fecha_creacion: (fecha actual en formato YYYY-MM-DD)
- total_preguntas: (número total de preguntas)
- preguntas: (array con todas las preguntas)

Necesito un total de 60 preguntas, distribuidas de la siguiente manera:
- 12 preguntas de dificultad "easy"
- 12 preguntas de dificultad "medium"
- 12 preguntas de dificultad "hard"
- 12 preguntas de dificultad "very-hard"
- 12 preguntas de dificultad "expert"

Cada pregunta debe tener: question, options (A, B, C, D), correct, y difficulty.

Asegúrate de que las preguntas sean variadas dentro del tema y que las opciones de respuesta sean plausibles para dificultar la elección sin que sean trampas evidentes.

Aquí tienes un ejemplo del formato que espero:

{
  "tema": "Tu Tema Aquí",
  "descripcion": "Descripción del contenido del quiz",
  "autor": "Generado con IA",
  "fecha_creacion": "2025-05-30",
  "total_preguntas": 60,
  "preguntas": [
    {
      "question": "¿Cuál es la derivada de $f(x) = x^2$?",
      "options": { "A": "$2x$", "B": "$x$", "C": "$x^2$", "D": "$2x^2$" },
      "correct": "A",
      "difficulty": "easy"
    }
  ]
}

Por favor, comienza a generar el banco completo en formato JSON válido.
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
- **¡Cambiar la información del tema!**
- **¡Usar fórmulas LaTeX en cualquier pregunta u opción!**

---

## 🐛 Solución de Problemas

### Las preguntas no se cargan

- **Verifica** que el archivo `questions.json` esté en la raíz del proyecto
- **Comprueba** que el JSON sea válido usando un validador online
- **Asegúrate** de que uses la estructura correcta (objeto con tema y preguntas, o array legacy)

### El tema no se muestra

- **Verifica** que el archivo tenga la nueva estructura con la propiedad `tema`
- **Comprueba** que la información del tema esté correctamente formateada
- **Si usas formato legacy**, el tema se mostrará como "Preguntas Generales"

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
- **El tema se adapta responsivamente** a diferentes tamaños de pantalla

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

### Sistema de Temas Ideal Para:
- **Instituciones educativas**: Cada profesor puede crear su banco temático
- **Estudiantes**: Pueden identificar claramente el contenido del quiz
- **Repositorios**: Organizar múltiples bancos de preguntas por tema
- **Competencias**: Mostrar claramente el área de conocimiento evaluada

---

## 🚀 Ejemplos de Temas Populares

### 📐 Matemáticas:
- "Derivadas de Funciones - Bachillerato"
- "Integrales Definidas e Indefinidas"
- "Álgebra Lineal - Matrices y Vectores"
- "Estadística Descriptiva"

### 🔬 Ciencias:
- "Química Orgánica - Bachillerato"
- "Física Mecánica - Cinemática"
- "Biología - Genética Mendeliana"
- "Termodinámica - Conceptos Básicos"

### 🌍 Humanidades:
- "Historia de España - Siglo XX"
- "Literatura Española - Siglo de Oro"
- "Geografía de Europa"
- "Filosofía Antigua - Grecia"

---

¡Esperamos que disfrutes adaptando esta app educativa a tus necesidades y creando preguntas increíbles con soporte LaTeX y temas personalizados!
