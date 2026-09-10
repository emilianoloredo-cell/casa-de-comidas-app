# Casa de Comidas - App de Gestión

Versión: 1.0
Última actualización: 10 de septiembre de 2026

## Descripción

App web para gestionar pedidos de una casa de comidas. Los datos se guardan en Firebase.

## Arquitectura

Frontend: HTML + CSS + JavaScript (en Vercel)
Storage: Firebase Firestore
Control de versiones: GitHub

## Estructura de Carpetas

casa-de-comidas-app/
├── index.html (página principal)
├── config.js (credenciales Firebase)
├── README.md (este archivo)
├── /css/styles.css (estilos)
├── /js/app.js (lógica)
└── /assets/ (imágenes y logos)

## Cómo funciona

1. Frontend: index.html carga CSS y JavaScript
2. app.js conecta a Firebase usando credenciales en config.js
3. Los datos se guardan en Firestore
4. Vercel deploya automáticamente desde GitHub

## Deploy

- URL en vivo: https://casa-de-comidas-app.vercel.app/
- Cada push a GitHub = redeploy automático en 1-2 minutos

## Testing

Abrir la app, presionar F12, ir a Console.
Debe mostrar:
- Firebase iniciado correctamente
- Proyecto: casa-de-comidas-app
- Test exitoso: Documento guardado

## Próximos pasos

- Interfaz para crear pedidos
- Sistema de notificaciones
- Dashboard de contabilidad
- Autenticación de usuarios

## Credenciales

Las credenciales de Firebase están en config.js
NO compartir este archivo públicamente