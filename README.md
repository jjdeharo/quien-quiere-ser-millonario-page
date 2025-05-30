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

Usa este prompt con ChatGPT/Gemini:

```
Genera un banco de 60 preguntas en formato JSON con la siguiente estructura:

{
  "tema": "[TU TEMA AQUÍ]",
  "descripcion": "Descripción del contenido del quiz",
  "autor": "Generado con IA",
  "fecha_creacion": "2025-05-30",
  "total_preguntas": 60,
  "preguntas": [
    {
      "question": "Pregunta aquí (usar LaTeX si necesario: $formula$)",
      "options": { "A": "Opción A", "B": "Opción B", "C": "Opción C", "D": "Opción D" },
      "correct": "A",
      "difficulty": "easy"
    }
  ]
}

Distribución: 12 easy, 12 medium, 12 hard, 12 very-hard, 12 expert.
Si incluyes fórmulas, usa formato LaTeX: $f(x) = x^2$, $\frac{a}{b}$, etc.
```

## 📐 LaTeX Básico

```latex
Exponentes: x^2, x^{10}
Fracciones: \frac{a}{b}
Raíces: \sqrt{x}
Funciones: \sin(x), \cos(x), \ln(x)
Derivadas: \frac{dy}{dx}, f'(x)
Integrales: \int f(x)dx
Límites: \lim_{x \to 0} f(x)
Letras griegas: \alpha, \beta, \pi
```

## 📂 Estructura de Archivos

```
├── index.html          # Página principal
├── styles.css          # Estilos (con soporte para temas y LaTeX)
├── questions.json      # ¡Tu archivo de preguntas!
└── js/
    ├── main.js         # Lógica principal del juego
    ├── questions.js    # Carga de preguntas y temas
    ├── ui.js           # Interfaz y renderizado LaTeX
    ├── helpers.js      # Funciones auxiliares
    └── lifelines.js    # Lógica de comodines
```

## 🔧 Compatibilidad

- ✅ **Formato nuevo**: Con tema y metadatos (recomendado)
- ✅ **Formato legacy**: Array directo de preguntas (compatible)

## 🐛 Solución de Problemas

**Las preguntas no cargan:**
- Verifica que `questions.json` esté en la raíz del proyecto
- Valida el JSON en [jsonlint.com](https://jsonlint.com)

**LaTeX no se muestra:**
- Verifica conexión a internet (MathJax se carga desde CDN)
- Asegúrate de usar `$formula$` para fórmulas

**El tema no aparece:**
- Usa la nueva estructura con la propiedad `tema`
- El formato legacy muestra "Preguntas Generales"

## 🎯 Ejemplos de Temas

- 📐 **Matemáticas**: "Derivadas de Funciones - Bachillerato"
- 🔬 **Física**: "Mecánica Clásica - Cinemática"  
- 🧪 **Química**: "Química Orgánica - Hidrocarburos"
- 🌍 **Historia**: "Segunda Guerra Mundial"
- 📚 **Literatura**: "Generación del 98"

---

**¡Listo para crear tu quiz educativo personalizado!** 🎉
