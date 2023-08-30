import {
  expect,
  describe,
  jest,
  test,
  beforeAll,
  afterAll,
} from "@jest/globals";
import {
  IPessoaRequest,
  IPessoaUpdateRequest,
  IUserResponse,
} from "../../interfaces/users.interfaces";
import {
  createPessoa,
  listPessoaAll,
  updatePessoa,
  pessoaDeleteService,
} from "../../services/users.services";
import AppDataSource from "../../data-source";
import { DataSource } from "typeorm";

describe("Testando services de pessoa", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((error) => {
        console.log(error);
      });
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("Deve ser capaz de criar uma novo pessoa", async () => {
    const pessoaDados: IPessoaRequest = {
      data: "29082000",
      email: "Diego@gmail.com",
      nome: "Diego",
    };

    const result = await createPessoa(pessoaDados);
    expect(result).toHaveProperty("id");
  });

  test("Não deve ser capaz de criar um usuário com email ja cadastrado", async () => {
    const pessoaDados: IPessoaRequest = {
      data: "29082000",
      email: "Diego@gmail.com",
      nome: "Diego",
    };

    expect(async () => {
      await createPessoa(pessoaDados);
    }).rejects.toThrow("Email already registered");
  });

  test("Deve ser capaz de editar uma pessoa", async () => {
    const pessoaDados: IPessoaRequest = {
      data: "29102000",
      email: "Maria@gmail.com",
      nome: "Maria",
    };

    const pessoaUpdateDados: IPessoaUpdateRequest = {
      nome: "Rany",
    };

    const pessoa = await createPessoa(pessoaDados);
    const result = await updatePessoa(pessoa.id, pessoaUpdateDados);

    expect(result!.nome).not.toBe(pessoaDados.nome);
  });

  test("Deve ser capaz de retornar todos os user cadastrado", async () => {
    const result = await listPessoaAll();
    expect(result.length).not.toBe(0);
  });

  test("Deve ser capaz de excluir uma unica pessoa", async () => {
    const pessoaDados: IPessoaRequest = {
      data: "01102000",
      email: "Nete@gmail.com",
      nome: "Nete",
    };

    const pessoa = await createPessoa(pessoaDados);

    const result = await pessoaDeleteService(pessoa.id);

    expect(result).toBe(true);
  });
});
