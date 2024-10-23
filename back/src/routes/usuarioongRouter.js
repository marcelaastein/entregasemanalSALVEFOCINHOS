const { Router } = require('express');
const { storeOng, ongLogin } = require('../controller/usuarioongController');

const router = Router();

/**
* @swagger
* /store/ong:
*   get:
*     summary: Cria usuario da ONG 
*     responses:
*       200:
*         description:  Cria no banco de dados o usuario da ONG salvando as informações presentes nos campos 
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/store/ong', storeOng);

/**
* @swagger
* /login/ong:
*   get:
*     summary: Busca no banco de dados o cadastro da ONG para conferir as informações e fazer o login
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

router.post('/login/ong', ongLogin);

module.exports = router;
