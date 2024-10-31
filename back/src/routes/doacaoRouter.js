const { Router } = require('express');

const router = Router();

const { storeDoacao, getDoacao } = require('../controller/doacaoController');

/**
* @swagger
* /store/doacao:
*   get:
*     summary: Enviar infomacoes de doações banco de dados
*     responses:
*       200:
*         description: Manda as informacoes do card das doacoes para o banco de dados
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*/
router.post('/store/doacao', storeDoacao);

router.get('/get/doacao', getDoacao);

module.exports = router;