# PARA RODAR O PROJETO

## Requisitos

- Ter o Node instalado
- Ter o nmp instalado (gerenciador de pacotes)

## Informações

- Database: Banco de Dados em PostgreSQL (PSQL), sistema gerenciador de banco de dados relacional de código aberto, altamente confiável e escalável. Ele é amplamente utilizado em projetos web e aplicativos empresariais devido à sua capacidade de lidar com grandes volumes de dados e sua conformidade com os padrões SQL.

- Arquivo .env: Existe um arquivo **.env.example** na pasta matriz do projeto com 2 variáveis de ambiente dentro dele:

  - **DATABASE_URL = "postgres://(user):(password)@(host):(port)/(database)?schema=public"**
  - **SECRET_KEY =**

  este arqivo deve-se transformar-se em **.env** e deve-se substituir as informações entre **( )**, com as informações do psql do desenvolverdor

## Fazer os seguintes comandos

npm install (para instalar dependencias)

npx prisma migrate dev (para rodar as migrations)

npm run start:dev (para iniciar o servidor)

## Documentação:

**Url**: `http://localhost:3000/api`

## Endpoints:

| Método | Endpoint      | Responsabilidade             | Autenticação                          |
| ------ | ------------- | ---------------------------- | ------------------------------------- |
| POST   | /login        | Gera o token de autenticação | Qualquer usuário, não necessita token |
| GET    | /users/logged | Retornar usuário logado      | Qualquer usuário, obrigatório token   |
| POST   | /users        | Criação de usuário           | Qualquer usuário, não necessita token |
| GET    | /users        | Lista todos os usuários      | Qualquer usuário, obrigatório token   |
| PATCH  | /users/:id    | Atualiza um usuário          | Obrigatório token e dono da conta     |
| DELETE | /users/:id    | Deletar usuário              | Obrigatório token e dono da conta     |
| POST   | /contacts     | Criação de contato           | Qualquer usuário, obrigatório token   |
| GET    | /contacts     | Lista todos os contatos      | Qualquer usuário, obrigatório token   |
| GET    | /contacts/:id | Retornar contato             | Qualquer usuário, obrigatório token   |
| PATCH  | /contacts/:id | Atualiza um contato          | Obrigatório token e dono do contato   |
| DELETE | /contacts/:id | Deletar contato              | Obrigatório token e dono do contato   |

### **POST - /login**

Rota de login do usuário.

**Url da requisição**: `http://localhost:3000/login`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
  "email": "rafael@email.com",
  "password": "123456"
}
```

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhZmFlbEBlbWFpbC5jb20iLCJpYXQiOjE2OTAzMTU1MzIsImV4cCI6MTY5MDkyMDMzMiwic3ViIjoiYTk1NWRjZDctMDQxNS00MzQ3LTgxMDEtYjdkNTJmNzM0ODFjIn0.czMWiRh1AeEyYyv-k-iCTAUlt8uLTbieKHrEtBm8xlA"
}
```

### **GET - /users/logged**

Rota de listagem de usuário logado.

**Url da requisição**: `http://localhost:3000/users/logged`

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
  "createdAt": "04/08/2023 10:39:43",
  "id": 2,
  "name": "Rafael",
  "email": "rafael@email.com",
  "phone": "712222-9999"
}
```

### **POST - /users**

Rota de criação de usuário.

**Url da requisição**: `http://localhost:3000/users`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
  "name": "Rafael",
  "email": "rafael@email.com",
  "phone": "719999-9999",
  "password": "123456"
}
```

| Resposta do servidor:                               |
| --------------------------------------------------- |
| Body: Formato Json                                  |
| Status code: <b style="color:green">201 CREATED</b> |

```json
{
  "createdAt": "04/08/2023 10:39:43",
  "id": 2,
  "name": "Rafael",
  "email": "rafael@email.com",
  "phone": "712222-9999"
}
```

### **GET - /users**

Rota de listagem de todos usuários.

**Url da requisição**: `http://localhost:3000/users`

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
[
	{
		"createdAt": "04/08/2023 21:21:00",
		"id": 2,
		"name": "Rafael",
		"email": "rafael@email.com",
		"phone": "716666-9999"
	},
	{
		"createdAt": "05/08/2023 08:02:00",
		"id": 3,
		"name": "Silvia",
		"email": "silvia@email.com",
		"phone": "715555-9999"
	},
	{
		"createdAt": "05/08/2023 08:03:32",
		"id": 4,
		"name": "Pedro",
		"email": "pedro@email.com",
		"phone": "714444-9999"
	}
]
```

### **PATCH - /users/:id**

Atualizar o úsuário dono da conta pelo id recebido nos parâmetros da rota.

**Url da requisição**: `http://localhost:3000/users/3`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
  "name": "Silvia Helena",
  "phone": "71 6666-5555"
}
```

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{ 
  "createdAt": "05/08/2023 08:02:00",
  "id": 3,
  "name": "Silvia Helena",
  "email": "silvia@email.com",
  "phone": "71 6666-5555",
}
```

