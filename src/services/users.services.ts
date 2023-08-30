import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";
import {
  IPessoaRequest,
  IUserResponse,
  IPessoaUpdateRequest,
} from "../interfaces/users.interfaces";
import { AppError } from "../errors/AppError";

export const createPessoa = async ({
  nome,
  email,
  data,
}: IPessoaRequest): Promise<User> => {
  const userRespository = AppDataSource.getRepository(User);

  const userEmailAlreadyExists = await userRespository.findOne({
    where: { email },
  });

  if (userEmailAlreadyExists) {
    throw new AppError("email or cpf already registered", 401);
  }
  
  const newUser = userRespository.create({
    nome,
    email,
    data,
  });

  await userRespository.save(newUser);

  return newUser;
};

export const listPessoaActive = async () => {
  return "";
};
export const listPessoa = async () => {
  return "";
};

export const updatePessoa = async () => {
  return "";
};

export const pessoaDeleteService = async () => {
  return "";
};
