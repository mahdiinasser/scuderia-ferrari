const express = require("express");
const router = express.Router();
const {getDrivers, addDrivers, deleteDrivers, updateDrivers} = require('../controllers/drivers');


router
    .route('/')
    .get(getDrivers)
    .post(addDrivers);

router
    .route('/:id')
    .put(updateDrivers)
    .delete(deleteDrivers);

module.exports = router;