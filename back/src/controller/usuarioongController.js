// Carrega as configurações do banco de dados.
const connection = require('../config/db');

// Carrega as configurações do arquivo .env.
const dotenv = require('dotenv').config();

// Função que salva uma ONG no banco de dados.
async function storeOng(request, response) {

    // Pega as informações enviadas pelo usuário (nome, email, cidade, senha) e coloca em uma lista.
    const params = [
        request.body.nome,   // Nome da ONG.
        request.body.email,  // Email da ONG.
        request.body.cidade, // Cidade onde a ONG está localizada.
        request.body.senha,  // Senha da ONG.
    ];

    // Escreve o comando para salvar esses dados na tabela de ONGs do banco de dados.
    const query = 'INSERT INTO usuarioong(nome,email,cidade,senha) VALUES(?,?,?,?)';

    // Faz a operação de salvar no banco de dados.
    connection.query(query, params, (err, results) => {
        if (results) {
            // Se deu certo, responde para o usuário que o cadastro foi realizado com sucesso.
            response.status(201).json({
                success: true,
                message: "Sucesso!", // Mensagem de sucesso.
                data: results         // Retorna os detalhes do que foi salvo.
            });
        } else {
            // Se deu errado, responde que houve um problema.
            response.status(400).json({
                success: false,
                message: "Ops, deu problema!", // Mensagem de erro.
                data: err                     // Retorna o erro que aconteceu.
            });
        }
    });
}

// Função que verifica o login de uma ONG.
async function ongLogin(request, response) {

    // Pega o email e a senha enviados pela ONG e coloca em uma lista.
    const params = [
        request.body.email, // Email da ONG.
        request.body.senha  // Senha da ONG.
    ];
    
    // Escreve o comando para buscar a ONG com o email e a senha informados no banco de dados.
    const query = "SELECT * FROM usuarioong WHERE email = ? AND senha = ?";

    // Faz a operação de buscar no banco de dados.
    connection.query(query, params, (err, results) => {
        if (results && results.length > 0) {
            // Se encontrou a ONG, responde que o login foi bem-sucedido.
            response.status(200).json({
                success: true,
                message: "Sucesso no Login!", // Mensagem de sucesso.
                data: results                 // Retorna os detalhes da ONG encontrada.
            });
        } else {
            // Se não encontrou ou deu erro, responde que houve um problema no login.
            response.status(400).json({
                success: false,
                message: "Problema no Login!", // Mensagem de erro.
                data: err                      // Retorna o erro que aconteceu.
            });
        }
    });
}

// Exporta as funções 'storeOng' e 'ongLogin' para que possam ser usadas em outros arquivos do projeto.
module.exports = {
    storeOng,
    ongLogin
};
