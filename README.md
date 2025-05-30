# ¿Quién Quiere Ser Millonario? - App Educativa con Temas y LaTeX

Versión educativa personalizable del famoso juego **¿Quién Quiere Ser Millonario?**. Incluye soporte para **temas personalizados** y **fórmulas LaTeX** para matemáticas y ciencias.

## 🚀 Pruébala y Conoce la Versión Original

* **Aplicación Original (en vivo):** 🌐 <https://eboixader.github.io/magnitunid/>

* **Código Fuente Original:** 🔗 <https://github.com/eboixader/magnitunid>

* **Comunidad:** Este proyecto fue compartido por @Ernesto Boixader en el grupo de Vibe Coding Educativo. ¡Únete a la conversación! 📣 <https://t.me/vceduca>

## ✨ Características Principales

- ✅ **Sistema de temas**: Muestra información del contenido del quiz
- ✅ **Soporte LaTeX**: Fórmulas matemáticas con MathJax 3.0
- ✅ **Personalizable**: Cambia fácilmente el contenido actualizando un archivo JSON
- ✅ **5 niveles**: easy, medium, hard, very-hard, expert
- ✅ **3 comodines**: 50:50, Llamada, Público
- ✅ **Responsive**: Funciona en móviles y tablets

## Hacer una copia del programa

Haz un fork del repositorio: esto crea una copia del proyecto original en tu propia cuenta de GitHub. Así puedes hacer cambios sin afectar al original.

## 🔧 Cómo Personalizar

### 1. Editar el archivo `questions.json`

**Nueva estructura con tema:**

```json
{
  "tema": "Tu Tema Aquí",
  "descripcion": "Descripción del contenido",
  "autor": "Tu nombre",
  "fecha_creacion": "2025-05-30",
  "total_preguntas": 60,
  "preguntas": [
    {
      "question": "¿Cuál es la derivada de $f(x) = x^2$?",
      "options": { 
        "A": "$2x$", 
        "B": "$x$", 
        "C": "$x^2$", 
        "D": "$2x^2$" 
      },
      "correct": "A",
      "difficulty": "easy"
    }
  ]
}
```

### 2. Distribución de preguntas recomendada

Para 60 preguntas totales:
- **12 easy** (básicas)
- **12 medium** (intermedias)  
- **12 hard** (difíciles)
- **12 very-hard** (muy difíciles)
- **12 expert** (expertas)

## 🤖 Genera Preguntas con IA

Usa este prompt completo con tu IA favorita:

```
Quiero que generes un banco de preguntas y respuestas en formato JSON con tema. Cada pregunta debe tener las siguientes propiedades: question (la pregunta en sí), options (un objeto con 4 opciones de respuesta etiquetadas A, B, C, D), correct (la letra de la opción correcta), y difficulty (la dificultad de la pregunta).

El tema de las preguntas debe ser "[REEMPLAZA ESTO CON TU TEMA]". Si hay fórmulas, estas deben seguir el formato LaTeX usando $formula$ para fórmulas en línea y $formula$ para fórmulas en bloque.

Estructura requerida:
{
  "tema": "[TU TEMA AQUÍ]",
  "descripcion": "Descripción del contenido del quiz",
  "autor": "Generado con IA",
  "fecha_creacion": "2025-05-30",
  "total_preguntas": 60,
  "preguntas": [...]
}

Necesito un total de 60 preguntas, distribuidas de la siguiente manera:
- 12 preguntas de dificultad "easy"
- 12 preguntas de dificultad "medium"  
- 12 preguntas de dificultad "hard"
- 12 preguntas de dificultad "very-hard"
- 12 preguntas de dificultad "expert"

Asegúrate de que:
- Las preguntas sean variadas dentro del tema
- Las opciones de respuesta sean plausibles para dificultar la elección
- No sean trampas evidentes
- Si incluyes fórmulas matemáticas, usa LaTeX: $f(x) = x^2$, $\frac{a}{b}$, $\int f(x)dx$, etc.

Ejemplo del formato esperado:

{
  "tema": "Derivadas de Funciones - Bachillerato",
  "descripcion": "Preguntas sobre cálculo diferencial y derivadas",
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

