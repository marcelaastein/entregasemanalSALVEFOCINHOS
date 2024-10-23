const { Router } = require('express');
const { storeUsuario, loginDoador } = require('../controller/usuariodoadorController');

const router = Router();

/**
* @swagger
* /store/criarUsuario:
*   get:
*     summary: Cria no banco de dados o usuario de doador salvando as informações presentes nos campos
*     responses:
*       200:
*         description: Cria usuario do doador 
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/

router.post('/store/criarUsuario', storeUsuario);


/**
* @swagger
* /store/loginUsuario:
*   get:
*     summary: Busca no banco de dados o cadastro do doador para conferir as informações e fazer o login
*     responses:
*       200:
*         description: Faz login
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/


router.post('/store/loginUsuario', loginDoador);

module.exports = router;
