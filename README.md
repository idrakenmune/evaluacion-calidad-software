# 🌸 evaluacion-calidad-software

Trabajo de la asignatura Ciclo de Vida del Software (Duoc UC).

Tomamos una calculadora hecha en JavaScript y le hicimos pruebas y revisiones de calidad y seguridad.

## Lo que hicimos

- **Pruebas unitarias:** hicimos 5 pruebas (suma, resta, multiplicación, división y división por cero). Todas pasaron.
- **Cobertura:** medimos con c8 cuánto código se probó. Dio 100 %.
- **SonarCloud:** conectamos el repositorio para revisar la calidad del código. Quedó aprobado.
- **GitHub Actions:** dejamos automático que las pruebas y el análisis se ejecuten cada vez que subimos cambios.
- **npm audit:** revisamos las librerías del proyecto y no encontró vulnerabilidades.
- **Snyk:** hicimos una segunda revisión de seguridad y tampoco encontró vulnerabilidades.
- **GitHub:** activamos el Dependency graph y las alertas de Dependabot.

## Archivos principales

- `src/calculadora.js`: la calculadora.
- `tests/calculadora.test.js`: las pruebas.
- `.github/workflows/sonar.yml`: la automatización.
- `sonar-project.properties`: la configuración de SonarCloud.

## Integrantes

- Millaray Silva
- [Nombre de la compañera]
