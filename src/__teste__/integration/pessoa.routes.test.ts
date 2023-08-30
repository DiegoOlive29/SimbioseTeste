import request from "supertest";
import app from "../../app";
import { DataSource } from "typeorm";
import AppDataSource from "../../data-source";
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
} from "../../interfaces/users.interfaces";
const pessoaData: IPessoaRequest = {
  data: "29102000",
  email: "Maria@gmail.com",
  nome: "Maria",
};
const pessoaDataWithoutEmail = {
  data: "29102000",
  nome: "Maria",
};
const pessoaDados: IPessoaRequest = {
  data: "01102000",
  email: "Nete@gmail.com",
  nome: "Nete",
};
const pessoaUpdateDados: IPessoaUpdateRequest = {
  nome: "Douglas",
};
const pessoaDataDois: IPessoaRequest = {
  data: "29102000",
  email: "Fabio@gmail.com",
  nome: "fabio",
};

describe("Testando rotas de users", () => {
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

  test("POST /pessoa - Deve ser capaz de criar um novo cadastro de  pessoa", async () => {
    const response = await request(app).post("/pessoa").send(pessoaData);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  test("POST /pessoa - Deve retornar um erro caso não estaja passando um dos campos", async () => {
    const response = await request(app)
      .post("/pessoa")
      .send(pessoaDataWithoutEmail);

    expect(response.status).toBe(401);
  });

  test("GET /pessoa - deve ser capas de listar os pessoa", async () => {
    const response = await request(app).get("/pessoa");

    expect(response.status).toBe(200);
  });

  test("GET /pessoa - deve ser capas de listar uma unica pessoa", async () => {
    const pessoa = await request(app).post("/pessoa").send(pessoaDados);

    const response = await request(app).get("/pessoa/" + pessoa.body.id);

    expect(response.status).toBe(200);
  });

  test("PACTH /pessoa - deve ser capaz de alterar dados de uma pessoa", async () => {
    const pessoa = await request(app).post("/pessoa").send(pessoaDataDois);

    const response = await request(app)
      .patch("/pessoa/" + pessoa.body.id)
      .send(pessoaUpdateDados);

    expect(response.status).toBe(200);
    expect(response.body.nome).not.toBe(pessoa.body.nome);
  });

  test("DELETE /pessoa - deve ser capaz de excluir uma pessoa", async () => {
    const pessoas = await request(app).get("/pessoa");

    const response = await request(app).delete("/pessoa/" + pessoas.body[0].id);

    expect(response.status).toBe(204);
  });
});
