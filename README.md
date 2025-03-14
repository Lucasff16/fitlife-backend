# FitLife Backend

API RESTful para a aplicação FitLife, desenvolvida com Node.js, Express e MongoDB.

## Tecnologias Utilizadas

- Node.js v18.20.7
- Express.js
- MongoDB Atlas com Mongoose
- JWT para autenticação
- Bcrypt para criptografia de senhas

## Estrutura do Projeto

```
backend/
├── config/         # Configurações da aplicação
├── controllers/    # Controladores da API
├── middleware/     # Middlewares personalizados
├── models/         # Modelos de dados (Mongoose)
├── routes/         # Rotas da API
├── services/       # Serviços de negócio
├── utils/          # Utilitários
├── .env            # Variáveis de ambiente (não versionado)
├── .env.example    # Exemplo de variáveis de ambiente
├── server.js       # Ponto de entrada da aplicação
└── package.json    # Dependências e scripts
```

## Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Iniciar servidor em modo desenvolvimento
npm run dev

# Iniciar servidor em modo produção
npm start
```

## Scripts Disponíveis

- `npm start`: Inicia o servidor em modo produção
- `npm run dev`: Inicia o servidor com nodemon para desenvolvimento
- `npm run check-versions`: Verifica as versões das dependências

## API Endpoints

### Autenticação
- `POST /api/auth/register`: Registrar novo usuário
- `POST /api/auth/login`: Login de usuário

### Usuários
- `GET /api/users/profile`: Obter perfil do usuário autenticado
- `PUT /api/users/profile`: Atualizar perfil do usuário

### Treinos
- `GET /api/workouts`: Listar todos os treinos
- `GET /api/workouts/:id`: Obter treino específico
- `POST /api/workouts`: Criar novo treino
- `PUT /api/workouts/:id`: Atualizar treino
- `DELETE /api/workouts/:id`: Excluir treino

## Licença

MIT