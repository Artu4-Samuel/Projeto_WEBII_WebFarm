# 💻 Exemplos de Código da Etapa 3

Este arquivo contém exemplos práticos de como implementar cada uma das camadas da arquitetura proposta para a Etapa 3 (Database, Models, Repositories, Services, Controllers e Routes). 

Esses códigos servem como base para a entidade **Animal**, você pode copiar e adaptar para as demais entidades (Fazenda, Usuário, Fornecedor, etc).

---

## 1. Banco de Dados (`src/config/database.js`)
Configuração para conectar ao banco de dados SQLite usando Sequelize.

```javascript
const { Sequelize } = require('sequelize');

// Opção 1: SQLite (Mais simples para começar, salva num arquivo local)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

/* Opção 2: MySQL ou PostgreSQL (Caso queira usar um SGBD robusto)
const sequelize = new Sequelize('webfarm_db', 'usuario', 'senha', {
  host: 'localhost',
  dialect: 'mysql' // ou 'postgres'
});
*/

module.exports = sequelize;
```

---

## 2. Entidade/Model (`src/models/Animal.js`)
Mapeando a tabela Animal.

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animal = sequelize.define('Animal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo_brinco: {
    type: DataTypes.STRING,
    allowNull: false, // RN016: Código obrigatório
    unique: true
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  peso: {
    type: DataTypes.FLOAT
  }
});

module.exports = Animal;
```

---

## 3. Repositório (`src/repositories/AnimalRepository.js`)
Isolando as consultas ao banco.

```javascript
const Animal = require('../models/Animal');

class AnimalRepository {
  async create(data) {
    return await Animal.create(data);
  }

  async findAll() {
    return await Animal.findAll();
  }

  async findById(id) {
    return await Animal.findByPk(id);
  }
}

module.exports = new AnimalRepository();
```

---

## 4. Service (`src/services/AnimalService.js`)
Onde fica a inteligência e as regras de negócio.

```javascript
const AnimalRepository = require('../repositories/AnimalRepository');

class AnimalService {
  async criarAnimal(dados) {
    // RN016: Validação de código obrigatório
    if (!dados.codigo_brinco) {
      throw new Error('O código de identificação (brinco) é obrigatório.');
    }

    if (dados.peso < 0) {
      throw new Error('O peso não pode ser negativo.');
    }

    // Se tudo estiver certo, manda salvar no banco
    return await AnimalRepository.create(dados);
  }
}

module.exports = new AnimalService();
```

---

## 5. Controller (`src/controllers/AnimalController.js`)
Tratando a Requisição e Resposta do usuário.

```javascript
const AnimalService = require('../services/AnimalService');

class AnimalController {
  async cadastrar(req, res) {
    try {
      const dadosAnimal = req.body;
      const novoAnimal = await AnimalService.criarAnimal(dadosAnimal);
      
      // Retorna sucesso (201 Created)
      return res.status(201).json(novoAnimal);
    } catch (error) {
      // Retorna o erro da regra de negócio do Service (400 Bad Request)
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new AnimalController();
```

---

## 6. Rotas (`src/routes/animalRoutes.js`)
Ligando a URL à função do Controller.

```javascript
const express = require('express');
const router = express.Router();
const AnimalController = require('../controllers/AnimalController');

// Rota para cadastrar animal (POST /animais)
router.post('/', AnimalController.cadastrar);

module.exports = router;
```

---

## 7. Servidor Principal (`src/server.js`)
Onde o projeto todo é juntado e inicializado.

```javascript
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const animalRoutes = require('./routes/animalRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // Permite receber JSON no body

// Cadastrando as rotas
app.use('/animais', animalRoutes);

// Sincronizando o banco e subindo o servidor
sequelize.sync().then(() => {
  console.log('Banco de dados conectado e sincronizado.');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 (http://localhost:3000)');
  });
}).catch(err => {
  console.error('Erro ao conectar ao banco:', err);
});
```

---

## 8. Teste no Postman
Para testar o cadastro via Postman:

- **URL:** `http://localhost:3000/animais`
- **Método:** `POST`
- **Body (Selecione raw e JSON):**
```json
{
  "codigo_brinco": "BR-1001",
  "especie": "Bovino",
  "peso": 450.5
}
```
