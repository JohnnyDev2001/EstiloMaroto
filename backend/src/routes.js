const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const router = Router();
const upload = multer(uploadConfig);

const ProdutoController = require('./Controllers/produtoController');

router.get('/', ProdutoController.index);
router.get('/produtos', ProdutoController.show);
router.post('/produtos/add', upload.single('thumbnail'), ProdutoController.create);

module.exports = router;