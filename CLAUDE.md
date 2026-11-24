# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Estado del repositorio

[Brief.md](Brief.md) es el brief de marca de **Pathwise** y la fuente de todo el contenido.

La web es estática (HTML + CSS, sin build ni JS): basta con abrir `index.html` en el navegador.
- `index.html`: una sola página con anclas (`#inicio`, `#servicios`, `#proyectos`, `#equipo`, `#contacto`).
- `equipo/<nombre>.html`: una ficha por persona, todas con la misma plantilla. Enlazan con rutas `../`, así que si cambias la nav o el pie de una, cámbialos en todas y en `index.html`.
- `css/estilos.css`: una única hoja con la paleta como variables en `:root` y clases estilo BEM (`bloque__elemento--modificador`).
- **Hero cinemático (`.hero-cine`):** es una escena SVG en capas (escena → palabra gigante "Pathwise" → montes → sombra → UI). Las entradas son keyframes CSS con retrasos por elemento. [js/main.js](js/main.js) solo pone la variable `--p` (0–1, cuánto se ha hecho scroll del hero) y el CSS la usa en los *envoltorios* `.capa-*`. Las animaciones de entrada van en los hijos, para que los dos `transform` no se pisen. Con `prefers-reduced-motion` se desactiva todo.
- **Fuentes:** Archivo (variable, con eje `wdth`, para titulares y la palabra gigante) y Onest (cuerpo), cargadas desde Google Fonts.
- Los `TODO` y los `.pendiente` marcan datos que faltan: el email de contacto (ahora `contacto@pathwise.example`), el main y el rol de cada miembro y sus enlaces.

Los textos de cara al público se escriben con la skill `voz-pathwise` ([.claude/skills/voz-pathwise/SKILL.md](.claude/skills/voz-pathwise/SKILL.md)).

El proyecto está en español; escribe documentación y textos de interfaz en español salvo que se indique lo contrario.

## Producto (resumen de Brief.md)

Pathwise es un coach con IA para League of Legends: analiza partidas, detecta errores mecánicos, estratégicos y de build, y propone ejercicios de mejora. Público: jugadores de cualquier edad, con foco en nivel medio y abierto a novatos. Problema que resuelve: la frustración de no saber qué hacer para mejorar.

Dos proyectos previstos:
1. **Analizador de partidas con propuestas de mejora** — producto principal (análisis + ejercicios); tras el lanzamiento sigue en mantenimiento y mejoras.
2. **Análisis de equipos, composición y builds** — módulo de sinergias entre campeones y construcción de builds de runas.

## Identidad visual

Tema oscuro, cercano pero técnico; debe transmitir tranquilidad y un buen entorno para aprender.

| Uso | Color |
|---|---|
| Fondo principal | `#110E19` |
| Superficies | `#1C1730` |
| Principal (violeta) | `#8E6FD8` |
| Acento (turquesa) | `#4FB3BF` |
| Texto | `#ECE8F3` |
| Texto secundario | `#968FAB` |
| Errores | `#E07A6F` |

Esta paleta violeta y turquesa sustituye a la original de [Brief.md](Brief.md), que tenía turquesa y ámbar sobre azul oscuro. Evitar rojos intensos y neones (los errores usan el coral suave `#E07A6F`, no rojo puro).

## Equipo

Jorge (DAM, ASIR), Victor (Ciencia de Datos), Jaime (DAM, Información y Documentación). Sin roles fijos todavía.
