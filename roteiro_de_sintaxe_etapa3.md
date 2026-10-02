# 📘 Roteiro de Sintaxe: Node.js + Express + Sequelize

Este roteiro serve como uma "cola" (cheat sheet) rápida com as principais sintaxes que vocês vão precisar para desenvolver o backend do WebFarm.

---

## 1. 🔌 Sintaxes de Conexão com Banco de Dados (`database.js`)

Como configurar o arquivo que conecta o Node.js ao banco de dados usando o Sequelize.

### Com SQLite (Mais simples, não exige instalação de SGBD externo)
```javascript
const { Sequelize } = require('sequelize');

// O SQLite salva o banco num arquivo local na pasta do projeto
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' // Caminho onde o arquivo será criado
});

module.exports = sequelize;
```

### Com MySQL
```javascript
const { Sequelize } = require('sequelize');

// Passando: 'nome_do_banco', 'usuario', 'senha'
const sequelize = new Sequelize('webfarm_db', 'root', 'sua_senha', {
  host: 'localhost',
  dialect: 'mysql' 
});

module.exports = sequelize;
```

### Com PostgreSQL
```javascript
const { Sequelize } = require('sequelize');

// Usando os parâmetros separados
const sequelize = new Sequelize('webfarm_db', 'postgres', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres'
});

// OU usando uma URL de conexão (String de conexão)
// const sequelize = new Sequelize('postgres://usuario:senha@localhost:5432/webfarm_db');

module.exports = sequelize;
```

---

## 2. 📦 Sintaxes do Sequelize (Models)

Como criar os campos (colunas) das suas tabelas corretamente.

### Tipos de Dados Básicos (`DataTypes`)
```javascript
const { DataTypes } = require('sequelize');

const Exemplo = sequelize.define('Exemplo', {
  texto_curto: DataTypes.STRING,        // VARCHAR(255) - Para nomes, senhas, placas
  texto_longo: DataTypes.TEXT,          // TEXT - Para descrições longas
  numero_inteiro: DataTypes.INTEGER,    // INT - Para quantidades, idades
  numero_decimal: DataTypes.FLOAT,      // FLOAT - Para pesos, dinheiro
  booleano: DataTypes.BOOLEAN,          // TINYINT(1) - true ou false (ex: status)
  data: DataTypes.DATE,                 // DATETIME - Data e hora
  data_simples: DataTypes.DATEONLY      // DATE - Apenas data (ex: data_nascimento)
});
```

### Configurações Especiais nas Colunas
```javascript
codigo_brinco: {
  type: DataTypes.STRING,
  allowNull: false,       // Não permite ficar vazio (Obrigatório)
  unique: true,           // Não permite cadastrar dois iguais (ex: CPF, Brinco, Email)
  defaultValue: 'Ativo'   // Preenche sozinho caso não seja enviado
}
```

### Relacionamentos (Associações)
Geralmente colocados no arquivo `models/index.js` ou logo após a definição do model.
```javascript
// 1 para N (Um para Muitos) - Ex: Uma Fazenda possui vários Animais
Fazenda.hasMany(Animal);
Animal.belongsTo(Fazenda);

// 1 para 1 (Um para Um)
Usuario.hasOne(Perfil);
Perfil.belongsTo(Usuario);

// N para N (Muitos para Muitos) - Ex: Um Fornecedor vende vários Produtos, e o Produto tem vários Fornecedores
Fornecedor.belongsToMany(Produto, { through: 'FornecedorProduto' });
Produto.belongsToMany(Fornecedor, { through: 'FornecedorProduto' });
```

---

## 3. 🗄️ Sintaxes de Repositório (Consultas no Banco)

Como buscar, criar, editar e apagar dados usando os métodos prontos do Sequelize.

```javascript
// CRIAR (Insert)
const novo = await Animal.create({ nome: 'Mimosa', peso: 400 });

// BUSCAR TODOS (Select All)
const todos = await Animal.findAll();

// BUSCAR COM FILTRO (Select Where)
const bovinos = await Animal.findAll({
  where: { especie: 'Bovino' }
});

// BUSCAR APENAS UM POR ID (Select by Primary Key)
const animal = await Animal.findByPk(15);

// BUSCAR O PRIMEIRO QUE ATENDER A CONDIÇÃO
const animal = await Animal.findOne({ where: { codigo_brinco: '1234' } });

// ATUALIZAR (Update)
await Animal.update(
  { peso: 450 },                 // O que vai ser atualizado
  { where: { id: 15 } }          // Condição (Qual animal)
);

// DELETAR (Delete)
await Animal.destroy({
  where: { id: 15 }
});
```

---

## 4. 🧠 Sintaxes de Service (Regras de Negócio e Validações)

Como tratar erros e validar coisas. Geralmente dentro do método do seu Service.

```javascript
async registrarVenda(dadosDaVenda) {
  // 1. Condição IF Simples (Bloqueando erro)
  if (dadosDaVenda.valor < 0) {
    throw new Error('O valor da venda não pode ser negativo.'); // Para a execução aqui
  }

  // 2. Buscando algo para validar se existe
  const animalExiste = await AnimalRepository.findById(dadosDaVenda.animal_id);
  if (!animalExiste) {
    throw new Error('Animal não encontrado na base de dados.');
  }

  // 3. Modificando dados antes de salvar
  dadosDaVenda.data_registro = new Date();

  return await VendaRepository.create(dadosDaVenda);
}
```

---

## 5. 🌐 Sintaxes de Controller (Requisição e Resposta)

Lidando com os dados que vêm da internet (`req`) e mandando a resposta (`res`).

### Pegando dados da requisição (`req`)
```javascript
// Pegando dados enviados pelo BODY (Geralmente no POST e PUT)
// Ex JSON enviado: { "nome": "João", "idade": 30 }
const { nome, idade } = req.body; 

// Pegando dados enviados na URL como parâmetro (req.params)
// Ex URL: /animais/15
const id = req.params.id; 

// Pegando dados enviados na URL como query (req.query)
// Ex URL: /animais?especie=bovino
const especieBuscada = req.query.especie; 
```

### Retornando a resposta (`res`)
```javascript
// Retornar Sucesso e o Dado criado (Status 201 = Created)
return res.status(201).json(novoAnimal);

// Retornar Sucesso de uma listagem ou busca (Status 200 = OK)
return res.status(200).json(lista);

// Retornar Erro de Regra de Negócio/Validação (Status 400 = Bad Request)
return res.status(400).json({ erro: 'Idade inválida' });

// Retornar Erro quando algo não for encontrado (Status 404 = Not Found)
return res.status(404).json({ erro: 'Animal não existe' });

// Retornar Erro Geral do Servidor (Status 500 = Internal Server Error)
return res.status(500).json({ erro: 'Erro interno no banco de dados' });
```

---

## 6. 🛣️ Sintaxes de Rotas (Express)

Como conectar os URLs da sua API com o Controller.

```javascript
const express = require('express');
const router = express.Router();
const Controller = require('../controllers/SeuController');

// CREATE: POST - Usado para cadastrar algo novo
router.post('/animais', Controller.cadastrar);

// READ: GET - Usado para listar ou buscar dados
router.get('/animais', Controller.listarTodos);
router.get('/animais/:id', Controller.buscarPorId); // :id vira req.params.id no Controller

// UPDATE: PUT - Usado para atualizar todos os dados de um item
router.put('/animais/:id', Controller.atualizar);

// DELETE: DELETE - Usado para apagar um item
router.delete('/animais/:id', Controller.deletar);

module.exports = router;
```
