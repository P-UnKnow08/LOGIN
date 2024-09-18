import mongoose from "mongoose";
import dotenv from "dotenv";

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

export const connectDB = async () => {
  try {
    // Leer la URI de conexión desde las variables de entorno
    const dbURI =
      process.env.MONGODB_URI ||
      "mongodb+srv://myAtlasDBUser:Miguel123456**@myatlasclusteredu.tka8uwj.mongodb.net/database"; // URI por defecto para desarrollo local

    // Conectar a la base de datos con opciones recomendadas para Mongoose
    await mongoose.connect(dbURI, {});

    console.log(">> DB is connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Salir de la aplicación si la conexión falla
  }
};
