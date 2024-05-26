const express = require("express");
const router = express.Router();
const {getSpecs, addSpecs, deleteSpecs, updateSpecs} = require('../controllers/specs')

router
    .route('/')
    .get(getSpecs)
    .post(addSpecs);

router
    .route('/:id')
    .put(updateSpecs)
    .delete(deleteSpecs);

module.exports = router;