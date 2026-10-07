const app = require('./src/app');
const sequelize = require('./src/config/database');
require('./src/models');

const PORT = 3000;

async function iniciarServidor() {
    try {
        await sequelize.authenticate();

        await sequelize.sync({ alter: true });

        console.log('Banco de dados sincronizado com sucesso!');

        app.listen(PORT, () => {
            console.log(`Servidor rodando em http://localhost:${PORT}`);
        });

    } catch (erro) {
        console.error('Erro ao iniciar o servidor:', erro);
    }
}

iniciarServidor();
