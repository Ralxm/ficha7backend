const express = require('express');
const router = express.Router();

const genre_controller = require('../controllers/genre_controller');

router.post('/create', genre_controller.genreCreate);
router.get('/list', genre_controller.genreList);
router.get('/get/:id', genre_controller.genreGet);
router.put('/delete/:id', genre_controller.genreDelete);
router.put('/update/:id', genre_controller.genreUpdate);

module.exports = router;