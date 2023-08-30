import { Router } from "express";
import {
  createPessoaController,
  listPessoaIdController,
  listPessoaAllController,
  updatePessoaController,
  deletePessoaController,
} from "../controllers/users.controllers";
const userRoutes = Router();

userRoutes.post("", createPessoaController);
userRoutes.get("", listPessoaAllController);
userRoutes.get("/:id", listPessoaIdController);
userRoutes.patch("/:id", updatePessoaController);
userRoutes.delete("/:id", deletePessoaController);

export default userRoutes;
