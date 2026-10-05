const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Dados de exemplo
let animais = [
    { id: 1, nome: "Mimosa", especie: "Bovino", raca: "Nelore" }
];
let funcionarios = [
    { id: 1, nome: "José", cargo: "Vaqueiro" }
];

let vendas = [
    { id: 1, comprador: "Mercado Rural", valor: 5000 }
];

let fazenda = {
    nome: "fazenda AACDJ",
    proprietario: "Administrador",
    area: "250 hectares",
    localizacao: "Paraíba"
};

// ANIMAIS
app.get("/animais", (req, res) => {
    res.json(animais);
});

app.post("/animais",(reg,res) => {
    const novoAnimal = {
        id: animais.length + 1,
        nome: req.body.nome,
        especie: req.body.especie,
        raca: req.body.raca
    };

    animais.push(novoAnimal);

    res.status(201).json({
        mensagem: "Animal cadastrado com sucesso!",
        animal: novoAnimal
    });
});

// FUNCIONÁRIOS
app.get("/funcionarios", (req, res) => {
    res.json(funcionarios);
});

app.post("/funcionarios", (req, res) => {

    const novoFuncionario = {
        id: funcionarios.length + 1,
        nome: req.body.nome,
        cargo: req.body.cargo
    };

    funcionarios.push(novoFuncionario);

    res.status(201).json({
        mensagem: "Funcionário cadastrado com sucesso!",
        funcionario: novoFuncionario
    });

});

// FAZENDA
app.get("/fazenda", (req, res) => {
    res.json(fazenda);
});

app.post("/fazenda", (req, res) => {

    fazenda = {
        nome: req.body.nome,
        proprietario: req.body.proprietario,
        area: req.body.area,
        localizacao: req.body.localizacao
    };

    res.status(201).json({
        mensagem: "Dados da fazenda atualizados!",
        fazenda
    });

});



// VENDAS
app.get("/vendas", (req, res) => {
    res.json(vendas);
});

app.post("/vendas", (req, res) => {

    const novaVenda = {
        id: vendas.length + 1,
        comprador: req.body.comprador,
        valor: req.body.valor
    };

    vendas.push(novaVenda);

    res.status(201).json({
        mensagem: "Venda cadastrada com sucesso!",
        venda: novaVenda
    });

});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
