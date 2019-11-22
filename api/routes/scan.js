var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Listing scans');
});

router.get('/{id}', function(req, res, next) {
    res.send('Listing scans');
});

router.get('/{id}/findings', function(req, res, next) {
    res.send('Listing scan findings');
});

router.post('/', function(req, res, next) {
    res.send(`Adding the scan: ${req.body.data}`);
});

module.exports = router;