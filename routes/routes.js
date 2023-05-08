const express = require('express');
const router = express.Router();
const { getList, getDetails, postNewRecord } = require('../controllers/controller');

router.get('/list', getList);
router.get('/details/:id', getDetails);
router.post('/list', postNewRecord);

module.exports = router;
