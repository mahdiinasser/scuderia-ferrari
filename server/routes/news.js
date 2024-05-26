const express = require("express");
const router = express.Router();
const {getNews, addNews, deleteNews, updateNews} = require('../controllers/news');


router
    .route('/')
    .get(getNews)
    .post(addNews);

router
    .route('/:id')
    .put(updateNews)
    .delete(deleteNews);

module.exports = router;