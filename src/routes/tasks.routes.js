import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.Schema.js";

const routes = Router();

routes.get("/tasks", authRequired, getTasks);

routes.get("/tasks/:id", authRequired, getTask);

routes.post(
  "/tasks",
  authRequired,
  validateSchema(createTaskSchema),
  createTasks
);

routes.delete("/tasks/:id", authRequired, deleteTask);

routes.put("/tasks/:id", authRequired, updateTask);

export default routes;
