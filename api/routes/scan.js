var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.status(200).json({message: 'it pass!'});
});

router.post('/', function(req, res, next) {
    res.status(201).json(req.body);
});

router.get('/:id', function(req, res, next) {
    res.status(200).json({message: `Return scan ${req.params.id}`});
});

module.exports = router;
