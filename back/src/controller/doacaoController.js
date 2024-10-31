// Carrega as configurações do banco de dados.
const connection = require('../config/db');

// Carrega as configurações do arquivo .env.
const dotenv = require('dotenv').config();

// Função que salva uma doação no banco de dados.
async function storeDoacao(request, response) {

    // Pega as informações enviadas pelo usuário (como ONG, nome, email, e produto) e coloca em uma lista.
    const params = Array(
        request.body.ong,          // Nome da ONG que vai receber a doação.
        request.body.email,         // Email da pessoa que está doando.
        request.body.produto,       // Produto que está sendo doado.
    );

    // Escreve o comando para salvar esses dados na tabela de doações no banco de dados.
    const query = 'INSERT INTO doacoes(ong,email,produto) VALUES(?,?,?)';

    // Faz a operação de salvar no banco de dados.
    connection.query(query, params, (err, results) => {
        if (results) {
            // Se deu certo, responde para o usuário que a doação foi salva com sucesso.
            response
                .status(201)
                .json({
                    success: true,
                    message: "Sucesso!", // Mensagem de sucesso.
                    data: results         // Retorna os detalhes do que foi salvo.
                });
        } else {
            // Se deu errado, responde que houve um problema.
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!", // Mensagem de erro.
                    data: err                     // Retorna o erro que aconteceu.
                });
        }
    });
}

async function getDoacao(request, response) {
    const query = 'SELECT * FROM doacoes';

    connection.query(query, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Sucesso!",
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Ops, deu problema!",
                    data: err
                });
        }
    });
}


// Exporta a função 'storeDoacao' para que ela possa ser usada em outros arquivos do projeto.
module.exports = {
    storeDoacao,
    getDoacao
};