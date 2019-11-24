var express = require('express');
var models = require('../models')
var router = express.Router();

router.get('/', async function(req, res, next) {
    try{        
        models.Scan.find({}, function(err, scans) {
            res.status(200).json({scans});
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: `An error occurred: ${error}`});
    }
});

router.post('/', async function(req, res) {
    try{       
        const scan = new models.Scan({
            status: req.body.status,
            repositoryName: req.body.repositoryName,
            queuedAt: req.body.queuedAt,
            findings: req.body.findings,
        });
        const result = await scan.save();
        res.status(201).json({createdId: result.id});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: `An error occurred: ${error}`});
    }
});

router.get('/:id/findings', async function(req, res) {
    try{        
        models.Scan.findById(req.params.id, function(err, scan) {
            res.status(200).json({scan});
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: `An error occurred: ${error}`});
    }
});

module.exports = router;
