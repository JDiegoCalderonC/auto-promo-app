# Auto Promo App

Este proyecto es una aplicación Next.js para una promoción de una compañía de automóviles. Los usuarios pueden registrarse en una Landing Page y recibir un código alfanumérico para participar en un sorteo.

## Requisitos

- Docker
- Docker Compose

## Instrucciones de instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/auto-promo-app.git
   cd auto-promo-app

2. Construye las imágenes de Docker:
    
    ```bash
    docker-compose build

3. Levanta los contenedores:

    ```bash
    docker-compose up

La aplicación estará disponible en http://localhost:3000.

## Información de la aplicación

- **Estilos:** La aplicación utiliza **Tailwind CSS** para la estilización.
- **Datos Geográficos:** Los departamentos y ciudades se obtienen mediante la **API de Geonames**, consumida a través de **Axios**.
- **Código del Sorteo:** El código del sorteo se genera utilizando un **UUID**.
- **Alertas:** Las alertas se implementan con **SweetAlert2**.
- **Iconos:** Los iconos provienen de **FontAwesome**.
- **Carrusel de Imágenes:** El número de elementos en el carrusel de imágenes se ajusta dinámicamente según el ancho de la pantalla.

## Autor

**Juan Diego Calderón Carrillo**