const Maquinario = require('../models/Maquinario');
class MaquinarioRepository {
async create(data) {
return await Maquinario.create(data);
}
async findAll() {
return await Maquinario.findAll();
}
async findById(id) {
return await Maquinario.findByPk(id);
}
async update(id, data) {
const maquinario = await Maquinario.findByPk(id);
if (!maquinario) {
return null;
}
return await maquinario.update(data);
}
async delete(id) {
const maquinario = await Maquinario.findByPk(id);
if (!maquinario) {
return null;
}
return await maquinario.destroy();
}
}
module.exports = new MaquinarioRepository();