### **DELETE - /users/:id**

Deletar o úsuário dono da conta pelo id recebido nos parâmetros da rota.

**Url da requisição**: `http://localhost:3000/users/3`

| Resposta do servidor:                                  |
| ------------------------------------------------------ |
| Body: **Nenhum body deve ser retornado**               |
| Status code: <b style="color:green">204 NO CONTENT</b> |

```json

```

### **POST - /contacts**

Rota de criação de contato.

**Url da requisição**: `http://localhost:3000/contacts`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
  "name": "Fernanda",
  "email": "fernanda@email.com",
  "phone": "717777-9999"
}
```

| Resposta do servidor:                               |
| --------------------------------------------------- |
| Body: Formato Json                                  |
| Status code: <b style="color:green">201 CREATED</b> |

```json
{
  "id": 1,
  "name": "Fernanda",
  "email": "fernanda@email.com",
  "phone": "717777-9999",
  "createdAt": "04/08/2023 19:50:42",
	"userId": 3
}
```

### **GET - /contacts**

Rota de listagem de todos os contatos do usuário.

**Url da requisição**: `http://localhost:3000/contacts`

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
[
	{
		"id": 3,
		"name": "Alex",
		"email": "alex@email.com",
		"phone": "713333-9999",
		"createdAt": "05/08/2023 08:16:22",
		"userId": 3
	},
	{
		"id": 4,
		"name": "Bia",
		"email": "bia@email.com",
		"phone": "713333-9999",
		"createdAt": "05/08/2023 08:16:34",
		"userId": 3
	},
	{
		"id": 2,
		"name": "Erika",
		"email": "erika@email.com",
		"phone": "714444-9999",
		"createdAt": "05/08/2023 08:15:58",
		"userId": 3
	}
]
```

### **GET - /contacts/:id**

Rota de listagem de contato do usuário por id.

**Url da requisição**: `http://localhost:3000/contacts/3`

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
	"id": 3,
	"name": "Alex",
	"email": "alex@email.com",
	"phone": "713333-9999",
	"createdAt": "05/08/2023 08:16:22",
	"userId": 3
}
```

### **PATCH - /contacts/:id**

Atualizar o contato do úsuário, id recebido nos parâmetros da rota.

**Url da requisição**: `http://localhost:3000/contacts/3`

| Dados de Envio:    |
| ------------------ |
| Body: Formato Json |

```json
{
	"email": "alexinho@email.com",
  "phone": "71 6666-9999"
}
```

| Resposta do servidor:                          |
| ---------------------------------------------- |
| Body: Formato Json                             |
| Status code: <b style="color:green">200 OK</b> |

```json
{
	"id": 3,
	"name": "Alex",
	"email": "alexinho@email.com",
	"phone": "71 6666-9999",
	"createdAt": "05/08/2023 08:16:22",
	"userId": 3
}
```

### **DELETE - /contacts/:id**

Deletar contato do úsuário, id recebido nos parâmetros da rota.

**Url da requisição**: `http://localhost:3000/contacts/3`

| Resposta do servidor:                                  |
| ------------------------------------------------------ |
| Body: **Nenhum body deve ser retornado**               |
| Status code: <b style="color:green">204 NO CONTENT</b> |

```json

```
