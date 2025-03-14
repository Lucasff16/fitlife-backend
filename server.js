require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Inicialização do app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Logging em desenvolvimento
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rota básica
app.get('/', (req, res) => {
  res.json({ message: 'Bem-vindo à API do FitLife!' });
});

// Rotas da API (a serem implementadas)
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/workouts', require('./routes/workouts'));

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Erro no servidor' : err.message
  });
});

// Inicialização do servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em ${process.env.NODE_ENV} na porta ${PORT}`);
});