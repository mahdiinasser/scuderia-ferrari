const express = require("express");
const router = express.Router();
const {getAbout, addAbout, deleteAbout, updateAbout} = require('../controllers/about');


router
    .route('/')
    .get(getAbout)
    .post(addAbout);

router
    .route('/:id')
    .put(updateAbout)
    .delete(deleteAbout);

module.exports = router;