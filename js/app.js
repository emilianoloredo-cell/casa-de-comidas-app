// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Firebase iniciado correctamente");

// NAVEGACIÓN ENTRE SECCIONES
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remover clase active de todos los links
        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Remover clase active de todas las secciones
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        
        // Mostrar sección seleccionada
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// CARGAR DATOS DEL DASHBOARD
async function loadDashboard() {
    try {
        console.log("Cargando datos del dashboard...");
        
        // Aquí irá la lógica para traer datos de Firebase
        // Por ahora es un placeholder
        
    } catch (error) {
        console.error("Error cargando dashboard:", error);
    }
}

// Cargar dashboard al iniciar
loadDashboard();