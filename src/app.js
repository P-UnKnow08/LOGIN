import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/tasks.routes.js";

const app = express();

// Configurar CORS para permitir solicitudes desde el frontend (Vite/React)
app.use(
  cors({
    origin: "http://localhost:5173", // URL del cliente en desarrollo
    credentials: true,
  })
);

// Middlewares
app.use(morgan("dev")); // Log de solicitudes HTTP
app.use(express.json()); // Parsear cuerpos de solicitudes en JSON
app.use(cookieParser()); // Parsear cookies

// Rutas
app.use("/api", authRoutes); // Rutas de autenticación
app.use("/api", taskRoutes); // Rutas de tareas

export default app;
