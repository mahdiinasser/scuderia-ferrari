const express = require("express");
const router = express.Router();
const {getStats, addStats, deleteStats, updateStats} = require('../controllers/stats')

router
    .route('/')
    .get(getStats)
    .post(addStats);

router
    .route('/:id')
    .put(updateStats)
    .delete(deleteStats);

module.exports = router;