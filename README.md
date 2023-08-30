### Teste técnico solictado pela Simbiose:

  Teste realizado para a Simbiose, onde foi solicitado a criação de CRUD para pessoas.

## Built With

- [Express](https://www.npmjs.com/package/express)
- [Express-async-errors](https://www.npmjs.com/package/express-async-errors)
- [Pg](https://www.npmjs.com/package/pg)
- [Typeorm](https://typeorm.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Jest](https://jestjs.io/pt-BR/)
- [Reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en)
  
<br>

## Começando

Estas instruções fornecerão uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.
### Pré-requisitos


- [Nodejs](https://nodejs.org/en/)
- [Git](https://git-scm.com/downloads)
- [PostgresSQL:14](https://www.postgresql.org/download/)

### Recomendado

- [Visual Studio Code](https://code.visualstudio.com/Download) - IDE

---

- **Clone o repositório**

```
git clone git@github.com:DiegoOlive29/SimbioseTeste.git
```

- **Copie as variáveis de ambientes**

```
 cp .env.exemple .env
```

- **Instale as dependencias**

```
npm install ou  yarn
```

- **Rode as Migrations**

```
npm typeorm migration:generate src/migrations/createUser -d src/data-source
ou
yarn typeorm migration:generate src/migrations/createUser -d src/data-source
```
```
npm run typeorm migration:run -d src/data-source.ts
ou
yarn typeorm migration:run -d src/data-source.ts
```

- **Inicialize a aplicação**

```
npm run dev

yarn dev
```

- **Inicialize os test**

```
npm run test

yarn test
```

## Porta: 
    A api por padrão roda na http://localhost:3000/

## Estrutura de pastas:

    Src - com todos os arquivos desenvolvidos.
        
        controllers - Funções que tem responsabilidade de pegar as informações nececssarias na requisição e chamar os services.
        
        services - Funções que de fato executam as atividade dentro da api, realizando post, get, update...
        
        interfaces - Mascaras para uso do typescript, de forma a ajuda no desenvolvimento.

        erros - Um extenção da classe de erro que permite customizar o status e a mensagem do erro.

        middlewares - Autenticações que são feitas nas rotas e no funcionamento do server .

        migrations - Migrações que forma executadas durante o desenovolvimento da aplicação.

        routes - Rotas da api.

        entities - Tabelas da api.

        __teste__ - Teste para as rotas desenvolvidas.

        @types -  Uma extenção da tipagem de Request.
