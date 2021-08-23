const express = require('express');
const path = require('path');

const router = express.Router();

// router.get('/', (req,res)=>
// {
//     res.sendFile(path.join(__dirname,'../views/index.html'))
// });

router.get('/', (req,res,next)=>
{
    res.render('index', {title:'express'});
});

module.exports = router;