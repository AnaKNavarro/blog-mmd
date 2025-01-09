# Guía para Cargar y Modificar Artículos

## Estructura de Archivos
Los artículos se encuentran en la carpeta `/articulos` y siguen una estructura HTML específica.

## Pasos para Cargar un Nuevo Artículo

### 1. Crear el Archivo HTML
1. Navega a la carpeta `/articulos`
2. Crea un nuevo archivo HTML con el nombre de tu artículo (ejemplo: `mi_articulo.html`)
3. Usa la siguiente plantilla base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título del Artículo - Data Exploratorium</title>
    <link rel="stylesheet" href="../styles/main.css">
    <link rel="stylesheet" href="../styles/articulo.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <nav class="navbar">
        <div class="nav-content">
            <a href="../index.html" class="nav-logo">
                <i class="fas fa-home"></i>
            </a>
            <button class="hamburger-menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <main class="articulo-container">
        <article class="articulo">
            <header class="articulo-header">
                <h1>Título del Artículo</h1>
                <div class="metadata">
                    <span class="fecha">Fecha</span>
                    <span class="categoria">Categoría</span>
                </div>
            </header>

            <section class="contenido">
                <!-- Contenido del artículo aquí -->
            </section>
        </article>
    </main>

    <script src="../js/main.js"></script>
</body>
</html>
```

### 2. Agregar el Artículo al Grid Principal
1. Abre el archivo `index.html`
2. Localiza la sección con id "articulos" (clase "bento-grid")
3. Agrega una nueva tarjeta siguiendo este formato:

```html
<a href="articulos/mi_articulo.html" class="bento-item">
    <article>
        <h2>Título del Artículo</h2>
        <p>Breve descripción del artículo</p>
        <div class="metadata">
            <span class="fecha">Fecha</span>
            <span class="categoria">Categoría</span>
        </div>
    </article>
</a>
```

## Modificar Artículos Existentes

### 1. Editar el Contenido
1. Abre el archivo HTML del artículo que deseas modificar
2. El contenido principal se encuentra dentro de la sección con clase "contenido"
3. Puedes usar las siguientes etiquetas HTML para formatear tu contenido:

```html
<!-- Párrafos -->
<p>Texto del párrafo</p>

<!-- Subtítulos -->
<h2>Subtítulo grande</h2>
<h3>Subtítulo mediano</h3>
<h4>Subtítulo pequeño</h4>

<!-- Listas -->
<ul>
    <li>Elemento de lista no ordenada</li>
</ul>

<ol>
    <li>Elemento de lista ordenada</li>
</ol>

<!-- Código -->
<pre><code>
    // Bloque de código
    function ejemplo() {
        return "Hola mundo";
    }
</code></pre>

<!-- Citas -->
<blockquote>
    <p>Texto citado</p>
</blockquote>

<!-- Imágenes -->
<figure>
    <img src="../ruta/a/la/imagen.jpg" alt="Descripción de la imagen">
    <figcaption>Pie de imagen</figcaption>
</figure>
```

### 2. Modificar Metadatos
1. Actualiza el título en la etiqueta `<title>` del `<head>`
2. Modifica el título principal en `<h1>`
3. Actualiza la fecha y categoría en la sección `metadata`

### 3. Agregar Imágenes al Artículo

Para incluir imágenes en tu artículo, sigue estos pasos:

1. Guarda tu imagen en la carpeta `/imagenes`
2. Agrega la imagen en tu artículo usando el siguiente formato HTML:

```html
<div class="article-image">
    <img src="../imagenes/nombre_de_tu_imagen.png" alt="Descripción de la imagen" class="featured-image">
</div>
```

#### Consideraciones importantes:
- La ruta de la imagen debe ser relativa, usando `../imagenes/`
- El atributo `alt` es importante para accesibilidad, describe brevemente la imagen
- La clase `featured-image` está configurada para mostrar la imagen al 50% del tamaño
- Puedes colocar la imagen donde prefieras dentro de la sección `<article>`

#### Ejemplo de uso:
```html
<article class="glass-effect">
    <h1>Título del Artículo</h1>
    
    <p>Primer párrafo de contenido...</p>
    
    <!-- Inserción de imagen -->
    <div class="article-image">
        <img src="../imagenes/mi_imagen.png" alt="Descripción de mi imagen" class="featured-image">
    </div>
    
    <h2>Siguiente sección</h2>
</article>
```

### 4. Buenas Prácticas
- Mantén una estructura clara con secciones bien definidas
- Usa imágenes optimizadas para web
- Incluye alt text en todas las imágenes
- Verifica que todos los enlaces funcionen correctamente
- Mantén un estilo consistente con el resto del blog

### 5. Previsualización
1. Abre el archivo en tu navegador para ver cómo se ve
2. Verifica que:
   - El formato sea correcto
   - Las imágenes se carguen
   - Los enlaces funcionen
   - El diseño sea responsivo

## Notas Adicionales
- Todos los archivos de recursos (imágenes, PDFs, etc.) deben guardarse en la carpeta `/recursos`
- Mantén nombres de archivo descriptivos y sin espacios
- Usa guiones (-) o guiones bajos (_) para separar palabras en nombres de archivo
- Verifica la ortografía y gramática antes de publicar
