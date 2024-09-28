const { Router } = require('express');

const router = Router();

const { storeDoacao } = require('../controller/doacaoController');

router.post('/store/doacao', storeDoacao);

module.exports = router;