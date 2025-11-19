# 💼 EF-M2 Proyecto Integrador: Landing Page Profesional

## Objetivo General

Tu misión es crear una "landing page" (página de aterrizaje) de una sola página, totalmente adaptable (responsive), utilizando el framework Bootstrap. Debes integrar HTML semántico para la estructura, Bootstrap para el diseño y los componentes, y JavaScript básico para la interactividad. Todo el proyecto debe estar bajo control de versiones con Git y alojado en un repositorio público de GitHub.

## Requisitos Fundamentales

### Estructura HTML

Tu archivo `index.html` debe usar etiquetas semánticas de HTML5 para una estructura clara y profesional (por ejemplo, `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).

### Framework Bootstrap

Este es un proyecto centrado en Bootstrap. Debes usar:

-   El Sistema de Grillas de Bootstrap (`<div class="container">`, `<div class="row">`, `<div class="col-md-4">`, etc.) para crear tu diseño.
-   Al menos **cinco Componentes de Bootstrap diferentes** (ej. Navbar, Botones, Cards, Formularios, Modal, Carrusel, Acordeón).
-   Clases de Utilidad de Bootstrap para espaciado (`m-3`, `py-4`), colores (`bg-primary`, `text-white`), alineación de texto (`text-center`) y flexbox (`d-flex`).

### Interactividad con JavaScript

¡Tu página no debe ser estática!

-   Incluye un formulario de contacto o registro.
-   Usando JavaScript, escucha el evento `submit` del formulario.
-   Dentro del manejador del evento, previene el envío por defecto (`event.preventDefault()`) y realiza una validación simple (ej. verificar que los campos no estén vacíos).
-   Si el formulario es válido, muestra un mensaje de éxito al usuario usando un Modal o Alert de Bootstrap.

### Diseño Adaptable (Responsive)

El sitio web final debe ser completamente adaptable y verse limpio y profesional en teléfonos móviles, tabletas y computadoras de escritorio.

### Control de Versiones

-   Inicializa un repositorio local de Git para tu proyecto.
-   Realiza commits frecuentes y significativos mientras construyes (ej. "feat: Agrega componente Navbar", "fix: Corrige layout responsive para móvil").
-   Crea un repositorio público en GitHub y sube tu código final.

## Guía de Entrega

Entregarás un único archivo .zip que contenga tu carpeta de proyecto completa (archivos `index.html`, carpetas `css/`, `js/`, `assets/`) y un archivo de texto con el enlace a tu repositorio público de GitHub.

---

## ¡Elige Tu Proyecto!

Selecciona una de las siguientes tres alternativas para tu landing page.

### Alternativa A: Landing Page para una Conferencia de Tecnología 💻

**Descripción:** Crea una landing page dinámica y atractiva para promocionar una próxima conferencia de tecnología. El objetivo es informar a los visitantes sobre el evento y animarlos a registrarse.

![Alternativa_A](/assets/img/Alternativa_A.png)

**Secciones Requeridas:**

1. **Encabezado y Navbar:** Una barra de navegación fija en la parte superior (sticky-top) con el nombre de la conferencia y enlaces a las diferentes secciones.
2. **Sección Principal (Hero):** Una sección a todo lo ancho con un titular llamativo, una breve descripción del evento y un botón de llamada a la acción (CTA) prominente que diga "Regístrate Ahora".
3. **Sobre el Evento:** Una sección que explique el propósito de la conferencia y lo que los asistentes pueden esperar.
4. **Oradores (Speakers):** Una grilla con perfiles de los oradores. Cada orador debe estar en una Card de Bootstrap con su foto, nombre y una breve biografía.
5. **Agenda (Schedule):** Un diseño simple para la agenda. Puedes usar un List Group o Cards de Bootstrap para mostrar el programa.
6. **Formulario de Registro:** Un formulario con campos para Nombre, Email y Cargo/Puesto de trabajo.

**Componentes de Bootstrap Sugeridos:** Navbar, Botones, Cards, Formularios, Modal (para la confirmación de registro), List Group

### Alternativa B: Landing Page para un Restaurante o Cafetería ☕

**Descripción:** Diseña una página de aterrizaje moderna y apetitosa para un restaurante o cafetería ficticia. El objetivo es atraer a los clientes mostrando el ambiente, los platillos destacados y facilitando el contacto o la reserva.

![Alternativa_B](/assets/img/Alternativa_B.png)

**Secciones Requeridas:**

1. **Encabezado y Navbar:** Una barra de navegación con el logo del restaurante y enlaces a secciones como "Menú", "Nosotros" y "Contacto".
2. **Sección Principal (Hero):** Una imagen de alta calidad de un platillo popular o del interior del local, con el nombre del restaurante y un eslogan atractivo.
3. **Sobre Nosotros:** Una sección que cuente una breve historia del restaurante, su filosofía o lo que lo hace especial.
4. **Menú Destacado:** Una sección que muestre 3 o 4 platillos principales. Usa Cards de Bootstrap para cada uno, incluyendo una imagen, nombre del platillo, una breve descripción y el precio.
5. **Galería:** Un Carrusel de Bootstrap para mostrar una colección de fotos atractivas de la comida, las bebidas y el ambiente del lugar.
6. **Formulario de Contacto o Reservas:** Un formulario simple para que los clientes puedan hacer preguntas o solicitar una reserva (Nombre, Email, Fecha, Número de personas).
7. **Pie de Página (Footer):** Información clave como el horario de atención, la dirección y el número de teléfono.

**Componentes de Bootstrap Sugeridos:** Navbar, Botones, Cards (para el menú), Carrusel, Formularios, Modal (para la confirmación de la reserva).

### Alternativa C: Landing Page de Lanzamiento de Producto 🚀

**Descripción:** Diseña una landing page atractiva para un producto o aplicación nueva y emocionante (ficticia). La página debe resaltar sus características y convencer a los visitantes de registrarse para obtener acceso anticipado.

![Alternativa_C](/assets/img/Alternativa_C.png)

**Secciones Requeridas:**

1. **Encabezado y Navbar:** Una barra de navegación limpia con el logo del producto y un botón de "Registrarse".
2. **Sección Principal (Hero):** Un titular atractivo, una breve propuesta de valor y un botón de llamada a la acción principal (ej. "Obtén Acceso Anticipado").
3. **Características (Features):** Una sección en formato de grilla que explique las 3-4 características principales de tu producto. Usa íconos y descripciones breves para cada una.
4. **Cómo Funciona / Muestra:** Usa un Carrusel de Bootstrap para mostrar capturas de pantalla de tu producto en acción.
5. **Preguntas Frecuentes (FAQ):** Un componente de Acordeón donde los usuarios puedan hacer clic en las preguntas para revelar las respuestas. Esto es ideal para gestionar consultas comunes sin sobrecargar la página.
6. **Formulario de Registro:** Un formulario simple que pida únicamente una dirección de correo electrónico para unirse a la lista de espera.

**Componentes de Bootstrap Sugeridos:** Navbar, Carrusel, Acordeón, Formularios, Botones, Modal (para la confirmación de registro).

---

## Guía Paso a Paso para el Éxito

Sigue estas fases para construir tu proyecto de manera metódica. ¡Recuerda hacer commit de tu código después de cada paso importante!

### Fase 1: Configuración y Planificación

1. Crea la carpeta principal de tu proyecto (ej. `proyecto-final-portafolio`).
2. Dentro de ella, inicializa un repositorio de Git: `git init`
3. Crea tu estructura de archivos: `index.html`, una carpeta `css` con `style.css`, y una carpeta `js` con `main.js`.
4. Crea un nuevo repositorio público en GitHub. Añádelo como remoto a tu repositorio local y haz tu primer push.

### Fase 2: Estructura HTML y Rejilla de Bootstrap

1. En `index.html`, configura la plantilla estándar de HTML5.
2. Vincula el CSS de Bootstrap (en el `<head>`) y el JS Bundle (antes de `</body>`) usando los enlaces CDN de la documentación de Bootstrap.
3. Construye el esqueleto HTML semántico para la alternativa que elegiste (`<header>`, `<main>`, etc.).
4. Usa el sistema de grillas de Bootstrap (`container`, `row`, `col-*-*`) para definir el layout de tus secciones principales.

### Fase 3: Construcción con Componentes y Utilidades

1. Comienza a construir tu página sección por sección, copiando y adaptando el código de los componentes de la documentación de Bootstrap (Navbar, Cards, etc.).
2. Usa las clases de utilidad de Bootstrap de forma extensiva (`p-5`, `m-2`, `text-center`, `bg-dark`, `rounded`, `shadow-sm`) para gestionar el espaciado, los colores y el estilo. Intenta escribir la menor cantidad posible de CSS personalizado.

### Fase 4: Interactividad con JavaScript

1. Asegúrate de que tu archivo `js/main.js` esté correctamente vinculado en tu HTML.
2. Usa `document.querySelector()` para obtener referencias a tu formulario y sus campos de entrada.
3. Añade un listener para el evento `'submit'` a tu formulario.
4. Dentro del listener, llama a `event.preventDefault()`.
5. Escribe una lógica `if/else` para comprobar si los valores de los inputs están vacíos.
6. Si son válidos, activa tu Modal de Bootstrap o crea e inyecta dinámicamente una Alerta de Bootstrap para mostrar un mensaje de éxito.

### Fase 5: Toques Finales

1. Añade tu propio contenido (textos, imágenes).
2. Escribe una o dos reglas de CSS personalizadas en tu archivo `style.css` para darle a tu página un toque único (ej. una fuente personalizada de Google Fonts o un color único para un elemento específico).
3. Prueba a fondo la adaptabilidad (responsiveness) de tu página usando las Herramientas de Desarrollador de tu navegador.
4. Sube tu código final y pulido a GitHub con `git push`.
