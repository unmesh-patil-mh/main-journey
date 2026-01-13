const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    res.send('Blog Home Page')
})

router.get('/About', (req,res) =>{
    res.send('Blog About Section')
})

router.get('/Contact/:slug', (req,res) =>{
    res.send(`fetch the Contact for ${req.params.slug}`)
})

module.exports = router;