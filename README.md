-->

# Projeto API NestJS com TypeORM

Este projeto consiste em uma API desenvolvida para o cadastro de cursos, empregando as tecnologias do framework NestJS e do TypeORM. Além disso, é integrado com a ferramenta Swagger para oferecer documentação automática, proporcionando uma experiência mais eficiente e transparente na exploração e compreensão dos endpoints da API.

## Instalação

1. Clone este repositório:

```bash
git clone git@github.com:DavidJRRJ/api-course.git
```

2. Entre na pasta do projeto:

```bash
cd api-courses
```

3. Em seguida, instale as dependências:

```bash
pnpm install
```

4. Copie o arquivo de exemplo .env.example para .env e configure as variáveis de ambiente:

```bash
cp .env.example .env
```

5. Inicie os containers Docker:

```bash
docker compose up -d
```

6. Execute as migrações do TypeORM para criar as tabelas no banco de dados:

```bash
npx typeorm migration:run -d dist/src/database/orm-cli-config.js
```

## Execução

Execute um dos comandos abaixo para executar o projeto:

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## Testes

```bash
# Testes unitários
$ pnpm run test

# testes e2e
$ pnpm run test:e2e
```

## Documentação Swagger

```bash
http://localhost:3000/api
```
