# Breaking Bad APP


## Acceso al código y despliegue a la aplicación

La aplicación se encuentra disponible en Github, donde se puede consultar el código en el siguiente enlace:

[react-breaking-bad - Github](https://github.com/Alberto-CS/react-breaking-bad.git)
 

Para arrancar la aplicación debemos clonar o descargar el repositorio y ejecutar los siguientes comandos

> npm install

> npm start

Se abrirá la aplicación en el navegador predeterminado. 

Para mayor comodidad, en el caso de que se quiera probar sin instalar se ha subido a Vercel. Se puede acceder a través del siguiente enlace.

[react-breaking-bad - Vercel](https://react-breaking-bad-alpha.vercel.app/)


## Estructura y organización de la app
Se ha utilizado el comando create-react-app con la plantilla de redux para estructurar la aplicación. Se ha respetado la estructura generada añadiendo al directorio 'app' aquellos componentes generales que no forman parte de alguna característica en concreto tal como las traducciones o la página 404. 

Aquellos componentes que involucran funcionalidades o características requisitos de la aplicación se encuentran en el directorio 'features'.

## Descripción de la aplicación

### App
En este componente está desarrollado el routing de la aplicación y la gestión del estado de la API de la que se obtienen los datos de la aplicación.

##### Routing
En el caso del routing se han diseñado las siguientes rutas:

- **exact path='/'** Pantalla principal, listado de todos los personajes
- **path='/character/:id/*'** Gestión de errores en el caso de que se introduzca una ruta errónea
- **path='/character/:id'** Pantalla de detalles de un personaje en concreto
- **path='*'** Gestión de errores en el caso de que ninguna de las rutas anteriores coincida, página 404.

##### Gestión de estado de la API
Si la API está cargando, mostrará un spinner blanco hasta que los datos estén cargados. En el caso de que haya algún error, se mostrará un texto de error en el idioma seleccionado en la aplicación.

#### React Helmet

Se ha incluido una funcionalidad que no era requisito que permite editar las cabeceras del index.html generado de forma dinámica. Se ha modificado el título de la aplicación a modo de ejemplo.


### Character Card
Este es uno de los dos componentes básicos de la aplicación. Refleja la información mínima para identificar un personaje: imagen, nombre y apodo. En el caso de que se haga click en dicho componente, se accederá a la pantalla de detalles del personaje.


### Character Details
Este es el segundo componente básico de la aplicación. Refleja toda la información disponible de un personaje más una cita célebre aleatoria. 

Para evitar spoilers, la información acerca del estado del personaje en la serie está oculta hasta que se interactúa con la misma haciendo click.

En el caso de la frase aleatoria se elegirá una de entre todas las disponibles del personaje. Cada vez que se accede a la pantalla de detalles del personaje se mostrará una cita célebre aleatoria. Esta funcionalidad se puede ejecutar manualmente haciendo click en el dado de la parte inferior izquierda del panel de información.

Si el personaje no dispone de cita célebre no se renderiza las características correspondientes a dicha funcionalidad y se aprovecha el espacio disponible.


### Character List
Este componente muestra todo los personajes de la serie con su información mínima.


### character List API
Este servicio hace uso de rtk query y permite la búsqueda y el cacheo de datos de la aplicación. Se han planteado dos hooks para poder acceder a los distintos datos: uno para obtener todos los datos de los personajes y otro para acceder a las citas célebres de un personaje (en la primera consulta no está disponible dicha información).


### Navbar
Este componente dispone de acceso a la pantalla principal y permite el cambio de idioma entre español e inglés con la librería i18n.

## Librerías usadas
Se ha procurado usar el menor número de librerías posibles sin comprometer la calidad del código y del resultado de la aplicación. Las librerías más importantes a comentar son las siguientes

### React Helmet
React Helmet permite cambiar dinámicamente las cabeceras del fichero html generado para producción. Esto es especialmente útil cuando la aplicación se despliega en un entorno web, donde podemos fijar parámetros como el título, la descripción o el favicon de la web. En este caso concreto se ha utilizado para modificar el title de la app.

### RTK Query
RTK Query permite simplificar el proceso de búsqueda y cacheo de datos. 

### MUI v5
Se ha utilizado el ecosistema de Material UI para desarrollar las cuestiones de estilo de la aplicación. Internamente hace uso de las librerías de @emotion.

### i18n
La internacionalización era uno de los requisitos fundamentales de la aplicación. Se ha utilizado i18n para cambiar entre los idiomas de inglés y español de la aplicación.


## Pruebas E2E
Para pruebas de End-to-End se ha utilizado Cypress. Dada la sencillez de la aplicación, se ha realizado una prueba simple de comprobar si la aplicación carga la pantalla principal a fin de demostrar el uso de la herramienta.

Para ejecutar la prueba se abrirá la aplicación cypress y se ejecutará la prueba definida en spec.cy.js

> npx cypress open

