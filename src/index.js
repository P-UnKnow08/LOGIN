import app from "./app.js"; // Importamos la configuración de Express desde app.js
import { connectDB } from "./db.js"; // Importamos la conexión a la base de datos
import dotenv from "dotenv";

// Cargar variables de entorno desde el archivo .env
dotenv.config();

// Conectar a la base de datos
connectDB();

// Definir el puerto desde las variables de entorno o un valor por defecto
const PORT = process.env.PORT || 4000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Manejo de errores no capturados
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); // Salir del proceso si hay una excepción no manejada
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1); // Salir del proceso si hay una promesa rechazada no manejada
});
