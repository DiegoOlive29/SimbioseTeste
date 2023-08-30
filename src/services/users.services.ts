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

  const pessoas = await userRepository.findOneBy({ id });

  if (!pessoas) {
    throw new AppError("User not found", 404);
  }

  return pessoas;
};

export const updatePessoa = async (
  id: string,
  { email, nome, data }: IPessoaUpdateRequest
) => {
  const userRepository = AppDataSource.getRepository(User);

  const pessoas = await userRepository.findOneBy({ id });

  if (!pessoas) {
    throw new AppError("User not found", 404);
  }

  await userRepository.update(id, {
    email: email ? email : pessoas.email,
    nome: nome ? nome : pessoas.nome,
    data: data ? data : pessoas.data,
  });

  const newPessoa = await userRepository.findOneBy({
    id,
  });

  return newPessoa;
};

export const pessoaDeleteService = async () => {
  return "";
};
