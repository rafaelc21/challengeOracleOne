# Challenge Oracle ONE

# Encriptador de Texto

Este proyecto es una aplicación web simple que permite encriptar y desencriptar mensajes de texto según una codificación específica. Los usuarios pueden ingresar un texto, encriptarlo para ocultar su contenido, y desencriptarlo para recuperar el mensaje original.

## Características

- **Encriptar**: Convierte un texto de entrada en un formato encriptado usando reglas de sustitución.
- **Desencriptar**: Convierte un texto encriptado de vuelta a su formato original.
- **Copiar**: Permite copiar el texto encriptado o desencriptado al portapapeles para facilitar su uso.

## Uso

### Encriptar un mensaje

1. Ingresa el texto que deseas encriptar en el área de texto de la izquierda.
2. Haz clic en el botón **"Encriptar"**.
3. El mensaje encriptado aparecerá en el área de texto de la derecha.

### Desencriptar un mensaje

1. Ingresa el texto encriptado en el área de texto de la izquierda.
2. Haz clic en el botón **"Desencriptar"**.
3. El mensaje desencriptado aparecerá en el área de texto de la derecha.

### Copiar el mensaje

1. Después de encriptar o desencriptar un mensaje, haz clic en el botón **"Copiar"** debajo del área de texto de la derecha.
2. El mensaje se copiará al portapapeles, listo para ser pegado en otra aplicación.

## Reglas de Encriptación

El proceso de encriptación utiliza un conjunto de reglas simples de sustitución de caracteres:

- `e` se convierte en `enter`
- `i` se convierte en `imes`
- `a` se convierte en `ai`
- `o` se convierte en `ober`
- `u` se convierte en `ufat`

El proceso de desencriptación revierte estas sustituciones para recuperar el texto original.

## Estructura del Proyecto

- **`index.html`**: Contiene la estructura y el diseño de la interfaz de usuario.
- **`script.js`**: Contiene la lógica para encriptar, desencriptar y copiar el texto.
- **`styles.css`**: (No proporcionado en este ejemplo, pero generalmente contiene los estilos CSS para el diseño del proyecto).

## Cómo Ejecutar el Proyecto

Para ejecutar este proyecto, simplemente abre el archivo `index.html` en un navegador web. No se requieren dependencias adicionales ni configuración de servidor.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork del repositorio, realizar tus cambios y enviar un pull request. ¡Toda contribución es bienvenida!

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo `LICENSE` para más detalles.
