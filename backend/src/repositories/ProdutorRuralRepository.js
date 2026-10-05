const ProduepostorytorRural = require('../repositories/ProdutorRural.js');
class ProdutorRuralRepository {
async create(data) {
return await ProdutorRural.create(data);
}
async findAll() {
return await ProdutorRural.findAll();
}
async findById(id) {
return await ProdutorRural.findByPk(id);
}
async findByEmail(email) {
return await ProdutorRural.findOne({
where: {
email: email
}
});
}
async update(id, data) {
const usuario = await ProdutorRural.findByPk(id);
if (!usuario) {
return null;
}
return await produtorRural.update(data);
}
async delete(id) {
const usuario = await Usuario.findByPk(id);
if (!usuario) {
return null;
}
return await usuario.destroy();
}
}
module.exports = new UsuarioRepository();