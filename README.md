# maps

Este proyecto utiliza la API de Google Maps y permite buscar ubicaciones, agregar un marcador, moverlo sobre el mapa y finalmente agregarlo a una lista, en la cual se puede ver o eliminar el marcador antes creado.

## Desarrollo

La aplicación fue creada con Angularjs, utiliza la bilioteca **angular-google-maps**. El proyecto fue creado utilizando Yeoman y el generator **generator-angular**.

Para ejecutar la aplicación es necesario ejecutar los siguientes comandos:

	npm install
	bower install
	
El primero instala las dependecias ubicadas en el archivo **package.json**, el segundo instala las dependecias del cliente, ubicadas en **bower.json**. Luego se ejecuta la tarea **serve** de Grunt para que se inicialice el servidor que permite visualizar la aplicación:

	grunt serve

Para hacer el **build** y obtener la version minificada y lista para producción se ejecuta:

	grunt build

