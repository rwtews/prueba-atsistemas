# prueba-atsistemas

Desarrolle una aplicación con la que se pueda consultar los detalles de los personajes de la serie Breaking Bad. En la web https://breakingbadapi.com/ se expone una API pública para integrar la información requerida.

La aplicación constaría de dos pantallas. En la primera pantalla se listan todos los personajes existentes: cada elemento de la lista mostraría la información mínima necesaria para identificar cada personaje. Una vez que se pulse sobre alguno de ellos, se accedería a la pantalla de detalle, donde se presentaría toda la información que expone la API para ese personaje, además de una frase célebre que haya comentado el personaje durante la historia. Esta frase cambiaría de manera aleatoria cada vez que se accede a la pantalla, o se pulsa sobre un botón que la actualiza.

Desarrollar la aplicación en Angular apoyándote en la librería de componentes visuales que estimes oportuno. A pesar de que se trate de una aplicación simple, con su resolución, debes tratar de poner de manifiesto los conocimientos que tienes. Yo valoraré puntos como:

 - Correcta organización del código fuente. Componentización adecuada.
 - Óptima comunicación con el backend. Óptima navegación de las rutas.
 - Gestionar correctamente el feedback de carga de datos y gestión errores (para informar en todo momento al usuario mientras se está realizando una operación u ocurre algún error al efectuarla).
 - Dotar a la aplicación de funcionalidad para poder cambiar el idioma entre inglés y español, internacionalizando las cadenas de la propia aplicación (obviamente, las que responden los servicios no).