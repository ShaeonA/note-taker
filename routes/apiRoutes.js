const router = require('express').Router();
const { Router } = require('express');
const fs = require('fs');

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
     if (err) { 
         console.log(err)
     }
     res.send(data);
    });
});


module.exports = router