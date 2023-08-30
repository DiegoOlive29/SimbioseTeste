import { Request, Response } from "express";
import {
  IPessoaRequest,
  IPessoaUpdateRequest,
  IUserResponse,
} from "../interfaces/users.interfaces";
import {
  createPessoa,
  listPessoaId,
  listPessoaAll,
  pessoaDeleteService,
  updatePessoa,
} from "../services/users.services";

const createPessoaController = async (req: Request, res: Response) => {
  const { data, email, nome }: IPessoaRequest = req.body;

  const pessoa = await createPessoa({ data, email, nome });

  return res.status(201).json(pessoa);
};
const listPessoaAllController = async (req: Request, res: Response) => {
  const pessoa = await listPessoaAll();

  return res.json(pessoa);
};
const listPessoaIdController = async (req: Request, res: Response) => {
  const id = req.params.id;

  const pessoa = await listPessoaId(id);

  return res.json(pessoa);
};

const updatePessoaController = async (req: Request, res: Response) => {
  return "";
};

const deletePessoaController = async (req: Request, res: Response) => {
  return "";
};

export {
  createPessoaController,
  listPessoaIdController,
  listPessoaAllController,
  updatePessoaController,
  deletePessoaController,
};
