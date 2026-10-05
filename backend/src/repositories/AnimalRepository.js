const Animal = require('../models/Animal.js');
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
async findByCodigoBrinco(codigo_brinco) {
return await Animal.findOne({
where: {
codigo_brinco: codigo_brinco
}
});
}
async update(id, data) {
const animal = await Animal.findByPk(id);
if (!animal) {
return null;
}
return await animal.update(data);
}
async delete(id) {
const animal = await Animal.findByPk(id);
if (!animal) {
return null;
}
return await animal.destroy();
}
async findFavoritos() {
return await Animal.findAll({
where: {
favorito: true
}
});
}
}
module.exports = new AnimalRepository();