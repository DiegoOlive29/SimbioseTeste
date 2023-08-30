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

export const listPessoaAll = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const pessoas = await userRepository.find();

  return pessoas;
};
export const listPessoaId = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);

  const pessoas = await userRepository.findOneBy({id});

  if (!pessoas) {
    throw new AppError("User not found", 404);
  }

  return pessoas;
};

export const updatePessoa = async () => {
  return "";
};

export const pessoaDeleteService = async () => {
  return "";
};
