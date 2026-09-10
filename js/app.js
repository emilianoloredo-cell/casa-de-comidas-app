// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Firebase iniciado correctamente");

// NAVEGACIÓN ENTRE SECCIONES
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        
        const sectionId = link.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// GRÁFICO 1: PLATOS MÁS VENDIDOS (Pie Chart)
const topDishesCtx = document.getElementById('topDishesChart');
if (topDishesCtx) {
    new Chart(topDishesCtx, {
        type: 'doughnut',
        data: {
            labels: ['Milanesa', 'Tarta de pollo', 'Pastas', 'Ensaladas'],
            datasets: [{
                data: [35, 25, 20, 20],
                backgroundColor: [
                    '#ff6b35',
                    '#5b7cfa',
                    '#00d4ff',
                    '#ffd43b'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: { family: "'Montserrat', sans-serif", size: 12 },
                        color: '#666666',
                        padding: 16,
                        usePointStyle: true
                    }
                }
            }
        }
    });
}

// GRÁFICO 2: INGRESOS POR HORA (Line Chart)
const revenueCtx = document.getElementById('revenueChart');
if (revenueCtx) {
    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
            datasets: [{
                label: 'Ingresos ($)',
                data: [0, 120, 350, 480, 620, 450, 890, 1200, 950, 700],
                borderColor: '#ff6b35',
                backgroundColor: 'rgba(255, 107, 53, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ff6b35',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: { family: "'Montserrat', sans-serif", size: 12 },
                        color: '#666666'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: { family: "'Montserrat', sans-serif" },
                        color: '#999999',
                        callback: function(value) {
                            return '$' + value;
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)',
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        font: { family: "'Montserrat', sans-serif" },
                        color: '#999999'
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                }
            }
        }
    });
}

// CARGAR DATOS DEL DASHBOARD
async function loadDashboard() {
    try {
        console.log("Cargando datos del dashboard...");
        // Aquí irá la lógica para traer datos de Firebase
    } catch (error) {
        console.error("Error cargando dashboard:", error);
    }
}

// Cargar dashboard al iniciar
loadDashboard();