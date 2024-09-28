const { Router } = require('express');
const { storeOng, ongLogin } = require('../controller/usuarioongController');

const router = Router();

router.post('/store/ong', storeOng);
router.post('/login/ong', ongLogin);

module.exports = router;
