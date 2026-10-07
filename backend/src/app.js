const express = require("express");
const cors = require("cors");
const {
    Animal,
    Fazenda,
    Fornecedor,
    Funcionario,
    Manutencao,
    Maquinario,
    ProducaoAgricola,
    ProdutorRural,
    Veiculo,
    VacinacaoAnimal
} = require("./models");

const app = express();

app.use(cors());
app.use(express.json());

// PRODUTORES RURAIS
app.get("/produtores", async (req, res) => {
    try {
        const produtores = await ProdutorRural.findAll();

        res.json(produtores);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar os produtores rurais."
        });
    }
});

app.post("/produtores", async (req, res) => {
    try {
        const novoProdutor = await ProdutorRural.create(req.body);

        res.status(201).json({
            mensagem: "Produtor rural cadastrado com sucesso!",
            produtor: novoProdutor
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar o produtor rural.",
            erro: erro.message
        });
    }
});

// FAZENDAS
app.post("/fazendas", async (req, res) => {
    try {
        const novaFazenda = await Fazenda.create(req.body);

        res.status(201).json({
            mensagem: "Fazenda cadastrada com sucesso!",
            fazenda: novaFazenda
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar a fazenda.",
            erro: erro.message
        });
    }
});

// ANIMAIS
app.get("/animais", async (req, res) => {
    try {
        const animais = await Animal.findAll();

        res.json(animais);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar os animais."
        });
    }
});

app.post("/animais", async (req, res) => {
    try {
        const novoAnimal = await Animal.create(req.body);

        res.status(201).json({
            mensagem: "Animal cadastrado com sucesso!",
            animal: novoAnimal
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar o animal.",
            erro: erro.message
        });
    }
});

// FUNCIONÁRIOS
app.get("/funcionarios", async (req, res) => {
    try {
        const funcionarios = await Funcionario.findAll();

        res.json(funcionarios);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar os funcionários."
        });
    }
});

app.post("/funcionarios", async (req, res) => {
    try {
        const novoFuncionario = await Funcionario.create(req.body);

        res.status(201).json({
            mensagem: "Funcionário cadastrado com sucesso!",
            funcionario: novoFuncionario
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar o funcionário.",
            erro: erro.message
        });
    }
});

// FAZENDA
app.get("/fazendas", async (req, res) => {
    try {
        const fazendas = await Fazenda.findAll();

        res.json(fazendas);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar as fazendas."
        });
    }
});

app.post("/fazendas", async (req, res) => {
    try {
        const novaFazenda = await Fazenda.create(req.body);

        res.status(201).json({
            mensagem: "Fazenda cadastrada com sucesso!",
            fazenda: novaFazenda
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar a fazenda.",
            erro: erro.message
        });
    }
});

// FORNECEDORES
app.get("/fornecedores", async (req, res) => {
    try {
        const fornecedores = await Fornecedor.findAll();

        res.json(fornecedores);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar os fornecedores."
        });
    }
});

app.post("/fornecedores", async (req, res) => {
    try {
        const novoFornecedor = await Fornecedor.create(req.body);

        res.status(201).json({
            mensagem: "Fornecedor cadastrado com sucesso!",
            fornecedor: novoFornecedor
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar o fornecedor.",
            erro: erro.message
        });
    }
});

// MAQUINÁRIOS
app.get("/maquinarios", async (req, res) => {
    try {
        const maquinarios = await Maquinario.findAll();

        res.json(maquinarios);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar os maquinários."
        });
    }
});

app.post("/maquinarios", async (req, res) => {
    try {
        const novoMaquinario = await Maquinario.create(req.body);

        res.status(201).json({
            mensagem: "Maquinário cadastrado com sucesso!",
            maquinario: novoMaquinario
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar o maquinário.",
            erro: erro.message
        });
    }
});

// VEÍCULOS
app.get("/veiculos", async (req, res) => {
    try {
        const veiculos = await Veiculo.findAll();

        res.json(veiculos);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar os veículos."
        });
    }
});

app.post("/veiculos", async (req, res) => {
    try {
        const novoVeiculo = await Veiculo.create(req.body);

        res.status(201).json({
            mensagem: "Veículo cadastrado com sucesso!",
            veiculo: novoVeiculo
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar o veículo.",
            erro: erro.message
        });
    }
});

// PRODUÇÃO AGRÍCOLA
app.get("/producoes", async (req, res) => {
    try {
        const producoes = await ProducaoAgricola.findAll();

        res.json(producoes);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar as produções agrícolas."
        });
    }
});

app.post("/producoes", async (req, res) => {
    try {
        const novaProducao = await ProducaoAgricola.create(req.body);

        res.status(201).json({
            mensagem: "Produção agrícola cadastrada com sucesso!",
            producao: novaProducao
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar a produção agrícola.",
            erro: erro.message
        });
    }
});

// MANUTENÇÕES
app.get("/manutencoes", async (req, res) => {
    try {
        const manutencoes = await Manutencao.findAll();

        res.json(manutencoes);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar as manutenções."
        });
    }
});

app.post("/manutencoes", async (req, res) => {
    try {
        const novaManutencao = await Manutencao.create(req.body);

        res.status(201).json({
            mensagem: "Manutenção cadastrada com sucesso!",
            manutencao: novaManutencao
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar a manutenção.",
            erro: erro.message
        });
    }
});

// VACINAÇÃO ANIMAL
app.get("/vacinacoes", async (req, res) => {
    try {
        const vacinacoes = await VacinacaoAnimal.findAll();

        res.json(vacinacoes);
    } catch (erro) {
        console.error(erro);

        res.status(500).json({
            mensagem: "Erro ao buscar as vacinações."
        });
    }
});

app.post("/vacinacoes", async (req, res) => {
    try {
        const novaVacinacao = await VacinacaoAnimal.create(req.body);

        res.status(201).json({
            mensagem: "Vacinação cadastrada com sucesso!",
            vacinacao: novaVacinacao
        });
    } catch (erro) {
        console.error(erro);

        res.status(400).json({
            mensagem: "Erro ao cadastrar a vacinação.",
            erro: erro.message
        });
    }
});

// VENDAS?

module.exports = app;
