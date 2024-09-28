const { Router } = require('express');
const { storeUsuario, loginDoador } = require('../controller/usuariodoadorController');

const router = Router();

router.post('/store/criarUsuario', storeUsuario);
router.post('/store/loginUsuario', loginDoador);


module.exports = router;
