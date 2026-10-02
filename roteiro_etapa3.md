# 🗺️ Roteiro de Desenvolvimento: Etapa 3 - Backend & Banco de Dados

A recomendação para esta etapa é usar o **Sequelize** como ORM (ferramenta que traduz o código JavaScript para comandos SQL). A arquitetura exigida divide as responsabilidades em: `Routes -> Controller -> Service -> Repository -> Model -> Database`.

---

## Passo 1: Configuração Inicial do Projeto e Banco de Dados
**O que fazer:** Preparar o ambiente Node.js, instalar as bibliotecas necessárias e configurar a conexão com o banco.

**Como fazer:**
1. No terminal da pasta do backend, inicie o projeto (se não tiver feito): `npm init -y`
2. Instale o Sequelize e o driver do banco de dados (recomendo usar o SQLite pela facilidade de não precisar instalar um servidor externo agora, ou PostgreSQL/MySQL se preferirem): 
   `npm install sequelize sqlite3 express cors dotenv`
3. Crie o arquivo `.env` para as variáveis de ambiente (ex: porta do servidor, string de conexão).
4. Crie a pasta `src/config/` e adicione o arquivo `database.js` para inicializar a conexão do Sequelize com o banco.

---

## Passo 2: Criação dos Models (Entidades)
**O que fazer:** Mapear as tabelas do diagrama MER que fizemos (Usuário/Funcionário, Animal, Operação Financeira, etc.) para código JavaScript.

**Como fazer:**
1. Crie a pasta `src/models/`.
2. Para cada entidade, crie um arquivo (ex: `Animal.js`, `Usuario.js`).
3. Use o `sequelize.define` para criar o Model, definindo as colunas (ex: `nome: DataTypes.STRING`, `peso: DataTypes.FLOAT`).
4. **Relacionamentos:** Em um arquivo central (ex: `index.js` na pasta models), defina as relações (ex: `Fazenda.hasMany(Animal)`, `Animal.belongsTo(Fazenda)`).

---

## Passo 3: Criação da Camada Repository (Acesso a Dados)
**O que fazer:** Isolar os comandos de banco de dados (CRUD) do restante da aplicação. Essa camada só fala com os Models.

**Como fazer:**
1. Crie a pasta `src/repositories/`.
2. Crie arquivos como `AnimalRepository.js`.
3. Crie funções assíncronas que chamam os métodos do Sequelize:
   - `create(data)` -> usa `Animal.create(data)`
   - `findAll()` -> usa `Animal.findAll()`
   - `findById(id)` -> usa `Animal.findByPk(id)`
   - `update(id, data)` -> usa `Animal.update()`
   - `delete(id)` -> usa `Animal.destroy()`

---

## Passo 4: Criação da Camada Service (Regras de Negócio e Validações)
**O que fazer:** Onde a "inteligência" fica. É aqui que validamos se os dados estão corretos antes de salvar e aplicamos as regras de negócio (RNs do documento de requisitos).

**Como fazer:**
1. Crie a pasta `src/services/`.
2. Crie arquivos como `AnimalService.js`.
3. Exemplo de regra: Antes de chamar `AnimalRepository.create(dados)`, o Service deve verificar: *"O animal tem o código do brinco preenchido?"* (RN016). Se não tiver, o Service lança um Erro. *"A venda tem valor negativo?"*. Se tiver, lança Erro. Se tudo estiver certo, o Service repassa os dados para o Repository salvar.

---

## Passo 5: Criação da Camada Controller
**O que fazer:** Receber as requisições (HTTP) do frontend (ou Postman), repassar para o Service e devolver a resposta (JSON).

**Como fazer:**
1. Crie a pasta `src/controllers/`.
2. Crie arquivos como `AnimalController.js`.
3. Crie funções (ex: `cadastrarAnimal(req, res)`).
4. O Controller pega os dados do `req.body`, manda para o `AnimalService`. Se der certo, retorna `res.status(201).json(resultado)`. Se o Service jogar um erro (ex: brinco vazio), o Controller pega no `catch` e devolve `res.status(400).json({ erro: '...' })`.

---

## Passo 6: Criação das Rotas (Routes) e Servidor
**O que fazer:** Conectar URLs específicas aos Controllers e subir o servidor.

**Como fazer:**
1. Crie a pasta `src/routes/`.
2. Crie arquivos como `animalRoutes.js` usando o `express.Router()`.
3. Defina os caminhos: `router.post('/', AnimalController.cadastrarAnimal)`.
4. No arquivo principal (ex: `src/server.js` ou `src/app.js`), importe as rotas, o banco de dados (mande sincronizar as tabelas com `sequelize.sync()`) e use o `app.listen(3000)` para rodar.

---

## Passo 7: Testes e Validação
**O que fazer:** Garantir que o CRUD está funcionando e as regras de negócio estão sendo aplicadas.

**Como fazer:**
1. Abra o Postman (ou Insomnia).
2. Tente fazer requisições POST, GET, PUT e DELETE para suas rotas.
3. Tente forçar um erro (ex: mandar um dado inválido) para ver se a camada Service está barrando corretamente.

---

### Resumo da Arquitetura
`Postman/Frontend` ➡️ **Route** (URL) ➡️ **Controller** (Recebe e Responde) ➡️ **Service** (Valida RNs) ➡️ **Repository** (Monta SQL via ORM) ➡️ **Model** ➡️ `Banco de Dados`
