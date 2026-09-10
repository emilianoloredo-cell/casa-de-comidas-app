// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Firebase iniciado correctamente");
console.log("Proyecto:", firebaseConfig.projectId);

// Test: Guardar un documento de prueba
db.collection("test").add({
    mensaje: "App conectada a Firebase",
    fecha: new Date()
})
.then(() => console.log("Test exitoso: Documento guardado"))
.catch(error => console.error("Error:", error));