const express = require('express');
const router = express.Router();

const movies_controller = require('../controllers/movies_controller')

router.post('/create', movies_controller.movieCreate);
router.get('/list', movies_controller.movieList);
router.get('/get/:id', movies_controller.movieGet);
router.put('/delete/:id', movies_controller.movieDelete);
router.put('/update/:id', movies_controller.movieUpdate);

module.exports = router;