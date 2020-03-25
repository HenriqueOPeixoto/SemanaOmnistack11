const connection = require('../database/connection');
// Gera strings aleatórias para id das ongs
const crypto = require('crypto');

module.exports = {
    // index lista elementos de um DB
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async create(request, response) {
        const {name, email, whatsapp, city, uf} = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
                
        // Retorna uma resposta JSON ao haver request
        return response.json({id});
    }
}