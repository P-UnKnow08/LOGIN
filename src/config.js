import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

export const TOKEN_SECRET = process.env.TOKEN_SECRET || 'QuOfV6EcVhRVcpOTfu1hSRNVmVmHGRGQoxtf5Hs2ZZc'; // Valor por defecto solo si no se define
